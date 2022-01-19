import Footer from '../../../../Footer'
import Header from '../../../../Header'
import BackButtonDiv from './BackButtonDiv'
import NftBadge from './NftBadge'
import SmallLogo from '../../../../../assets/yearnFinance.png'
import * as Styled from './style'
import KeyBox from './KeyBox'
import KeyBox2 from './KeyBox2'
import { useState } from 'react'
import PfpBox from './PfpBox'
const DaoGateWithKeys = (props) => {
    return (
        <Styled.Wrapper>
            <Header />
            <BackButtonDiv />
            <Styled.ContentWrapper>
                <NftBadge />
                <Styled.MainContent>
                    <Styled.FirstDiv>
                        <Styled.SmallLogo src={SmallLogo} />
                        <Styled.SmallText>Design Squad</Styled.SmallText>
                    </Styled.FirstDiv>
                    <Styled.HeadingDiv>
                        Yearn.Finance For Beginners
                    </Styled.HeadingDiv>
                    <Styled.Subheading>
                        Take your first steps to join the Yearn.Finance Design
                        Team, and help us to disrupt the industry.
                    </Styled.Subheading>
                    <Styled.TagsDiv>
                        <Styled.Tag>Design</Styled.Tag>
                        <Styled.Tag>Onboarding</Styled.Tag>• 27 applicants
                    </Styled.TagsDiv>
                    <Styled.HeaderLine />
                    <Styled.SecondDiv>
                        <Styled.SecondDivName>Keys</Styled.SecondDivName>
                        <Styled.AnotherDiv>
                            <Styled.Circle  />
                            <Styled.ProgressInfoDiv>
                                <Styled.ProgressInfoDivOne>
                                    Progress
                                </Styled.ProgressInfoDivOne>
                                <Styled.ProgressInfoDivTwo>
                                    0 of 3
                                </Styled.ProgressInfoDivTwo>
                            </Styled.ProgressInfoDiv>
                        </Styled.AnotherDiv>
                    </Styled.SecondDiv>
                    <KeyBox />
                    <KeyBox2 />
                </Styled.MainContent>
            </Styled.ContentWrapper>
            <Footer />
        </Styled.Wrapper>
    )
}

export default DaoGateWithKeys
