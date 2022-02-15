import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RelatedContainer = styled.section`
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const BoxContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-content: center;
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
    font-size: 20px;
    line-height: 64px;
    text-align: left;
    /* or 100% */
    letter-spacing: -0.015em;
    @media only screen and (max-width: 768px) {
        font-size: 50px;
        line-height: 54px;
    }
    @media only screen and (max-width: 460px) {
        font-size: 40px;
        line-height: 44px;
    }
    @media only screen and (max-width: 350px) {
        font-size: 30px;
        line-height: 38px;
    }
`;
export const CardContainer = styled.div`
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

export const StyledShowAllButton = styled(Link)`
    display: flex;
    text-decoration: none;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    color: #e5e5e5;
`;
export const NoRelatedDao = styled.div`
    color: white;
    font-size: 20px;
    font-family: Be Vietnam;
`;
