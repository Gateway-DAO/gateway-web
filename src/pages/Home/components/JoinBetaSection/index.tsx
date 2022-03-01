import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';

export default function JoinBetaSection() {
    return (
        <MainStyled.SectionContainer>
            <MainStyled.SectionTitle>FOR DAOS</MainStyled.SectionTitle>
            <Styled.Content>
                <Styled.LeftSide>
                    <Styled.Text>
                        We’ll help you
                        <br />
                        find your next
                        <Styled.BigText>1M+</Styled.BigText>
                        contributors
                    </Styled.Text>
                    <Styled.JoinButton>
                        <Styled.ButtonText>JOIN BETA</Styled.ButtonText>
                    </Styled.JoinButton>
                </Styled.LeftSide>
                <Styled.RightSide></Styled.RightSide>
            </Styled.Content>
        </MainStyled.SectionContainer>
    );
}
