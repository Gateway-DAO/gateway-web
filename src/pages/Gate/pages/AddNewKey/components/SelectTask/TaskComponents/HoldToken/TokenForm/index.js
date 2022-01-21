import { SelectInput } from '../../../../../../../../../components/Inputs'
import * as Styled from './style'
import { FormStyled } from '../../../../../../../../../components/Form'

const TokenForm = (props) => {
    return (
        <Styled.Wrapper>
            <SelectInput />
            <FormStyled.Input title="Token" placeholder="$FWB" />
            <FormStyled.Input title="Minimum amount to hold" placeholder="75" />
            <FormStyled.Button>Next</FormStyled.Button>
        </Styled.Wrapper>
    )
}

export default TokenForm
