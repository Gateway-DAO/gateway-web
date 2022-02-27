import React, { useEffect } from 'react';

import Header from '../../components/Header';
import WrappedBigSearch from '../../components/BigSearch';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import CTASection from './components/CTASection';
import * as Styled from './style';

import space from '../../utils/canvas';
import EMS_IMG from '../../assets/Group_26.png';

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
                <Styled.BigText>Discover Your Community</Styled.BigText>
                <WrappedBigSearch />
            </Styled.MainBox>

            <Categories />
            {/* Enlighten Me */}
            <Styled.EMSBox>
                <Styled.EMSImageContainer>
                    <img src={`${EMS_IMG}`} alt='' />
                </Styled.EMSImageContainer>
                <Styled.EMSContentContainer>
                    <Styled.EMSMediumText>
                        Don't know what a DAO is?
                    </Styled.EMSMediumText>
                    <Styled.EMSButton to='/what-are-DAOs'>
                        <Styled.CTAButtonText>
                            ENLIGHTEN ME
                        </Styled.CTAButtonText>
                    </Styled.EMSButton>
                </Styled.EMSContentContainer>
            </Styled.EMSBox>

            {/* Call to Action */}
            <CTASection />

            <Footer />
        </Styled.HomeContainer>
    );
};

export default Home;
