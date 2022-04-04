import { FaDiscord, FaTwitter, FaMedium, FaLinkedin } from 'react-icons/fa';
import * as Styled from './style';

import logo from '../../assets/Gateway.svg';
import { SOCIALS } from '../../utils/constants';

const Footer = (props) => {
    return (
        <Styled.FooterBox>
            <Styled.LogoAndSocialsBox>
                <Styled.LogoBox>
                    <img src={logo} alt='Gateway Logo' />
                    <Styled.LogoText>GATEWAY</Styled.LogoText>
                </Styled.LogoBox>
                <Styled.SocialsBox>
                    <Styled.SocialBtn
                        href= {SOCIALS.Discord}
                        target='_blank'
                    >
                        <FaDiscord color='white' size={24} />
                    </Styled.SocialBtn>
                    <Styled.SocialBtn
                        href= {SOCIALS.Twitter}
                        target='_blank'
                    >
                        <FaTwitter color='white' size={24} />
                    </Styled.SocialBtn>
                    <Styled.SocialBtn
                        href=  {SOCIALS.Medium}
                        target='_blank'
                    >
                        <FaMedium color='white' size={24} />
                    </Styled.SocialBtn>
                    <Styled.SocialBtn
                        href= {SOCIALS.Linkedln}
                        target='_blank'
                    >
                        <FaLinkedin color='white' size={24} />
                    </Styled.SocialBtn>
                </Styled.SocialsBox>
                <Styled.CopyBox>
                    <p>Copyright © 2022 Gateway.</p>
                    <p>All rights reserved.</p>
                </Styled.CopyBox>
            </Styled.LogoAndSocialsBox>
            {/*
            <Styled.LinkColumn>
                <Styled.ColItem title>Learn</Styled.ColItem>
                <br />
                <Styled.ColItem>About</Styled.ColItem>
                <Styled.ColItem>White paper</Styled.ColItem>
                <Styled.ColItem>FAQ</Styled.ColItem>
                <Styled.ColItem>Contact</Styled.ColItem>
            </Styled.LinkColumn>
            <Styled.LinkColumn>
                <Styled.ColItem title>Learn</Styled.ColItem>
                <br />
                <Styled.ColItem>About</Styled.ColItem>
                <Styled.ColItem>White paper</Styled.ColItem>
                <Styled.ColItem>FAQ</Styled.ColItem>
                <Styled.ColItem>Contact</Styled.ColItem>
            </Styled.LinkColumn>
            <Styled.LinkColumn>
                <Styled.ColItem title>Learn</Styled.ColItem>
                <br />
                <Styled.ColItem>About</Styled.ColItem>
                <Styled.ColItem>White paper</Styled.ColItem>
                <Styled.ColItem>FAQ</Styled.ColItem>
                <Styled.ColItem>Contact</Styled.ColItem>
            </Styled.LinkColumn>
            <Styled.CTABox>
                <Styled.CTAText>
                    Join us to build the future of communities
                </Styled.CTAText>
                <Styled.CTABtn>Join Today</Styled.CTABtn>
            </Styled.CTABox>
            */}
        </Styled.FooterBox>
    );
};

export default Footer;
