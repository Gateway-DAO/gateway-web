import styled from 'styled-components';

export const PageContainer = styled.main`
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
export const MainWrapper = styled.div`
    display: flex;
    color: white;
    width: 100%;
    justify-content: center;
`;
export const CenterWrapper = styled.div`
    color: white;
    width: 55%;
    justify-content: left;
    @media only screen and (max-width: 768px) {
        width: 80%;
    }

    @media only screen and (max-width: 460px) {
        width: 90%;
    }

    @media only screen and (max-width: 350px) {
        width: 95%;
    }
`;

export const WhiteImage = styled.div`
    margin-bottom: 25px;
    cursor: pointer;
`;
export const ParagraphContainer = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 31px;
    color: #e5e5e5;
    margin-bottom: 25px;
    margin-top: 25px;
`;

export const MediumTextContainer = styled.div`
    display: flex;
`;

export const BoldText = styled.span`
    font-weight: bold;
`;

export const BoldHeading = styled.p`
    font-weight: bold;
    margin-bottom: 25px;
`;
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

    /* or 100% */
    letter-spacing: -0.015em;

    @media only screen and (max-width: 768px) {
        font-size: 50px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 40px;
    }

    @media only screen and (max-width: 350px) {
        font-size: 30px;
    }
`;

export const CardContainer = styled.div`
    margin-left: 20%;
    margin-bottom: 25px;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    @media only screen and (max-width: 460px) {
        width: 100%;
    }

    @media only screen and (max-width: 350px) {
        width: 100%;
    }
`;
