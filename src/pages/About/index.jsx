import React from "react";
import * as Styled from "./style";
import rocket from "../../assets/About_spaceship.png";
import eye from "../../assets/About_eye.png";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import wwdInage from "../../assets/What_we_do_image.png"
// wwd--->What we do
const About = ()=>{

    return(
        <Styled.AboutContainer>
            <Header />
            <Styled.MainContainer>
            <Styled.Container>
                <Styled.About_Image> 
                    <Styled.AboutImg src={eye} />
                    {/* <img src={eye} alt="About us" height="397" width="473"></img> */}
                </Styled.About_Image>
                <Styled.Text_Content>
                    <Styled.Heading>About Us</Styled.Heading>
                    <Styled.Description>Gateway is the premier DAO discoveryplatform by helping curate and maintain important information on Web3 communities. We are the Gateway for crypto curious individuals into DAOs.</Styled.Description>
                </Styled.Text_Content>
            </Styled.Container>
            <Styled.Container>
                <Styled.Text_Content>
                    <Styled.Heading>The Mission</Styled.Heading>
                    <Styled.Description>DAOs are the promise of a social and economic alignment which transcend geographic barriers to allow truly global participation. We have an intrinsic belief in the power of DAOs to be a force for good. We think DAOs will advance humanity through massively unlocking human collaboration on a global scale. 
                            <br /><br /><span>For more information on DAOs <Styled.Read_more href="/what-are-DAOs">click here</Styled.Read_more></span></Styled.Description>
                </Styled.Text_Content>
                <Styled.Mission_Image>
                    <Styled.MissionImg src={rocket} />
                    {/* <img src={rocket} alt="rocket" height="423.38" width="447.61"></img> */}
                </Styled.Mission_Image>
            </Styled.Container>
            {/* <Styled.AboveLine /> */}
            <Styled.Box>
            Gateway’s mission is to be the leading platform for DAO discovery, onboarding, and interaction. We aspire to make everyone, regardless of their experience, comfortable and excited to find their Web3 community.
            </Styled.Box>
            {/* <Styled.BelowLine /> */}
            {/* <Styled.WWD_Frame> */}
                <Styled.Container>
                    <Styled.WWD_Image>
                        <Styled.WWDImg src={wwdInage} />
                        {/* <img src={wwdInage} alt="What we do" height="337.44" width="550"></img> */}
                    </Styled.WWD_Image>
                    <Styled.Text_Content>
                        <Styled.Heading>What We Do</Styled.Heading>
                        <Styled.Description>We provide a dynamic way for community managers and core contributors to post and update important information regarding their DAOs. Individuals interested in finding their DAO(s) can easily searchby keywords.</Styled.Description>
                    </Styled.Text_Content>
                </Styled.Container>
            {/* </Styled.WWD_Frame> */}
            </Styled.MainContainer>
            {/* <Styled.Footer_Container>
                    <Styled.Footer_Box_1> */}
                        <Footer /> 
                    {/* </Styled.Footer_Box_1>
                </Styled.Footer_Container> */}
        </Styled.AboutContainer>
    );
}

export default About