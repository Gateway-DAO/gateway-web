import React from 'react';

// Components
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { GradientSVG } from '../../../../components/ProgressCircle';

// Styling
import * as Styled from './style';
import * as ThemeStyled from '../../../../theme/style';

// Hooks
import { useNavigate, useOutletContext, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Utils
import space from '../../../../utils/canvas';

const KeyCompletedPage = (props) => {
    // Hooks
    const { gateData } = useOutletContext();
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (gateData === undefined || state.key === undefined) {
            navigate('/');
        }

        const clear = setTimeout(() => {
            if (state.completedGate) {
                navigate(`../gate-success`);
            } else {
                window.location.href = `/gate/${gateData.id}/`;
            }
        }, 1000);

        return () => clearTimeout(clear);
    }, []);

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    return (
        <Styled.Container>
            <ThemeStyled.SpaceBox id='space-canvas' />
            <GradientSVG idCSS='circleGradient' />
            <Styled.Heading>
                Congrats! {state.key.information[0].title} successfully
                completed!
            </Styled.Heading>
            <Styled.CircleBox>
                <CircularProgressbarWithChildren
                    value={gateData.keysDone + state.key.keys}
                    minValue={0}
                    maxValue={gateData.keysNumber}
                    strokeWidth={18}
                >
                    <Styled.CircleText>
                        {gateData.keysDone + state.key.keys} out of{' '}
                        {gateData.keysNumber}
                    </Styled.CircleText>
                </CircularProgressbarWithChildren>
            </Styled.CircleBox>
            <Styled.RedirectText>Redirecting...</Styled.RedirectText>
        </Styled.Container>
    );
};

export default KeyCompletedPage;
