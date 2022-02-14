import React, { useState } from 'react'
import { FormStyled } from '../../../../../../components/Form'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useCreateTokenHold } from '../../../../../../api/database/useCreateKey'
import AddKeySuccess from '../AddKeySuccess'
import Loader from '../../../../../../components/Loader'

const AddHoldToken = (props) => {
    const { state } = useLocation()
    console.log(state.taskInfo)
    const { createTokenHold, data, loading, error } = useCreateTokenHold()
    const [address, setAddress] = useState(
        state.taskInfo ? state.taskInfo.address : ''
    )
    const [amount, setAmount] = useState(
        state.taskInfo ? state.taskInfo.amount : 0
    )
    const [createdKey, setCreatedKey] = useState(false)

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
                        unlimited: state.unlimited,
                        task: {
                            type: 'TOKEN_HOLD',
                            chainID: 1,
                            address: address,
                            amount,
                        },
                    },
                },
            })

            setCreatedKey(true)
        } catch (err) {
            alert('An error occurred. Please try again later!')
            console.log(err)
        }
    }

    const onEditSubmit = async (e) => {
        e.preventDefault()
    }

    return createdKey ? (
        <AddKeySuccess gate={state.gateData.id} />
    ) : (
        <FormStyled.FormBox onSubmit={state.taskInfo ? onEditSubmit : onSubmit}>
            <FormStyled.H1>
                {state.taskInfo ? 'Edit Hold A Token' : 'Add Hold A Token'}
            </FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.Label>Token Address</FormStyled.Label>
                <FormStyled.Input
                    title="Token"
                    placeholder="Token Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Amount Required</FormStyled.Label>
                <FormStyled.Input
                    placeholder="Minimum amount to hold"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </FormStyled.Fieldset>

            <FormStyled.Button type="submit">
                {loading && <Loader color="white" />}
                Submit
            </FormStyled.Button>
        </FormStyled.FormBox>
    )
}

export default AddHoldToken
