import React from 'react'
import * as Styled from './style'
import BackIcon from '../../assets/icons/BackIcon.svg'
import ShareIcon from '../../assets/icons/share.svg'
import { useNavigate } from 'react-router-dom'
//import'./BackButton.css';

const BackButton = props => {
    const navigate = useNavigate();

    return (
        <Styled.Wrapper>
            <Styled.Div>
                <Styled.ButtonWrapper onClick={() => navigate(-1)}>
                    <img src={BackIcon} alt="Back" />
                </Styled.ButtonWrapper>
                <Styled.TextWrapper>
                    <Styled.Text>{props.children}</Styled.Text>
                </Styled.TextWrapper>
            </Styled.Div>
        </Styled.Wrapper>
    )
}

export default BackButton
