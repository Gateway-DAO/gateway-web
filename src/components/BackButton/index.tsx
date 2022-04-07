import React from 'react';
import * as Styled from './style';
import BackIcon from '../../assets/icons/BackIcon.svg';
import { To, useNavigate } from 'react-router-dom';

/* This is a type definition for the props that the component will accept. */
interface IProps {
    children?: React.ReactNode;
    url?: number | string;
    style?: React.CSSProperties;
    state?: object;
}

/**
 * The styled button is a clickable button that navigates to a url
 * @param  - children: The text that will be displayed on the button.
 * @returns A styled component with a button and text.
 */
const BackButton: React.FC<IProps> = ({ children, style, url = -1, state = {} }) => {
    const navigate = useNavigate();

    return (
        <Styled.BackButtonContainer style={style}>
            <Styled.Wrapper>
                <Styled.Div>
                    <Styled.ButtonWrapper onClick={() => navigate(url as To, { state })}>
                        <img src={BackIcon} alt='Back' />
                    </Styled.ButtonWrapper>
                    <Styled.TextWrapper>
                        <Styled.Text>{children || 'Go Back'}</Styled.Text>
                    </Styled.TextWrapper>
                </Styled.Div>
            </Styled.Wrapper>
        </Styled.BackButtonContainer>
    );
};

export default BackButton;
