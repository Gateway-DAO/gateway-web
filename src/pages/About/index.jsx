import React from 'react';
import * as Styled from './style';
import rocket from '../../assets/About_spaceship.png';
import eye from '../../assets/About_eye.png';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import wwdInage from '../../assets/What_we_do_image.png';
// wwd--->What we do
const About = () => {
    return (
        <Styled.AboutContainer>
            <Header />
            <Styled.MainContainer>
                <Styled.Container>
                    <Styled.AboutImage>
                        <Styled.AboutImg src={eye} />
                    </Styled.AboutImage>
                    <Styled.TextContent>
                        <Styled.Heading>About Us</Styled.Heading>
                        <Styled.Description>
                            <Styled.BoldText>Gateway</Styled.BoldText> is the
                            premier DAO discovery platform by helping curate and
                            maintain important information on Web3 communities.
                            We are the Gateway for crypto curious individuals
                            into DAOs.
                        </Styled.Description>
                    </Styled.TextContent>
                </Styled.Container>
                <Styled.Container>
                    <Styled.TextContent>
                        <Styled.Heading>The Mission</Styled.Heading>
                        <Styled.Description>
                            DAOs are the promise of a social and economic
                            alignment which transcend geographic barriers to
                            allow truly global participation. We have an
                            intrinsic belief in the power of DAOs to be a force
                            for good. We think DAOs will advance humanity
                            through massively unlocking human collaboration on a
                            global scale.
                            <br />
                            <br />
                            <span>
                                For more information on DAOs{' '}
                                <Styled.ReadMore href='/what-are-DAOs'>
                                    click here
                                </Styled.ReadMore>
                            </span>
                        </Styled.Description>
                    </Styled.TextContent>
                    <Styled.MissionImage>
                        <Styled.MissionImg src={rocket} />
                    </Styled.MissionImage>
                </Styled.Container>
                <Styled.Box>
                    Gateway’s vision is to be the leading platform for DAO
                    discovery, onboarding, and interaction. We aspire to make
                    everyone, regardless of their experience, comfortable and
                    excited to find their Web3 community.
                </Styled.Box>
                <Styled.Container>
                    <Styled.WWDImage>
                        <Styled.WWDImg src={wwdInage} />
                    </Styled.WWDImage>
                    <Styled.TextContent>
                        <Styled.Heading>What We Do</Styled.Heading>
                        <Styled.Description>
                            We provide a dynamic way for community managers and
                            core contributors to post and update important
                            information regarding their DAOs. Individuals
                            interested in finding their DAO(s) can easily
                            searchby keywords.
                        </Styled.Description>
                    </Styled.TextContent>
                </Styled.Container>
            </Styled.MainContainer>
            <Footer />
        </Styled.AboutContainer>
    );
};

export default About;
