import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterBox = styled.footer`
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr 3fr;

    margin: 0 40px;
    grid-column-gap: 20px;
    padding: 80px 0;

    display: flex;
    justify-content: center;

    position: relative;
    bottom: 0;

    @media only screen and (max-width: 1170px) {
        padding: 70px 0;
    }

    @media only screen and (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const LogoAndSocialsBox = styled.div``;

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const SocialsBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const SocialBtn = styled.a`
    margin-right: 15px;
`;

export const LogoText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.4em;

    color: #e5e5e5;

    margin-left: 20px;
`;

export const CopyBox = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    text-align: center;

    color: rgba(255, 255, 255, 0.5);

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ColItem = styled(Link)`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;
    /* or 28px */

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${(props) => (props.title ? 'white' : 'rgba(255, 255, 255, 0.5)')};

    text-decoration: none;
`;

export const CTABox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const CTAText = styled.h3`
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

    /* Body P Large */

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    /* or 108% */

    letter-spacing: -0.015em;
`;

export const CTABtn = styled.a`
    background: #170627;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    padding: 10px 90px;
    margin-top: 50px;

    /* Text */
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;

    color: #e5e5e5;
`;
