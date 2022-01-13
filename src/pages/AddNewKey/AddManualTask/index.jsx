import BackButton from '../../../components/AddNewKeyComponents/BackButtonDiv'
import Heading from '../../../components/AddNewKeyComponents/Heading'
import ManualTaskForm from '../../../components/AddNewKeyComponents/SelectTask/TaskComponents/ManualTaskForm'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import * as Styled from './styled'

const AddManualTask = (props)=>{

    return(
        <Styled.Container>
            <Header />
            <BackButton />
            <Styled.MarginWrapper>
                <Heading text="Add Manual Task" />
                <Styled.MarginWrapperSecondary>
                    <ManualTaskForm />
                </Styled.MarginWrapperSecondary>
            </Styled.MarginWrapper>
            <Footer />
        </Styled.Container>
    )
}
export default AddManualTask