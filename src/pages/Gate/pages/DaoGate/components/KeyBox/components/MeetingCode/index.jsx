import React, { useState } from 'react'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../../../../../components/Form'

const MeetingCode = props => {
    const [meetingCode, setMeetingCode] = useState("")

    return (
        <Styled.Container>
            <FormStyled.Label color="black">Meeting Code</FormStyled.Label>
            <FormStyled.Input white width="25%" value={meetingCode} onChange={e => setMeetingCode(e.target.value)} />
        </Styled.Container>
    )
}

export default MeetingCode