import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FormStyled } from '../../../../../../components/Form'
import { useCreateMeetingCode } from '../../../../../../api/database/useCreateKey'
import { v4 as uuidv4 } from 'uuid'

const AddMeetingCode = (props) => {
    // State
    const [code, setCode] = useState(null)
    const { state } = useLocation()
    const { createMeetingCode, data, loading, error } = useCreateMeetingCode()
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await createMeetingCode({
                variables: {
                    input: {
                        id: uuidv4(),
                        gateID: state.gateData.id,
                        information: state.titleDescriptionPair,
                        token: state.token,
                        tokenAmount: state.amount,
                        keys: state.keysRewarded,
                        peopleLimit: state.peopleLimit,
                        task: {
                            type: "MEETING_CODE",
                            code,
                            caseSensitive: false
                        }
                    }
                }
            })

            navigate(`/gate/${state.gateData.id}`)
        }
        catch (err) {
            alert("An error occurred. Please try again later!")
            console.log(err)
        }
    }

    return (
        <FormStyled.FormBox onSubmit={onSubmit}>
            <FormStyled.H1>Add Meeting Code</FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>What's the code?</FormStyled.Label>
                <FormStyled.Input value={code} onChange={e => setCode(e.target.value)} placeholder="Input the meeting code here" required />
            </FormStyled.Fieldset>

            <FormStyled.Button type="submit">Submit</FormStyled.Button>
        </FormStyled.FormBox>
    )
}

export default AddMeetingCode
