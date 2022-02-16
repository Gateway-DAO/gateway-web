import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { searchUsers as SEARCH_USERS } from '../../graphql/queries';

export const useSearchUsers = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(SEARCH_USERS),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, SEARCH_USERS, loading, refetch, config]
    );
};

export const useLazySearchUsers = () => {
    const [searchUsers, { loading, called, refetch, data, error }] =
        useLazyQuery(gql(SEARCH_USERS));

    return useMemo(
        () => ({
            searchUsers,
            data,
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, SEARCH_USERS, loading, refetch]
    );
};

export default useSearchUsers;
