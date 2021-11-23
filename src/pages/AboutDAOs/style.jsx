import styled from 'styled-components'
import CTA_BG from '../../assets/Landing CTA Background.png'

export const CTABox = styled.section`
    margin: 25px 150px 150px 150px;
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
`

export const PageContainer = styled.main`
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

export const HeadingText = styled.h2`
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
    font-size: 96px;
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
`

export const ParagraphContainer = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 31px;
    color: #e5e5e5;
    width: 55%;
    margin-bottom: 25px;
    margin-top: 25px;
`

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MediumTextContainer = styled.div`
    display: flex;
`

export const BoldText = styled.p`
    font-weight: bold;
`

export const BoldHeading = styled.p`
    font-weight: bold;
    margin-bottom: 25px;
`
export const MediumText = styled.h4`
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
    font-size: 36px;
    line-height: 64px;
    text-align: left;

    /* or 100% */
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
`

export const CardContainer = styled.div`
    margin-left: 20%;
    margin-bottom: 5%;
    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 460px) {
    }

    @media only screen and (max-width: 350px) {
    }
`
