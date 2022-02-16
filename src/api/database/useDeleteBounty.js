import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { deleteBounty as BOUNTY_DELETE } from '../../graphql/mutations';

export const useDeleteBounty = () => {
    const [deleteBounty, { loading, called, data, error }] = useMutation(
        gql(BOUNTY_DELETE)
    );

    return useMemo(
        () => ({
            deleteBounty,
            data,
            error,
            loading,
        }),
        [called, deleteBounty, loading, BOUNTY_DELETE, error]
    );
};

export default useDeleteBounty;
