import { useAuth } from '../contexts/UserContext';

interface Permissions {
    readonly isAdmin: boolean;
}

export const useAdmin = (addressOrList: string | string[]): Permissions => {
    const { userInfo, walletConnected }: Record<string, any> = useAuth();

    let isAdmin = false;

    if (walletConnected && addressOrList instanceof Array) {
        isAdmin = addressOrList.includes(userInfo?.wallet);
    } else if (walletConnected && addressOrList instanceof String) {
        isAdmin = addressOrList === userInfo?.wallet;
    }

    if (walletConnected && userInfo?.isAdmin) {
        isAdmin = userInfo?.isAdmin;
    }

    return {
        isAdmin,
    };
};

export const useGateAdmin = (addressOrList: string | string[]): Permissions => {
    const { userInfo, walletConnected }: Record<string, any> = useAuth();

    let isAdmin = false;

    if (walletConnected && addressOrList instanceof Array) {
        isAdmin = addressOrList.includes(userInfo?.id);
    } else if (walletConnected && addressOrList instanceof String) {
        isAdmin = addressOrList === userInfo?.id;
    }

    if (walletConnected && userInfo?.isAdmin) {
        isAdmin = userInfo?.isAdmin;
    }

    return {
        isAdmin,
    };
};

export default useAdmin;
