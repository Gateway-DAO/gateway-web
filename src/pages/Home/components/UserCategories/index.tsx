import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import WalletBody from '../../../../components/WalletBody';

export default function UserCategories() {
    return (
        <MainStyled.SectionContainer>
            <MainStyled.SectionTitle>FOR USERS</MainStyled.SectionTitle>
            <Styled.CategoriesContainer>
                <Styled.Category>
                    <Styled.CategoryImg />
                    <Styled.CategoryName>
                        YOUR CONTRIBUTIONS
                    </Styled.CategoryName>
                    <Styled.CategoryDescription>
                        {`Proof of Work — Where you contributed in a verifiable way.`}
                    </Styled.CategoryDescription>
                </Styled.Category>
                <Styled.Category>
                    <Styled.CategoryImg />
                    <Styled.CategoryName color='#B85EFF'>
                        YOUR SKILLS
                    </Styled.CategoryName>
                    <Styled.CategoryDescription>
                        {`Highlight your skills using badges and solidify your reputation.`}
                    </Styled.CategoryDescription>
                </Styled.Category>
                <Styled.Category>
                    <Styled.CategoryImg />
                    <Styled.CategoryName color='#0075FF'>
                        YOUR SKILLS
                    </Styled.CategoryName>
                    <Styled.CategoryDescription>
                        {`Build and curate a network that is incentivised to help you succeed.`}
                    </Styled.CategoryDescription>
                </Styled.Category>
            </Styled.CategoriesContainer>
            <MainStyled.SignUpBtn>
                <WalletBody title='SIGN UP' borderd />
            </MainStyled.SignUpBtn>
        </MainStyled.SectionContainer>
    );
}
