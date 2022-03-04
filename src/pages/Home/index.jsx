import React, { useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as Styled from './style';
import * as CTAStyled from './components/CTASection/style';

import space from '../../utils/canvas';
import WalletBody from '../../components/WalletBody';
import UserCategories from './components/UserCategories';
import JoinBetaSection from './components/JoinBetaSection';
import TutorialSection from './components/TutorialSection';
import PartnerSection from './components/PartnerSection';
import InvestorSection from './components/InvestorSection';

const Home = (props) => {
    // eslint-disable-next-line
    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    return (
        <Styled.HomeContainer>
            <Header />

            <Styled.MainBox>
                <Styled.SpaceBox id='space-canvas' />
                <CTAStyled.Base />
                <CTAStyled.Sparkles />
                <CTAStyled.Dots />
                <CTAStyled.Stars />
                <CTAStyled.LbOne />
                <CTAStyled.LbTwo />
                <CTAStyled.LbThree />
                <CTAStyled.RbOne />
                <CTAStyled.RbTwo />
                <Styled.WalletContent data-aos='fade-up'>
                    <Styled.BigText
                        data-aos='zoom-out'
                        data-aos-delay='200'
                        data-aos-offset='500'
                    >
                        Your Decentralized Professional Network
                    </Styled.BigText>
                    <WalletBody title='ENTER THE GATEWAY' />
                </Styled.WalletContent>
            </Styled.MainBox>

            {/* Join Beta */}
            <UserCategories />
            {/* Join Beta */}
            <JoinBetaSection />
            {/* Tutorial */}
            <TutorialSection />
            {/* Partners */}
            <PartnerSection />
            {/* Partners */}
            <InvestorSection />

            <Footer />
        </Styled.HomeContainer>
    );
};

export default Home;
