import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Texts from './Texts';
import DaoInfoCards from '../../components/DaoInfoCards';
import * as Styled from './style'

const AboutDAOS = (props) => {
    return (
        <Styled.PageContainer>
            <Header />
            <Styled.CTABox>
                <Styled.HeadingText>What are DAOs?</Styled.HeadingText>
            </Styled.CTABox>
            <Styled.BoxContainer>
                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        DAOs or Decentralized Autonomous Organizations are a lot
                        more than just a Discord channel with a native token.
                        Rather, they are entities geared towards a shared
                        purpose:
                        <Styled.BoldText>
                            the creation of value.
                        </Styled.BoldText>
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>
                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        <Styled.MediumText>
                            What are their characteristics?
                        </Styled.MediumText>
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>
                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        <Styled.BoldHeading>Ownership</Styled.BoldHeading>
                        DAOs distribute ownership to a variety of stakeholders
                        in an ecosystem, including contributors, users,
                        strategic partners, vendors, and so forth. They are
                        owned by the people who create value in them.
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>

                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        <Styled.BoldHeading>Organization</Styled.BoldHeading>
                        Constituents can join a DAO and choose to contribute in
                        the manner they find most compelling. There may be
                        guidelines, but by and large, stakeholders choose their
                        own labor and self-organize. DAO “workers” join in where
                        and when they believe they canadd value and wish to do
                        so.
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>

                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        <Styled.BoldHeading>DAO Landscape</Styled.BoldHeading>
                        Today, there are more than 100 DAOs managing over $10B
                        in assets.
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>

                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        <Styled.MediumText>Types of DAOs</Styled.MediumText>
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>
                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        <Styled.BoldHeading>
                            DAO Operating Systems
                        </Styled.BoldHeading>
                        The first chapter of DAOs are the operating systems used
                        to create them.
                        <br />
                        <br />
                        These projects offer different templates, frameworks and
                        tools for communities to pool resources and start their
                        first DAO.
                        <br />
                        <br />
                        They commonly offer smart contracts and interfaces to
                        facilitate on-chain actions for decentralized
                        communities.
                        <br />
                        <br />
                        DAO Operating Systems make it easy for anyone to start a
                        DAO with limited technical skills.
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>

                {Texts.map((text) => (
                    <div>
                        <Styled.ContentContainer>
                            <Styled.ParagraphContainer>
                                <Styled.BoldHeading>
                                    {text.heading}
                                </Styled.BoldHeading>
                                {text.subHeading1}
                                <br />
                                <br />
                                {text.subHeading2}
                                <br />
                                <br />
                                {text.subHeading3}
                                <br />
                                <br />
                                {text.subHeading4}
                            </Styled.ParagraphContainer>
                        </Styled.ContentContainer>
                        <Styled.CardContainer>
                            <DaoInfoCards />
                        </Styled.CardContainer>
                    </div>
                ))}
                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        <Styled.MediumText>Just DAO it</Styled.MediumText>
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>
                <Styled.ContentContainer>
                    <Styled.ParagraphContainer>
                        To the DAO contributors of the world - keep up the great
                        work.
                        <br />
                        <br />
                        We’ve got a long way to go before DAOs have proven real
                        traction at scale, but this snapshot should show that
                        some of the world’s brightest minds are committed to
                        making that happen.
                        <br />
                        <br />
                        In the meantime, keep shipping and remember… when in
                        doubt - Just DAO It.
                    </Styled.ParagraphContainer>
                </Styled.ContentContainer>
            </Styled.BoxContainer>
            <Footer />
        </Styled.PageContainer>
    )
}

export default AboutDAOS
