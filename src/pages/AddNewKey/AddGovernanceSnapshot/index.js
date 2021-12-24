import BackButton from '../../../components/AddNewKeyComponents/BackButtonDiv'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Heading from '../../../components/AddNewKeyComponents/Heading'
import * as Styled from './style'
import CreateProposal from '../../../components/AddNewKeyComponents/SelectTask/TaskComponents/Governance/CreateProposal'
import { useState } from 'react'
import Vote from '../../../components/AddNewKeyComponents/SelectTask/TaskComponents/Governance/Vote'
const AddGovernanceSnapshopt = (props) => {
    const [active, setShowActive] = useState(null)
    return (
        <Styled.Container>
            <Header />
            <BackButton />
            <Styled.MarginWrapper>
                <Heading text="Add Snapshot Governance" />
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
            <Footer />
        </Styled.Container>
    )
}

export default AddGovernanceSnapshopt
