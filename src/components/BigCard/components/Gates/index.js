import * as Styled from './style';
import React, { useEffect, useState } from 'react';
import Subcategories from './Subcategories';
import GateCard from '../../../GateCard';
import { GradientSVG } from '../../../ProgressCircle';
import { useAdmin } from '../../../../hooks/useAdmin';
import { PublishedState } from '../../../../graphql/API';
import Pagination from '../../../../pages/Search/component/Pagination';

const Gates = (props) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [activeCategory, setActiveCategory] = useState('All');
    const [gates, setGates] = useState([]);
    const { isAdmin } = useAdmin(props.whitelistedAddresses);
    const resultPerPage = 4;
    const pageCount = Math.ceil((props.gates.items?.length || 0) / resultPerPage);
    const from = pageNumber * resultPerPage;
    const to = from + resultPerPage;

    useEffect(() => {
        const slicedGates = props.gates.items.slice(from, to);
        setGates(slicedGates);
    }, [from])

    return (
        <Styled.Wrapper>
            <GradientSVG idCSS='circleGradient' />
            <Subcategories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                whitelisted={props.whitelistedAddresses}
                viewAsMember={props.viewAsMember}
            />
            <Styled.GatesContainer>
                {gates.map((gate, idx) => {
                    if (isAdmin && !props.viewAsMember) {
                        return (
                            <GateCard
                                key={idx}
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
                                key={idx}
                                gate={gate}
                                viewAsMember={props.viewAsMember}
                            />
                        );
                    }

                    return null;
                })}
            </Styled.GatesContainer>
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </Styled.Wrapper>
    );
};

export default Gates;
