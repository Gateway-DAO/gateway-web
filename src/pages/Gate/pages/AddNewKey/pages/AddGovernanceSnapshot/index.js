import BackButton from '../../../../../../components/BackButton'
import * as Styled from './style'
import CreateProposal from '../../components/SelectTask/TaskComponents/Governance/CreateProposal'
import { useState } from 'react'
import Vote from '../../components/SelectTask/TaskComponents/Governance/Vote'
import { FormStyled } from '../../../../../../components/Form'

const AddGovernanceSnapshot = (props) => {
    const [active, setShowActive] = useState(null)

    return (
        <Styled.Container>
            <BackButton />
            <Styled.MarginWrapper>
                <FormStyled.Header text="Add Snapshot Governance" />
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
