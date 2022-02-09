import React from 'react'

// Components
import Page from '../../components/Page'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { GradientSVG } from '../../components/ProgressCircle'

// Styling
import * as Styled from './style'
import * as ThemeStyled from '../../theme/style'

// Hooks
import { useLocation } from 'react-use'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// Utils
import space from '../../utils/canvas'

const KeyCompletedPage = (props) => {
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (state.usr.gate === undefined || state.usr.key === undefined) {
            navigate("/")
        }

        const clear = setTimeout(() => {
            window.location.href = `/gate/${state.usr.gate.id}/`
        }, 6000)

        return () => clearTimeout(clear)
    }, [])

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    return (
        <Page>
            <Styled.Container>
                <ThemeStyled.SpaceBox id="space-canvas" />
                <GradientSVG idCSS="circleGradient" />
                <Styled.Heading>
                    Congrats! {state.usr.key.information[0].title} successfully
                    completed!
                </Styled.Heading>
                <Styled.CircleBox>
                    <CircularProgressbarWithChildren
                        value={state.usr.keysDone}
                        minValue={0}
                        maxValue={state.usr.gate.keysNumber}
                        strokeWidth={18}
                    >
                        <Styled.CircleText>{state.usr.keysDone} out of {state.usr.gate.keysNumber}</Styled.CircleText>
                    </CircularProgressbarWithChildren>
                </Styled.CircleBox>
                <Styled.RedirectText>Redirecting...</Styled.RedirectText>
            </Styled.Container>
        </Page>
    )
}

export default KeyCompletedPage
