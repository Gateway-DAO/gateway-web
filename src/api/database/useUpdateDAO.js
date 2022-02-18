import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { updateDao as DAO_UPDATE } from '../../graphql/mutations';

export const useUpdateDAO = () => {
    const [updateDAO, { loading, called, data, error }] = useMutation(
        gql(DAO_UPDATE)
    );

    return useMemo(
        () => ({
            updateDAO,
            data,
            error,
            loading,
        }),
        [called, loading, DAO_UPDATE, error]
    );
};

export default useUpdateDAO;
