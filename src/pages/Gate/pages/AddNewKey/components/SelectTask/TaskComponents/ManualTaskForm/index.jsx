import * as Styled from './style'
import { FormStyled } from '../../../../../../../../components/Form'

const ManualTaskForm = (props) => {
    return (
        <Styled.Wrapper>
            <FormStyled.Input
                title="Title"
                placeholder="This will be the title of your Gate"
            />
            <FormStyled.Textarea
                title="Description"
                row="5"
                placeholder="This will be the description of your Gate. We reccommend maximum of 2 lines."
            />
        </Styled.Wrapper>
    )
}
export default ManualTaskForm
