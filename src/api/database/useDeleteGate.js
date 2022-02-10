import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import {deleteGate as DELETE_GATE} from "../../graphql/mutations";

export const deleteGate = ()=>{
    const [deleteGate, {loading, called, data, error}] = useMutation(
        gql(DELETE_GATE)
    );

    return useMemo(
        ()=>({
                deleteGate,
                data,
                error,
                loading,
            }),
            [called, deleteGate, loading, DELETE_GATE, error]        
        );
}
export default deleteGate;