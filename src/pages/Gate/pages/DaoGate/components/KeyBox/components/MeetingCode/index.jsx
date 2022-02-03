import React, { useEffect, useState ,useRef } from 'react'
import { useClickAway } from 'react-use'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../../../../../components/Form'

// Hooks
import useVerifyMeetingCode from '../../../../../../../../api/database/keys/useVerifyMeetingCode'
import { useAuth } from '../../../../../../../../contexts/UserContext'

const MeetingCode = ({ data, setVerify }) => {
    const [warnInfo, setWarnInfo] = useState(false)
    const [meetingCode, setMeetingCode] = useState('')
    const { userInfo } = useAuth()
    const ref = useRef(null)
    const { verifyMeetingCode } = useVerifyMeetingCode()

    useClickAway(ref, () => {
        setWarnInfo(false)
    })

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
        <Styled.Container ref={ref}>
            <FormStyled.Label color="black">Meeting Code</FormStyled.Label>
            {warnInfo && (
                <Styled.WarningInfo>
                    * meeting code is case sensitive
                </Styled.WarningInfo>
            )}
            <FormStyled.Input
                white
                width="25%"
                value={meetingCode}
                onClick={(e) => setWarnInfo(!warnInfo)}
                onChange={(e) => setMeetingCode(e.target.value)}
            />
        </Styled.Container>
    )
}

const MemoizedMeetingCode = React.memo(MeetingCode)

export default MemoizedMeetingCode
