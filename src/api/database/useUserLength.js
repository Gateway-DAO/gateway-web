import { useQuery, gql } from '@apollo/client';
import { useMemo } from 'react';

import { getUserNumber } from '../../graphql/queries';

export const useUserLength = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getUserNumber),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getUserNumber, loading, refetch, config]
    );
};

export default useUserLength;
