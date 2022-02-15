import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createGate as GATE_CREATE } from '../../graphql/mutations';

export const useCreateGate = () => {
    const [createGate, { loading, called, data, error }] = useMutation(
        gql(GATE_CREATE)
    );

    return useMemo(
        () => ({
            createGate,
            data,
            error,
            loading,
        }),
        [called, createGate, loading, GATE_CREATE, error]
    );
};
