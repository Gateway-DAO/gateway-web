import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import { verifyHoldAToken as VERIFY_HOLD_A_TOKEN } from '../../../graphql/mutations'

export const useVerifyHoldAToken = () => {
    const [verifyHoldAToken, { loading, called, data, error }] = useMutation(
        gql(VERIFY_HOLD_A_TOKEN)
    )

    return useMemo(
        () => ({
            verifyHoldAToken,
            data,
            error,
            loading,
        }),
        [called, verifyHoldAToken, loading, VERIFY_HOLD_A_TOKEN, error]
    )
}

export default useVerifyHoldAToken