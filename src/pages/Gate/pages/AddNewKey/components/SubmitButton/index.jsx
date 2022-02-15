import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
const SubmitButton = ({ link }) => {
    const navigate = useNavigate();
    const handelClick = () => {
        navigate(link);
    };
    return (
        <Styled.Wrapper>
            <Styled.SubmitButton onClick={handelClick}>
                SUBMIT
            </Styled.SubmitButton>
        </Styled.Wrapper>
    );
};

export default SubmitButton;
