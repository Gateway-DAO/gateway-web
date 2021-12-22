import { SingleLineInputs, SubmitButton } from '../../../../../Inputs'
import * as Styled from './style'
const Vote = (props) => {
    return (
        <Styled.Wrapper>
            <SingleLineInputs
                title="Amount of VOTES required from user to pass key"
                placeholder="Input the amount here "
            />
            <SingleLineInputs
                title="SPACE ID"
                placeholder="Use an existing ENS name"
            />
            <SubmitButton />
        </Styled.Wrapper>
    )
}

export default Vote
