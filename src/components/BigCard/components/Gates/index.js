import * as Styled from './style';
import { useState } from 'react';
import Subcategories from './Subcategories';
import GateCard from '../../../GateCard';
import { GradientSVG } from '../../../ProgressCircle';
// import { useAdmin } from '../../../../hooks/useAdmin';
import { PublishedState } from '../../../../graphql/API';

const Gates = (props) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const gates = props.gates.items || [];
    // const { isAdmin } = useAdmin(props.whitelistedAddresses);

    return (
        <Styled.Wrapper>
            <GradientSVG idCSS='circleGradient' />
            <Subcategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                whitelisted={props.whitelistedAddresses}
            />
            <Styled.GatesContainer>
                {gates.map((gate) => {
                    if (!props.viewAsMember) {
                        return (
                            <GateCard
                                gate={gate}
                                viewAsMember={props.viewAsMember}
                            />
                        );
                    }

                    if (
                        props.viewAsMember &&
                        gate.published === PublishedState.PUBLISHED
                    ) {
                        return (
                            <GateCard
                                gate={gate}
                                viewAsMember={props.viewAsMember}
                            />
                        );
                    }

                    return null;
                })}
            </Styled.GatesContainer>
        </Styled.Wrapper>
    );
};

export default Gates;
