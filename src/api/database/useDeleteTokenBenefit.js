import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { deleteTokenBenefit as DELETE_TB } from '../../graphql/mutations';

export const useDeleteTokenBenefit = () => {
    const [deleteTokenBenefit, { loading, called, data, error }] = useMutation(
        gql(DELETE_TB)
    );

    return useMemo(
        () => ({
            deleteTokenBenefit,
            data,
            error,
            loading,
        }),
        [called, deleteTokenBenefit, loading, DELETE_TB, error]
    );
};

export default useDeleteTokenBenefit;
