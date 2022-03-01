import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import PlayIconImg from '../../../../assets/icons/PlayIcon.svg';

export default function TutorialSection() {
    return (
        <MainStyled.SectionContainer>
            <Styled.Content>
                <Styled.LeftSide>
                    <Styled.Title>SEE HOW IT WORKS</Styled.Title>
                    <Styled.BigText>Create Your Profile</Styled.BigText>
                    <Styled.Text>Earn Credentials</Styled.Text>
                    <Styled.Text>Build Your Digital Resume</Styled.Text>
                    <Styled.Text>Discover Your Friends</Styled.Text>
                </Styled.LeftSide>
                <Styled.RightSide>
                    <Styled.Video>
                        <Styled.PlayIcon src={PlayIconImg}></Styled.PlayIcon>
                    </Styled.Video>
                </Styled.RightSide>
            </Styled.Content>
        </MainStyled.SectionContainer>
    );
}
