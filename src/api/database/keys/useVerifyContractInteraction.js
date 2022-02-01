import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import { verifyContractInteraction as VERIFY_CONTRACT_INTERACTION } from '../../../graphql/mutations'

export const useVerifyContractInteraction = () => {
    const [verifyContractInteraction, { loading, called, data, error }] = useMutation(
        gql(VERIFY_CONTRACT_INTERACTION)
    )

    return useMemo(
        () => ({
            verifyContractInteraction,
            data,
            error,
            loading,
        }),
        [called, verifyContractInteraction, loading, VERIFY_CONTRACT_INTERACTION, error]
    )
}

export default useVerifyContractInteraction