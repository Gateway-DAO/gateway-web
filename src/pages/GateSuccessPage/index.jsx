import Header from '../../components/Header'
import Footer from '../../components/Footer'
import * as Styled from './style'

const GateSuccessPage = (props) => {
    return (
        <Styled.Container>
            {/* <Header /> */}
            <Styled.BoxContainer>
                <Styled.TextContainer>
                    {props.heading}
                </Styled.TextContainer>
                <Styled.smallTextContainer>
                    Redirecting...
                </Styled.smallTextContainer>
            </Styled.BoxContainer>
            {/* <Footer /> */}
        </Styled.Container>
    )
}

export default GateSuccessPage
