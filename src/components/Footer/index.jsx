import styled from "styled-components"
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa"

import logo from "../../assets/Gateway.svg"
import { Link } from "react-router-dom"

const FooterBox = styled.footer`
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr 3fr;
    margin: 0 40px;
    grid-column-gap: 20px;
    padding: 80px 0;
`

const LogoAndSocialsBox = styled.div`
    
`

const LogoBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const SocialsBox = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
`

const SocialBtn = styled.a`
    margin-right: 15px;
`

const LogoText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.4em;

    color: #E5E5E5;

    margin-left: 20px;
`

const CopyBox = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: rgba(255, 255, 255, 0.5);
`

const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColItem = styled(Link)`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;
    /* or 28px */

    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${props => props.title ? "white" : "rgba(255, 255, 255, 0.5)"};

    text-decoration: none;
`

const CTABox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

const CTAText = styled.h3`
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
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
`

const CTABtn = styled.a`
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

    color: #E5E5E5;
`

const Footer = props => {
    return (
        <FooterBox>
            <LogoAndSocialsBox>
                <LogoBox>
                    <img src={logo} alt="Gateway Logo" />
                    <LogoText>GATEWAY</LogoText>
                </LogoBox>
                <SocialsBox>
                    <SocialBtn>
                        <FaDiscord color="white" size={24} />
                    </SocialBtn>
                    <SocialBtn>
                        <FaTwitter color="white" size={24} />
                    </SocialBtn>
                    <SocialBtn>
                        <FaGithub color="white" size={24} />
                    </SocialBtn>
                </SocialsBox>
                <CopyBox>
                    <p>Copyright © 2021 Gateway.</p>
                    <p>All rights reserved.</p>
                </CopyBox>
            </LogoAndSocialsBox>
            <LinkColumn>
                <ColItem title>Learn</ColItem>
                <br/>
                <ColItem>About</ColItem>
                <ColItem>White paper</ColItem>
                <ColItem>FAQ</ColItem>
                <ColItem>Contact</ColItem>
            </LinkColumn>
            <LinkColumn>
                <ColItem title>Learn</ColItem>
                <br/>
                <ColItem>About</ColItem>
                <ColItem>White paper</ColItem>
                <ColItem>FAQ</ColItem>
                <ColItem>Contact</ColItem>
            </LinkColumn>
            <LinkColumn>
                <ColItem title>Learn</ColItem>
                <br/>
                <ColItem>About</ColItem>
                <ColItem>White paper</ColItem>
                <ColItem>FAQ</ColItem>
                <ColItem>Contact</ColItem>
            </LinkColumn>
            <CTABox>
                <CTAText>Join us to build the future of communities</CTAText>
                <CTABtn>Join Today</CTABtn>
            </CTABox>
        </FooterBox>
    )
}

export default Footer;