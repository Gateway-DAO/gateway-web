import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import WrappedBigSearch from '../../components/BigSearch'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import * as Styled from './style'

import space from '../../utils/canvas';

const Home = props => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => space(window.innerHeight, window.innerWidth), [window.innerHeight, window.innerWidth]);
    
    return (
        <Styled.HomeContainer>
            <Header />
            
            <Styled.MainBox>
                <Styled.SpaceBox id="space-canvas" />
                <Styled.BigText>Discover Your Community</Styled.BigText>
                <WrappedBigSearch />
            </Styled.MainBox>
            
            <Categories />

            { /* Call to Action */ }
            <Styled.CTABox>
                <Styled.MediumText>Join us to build the<br />future of communities</Styled.MediumText>
                <Styled.CTAButton href="https://forms.gle/w6WqEuqznbaK8QeT9" target="_blank"><Styled.CTAButtonText>Join Today</Styled.CTAButtonText></Styled.CTAButton>
            </Styled.CTABox>
            
            <Footer />
        </Styled.HomeContainer>
    )
}

export default Home