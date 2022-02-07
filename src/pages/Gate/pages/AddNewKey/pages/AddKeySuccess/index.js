// Styling
import * as Styled from './style'
import * as ThemeStyled from '../../../../../../theme/style'

// Hooks
import { useEffect } from 'react'

// Utils
import space from '../../../../../../utils/canvas'

const AddKeySuccess = ({ gate }) => {
    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    useEffect(() => {
        if (gate === undefined) {
            window.location.href = '/'
        }

        const clear = setTimeout(() => {
            window.location.href = `/gate/${gate}/`
        }, 3000)

        return () => clearTimeout(clear)
    }, [])

    return (
        <Styled.Container>
            <ThemeStyled.SpaceBox id="space-canvas" />
            <Styled.Heading>Key Successfully Added!</Styled.Heading>
            <Styled.RedirectText>Redirecting...</Styled.RedirectText>
        </Styled.Container>
    )
}

export default AddKeySuccess
