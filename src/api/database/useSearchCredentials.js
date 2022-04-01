import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { searchCredentials } from '../../graphql/queries';

export const useSearchCredentials = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(searchCredentials),
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
        [called, searchCredentials, loading, refetch, config]
    );
};
