import React from 'react'
import styled from 'styled-components'
import WrappedBigSearch from '../../components/BigSearch'

import Header from '../../components/Header'

const HomeContainer = styled("main")`
    background-color: #170627;
    height: 100vh;
`

const BigText = styled("h1")`
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

const Home = props => {
    return (
        <HomeContainer>
            <Header />
            <BigText>Discover Your Community</BigText>
            <WrappedBigSearch />
        </HomeContainer>
    )
}

export default Home