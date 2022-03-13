import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
import { useGateAdmin } from '../../../../../hooks/useAdmin';

const Subcategories = ({
    whitelisted,
    activeCategory,
    setActiveCategory,
    viewAsMember,
}) => {
    const { isAdmin } = useGateAdmin(whitelisted);
    console.log(whitelisted);
    const categories = [
        'All',
        'Governance',
        'Design',
        'Development',
        'Educational',
    ];

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
            {!viewAsMember && (
                <Styled.WhitelistButtonDiv>
                    <Styled.Text>
                        As
                        <Styled.BoldText2>
                            whitelisted address
                        </Styled.BoldText2>{' '}
                        you can add gates
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
