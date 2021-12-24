import * as Styled from './style'
import BackButton from '../../../components/AddNewKeyComponents/BackButtonDiv'
import Heading from '../../../components/AddNewKeyComponents/Heading'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import TokenForm from '../../../components/AddNewKeyComponents/SelectTask/TaskComponents/HoldToken/TokenForm'
const AddHoldToken = (props) => {
    return (
        <Styled.Container>
            <Header />
            <BackButton />
            <Styled.MarginWrapper>
                <Heading text="Add Hold A Token" />
                <Styled.MarginWrapperSecondary>
                    <TokenForm />
                </Styled.MarginWrapperSecondary>
            </Styled.MarginWrapper>
            <Footer />
        </Styled.Container>
    )
}

export default AddHoldToken
