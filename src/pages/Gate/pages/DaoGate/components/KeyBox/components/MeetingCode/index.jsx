import React, { useEffect, useState } from 'react'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../../../../../components/Form'

// Hooks
import useVerifyMeetingCode from '../../../../../../../../api/database/keys/useVerifyMeetingCode'
import { useAuth } from '../../../../../../../../contexts/UserContext'

const MeetingCode = ({ data, setVerify }) => {
    const [meetingCode, setMeetingCode] = useState('')
    const { userInfo } = useAuth()
    const { verifyMeetingCode } = useVerifyMeetingCode()

    const verify = async () => {
        try {
            const res = await verifyMeetingCode({
                variables: {
                    userID: userInfo.id,
                    keyID: data.id,
                    meetingCode,
                },
            })

            return res
        } catch (err) {
            alert('An error occurred')
            console.log(err)
        }
    }

    useEffect(() => {
        setVerify.current = verify
    }, [meetingCode])

    return (
        <Styled.Container>
            <FormStyled.Label color="black">Meeting Code</FormStyled.Label>
            <FormStyled.Input
                white
                width="25%"
                value={meetingCode}
                onChange={(e) => setMeetingCode(e.target.value)}
            />
        </Styled.Container>
    )
}

const MemoizedMeetingCode = React.memo(MeetingCode)

export default MemoizedMeetingCode
