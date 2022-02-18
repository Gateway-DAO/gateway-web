import { useAuth } from '../contexts/UserContext';

interface Permissions {
    readonly isAdmin: boolean;
}

export const useAdmin = (addressOrList: string | string[]): Permissions => {
    const { userInfo, loggedIn }: Record<string, any> = useAuth();

    let isAdmin = false;

    if (loggedIn && addressOrList instanceof Array) {
        isAdmin = addressOrList.includes(userInfo.wallet);
    } else if (loggedIn && addressOrList instanceof String) {
        isAdmin = addressOrList === userInfo.wallet;
    }

    if (loggedIn && userInfo.isAdmin) {
        isAdmin = userInfo.isAdmin;
    }

    return {
        isAdmin,
    };
};

export const useGateAdmin = (addressOrList: string | string[]): Permissions => {
    const { userInfo, loggedIn }: Record<string, any> = useAuth();

    let isAdmin = false;

    if (loggedIn && addressOrList instanceof Array) {
        isAdmin = addressOrList.includes(userInfo.id);
    } else if (loggedIn && addressOrList instanceof String) {
        isAdmin = addressOrList === userInfo.id;
    }

    if (loggedIn && userInfo.isAdmin) {
        isAdmin = userInfo.isAdmin;
    }

    return {
        isAdmin,
    };
};

export default useAdmin;
