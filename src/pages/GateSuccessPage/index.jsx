import Header from '../../components/Header'
import Footer from '../../components/Footer'
import * as Styled from './style'

const GateSuccessPage = () => {
    return (
        <Styled.Container>
            <Header />
            <Styled.BoxContainer>
                <Styled.TextContainer>
                    Gate created with success!
                </Styled.TextContainer>
                <Styled.smallTextContainer>
                    Redirecting...
                </Styled.smallTextContainer>
            </Styled.BoxContainer>
            <Footer />
        </Styled.Container>
    )
}

export default GateSuccessPage
