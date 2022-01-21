import BackButton from '../../../../../../components/BackButton'
import { FormStyled } from '../../../../../../components/Form'
import ManualTaskForm from '../../components/SelectTask/TaskComponents/ManualTaskForm'
import * as Styled from './styled'

const AddManualTask = (props) => {
    return (
        <Styled.Container>
            <BackButton />
            <Styled.MarginWrapper>
                <FormStyled.Header text="Add Manual Task" />
                <Styled.MarginWrapperSecondary>
                    <ManualTaskForm />
                </Styled.MarginWrapperSecondary>
            </Styled.MarginWrapper>
        </Styled.Container>
    )
}

export default AddManualTask
