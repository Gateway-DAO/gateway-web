import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import { verifySnapshot as VERIFY_SNAPSHOT } from '../../../graphql/mutations'

export const useVerifySnapshot = () => {
    const [verifySnapshot, { loading, called, data, error }] = useMutation(
        gql(VERIFY_SNAPSHOT)
    )

    return useMemo(
        () => ({
            verifySnapshot,
            data,
            error,
            loading,
        }),
        [called, verifySnapshot, loading, VERIFY_SNAPSHOT, error]
    )
}

export default useVerifySnapshot