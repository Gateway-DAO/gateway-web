import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createUser as USER_CREATE } from '../../graphql/mutations';

/**
 * The `useCreateUser` hook acts as a mutation interface for creating users..
 * @returns The data, error, loading, and called values.
 */
export const useCreateUser = () => {
    const [createUser, { loading, called, data, error }] = useMutation(
        gql(USER_CREATE)
    );

    return useMemo(
        () => ({
            createUser,
            data,
            error,
            loading,
        }),
        [called, createUser, loading, USER_CREATE, error]
    );
};

export default useCreateUser;
