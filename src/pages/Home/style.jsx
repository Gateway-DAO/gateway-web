import styled from "styled-components";
import CTA_BG from '../../assets/Landing CTA Background.png';

export const HomeContainer = styled.main`
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

export const BigText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    z-index: 100;
    word-spacing: 100vw; 
    line-height: 90px;

    text-align: center;
    letter-spacing: -0.015em;

    /* Background */
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    margin: 0 30px;

    @media only screen and (max-width: 1170px) {
        font-size: 86px;
        line-height: 90px;
    }

    @media only screen and (max-width: 768px) {
        font-size: 66px;
        line-height: 65px;
    }

    @media only screen and (max-width: 470px) {
        font-size: 46px;
        line-height: 45px;
        margin: 0 10px;
    }

    @media only screen and (max-width: 310px) {
        font-size: 40px;
    }

`

export const MediumText = styled.h2`
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

    @media only screen and (max-width: 768px) {
        font-size: 54px;
        line-height: 54px;
        margin: 0 20px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 44px;
        line-height: 44px;
        margin: 0 15px;
    }

    @media only screen and (max-width: 350px) {
        font-size: 38px;
        line-height: 38px;
        margin: 0 15px;
    }
`

export const MainBox = styled.section`
    margin: 100px 0;
`

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
`

export const CTABox = styled.section`
    margin: 125px 0 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('${CTA_BG}');
    background-position: center;
    background-size: contain;
    height: 100vh;
    justify-content: center;
    
    @media only screen and (max-width: 1550px) {
        margin: 100px 0 50px 0;
        height: 70vh;
    }

    @media only screen and (max-width: 768px) {
        margin: 100px 0 50px 0;
        height: 50vh;
    }
`

export const CTAButton = styled.a`
    background: linear-gradient(88.53deg, #EE787B 2.77%, #E153F2 51.87%, #495BE0 98.96%);
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    padding: 10px 50px;
    margin-top: 70px;

    &:hover {
        cursor: pointer;
    }
`

export const CTAButtonText = styled.p`
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