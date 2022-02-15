import * as Styled from './style';
import BackButton from '../../components/BackButton';
import {
    SingleLineInputs,
    MultiLineInputs,
    DateSelect,
    CheckBox,
    NumberSelect,
} from '../../components/Inputs';
import { FormStyled } from '../../components/Form';

const AddExperience = (props) => {
    return (
        <Styled.Wrapper>
            <BackButton />
            <Styled.MarginWrapper>
                <FormStyled.Header text='Add Experience' />
                <SingleLineInputs title='DAO' placeholder='Search' />
                <SingleLineInputs
                    title='Title'
                    placeholder='i.e. Community Manager'
                />
                <MultiLineInputs
                    title='Experience and Tasks Accomplished'
                    placeholder='This will be the description of your position.'
                />
                <DateSelect title='Time Period of Contributions' />
                <CheckBox label='I am currently working in this role' />
                <NumberSelect title='Hours Per Week Committed on Average' />
                <FormStyled.Button>Submit</FormStyled.Button>
            </Styled.MarginWrapper>
        </Styled.Wrapper>
    );
};

export default AddExperience;
