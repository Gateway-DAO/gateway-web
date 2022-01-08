import { SingleLineInputs, SelectInput, SubmitButton } from '../../../../../Inputs'
import * as Styled from './style'
const TokenForm  = (props)=>{
    return (
        <Styled.Wrapper>
        <SelectInput/>
            <SingleLineInputs title="Token" placeholder="$FWB" />   
            <SingleLineInputs
                title="Minimum amount to hold"
                placeholder="75"
            />
            <SubmitButton/>
        </Styled.Wrapper>
    )
};

export default TokenForm ;