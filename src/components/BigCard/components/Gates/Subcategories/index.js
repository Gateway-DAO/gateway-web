import * as Styled from './style'
import { useState } from 'react'
import { BoldText } from '../../../../../pages/About/style'

const Subcategories = (props) => {
    const categories = [
        'All',
        'Governance',
        'Design',
        'Development',
        'Educational',
    ]
    const [activeCategory, setActiveCategory] = useState('All')
    const activeCategoryHandler = (event) => {
        const name = event.target.name
        console.log(name)
        setActiveCategory(name)
    }
    return (
        <Styled.Wrapper>
            <Styled.Categories>
                {categories.map((category) => (
                    <Styled.Category
                        onClick={() => setActiveCategory(category)}
                        active={activeCategory === category}
                    >
                        {category}
                    </Styled.Category>
                ))}
            </Styled.Categories>
            <Styled.WhitelistButtonDiv>
                <Styled.Text>
                    As
                    <Styled.BoldText2>whitelisted address</Styled.BoldText2> you
                    can add gates
                </Styled.Text>
                <Styled.WhitelistButton>
                    <Styled.ButtonText>ADD GATES</Styled.ButtonText>
                </Styled.WhitelistButton>
            </Styled.WhitelistButtonDiv>
        </Styled.Wrapper>
    )
}

export default Subcategories
