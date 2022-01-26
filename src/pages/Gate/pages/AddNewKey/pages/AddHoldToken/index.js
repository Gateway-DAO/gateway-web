import React, { useState } from 'react'
import { FormStyled } from '../../../../../../components/Form'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useCreateTokenHold } from '../../../../../../api/database/useCreateKey'

const AddHoldToken = (props) => {
    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState(0)
    const { state } = useLocation()
    const { createTokenHold, data, loading, error } = useCreateTokenHold()

    const onSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await createTokenHold({
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
                            type: "TOKEN_HOLD",
                            chainID: 1,
                            address: address
                        }
                    }
                }
            })
        }
        catch (err) {
            alert("An error occurred. Please try again later!")
            console.log(err)
        }
    }

    return (
        <FormStyled.FormBox onSubmit={onSubmit}>
            <FormStyled.H1>Add Hold A Token</FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.Label>Token Address</FormStyled.Label>
                <FormStyled.Input title="Token" placeholder="Token Address" value={address} onChange={e => setAddress(e.target.value)} required />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Amount Required</FormStyled.Label>
                <FormStyled.Input placeholder="Minimum amount to hold" value={amount} onChange={e => setAmount(e.target.value)} required />
            </FormStyled.Fieldset>

            <FormStyled.Button type="submit">Submit</FormStyled.Button>
        </FormStyled.FormBox>
    )
}

export default AddHoldToken
