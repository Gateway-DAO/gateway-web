import styled from 'styled-components';
import CTA_BG from '../../assets/Landing CTA Background.png';

export const HomeContainer = styled.main`
    background-color: transparent;
    height: 100%;
    position: relative;

    overflow-x: hidden;

    /* &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    } */
`;

export const WalletContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const BigText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    z-index: 1;
    // word-spacing: 100vw;
    line-height: 90px;

    text-align: center;
    letter-spacing: -0.015em;

    /* Background */
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    margin: 0 15%;
    margin-bottom: 2rem;

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
`;

export const MediumText = styled.h2`
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
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
        font-size: 50px;
        line-height: 54px;
        margin: 0 30px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 40px;
        line-height: 44px;
        margin: 0 25px;
    }

    @media only screen and (max-width: 350px) {
        font-size: 30px;
        line-height: 38px;
        margin: 0 20px;
    }
`;

export const MainBox = styled.section`
    position: relative;
    display: flex;
    height: calc(100vh - 90px);
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 0px;
    z-index: -1;
    left: 0;
    width: 100%;
`;

export const CTABox = styled.section`
    margin: 125px 0 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('${CTA_BG}');
    background-position: center;
    background-size: cover;
    height: 100vh;
    justify-content: center;

    @media only screen and (max-width: 1550px) {
        margin: 100px 0 50px 0;
    }

    @media only screen and (max-width: 768px) {
        margin: 100px 0 50px 0;
    }
`;

export const CTAButton = styled.a`
    background: linear-gradient(
        88.53deg,
        #ee787b 2.77%,
        #e153f2 51.87%,
        #495be0 98.96%
    );
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    padding: 10px 50px;
    margin-top: 70px;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`;

export const CTAButtonText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #e5e5e5;
`;

export const SignUpBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    @media only screen and (max-width: 768px) {
        margin-top: 0rem;
    }
`;

export const SectionContainer = styled.section`
    padding: 5rem 0;
    width: 100%;
    @media only screen and (max-width: 768px) {
        padding: 2rem 0;
    }
`;

export const SectionTitle = styled.h5`
    font-size: 14px;
    font-family: Poppins;
    color: #a5a5a5;
    margin-left: 30px;
    margin-bottom: 3rem;

    @media only screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;
