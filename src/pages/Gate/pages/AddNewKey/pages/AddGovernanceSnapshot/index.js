import { v4 as uuidv4 } from 'uuid'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../../../components/Form'

// Hooks
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useCreateSnapshot } from '../../../../../../api/database/useCreateKey'
import AddKeySuccess from '../AddKeySuccess'
import Loader from '../../../../../../components/Loader'

const AddGovernanceSnapshot = (props) => {
    // States
    const [active, setShowActive] = useState(null)
    const [proposal, setProposal] = useState(null)
    const [spaceID, setSpaceID] = useState(null)
    const [createdKey, setCreatedKey] = useState(false)

    // Hooks
    const { state } = useLocation()
    const { createSnapshot, loading } = useCreateSnapshot()

    const onSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await createSnapshot({
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
                            type: "SNAPSHOT_GOVERNANCE",
                            snapshotType: active.toUpperCase(),
                            spaceID,
                            proposal
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
            <FormStyled.H1>Add Snapshot Governance</FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.GridBox
                    cols="2"
                    gap="30px"
                    onChange={(e) => setShowActive(e.target.value)}
                >
                    <FormStyled.BigRadio
                        id="option-1"
                        name="option"
                        value="proposal"
                        label="Create a Proposal"
                        checked={active === 'proposal'}
                    />
                    <FormStyled.BigRadio
                        id="option-2"
                        name="option"
                        value="vote"
                        label="Vote"
                        checked={active === 'vote'}
                    />
                </FormStyled.GridBox>
            </FormStyled.Fieldset>

            {active === 'vote' && (
                <FormStyled.Fieldset>
                    <FormStyled.Label>Specific Proposal</FormStyled.Label>
                    <FormStyled.Input value={proposal} onChange={e => setProposal(e.target.value)} placeholder="Input Snapshot Number" />
                </FormStyled.Fieldset>
            )}

            {(active === 'vote' || active === 'proposal') && (
                <FormStyled.Fieldset>
                    <FormStyled.Label>Space ID</FormStyled.Label>
                    <FormStyled.Input value={spaceID} onChange={e => setSpaceID(e.target.value)} placeholder="Use an existing ENS name" />
                </FormStyled.Fieldset>
            )}

            <FormStyled.Button type="submit">
                {loading && <Loader color="white" />}
                Submit
            </FormStyled.Button>
        </FormStyled.FormBox>
    )
}

export default AddGovernanceSnapshot
