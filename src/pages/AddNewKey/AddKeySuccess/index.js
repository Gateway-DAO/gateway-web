import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import * as Styled from './style'
const AddKeySuccess = (props) => {
    return (
        <Styled.Wrapper>
            <Header />
            <Styled.HeadingMainWrapper>
                <Styled.HeadingSecondWrapper>
                    <Styled.HeadingText>
                        Key Added With Success !
                    </Styled.HeadingText>
                </Styled.HeadingSecondWrapper>
            </Styled.HeadingMainWrapper>
            <Footer />
        </Styled.Wrapper>
    )
}

export default AddKeySuccess
