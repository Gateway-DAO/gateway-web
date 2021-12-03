import { useWeb3React } from "@web3-react/core"

const useAdmin = (addressOrList) => {
    const { account, active } = useWeb3React();
    let isAdmin = false;

    if (active && addressOrList instanceof Array) {
        isAdmin = addressOrList.includes(account);
    }
    else if (active && addressOrList instanceof String) {
        isAdmin = (addressOrList === account)
    }
    
    return {
        isAdmin
    }
}

export default useAdmin;