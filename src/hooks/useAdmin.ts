import { useAuth } from '../contexts/UserContext';
import { useGetUserDaoPermissionsQuery, useGetUserGatePermissionsQuery } from '../graphql';

interface Permissions {
    readonly isAdmin: boolean;
    readonly isEditor: boolean;
}

export const useAdmin = (dao_id: string): Permissions => {
    const { userInfo, walletConnected }: Record<string, any> = useAuth();
    const { data } = useGetUserDaoPermissionsQuery({
        variables: {
            dao_id,
            user_id: userInfo?.id
        }
    })

    return {
        isAdmin: userInfo?.isAdmin || (data?.permissions[0]?.permission == 'admin') || false,
        isEditor: userInfo?.isAdmin || (data?.permissions[0]?.permission == 'admin') || (data?.permissions[0]?.permission == 'dao_editor') || false,
    };
};

export const useGateAdmin = (gate_id: string): Permissions => {
    const { userInfo, walletConnected }: Record<string, any> = useAuth();
    const { data } = useGetUserGatePermissionsQuery({
        variables: {
            gate_id,
            user_id: userInfo?.id
        }
    })

    return {
        isAdmin: userInfo?.isAdmin || (data?.permissions[0]?.permission == 'admin') || false,
        isEditor: userInfo?.isAdmin || (data?.permissions[0]?.permission == 'admin') || (data?.permissions[0]?.permission == 'dao_editor') || false,
    };
};

export default useAdmin;
