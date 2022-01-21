// Components
import CreateProposal from '../../components/SelectTask/TaskComponents/Governance/CreateProposal'
import Vote from '../../components/SelectTask/TaskComponents/Governance/Vote'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../../../components/Form'

// Hooks
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const AddGovernanceSnapshot = (props) => {
    const [active, setShowActive] = useState(null)
    const { state } = useLocation()

    return (
        <Styled.Container>
            <Styled.MarginWrapper>
                <FormStyled.H1>Add Snapshot Governance</FormStyled.H1>
                <Styled.MarginWrapperSecondary>
                    <Styled.TasksBox>
                        <Styled.TaskBox
                            active={active === 'proposal'}
                            onClick={() => setShowActive('proposal')}
                        >
                            <Styled.TaskBoxText>
                                CREATE A PROPOSAL
                            </Styled.TaskBoxText>
                        </Styled.TaskBox>
                        <Styled.TaskBox
                            active={active === 'vote'}
                            onClick={() => setShowActive('vote')}
                        >
                            <Styled.TaskBoxText>VOTE</Styled.TaskBoxText>
                        </Styled.TaskBox>
                    </Styled.TasksBox>
                    {active === 'proposal' && <CreateProposal />}
                    {active === 'vote' && <Vote />}
                </Styled.MarginWrapperSecondary>
            </Styled.MarginWrapper>
        </Styled.Container>
    )
}

export default AddGovernanceSnapshot
