import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createTokenBenefit as CREATE_TB } from '../../graphql/mutations';

export const useCreateTokenBenefit = () => {
    const [createTokenBenefit, { loading, called, data, error }] = useMutation(
        gql(CREATE_TB)
    );

    return useMemo(
        () => ({
            createTokenBenefit,
            data,
            error,
            loading,
        }),
        [called, createTokenBenefit, loading, CREATE_TB, error]
    );
};

export default useCreateTokenBenefit;
