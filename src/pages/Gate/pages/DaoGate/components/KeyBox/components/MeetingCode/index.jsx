import React, { useEffect, useState } from 'react'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../../../../../components/Form'

// Hooks
import useVerifyMeetingCode from '../../../../../../../../api/database/keys/useVerifyMeetingCode'
import { useAuth } from '../../../../../../../../contexts/UserContext'

const MeetingCode = props => {
    const [meetingCode, setMeetingCode] = useState("")
    const { userInfo } = useAuth()
    const { verifyMeetingCode } = useVerifyMeetingCode()

    useEffect(() => {
        const verify = async () => {
            try {
                const res = await verifyMeetingCode({
                    userID: userInfo.id,
                    keyID: props.data.id
                })
    
                return res
            }
            catch (err) {
                alert("An error occurred")
                console.log(err)
            }
        }

        props.verify(verify)
    }, [])

    return (
        <Styled.Container>
            <FormStyled.Label color="black">Meeting Code</FormStyled.Label>
            <FormStyled.Input white width="25%" value={meetingCode} onChange={e => setMeetingCode(e.target.value)} />
        </Styled.Container>
    )
}

export default MeetingCode