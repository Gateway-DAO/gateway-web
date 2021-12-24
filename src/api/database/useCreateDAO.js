import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import { createDao as DAO_CREATE } from '../../graphql/mutations'

export const useCreateDAO = () => {
    const [createDAO, { loading, called, data, error }] = useMutation(
        gql(DAO_CREATE)
    )

    return useMemo(
        () => ({
            createDAO,
            data,
            error,
            loading,
        }),
        [called, createDAO, loading, DAO_CREATE, error]
    )
}

export default useCreateDAO