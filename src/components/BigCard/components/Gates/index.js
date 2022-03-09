import * as Styled from './style';
import React, { useState } from 'react';
import Subcategories from './Subcategories';
import GateCard from '../../../GateCard';
import { GradientSVG } from '../../../ProgressCircle';
import { useAdmin } from '../../../../hooks/useAdmin';

const Gates = (props) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const gates = props.gates.items || [];
    const { isAdmin } = useAdmin(props.whitelistedAddresses);

    return (
        <Styled.Wrapper>
            <GradientSVG idCSS='circleGradient' />
            <Subcategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                whitelisted={props.whitelistedAddresses}
            />
            <Styled.GatesContainer>
                {gates.map((gate, idx) => {
                    if (isAdmin) {
                        return (
                            <React.Fragment key={idx}>
                                <GateCard gate={gate} />
                            </React.Fragment>
                        );
                    }

                    if (!isAdmin && gate.published) {
                        return (
                            <React.Fragment key={idx}>
                                <GateCard gate={gate} />
                            </React.Fragment>
                        );
                    }

                    return null;
                })}
            </Styled.GatesContainer>
        </Styled.Wrapper>
    );
};

export default Gates;
