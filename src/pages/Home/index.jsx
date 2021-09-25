import React from 'react'
import styled from 'styled-components'
import WrappedBigSearch from '../../components/BigSearch'
import Categories from '../../components/Categories'

import Header from '../../components/Header'

const HomeContainer = styled("main")`
    background-color: #170627;
    height: 100vh;
`

const BigText = styled.h1`
    font-size: 56px;
    line-height: 80px;
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    font-style: normal;
    text-align: center;
    letter-spacing: -0.015em;
`

const MediumText = styled.h2`
    font-size: 46px;
    line-height: 80px;
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    font-style: normal;
    text-align: center;
    letter-spacing: -0.015em;
`

const CTABox = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CTAButton = styled.button`
    background: linear-gradient(88.53deg, #EE787B 2.77%, #E153F2 51.87%, #495BE0 98.96%);
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    padding: 10px 50px;
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
    return (
        <HomeContainer>
            <Header />
            <BigText>Discover Your Community</BigText>
            <WrappedBigSearch />
            <Categories />

            { /* Call to Action */ }
            <CTABox>
                <MediumText>Join us to build the future of communities</MediumText>
                <CTAButton><CTAButtonText>Join Today</CTAButtonText></CTAButton>
            </CTABox>
        </HomeContainer>
    )
}

export default Home