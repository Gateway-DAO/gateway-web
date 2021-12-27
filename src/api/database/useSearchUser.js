import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { searchUsers as SEARCH_USERS } from '../../graphql/queries';

export const useSearchUsers = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(SEARCH_USERS), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data: data?.searchUsers.items[0], 
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, SEARCH_USERS, loading, refetch, id]
    );
};

export const useLazySearchUsers = () => {
    const [searchUsers, { loading, called, refetch, data, error }] = useLazyQuery(gql(SEARCH_USERS));

    return useMemo(
        () => ({
            searchUsers,
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, SEARCH_USERS, loading, refetch]
    );
};

export default useSearchUsers;
