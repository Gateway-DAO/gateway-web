import React, { useState } from 'react'
import { FormStyled } from '../../../../../../components/Form'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useCreateContractInteraction } from '../../../../../../api/database/useCreateKey'
import AddKeySuccess from '../AddKeySuccess'
import Loader from '../../../../../../components/Loader'

const AddContractInteraction = (props) => {
    const [address, setAddress] = useState("")
    const [methodName, setMethodName] = useState("")
    const [createdKey, setCreatedKey] = useState(false)
    const [chain, setChain] = useState(1)
    const { state } = useLocation()
    const { createContractInteraction, data, loading, error } = useCreateContractInteraction()

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
                        task: {
                            type: "SC_INTERACTION",
                            chainID: chain,
                            address: address,
                            methodName
                        }
                    }
                }
            })

            setCreatedKey(true)
        }
        catch (err) {
            alert("An error occurred. Please try again later!")
            console.log(err)
        }
    }

    return createdKey ? <AddKeySuccess gate={state.gateData.id} /> : (
        <FormStyled.FormBox onSubmit={onSubmit}>
            <FormStyled.H1>Add Contract Interaction</FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>Chain</FormStyled.Label>
                <FormStyled.Select onChange={e => setChain(e.target.value)}>
                    <option value={1}>Ethereum</option>
                    <option value={42220}>Celo</option>
                    <option value={56}>Binance Smart Chain</option>
                    <option value={137}>Polygon/Matic</option>
                    <option value={43114}>Avalanche</option>
                </FormStyled.Select>
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Token Address</FormStyled.Label>
                <FormStyled.Input title="Token" placeholder="Token Address" value={address} onChange={e => setAddress(e.target.value)} required />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Method Name</FormStyled.Label>
                <FormStyled.Input placeholder="Smart Contract Method Name. Ex: swapETHForToken" value={methodName} onChange={e => setMethodName(e.target.value)} required />
            </FormStyled.Fieldset>

            <FormStyled.Button type="submit">
                {loading && <Loader color="white" />}
                Submit
            </FormStyled.Button>
        </FormStyled.FormBox>
    )
}

export default AddContractInteraction
