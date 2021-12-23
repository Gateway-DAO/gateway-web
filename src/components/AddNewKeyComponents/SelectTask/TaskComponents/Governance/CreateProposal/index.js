import { SingleLineInputs, SubmitButton } from '../../../../../Inputs'
import { useHistory } from 'react-router-dom'
import * as Styled from './style'
const CreateProposal = (props) => {
    const history = useHistory()
    const SubmitHandler = () => {
        history.push('/')
    }
    return (
        <Styled.Wrapper>
            <SingleLineInputs
                title="Amount of proposals required from user to pass key"
                placeholder="Input the amount here"
            />
            <SingleLineInputs
                title="SPACE ID"
                placeholder="Use an existing ENS name"
            />
            <SubmitButton onClick={SubmitHandler} />
        </Styled.Wrapper>
    )
}

export default CreateProposal
