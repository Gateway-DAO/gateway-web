import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import { createKey as KEY_CREATE } from '../../graphql/mutations'

export const useCreateKey = () => {
    const [createKey, { loading, called, data, error }] = useMutation(
        gql(KEY_CREATE)
    )

    return useMemo(
        () => ({
            createKey,
            data,
            error,
            loading,
        }),
        [called, createKey, loading, KEY_CREATE, error]
    )
}

export default useCreateKey