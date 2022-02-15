import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { updateGate as GATE_UPDATE } from '../../graphql/mutations';

export const useUpdateGate = () => {
    const [updateGate, { loading, called, data, error }] = useMutation(
        gql(GATE_UPDATE)
    );

    return useMemo(
        () => ({
            updateGate,
            data,
            error,
            loading,
        }),
        [called, updateGate, loading, GATE_UPDATE, error]
    );
};

export default useUpdateGate;
