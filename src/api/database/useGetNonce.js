import { useMemo } from 'react';

// AWS/Amplify
import { gql, useMutation } from '@apollo/client';
import { getAuthenticationNonce as DB_GET_NONCE } from '../../graphql/mutations';

export const useLazyGetNonce = () => {
    const [getNonce, { loading, called, refetch, data, error }] = useMutation(
        gql(DB_GET_NONCE)
    );

    return useMemo(
        () => ({
            getNonce,
            data,
            loading,
            refetch,
            error,
        }),
        [called, getNonce, loading, refetch]
    );
};

export default useLazyGetNonce;
