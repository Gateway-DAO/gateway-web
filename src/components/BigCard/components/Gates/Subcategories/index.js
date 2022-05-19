import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../../../../hooks/useAdmin';

const Subcategories = ({
    id,
    viewAsMember,
}) => {
    const { isAdmin } = useAdmin(id);

    const navigate = useNavigate();
    const addGate = () => {
        navigate('add-gate');
    };

    return (
        <Styled.Wrapper>
            {(isAdmin && !viewAsMember) && (
                <Styled.WhitelistButtonDiv>
                    <Styled.Text>
                        As an
                        <Styled.BoldText2>admin</Styled.BoldText2> you can add
                        gates
                    </Styled.Text>
                    <Styled.WhitelistButton onClick={addGate}>
                        <Styled.ButtonText>ADD GATES</Styled.ButtonText>
                    </Styled.WhitelistButton>
                </Styled.WhitelistButtonDiv>
            )}
        </Styled.Wrapper>
    );
};

export default Subcategories;
