import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { searchDaos } from '../../graphql/queries';

export const useSearchDAO = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(searchDaos), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data: data?.searchDAOs.items[0], 
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, searchDaos, loading, refetch, id]
    );
};

export const useLazySearchDAO = () => {
    const [searchDAO, { loading, called, refetch, data, error }] = useLazyQuery(gql(searchDaos));

    return useMemo(
        () => ({
            searchDAO,
            data: data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, searchDaos, loading, refetch]
    );
};

export default useSearchDAO;
