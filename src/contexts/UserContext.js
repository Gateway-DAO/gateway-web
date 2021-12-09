import React, { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Firebase
import {
    signInWithCustomToken,
    getAuth,
    onAuthStateChanged,
    browserLocalPersistence,
    setPersistence,
} from 'firebase/auth'
import { httpsCallable } from 'firebase/functions'
import { doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore'
import { app, functions, db } from '../api/firebase'

// Web3
import { CONNECTORS } from '../utils/web3'
import { useWeb3React } from '@web3-react/core'

const getNonceToSign = httpsCallable(functions, 'getNonceToSign')
const verifySignedMessage = httpsCallable(functions, 'verifySignedMessage')

export const userContext = createContext({})
const { Provider } = userContext

export const useAuth = () => {
    return useContext(userContext)
}

export const UserProvider = ({ children }) => {
    const auth = getAuth(app)

    /* State */
    const [loggedIn, setLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    const [loggingIn, setLoggingIn] = useState(false)
    const [loading, setLoading] = useState(false)

    const web3 = useWeb3React()

    const activateWeb3 = async () => {
        await web3.activate(CONNECTORS.Injected)
    }

    const signIn = async () => {
        try {
            await setPersistence(auth, browserLocalPersistence)

            if (userInfo) {
                await auth.signOut()
            }

            setLoggingIn(true)

            // Connect to Web3 wallet
            !web3.active && activateWeb3()

            // Get nonce from backend
            const {
                data: { nonce },
            } = await getNonceToSign({ address: web3.account })

            // Sign message as auth method
            const signer = web3.library.getSigner()
            const hash = await ethers.utils.keccak256(web3.account)
            const sig = await signer.signMessage(ethers.utils.arrayify(hash))

            // Verify is the signature is valid; authenticate user
            const {
                data: { token },
            } = await verifySignedMessage({
                address: web3.account,
                signature: sig,
            })

            if (token) {
                const { user } = await signInWithCustomToken(auth, token)

                // Get other user info from db
                const userDoc = doc(db, 'users', user.uid)
                const userDB = (await getDoc(userDoc)).data()

                // localStorage.setItem("@App:token", await user.getIdToken());
                // localStorage.setItem("@App:user", JSON.stringify(user));

                setUserInfo({
                    ...user,
                    ...userDB,
                })
                setLoggedIn(true)
                setLoggingIn(false)

                console.log(user)
            }
        } catch (err) {
            console.error(err)
            setLoggingIn(false)
        }
    }

    const updateUserInfo = async (info, callback) => {
        const user = doc(db, 'users', userInfo.uid)

        const unsub = onSnapshot(user, () => {
            setUserInfo({
                ...userInfo,
                ...info,
            })
            callback()
        })

        await updateDoc(user, info)

        unsub()
    }

    const userSignOut = () => {
        auth.signOut().then(() => {
            setLoggedIn(false)
            setUserInfo(null)
            setLoading(false)
        })
    }

    // On account change
    useEffect(() => {
        if (userInfo) {
            if (userInfo.uid === web3.account) {
                setLoggedIn(true)
            } else {
                auth.signOut().then(() => {
                    setLoggedIn(false)
                    setUserInfo(null)
                    setLoading(false)
                })
            }
        }
    }, [web3.account])

    // On load
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            !!user && setLoading(true)
            if (web3) {
                if (user && web3.active) {
                    if (user.uid === web3.account) {
                        // Get other user info from db
                        const userDoc = doc(db, 'users', user.uid)
                        const userDB = (await getDoc(userDoc)).data()

                        setUserInfo({ ...user, ...userDB })
                        setLoggedIn(true)
                        setLoading(false)
                    } else {
                        auth.signOut().then(() => {
                            setLoggedIn(false)
                            setUserInfo(null)
                            setLoading(false)
                        })
                    }
                } else if (!web3.active) {
                    await activateWeb3()
                    if (web3.account && web3.account === user.uid) {
                        setUserInfo(user)
                        setLoggedIn(true)
                        setLoading(false)
                    } else if (web3.account && web3.account !== user.uid) {
                        auth.signOut().then(() => {
                            setLoggedIn(false)
                            setUserInfo(null)
                            setLoading(false)
                        })
                    }
                }
            }
        })

        return unsubscribe
    }, [web3, auth])

    return (
        <Provider
            value={{
                signIn,
                loggedIn,
                userInfo,
                loggingIn,
                updateUserInfo,
                loading,
                userSignOut,
            }}
        >
            {children}
        </Provider>
    )
}
