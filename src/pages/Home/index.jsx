import React, { useEffect } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header'
import WrappedBigSearch from '../../components/BigSearch'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'

import CTA_BG from '../../assets/Landing CTA Background.svg';

import space from '../../utils/canvas';

const HomeContainer = styled.main`
    background-color: transparent;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    
    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    }
`

const BigText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 90px;
    /* or 94% */

    text-align: center;
    letter-spacing: -0.015em;

    /* Background */
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    /* Spacing */
    margin: 0 25%;
`

const MediumText = styled.h2`
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 64px;
    /* or 100% */

    text-align: center;
    letter-spacing: -0.015em;
`

const MainBox = styled.section`
    margin: 100px 0;
`

const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
`

const CTABox = styled.section`
    margin: 125px 0 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('${CTA_BG}');
    background-position: center;
    background-size: contain;
    height: 100vh;
    justify-content: center;
`

const CTAButton = styled.a`
    background: linear-gradient(88.53deg, #EE787B 2.77%, #E153F2 51.87%, #495BE0 98.96%);
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    padding: 10px 50px;
    margin-top: 70px;

    &:hover {
        cursor: pointer;
    }
`

const CTAButtonText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #E5E5E5;
`

const Home = props => {
    useEffect(() => space(), []);

    return (
        <HomeContainer>
            <Header />
            
            <MainBox>
                <SpaceBox id="space-canvas" />
                <BigText>Discover Your Community</BigText>
                <WrappedBigSearch />
            </MainBox>

            <Categories />

            { /* Call to Action */ }
            <CTABox>
                <MediumText>Join us to build the<br />future of communities</MediumText>
                <CTAButton><CTAButtonText>Join Today</CTAButtonText></CTAButton>
            </CTABox>
            <Footer />
        </HomeContainer>
    )
}

export default Home