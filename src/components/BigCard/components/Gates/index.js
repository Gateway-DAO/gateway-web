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
    const resultPerPage = 9;
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
                            <Styled.GateItem key={idx}>
                                <GateCard
                                    gate={gate}
                                    viewAsMember={props.viewAsMember}
                                />
                            </Styled.GateItem>
                        );
                    }

                    if (
                        props.viewAsMember &&
                        gate.published === PublishedState.PUBLISHED
                    ) {
                        return (
                            <Styled.GateItem key={idx}>
                                <GateCard
                                    gate={gate}
                                    viewAsMember={props.viewAsMember}
                                />
                            </Styled.GateItem>
                        );
                    }

                    return null;
                })}
            </Styled.GatesContainer>
            {!!gates.length && <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />}
        </Styled.Wrapper>
    );
};

export default Gates;
