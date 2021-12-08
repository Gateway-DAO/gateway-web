import * as Styled from './style'
import {useState} from 'react'

const Subcategories = (props)=>{
    const categories = [
        'All',
        'Governance',
        'Design',
        'Development',
        'Educational',
    ]
    const [activeCategory,setActiveCategory]=useState("All")
    const activeCategoryHandler =(event)=>{
        const name = event.target.name;
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
                    As <strong>whitelisted address </strong> you can add gates
                </Styled.Text>
                <Styled.WhitelistButton>
                    <Styled.ButtonText>ADD GATES</Styled.ButtonText>
                </Styled.WhitelistButton>
            </Styled.WhitelistButtonDiv>
        </Styled.Wrapper>
    )
};

export default Subcategories ;