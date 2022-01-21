import { FormStyled } from '../../../../../../../../../components/Form'
import { useNavigate } from 'react-router-dom'
import * as Styled from './style'

const CreateProposal = (props) => {
    const navigate = useNavigate()
    const submitHandler = () => {
        navigate('/')
    }

    return (
        <Styled.Wrapper>
            <FormStyled.Input
                title="Amount of proposals required from user to pass key"
                placeholder="Input the amount here"
            />
            <FormStyled.Input
                title="SPACE ID"
                placeholder="Use an existing ENS name"
            />
            <FormStyled.Button onClick={submitHandler}>Next</FormStyled.Button>
        </Styled.Wrapper>
    )
}

export default CreateProposal
