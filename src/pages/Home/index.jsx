import React from 'react';

import Header from '../../components/Header';
import WrappedBigSearch from '../../components/BigSearch';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import CTASection from './components/CTASection';
import * as Styled from './style';
import EMS_IMG from '../../assets/Group_26.png';
import Space from '../../components/Space';

const Home = (props) => {
    return (
        <Styled.HomeContainer>
            <Header />

            <Styled.MainBox>
                <Space>
                    <Styled.BigText>Discover Your Community</Styled.BigText>
                    <WrappedBigSearch />
                </Space>
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
