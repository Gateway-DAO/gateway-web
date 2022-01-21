import { FormStyled } from '../../../../../../components/Form'
import ManualTaskForm from '../../components/SelectTask/TaskComponents/ManualTaskForm'
import * as Styled from './styled'

const AddManualTask = (props) => {
    return (
        <Styled.Container>
            <Styled.MarginWrapper>
                <FormStyled.H1>Add Manual Task</FormStyled.H1>
                <Styled.MarginWrapperSecondary>
                    <ManualTaskForm />
                </Styled.MarginWrapperSecondary>
            </Styled.MarginWrapper>
        </Styled.Container>
    )
}

export default AddManualTask
