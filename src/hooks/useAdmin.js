import { useActiveWeb3 } from "./web3"

const useAdmin = (addressOrList) => {
    const { account, active } = useActiveWeb3();
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