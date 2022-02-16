import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getPost } from '../../graphql/queries';

export const useGetPost = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(getPost), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data: data?.getPost.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getPost, loading, refetch, id]
    );
};

export default useGetPost;
