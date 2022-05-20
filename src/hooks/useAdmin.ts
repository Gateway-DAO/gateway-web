import React from 'react';
import { useAuth } from '../contexts/UserContext';
import {
    useGetUserDaoPermissionsQuery,
    useGetUserGatePermissionsQuery,
} from '../graphql';

interface Permissions {
    readonly isAdmin: boolean;
    readonly isEditor: boolean;
}

export const useAdmin = (dao_id: string): Permissions => {
    const { userInfo }: Record<string, any> = useAuth();
    const { data } = useGetUserDaoPermissionsQuery({
        variables: {
            dao_id,
            user_id: userInfo?.id,
        },
    });

    if (data?.permissions && data?.permissions?.length == 0) return {
        isAdmin: false,
        isEditor: false
    }

    return {
        isAdmin:
            userInfo?.isAdmin ||
            data?.permissions[0]?.permission == 'admin' ||
            null,
        isEditor:
            userInfo?.isAdmin ||
            data?.permissions[0]?.permission == 'admin' ||
            data?.permissions[0]?.permission == 'dao_editor' ||
            null,
    };
};

export const useGateAdmin = (gate_id: string): Permissions => {
    const { userInfo }: Record<string, any> = useAuth();
    const { data, loading, called } = useGetUserGatePermissionsQuery({
        variables: {
            gate_id,
            user_id: userInfo?.id,
        },
    });

    if (data?.permissions && data?.permissions?.length == 0) return {
        isAdmin: false,
        isEditor: false
    }

    return React.useMemo(
        () => ({
            isAdmin:
                userInfo?.isAdmin ||
                data?.permissions[0]?.permission == 'admin' ||
                null,
            isEditor:
                userInfo?.isAdmin ||
                data?.permissions[0]?.permission == 'admin' ||
                data?.permissions[0]?.permission == 'gate_editor' ||
                null,
        }),
        [data, userInfo]
    );
};

export default useAdmin;
