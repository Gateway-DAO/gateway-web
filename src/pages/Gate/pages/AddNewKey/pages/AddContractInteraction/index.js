import React, { useState } from 'react'
import { FormStyled } from '../../../../../../components/Form'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useCreateContractInteraction } from '../../../../../../api/database/useCreateKey'
import AddKeySuccess from '../AddKeySuccess'
import Loader from '../../../../../../components/Loader'

const AddContractInteraction = (props) => {
    const { state } = useLocation()
    console.log(state.taskInfo)
    const [address, setAddress] = useState(
        state.taskInfo ? state.taskInfo.address : ''
    )
    const [methodName, setMethodName] = useState(
        state.taskInfo ? state.taskInfo.methodName : ''
    )
    const [createdKey, setCreatedKey] = useState(false)
    const [chain, setChain] = useState(
        state.taskInfo ? state.taskInfo.chainID : 1
    )

    const { createContractInteraction, data, loading, error } =
        useCreateContractInteraction()

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            await createContractInteraction({
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
                            type: 'CONTRACT_INTERACTION',
                            chainID: chain,
                            address: address,
                            methodName,
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
                {state.taskInfo
                    ? 'Edit Contract Interaction'
                    : 'Add Contract Interaction'}
            </FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>Chain</FormStyled.Label>
                <FormStyled.Select onChange={(e) => setChain(e.target.value)}>
                    <option value={1}>Ethereum</option>
                    <option value={42220}>Celo</option>
                    <option value={56}>Binance Smart Chain</option>
                    <option value={137}>Polygon/Matic</option>
                    <option value={43114}>Avalanche</option>
                </FormStyled.Select>
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Contract Address</FormStyled.Label>
                <FormStyled.Input
                    title="Token"
                    placeholder="Token Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Method Name</FormStyled.Label>
                <FormStyled.Input
                    placeholder="Smart Contract Method Name. Ex: swapETHForToken"
                    value={methodName}
                    onChange={(e) => setMethodName(e.target.value)}
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

export default AddContractInteraction
