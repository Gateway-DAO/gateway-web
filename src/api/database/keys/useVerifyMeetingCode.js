import { useMemo } from 'react'
import { useMutation, gql } from '@apollo/client'
import { verifyMeetingCode as VERIFY_MEETING_CODE } from '../../../graphql/mutations'

export const useVerifyMeetingCode = () => {
    const [verifyMeetingCode, { loading, called, data, error }] = useMutation(
        gql(VERIFY_MEETING_CODE)
    )

    return useMemo(
        () => ({
            verifyMeetingCode,
            data,
            error,
            loading,
        }),
        [called, verifyMeetingCode, loading, VERIFY_MEETING_CODE, error]
    )
}

export default useVerifyMeetingCode