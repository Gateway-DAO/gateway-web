import Footer from '../../../../Footer'
import Header from '../../../../Header'
import BackButtonDiv from './BackButtonDiv'
import NftBadge from './NftBadge'
import SmallLogo from '../../../../../assets/yearnFinance.png'
import * as Styled from './style'
const DaoGate = (props) => {
    return (
        <Styled.Wrapper>
            <Header />
            <BackButtonDiv />
            <Styled.ContentWrapper>
                <NftBadge />
                <Styled.MainContent>
                    <Styled.FirstDiv>
                        <Styled.SmallLogo src={SmallLogo} />
                        <Styled.SmallText>Yearn Finance</Styled.SmallText>
                    </Styled.FirstDiv>
                    <Styled.HeadingDiv>
                        Yearn.Finance For Beginners
                    </Styled.HeadingDiv>
                    <Styled.Subheading>
                        Through this Gate you will learn everything related
                        Yearn.Finance, from connect your personal wallet to how
                        our vaults works.
                    </Styled.Subheading>
                    <Styled.TagsDiv>
                        <Styled.Tag>Design</Styled.Tag>
                        <Styled.Tag>Onboarding</Styled.Tag>• 27 applicants
                    </Styled.TagsDiv>
                    <Styled.HeaderLine />
                    <Styled.SecondDiv>
                        <Styled.SecondDivName>Keys</Styled.SecondDivName>
                        <Styled.AnotherDiv>
                            <Styled.Circle />
                            <Styled.ProgressInfoDiv>
                                <Styled.ProgressInfoDivOne>
                                    Progress
                                </Styled.ProgressInfoDivOne>
                                <Styled.ProgressInfoDivTwo>
                                    0 of 0
                                </Styled.ProgressInfoDivTwo>
                            </Styled.ProgressInfoDiv>
                        </Styled.AnotherDiv>
                    </Styled.SecondDiv>
                    <Styled.ThirdDiv>
                        <Styled.Box>
                            <Styled.BigText>
                                Now let’s create the Keys of your Gate.
                            </Styled.BigText>
                            <Styled.StartButton>
                                <Styled.ButtonText>Start Now</Styled.ButtonText>
                            </Styled.StartButton>
                        </Styled.Box>
                    </Styled.ThirdDiv>
                </Styled.MainContent>
            </Styled.ContentWrapper>
            <Footer />
        </Styled.Wrapper>
    )
}

export default DaoGate
