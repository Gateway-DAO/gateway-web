import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
import { useGateAdmin, useAdmin } from '../../../../../hooks/useAdmin';

const Subcategories = ({
    whitelisted,
    activeCategory,
    setActiveCategory,
    viewAsMember,
}) => {
    const { isAdmin } = useAdmin(whitelisted);

    const navigate = useNavigate();
    const addGate = () => {
        navigate('add-gate');
    };

    return (
        <Styled.Wrapper>
            {/*<Styled.Categories>
                {categories.map((category) => (
                    <Styled.Category
                        onClick={() => setActiveCategory(category)}
                        active={activeCategory === category}
                    >
                        {category}
                    </Styled.Category>
                ))}
                </Styled.Categories>*/}
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
