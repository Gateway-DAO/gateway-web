import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import LandingButton from '../../../../components/LandingButton';

export default function JoinBetaSection() {
    const joinBeta = () => {
        window.open('https://ph7lzvecjq8.typeform.com/to/jDlK2fQ7', '__blank');
    };

    return (
        <MainStyled.SectionContainer>
            <MainStyled.SectionTitle data-aos='fade-right'>
                FOR DAOS
            </MainStyled.SectionTitle>
            <Styled.Content>
                <Styled.LeftSide>
                    <Styled.Text data-aos='fade-right'>
                        We’ll help you
                        <br />
                        find your next
                        <Styled.BigText
                            data-aos='zoom-out'
                            data-aos-delay='300'
                            // data-aos-offset='1000'
                        >
                            1M+
                        </Styled.BigText>
                        contributors
                    </Styled.Text>
                    <Styled.JoinBetaButton data-aos='fade-up'>
                        <LandingButton title='JOIN BETA' onClick={joinBeta} />
                    </Styled.JoinBetaButton>
                </Styled.LeftSide>
                <Styled.RightSide></Styled.RightSide>
            </Styled.Content>
        </MainStyled.SectionContainer>
    );
}
