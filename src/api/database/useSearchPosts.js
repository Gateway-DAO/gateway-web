import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { searchPosts as SEARCH_POSTS } from '../../graphql/queries';

export const useSearchPosts = (id) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(SEARCH_POSTS),
        {
            variables: { id },
        }
    );

    return useMemo(
        () => ({
            data: data.searchPosts,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, SEARCH_POSTS, loading, refetch, id]
    );
};

export const useLazySearchPosts = () => {
    const [searchPosts, { loading, called, refetch, data, error }] =
        useLazyQuery(gql(SEARCH_POSTS));

    return useMemo(
        () => ({
            searchPosts,
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, SEARCH_POSTS, loading, refetch]
    );
};

export default useSearchPosts;
