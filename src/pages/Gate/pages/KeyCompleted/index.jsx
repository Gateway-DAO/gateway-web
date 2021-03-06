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

const TaskCompletedPage = (props) => {
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
        }, 2000);

        return () => clearTimeout(clear);
    }, []);

    return (
        <Styled.Container>
            <GradientSVG idCSS='circleGradient' />
            <Styled.Heading>
                Congrats! {state.key.information[0].title} successfully
                completed!
            </Styled.Heading>
            <Styled.CircleBox>
                <CircularProgressbarWithChildren
                    value={state.keysDone}
                    minValue={0}
                    maxValue={gateData.tasks.length}
                    strokeWidth={18}
                >
                    <Styled.CircleText>
                        {state.keysDone} out of{' '}
                        {gateData.tasks.length}
                    </Styled.CircleText>
                </CircularProgressbarWithChildren>
            </Styled.CircleBox>
            <Styled.RedirectText>Redirecting...</Styled.RedirectText>
        </Styled.Container>
    );
};

export default TaskCompletedPage;
