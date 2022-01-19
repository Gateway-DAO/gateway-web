import * as Styled from './style'
import { useState } from 'react'
import { BoldText } from '../../../../../pages/About/style'
import { useHistory } from 'react-router-dom'

const Subcategories = ({ activeCategory, setActiveCategory }) => {
    const categories = [
        'All',
        'Governance',
        'Design',
        'Development',
        'Educational',
    ]

    const activeCategoryHandler = (event) => {
        const name = event.target.name
        console.log(name)
        setActiveCategory(name)
    }
    const history = useHistory()
    const addGate = ()=>{
        history.push("/add-gate");
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
                <Styled.WhitelistButton onClick={addGate}>
                    <Styled.ButtonText>ADD GATES</Styled.ButtonText>
                </Styled.WhitelistButton>
            </Styled.WhitelistButtonDiv>
        </Styled.Wrapper>
    )
}

export default Subcategories
