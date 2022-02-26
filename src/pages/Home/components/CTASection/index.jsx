import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';

const TitleSection = () => {
    return (
        <Styled.MainWrapper>
            <Styled.Base />
            <Styled.Sparkles />
            <Styled.Dots />
            <Styled.Stars />
            <Styled.LbOne />
            <Styled.LbTwo />
            <Styled.LbThree />
            <Styled.RbOne />
            <Styled.RbTwo />
            <Styled.TextDiv>
                <MainStyled.MediumText>
                    Join us to build the
                    <br />
                    FUTURE OF COMMUNITIES
                </MainStyled.MediumText>
                <MainStyled.CTAButton
                    href='https://discord.gg/PdjE2TfMZj'
                    target='_blank'
                >
                    <MainStyled.CTAButtonText>
                        Join Today
                    </MainStyled.CTAButtonText>
                </MainStyled.CTAButton>
            </Styled.TextDiv>
        </Styled.MainWrapper>
    );
};
export default TitleSection;
