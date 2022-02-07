import * as Styled from './style'

const GateSuccessPage = (props) => {
    return (
        <Styled.Container>
            <Styled.BoxContainer>
                <Styled.TextContainer>{props.heading}</Styled.TextContainer>
                <Styled.SmallTextContainer>
                    Redirecting...
                </Styled.SmallTextContainer>
            </Styled.BoxContainer>
        </Styled.Container>
    )
}

export default GateSuccessPage
