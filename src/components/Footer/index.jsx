import { FaDiscord, FaTwitter, FaMedium } from "react-icons/fa"
import * as Styled from "./style"

import logo from "../../assets/Gateway.svg"

const Footer = props => {
    return (
        <Styled.FooterBox>
            <Styled.LogoAndSocialsBox>
                <Styled.LogoBox>
                    <img src={logo} alt="Gateway Logo" />
                    <Styled.LogoText>GATEWAY</Styled.LogoText>
                </Styled.LogoBox>
                <Styled.SocialsBox>
                    <Styled.SocialBtn href="https://discord.gg/dsrjqPRfNj" target="_blank">
                        <FaDiscord color="white" size={24} />
                    </Styled.SocialBtn>
                    <Styled.SocialBtn href="https://twitter.com/tryGateway" target="_blank">
                        <FaTwitter color="white" size={24} />
                    </Styled.SocialBtn>
                    <Styled.SocialBtn href="https://medium.com/@gatewaydao" target="_blank">
                        <FaMedium color="white" size={24} />
                    </Styled.SocialBtn>
                </Styled.SocialsBox>
                <Styled.CopyBox>
                    <p>Copyright © 2021 Gateway.</p>
                    <p>All rights reserved.</p>
                </Styled.CopyBox>
            </Styled.LogoAndSocialsBox>
            {/*
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
            */}
        </Styled.FooterBox>
    )
}

export default Footer;