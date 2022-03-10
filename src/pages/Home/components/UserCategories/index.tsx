import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import LandingButton from '../../../../components/LandingButton';
import { useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/UserContext';

export default function UserCategories() {
    const navigate = useNavigate();
    const { active } = useWeb3React();
    const { activateWeb3 }: any = useAuth();
    const signUp = () => {
        if (active) {
            navigate('/profile');
        } else {
            activateWeb3();
        }
    };

    return (
        <MainStyled.SectionContainer>
            <MainStyled.SectionTitle data-aos='fade-right'>
                FOR USERS
            </MainStyled.SectionTitle>
            <Styled.CategoriesContainer>
                <Styled.Category data-aos='fade-up'>
                    <Styled.CategoryImg />
                    <Styled.CategoryName>
                        YOUR CONTRIBUTIONS
                    </Styled.CategoryName>
                    <Styled.CategoryDescription>
                        {`Proof of Work — Where you contributed in a verifiable way.`}
                    </Styled.CategoryDescription>
                </Styled.Category>
                <Styled.Category data-aos='fade-up'>
                    <Styled.CategoryImg />
                    <Styled.CategoryName color='#B85EFF'>
                        YOUR SKILLS
                    </Styled.CategoryName>
                    <Styled.CategoryDescription>
                        {`Highlight your skills using badges and solidify your reputation.`}
                    </Styled.CategoryDescription>
                </Styled.Category>
                <Styled.Category data-aos='fade-up'>
                    <Styled.CategoryImg />
                    <Styled.CategoryName color='#0075FF'>
                        YOUR SKILLS
                    </Styled.CategoryName>
                    <Styled.CategoryDescription>
                        {`Build and curate a network that is incentivised to help you succeed.`}
                    </Styled.CategoryDescription>
                </Styled.Category>
            </Styled.CategoriesContainer>
            <MainStyled.SignUpBtn data-aos='fade-up'>
                <LandingButton title='Sign Up' onClick={signUp} />
            </MainStyled.SignUpBtn>
        </MainStyled.SectionContainer>
    );
}
