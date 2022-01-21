import * as Styled from './style'
import { FormStyled } from '../../../../../../../../../components/Form'

const Vote = (props) => {
    return (
        <Styled.Wrapper>
            <FormStyled.Input
                title="Amount of VOTES required from user to pass key"
                placeholder="Input the amount here "
            />
            <FormStyled.Input
                title="SPACE ID"
                placeholder="Use an existing ENS name"
            />
            
            <FormStyled.Button>Next</FormStyled.Button>
        </Styled.Wrapper>
    )
}

export default Vote
