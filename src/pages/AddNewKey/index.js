import React from 'react';
import BackButton from '../../components/AddNewKeyComponents/BackButtonDiv';
import Heading from '../../components/AddNewKeyComponents/Heading';
import {SingleLineInputs,MultiLineInputs} from '../../components/Inputs';
import SelectTask from '../../components/AddNewKeyComponents/SelectTask';
import SubmitButton from '../../components/AddNewKeyComponents/SubmitButton';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as Styled from './style'

const AddNewKey = (props)=>{
    return (
        <Styled.AddNewKeyContainer>
            <Header />
            <BackButton />
            <Styled.MarginWrapper>
                <Heading text="Add a New Key" />
                <SingleLineInputs />
                <MultiLineInputs />
                <SelectTask />
                <SubmitButton />
            </Styled.MarginWrapper>
            <Footer />
        </Styled.AddNewKeyContainer>
    )
};

export default AddNewKey ;