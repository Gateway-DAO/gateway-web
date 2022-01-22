import React, { useState } from 'react'
import { FormStyled } from '../../../../../../components/Form'


const AddMeetingCode = (props) => {
    // State
    const [code, setCode] = useState(null)

    return (
        <FormStyled.FormBox>
            <FormStyled.H1>Add Meeting Code</FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>What's the code?</FormStyled.Label>
                <FormStyled.Input value={code} onChange={e => setCode(e.target.value)} placeholder="Input the meeting code here" />
            </FormStyled.Fieldset>

            <FormStyled.Button>Submit</FormStyled.Button>
        </FormStyled.FormBox>
    )
}

export default AddMeetingCode
