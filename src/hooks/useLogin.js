import { useActiveWeb3 } from "./web3"
import { getFunctions, httpsCallable } from "firebase/functions"
import { functions } from "../api/firebase";

const getNonceToSign = httpsCallable(functions, "getNonceToSign");
const verifySignedMessage = httpsCallable(functions, "verifySignedMessage");

export const useLogin = async () => {
    const { account, library } = useActiveWeb3();
    const nonce = await getNonceToSign({ address: account });
    console.log({
        library,
        nonce
    })
}