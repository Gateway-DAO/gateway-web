import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import { createDao as DAO_CREATE } from '../../graphql/mutations'

export const useCreateDAO = () => {
    const [createDao, { loading, called, data, error }] = useMutation(
        gql(DAO_CREATE)
    )

    return useMemo(
        () => ({
            createDao,
            data,
            error,
            loading,
        }),
        [called, createDao, loading, DAO_CREATE, error]
    )
}

export default useCreateDAO