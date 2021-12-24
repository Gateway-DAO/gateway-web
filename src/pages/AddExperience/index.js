import * as Styled from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BackButton from '../../components/AddNewKeyComponents/BackButtonDiv'
import SubmitButton from '../../components/AddNewKeyComponents/SubmitButton'
import Heading from '../../components/AddNewKeyComponents/Heading'
import {
    SingleLineInputs,
    MultiLineInputs,
    DateSelect,
    CheckBox,
    NumberSelect,
} from '../../components/Inputs'

const AddExperience = (props)=>{
    return (
        <Styled.Wrapper>
            <Header />
            <BackButton />
            <Styled.MarginWrapper>
                <Heading text="Add Experience" />
                <SingleLineInputs title="DAO" placeholder="Search" />
                <SingleLineInputs
                    title="Title"
                    placeholder="i.e. Community Manager"
                />
                <MultiLineInputs
                    title="Experience and Tasks Accomplished"
                    placeholder="This will be the description of your position."
                />
                <DateSelect title="Time Period of Contributions" />
                <CheckBox label="I am currently working in this role" />
                <NumberSelect title="Hours Per Week Committed on Average" />
                <SubmitButton />
            </Styled.MarginWrapper>
            <Footer />
        </Styled.Wrapper>
    )
};

export default AddExperience ;