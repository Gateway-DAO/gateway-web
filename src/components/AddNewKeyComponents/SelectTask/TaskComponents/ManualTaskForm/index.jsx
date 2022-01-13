import { MultiLineInputs, SingleLineInputs} from '../../../../Inputs'
import * as Styled from './style'
const ManualTaskForm = (props)=>{
    return(
        <Styled.Wrapper>
            <SingleLineInputs
                title="Title" 
                placeholder="This will be the title of your Gate"
            />
            <MultiLineInputs 
                title="Description"
                row="5"
                placeholder="This will be the description of your Gate. We reccommend maximum of 2 lines."
            /> 
        </Styled.Wrapper>
    )
}
export default ManualTaskForm