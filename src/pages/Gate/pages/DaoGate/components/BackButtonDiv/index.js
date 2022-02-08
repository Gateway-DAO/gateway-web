import React from 'react'
import * as Styled from './style'
import BackIcon from '../../../../../../assets/icons/BackIcon.svg'
import ShareIcon from '../../../../../../assets/icons/share.svg'
import { useNavigate } from 'react-router-dom'
//import'./BackButton.css';

const BackButton = ({ url = -1, children = "Go Back" }) => {
    const navigate = useNavigate();
    return (
        <Styled.Wrapper>
            <Styled.Div>
                <Styled.ButtonWrapper onClick={() => navigate(url)}>
                    <img src={BackIcon} alt="Back" />
                </Styled.ButtonWrapper>
                <Styled.TextWrapper>
                    <Styled.Text>{children}</Styled.Text>
                </Styled.TextWrapper>
            </Styled.Div>
            <Styled.Div>
                <Styled.TextWrapper>
                    <Styled.Text>Share</Styled.Text>
                </Styled.TextWrapper>
                <Styled.ButtonWrapper onClick={() => navigate(url)}>
                    <img src={ShareIcon} alt="Share" />
                </Styled.ButtonWrapper>
            </Styled.Div>
        </Styled.Wrapper>
    )
}

export default BackButton
