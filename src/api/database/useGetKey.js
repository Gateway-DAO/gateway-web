import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getKey } from '../../graphql/queries';

export const useGetKey = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(getKey), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getKey, loading, refetch, id]
    );
};

export default useGetKey;
