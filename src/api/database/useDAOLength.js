import { useQuery, gql } from '@apollo/client';
import { useMemo } from 'react';

import { getNumber } from '../../graphql/queries';

export const useDAOLength = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getNumber),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getNumber, loading, refetch, config]
    );
};

export default useDAOLength;
