import React, { useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as Styled from './style';
import * as CTAStyled from './components/CTASection/style';

import space from '../../utils/canvas';
import UserCategories from './components/UserCategories';
import JoinBetaSection from './components/JoinBetaSection';
import TutorialSection from './components/TutorialSection';
import PartnerSection from './components/PartnerSection';
import InvestorSection from './components/InvestorSection';
import LandingButton from '../../components/LandingButton';
import { useNavigate } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { useAuth } from '../../contexts/UserContext';

const Home = (props) => {
    const navigate = useNavigate();
    const { active } = useWeb3React();
    const { activateWeb3 } = useAuth();

    // eslint-disable-next-line
    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    const enterGateway = () => {
        if (active) {
            navigate('/search/daos');
        } else {
            activateWeb3();
        }
    };

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
                <Styled.WalletContent>
                    <Styled.BigText data-aos='zoom-out' data-aos-delay='200'>
                        Your Decentralized Professional Network
                    </Styled.BigText>
                    <LandingButton
                        title='ENTER THE GATEWAY'
                        variant='filled'
                        onClick={enterGateway}
                    />
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
