import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';

export default function JoinBetaSection() {
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
                    <Styled.JoinButton data-aos='fade-up'>
                        <Styled.ButtonText>JOIN BETA</Styled.ButtonText>
                    </Styled.JoinButton>
                </Styled.LeftSide>
                <Styled.RightSide></Styled.RightSide>
            </Styled.Content>
        </MainStyled.SectionContainer>
    );
}
