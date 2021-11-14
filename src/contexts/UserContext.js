import React, { createContext, useState } from "react"
import { useActiveWeb3 } from "../hooks/web3"
import { ethers } from "ethers"

// Firebase
import { signInWithCustomToken } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions"
import { collection, doc, getDoc, query } from "firebase/firestore";
import { auth, functions, db } from "../api/firebase"

const getNonceToSign = httpsCallable(functions, "getNonceToSign");
const verifySignedMessage = httpsCallable(functions, "verifySignedMessage");

export const userContext = createContext({});
const { Provider } = userContext

export const UserProvider = ({ children }) => {
    /* State */
    const [loggedIn, setLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const { account, library } = useActiveWeb3();
    
    const signIn = async () => {
        try {
            const { data: { nonce }} = await getNonceToSign({ address: account });
            const signer = library.getSigner();

            const hash = await ethers.utils.keccak256(account)
            const sig = await signer.signMessage(ethers.utils.arrayify(hash))

            const { data: { token } } = await verifySignedMessage({ address: account, signature: sig });

            if (token) {
                setLoggedIn(true);
                const { user } = await signInWithCustomToken(auth, token);

                // Get other user info from db
                const userDoc = doc(db, "users", user.uid);
                const userDB = (await getDoc(userDoc)).data();
                
                setUserInfo({
                    ...user
                });
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    return <Provider value={{ signIn, loggedIn, userInfo }}>{children}</Provider>;
}