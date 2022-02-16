import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createBounty as BOUNTY_CREATE } from '../../graphql/mutations';

export const useCreateBounty = () => {
    const [createBounty, { loading, called, data, error }] = useMutation(
        gql(BOUNTY_CREATE)
    );

    return useMemo(
        () => ({
            createBounty,
            data,
            error,
            loading,
        }),
        [called, createBounty, loading, BOUNTY_CREATE, error]
    );
};

export default useCreateBounty;
