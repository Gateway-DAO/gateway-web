import * as Styled from './style'
import { useHistory } from 'react-router-dom';
const SubmitButton = ({link})=>{
    const history = useHistory();
    const handelClick = ()=>{
        history.push(link);
    }
    return(
    <Styled.Wrapper>
        <Styled.SubmitButton onClick={handelClick}>
            SUBMIT
        </Styled.SubmitButton>
    </Styled.Wrapper>
);
};

export default SubmitButton ;