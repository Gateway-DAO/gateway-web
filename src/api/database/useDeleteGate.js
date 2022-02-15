import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { deleteGate as GATE_DELETE } from '../../graphql/mutations';

export const useDeleteGate = () => {
    const [deleteGate, { loading, called, data, error }] = useMutation(
        gql(GATE_DELETE)
    );

    return useMemo(
        () => ({
            deleteGate,
            data,
            error,
            loading,
        }),
        [called, deleteGate, loading, GATE_DELETE, error]
    );
};
export default useDeleteGate;
