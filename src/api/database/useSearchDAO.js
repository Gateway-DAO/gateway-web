import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { searchDaos } from '../../graphql/queries';

export const useSearchDAO = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(searchDaos),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
            called,
        }),
        [called, searchDaos, loading, refetch, config]
    );
};

export const useLazySearchDAO = () => {
    const [searchDAO, { loading, called, refetch, data, error }] = useLazyQuery(
        gql(searchDaos)
    );

    return useMemo(
        () => ({
            searchDAO,
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, searchDaos, data, loading, refetch]
    );
};

export default useSearchDAO;
