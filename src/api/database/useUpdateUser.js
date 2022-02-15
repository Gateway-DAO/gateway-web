import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { updateUser as USER_UPDATE } from '../../graphql/mutations';

export const useUpdateUser = () => {
    const [updateUser, { loading, called, data, error }] = useMutation(
        gql(USER_UPDATE)
    );

    return useMemo(
        () => ({
            updateUser,
            data,
            error,
            loading,
        }),
        [called, updateUser, loading, USER_UPDATE, error]
    );
};

export default useUpdateUser;
