import { useWeb3React } from "@web3-react/core"
import { useAuth } from "../contexts/UserContext";

const useAdmin = (addressOrList) => {
    const { userInfo, loggedIn } = useAuth()

    let isAdmin = false;

    if (loggedIn && addressOrList instanceof Array) {
        isAdmin = addressOrList.includes(userInfo.wallet);
    }
    else if (loggedIn && addressOrList instanceof String) {
        isAdmin = (addressOrList === userInfo.wallet)
    }
    
    return {
        isAdmin
    }
}

export default useAdmin;