import React from 'react'
import * as Styled from './style'
import BackIcon from '../../../assets/icons/BackIcon.svg'
import { useHistory } from 'react-router-dom'
//import'./BackButton.css';

const BackButton = (props) => {
    let history = useHistory()
    return (
        <Styled.Wrapper>
            <Styled.ButtonWrapper onClick={() => history.goBack()}>
                <img src={BackIcon} alt="Back" />
            </Styled.ButtonWrapper>
            <Styled.TextWrapper>
                <Styled.Text>Back to Onboarding</Styled.Text>
            </Styled.TextWrapper>
        </Styled.Wrapper>
    )
}

export default BackButton
