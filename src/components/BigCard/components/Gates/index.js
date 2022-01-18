import * as Styled from './style'
import { useState } from 'react'
import Subcategories from './Subcategories'
import GateCard from '../../../GateCard'
const Gates = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    return (
        <Styled.Wrapper>
            <Subcategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <Styled.GatesContainer>
                <GateCard />
                <GateCard />
                <GateCard />
                <GateCard />
                <GateCard />
                <GateCard />
            </Styled.GatesContainer>
        </Styled.Wrapper>
    )
}

export default Gates
