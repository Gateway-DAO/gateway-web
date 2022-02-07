import * as Styled from './style'
import { useState } from 'react'
import Subcategories from './Subcategories'
import GateCard from '../../../GateCard'
import { GradientSVG } from '../../../ProgressCircle'

const Gates = props => {
    const [activeCategory, setActiveCategory] = useState('All')
    const gates = props.gates.items || []

    return (
        <Styled.Wrapper>
            <GradientSVG idCSS='circleGradient' />
            <Subcategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <Styled.GatesContainer>
                {gates.map(gate => <GateCard gate={gate} />)}
            </Styled.GatesContainer>
        </Styled.Wrapper>
    )
}

export default Gates
