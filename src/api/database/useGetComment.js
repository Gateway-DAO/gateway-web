import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getComment } from '../../graphql/queries';

export const useGetComment = (id) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getComment),
        {
            variables: { id },
        }
    );

    return useMemo(
        () => ({
            data: data?.getComment.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getComment, loading, refetch, id]
    );
};

export default useGetComment;
