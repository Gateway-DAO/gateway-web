import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { searchGates as SEARCH_GATES } from '../../graphql/queries';

export const useSearchGates = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(SEARCH_GATES),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, SEARCH_GATES, loading, refetch, config]
    );
};

export default useSearchGates;
