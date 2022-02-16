import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getGate } from '../../graphql/queries';

export const useGetGate = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(getGate), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getGate, loading, refetch, id]
    );
};

export default useGetGate;
