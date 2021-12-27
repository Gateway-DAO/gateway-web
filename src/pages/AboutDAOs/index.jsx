import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import TitleSection from '../../components/AboutDaoComponents/TitleSection'
import Footer from '../../components/Footer'
import CardScrollWrapper from '../../components/AboutDaoComponents/CardScrollWrapper'
import texts from '../../components/AboutDaoComponents/texts'
import whiteboard from '../../assets/about-dao-whiteboard.png'
import * as Styled from './style'
import { useLazyListDAOs } from '../../api/database/useGetDAO'

const AboutDAOS = (props) => {
    const [cards, setCards] = useState([])
    const { listDAOs, data, error, loading } = useLazyListDAOs()

    const fetchAllCards = async () => {
        const daos = await listDAOs()
        setCards(daos.data.listDAOs.items)
    }
    useEffect(() => {
        fetchAllCards()
    }, [])

    const typeOfDao = (type) => {
        console.log(`Type: ${type}`)
        const socialDao = cards.filter((item, idx) => idx < 4).filter((card) => card.categories.includes(type))
        return socialDao
    }

    return (
        <Styled.PageContainer>
            <Header />
            <TitleSection />
            <Styled.MainWrapper>
                <Styled.CenterWrapper>
                    <Styled.ParagraphContainer>
                        This page below is using Cooper Turley's article. Click <a href="https://coopahtroopa.mirror.xyz/_EDyn4cs9tDoOxNGZLfKL7JjLo5rGkkEfRa_a-6VEWw" target="_blank">here</a> for the original article
                    </Styled.ParagraphContainer>
                    <Styled.ParagraphContainer>
                        {texts.definition[0]}
                        <Styled.BoldText> {texts.definition[1]}</Styled.BoldText>
                        <br/>
                    </Styled.ParagraphContainer>
                    <Styled.MediumText>
                        What are their characteristics?
                    </Styled.MediumText>
                    {texts.characteristics.map((text) => (
                        <Styled.ParagraphContainer>
                            <Styled.BoldHeading>
                                {text.title}
                            </Styled.BoldHeading>
                            {text.subtext}
                        </Styled.ParagraphContainer>
                    ))}
                    <Styled.WhiteImage>
                        <img style={{objectFit:"cover",width:"100%"}} src={whiteboard} alt="whiteboard.jpg" />
                    </Styled.WhiteImage>
                    <Styled.MediumText>Types of DAOs</Styled.MediumText>
                </Styled.CenterWrapper>
            </Styled.MainWrapper>
            {texts.types.map((text) => (
                <React.Fragment>
                    <Styled.MainWrapper>
                        <Styled.CenterWrapper>
                            <Styled.ParagraphContainer>
                                <Styled.BoldHeading>
                                    {text.Name}
                                </Styled.BoldHeading>
                                {text.subtexts.map((subtext) => (
                                    <React.Fragment>
                                        {subtext} <br /> <br />
                                    </React.Fragment>
                                ))}
                                <Styled.BoldText>
                                    {text.boldText}
                                </Styled.BoldText>
                            </Styled.ParagraphContainer>
                        </Styled.CenterWrapper>
                    </Styled.MainWrapper>
                    <Styled.CardContainer>
                        <CardScrollWrapper cards={typeOfDao(text.type)} />
                    </Styled.CardContainer>
                </React.Fragment>
            ))}
            <Styled.MainWrapper>
                <Styled.CenterWrapper>
                    <Styled.ParagraphContainer>
                        <Styled.MediumText>Just DAO it</Styled.MediumText>
                        <br/>
                        {texts.footerText.map((text) => (
                            <React.Fragment>
                                {text} <br />
                                <br />
                            </React.Fragment>
                        ))}
                    </Styled.ParagraphContainer>
                </Styled.CenterWrapper>
            </Styled.MainWrapper>
            <Footer />
        </Styled.PageContainer>
    )
}

export default AboutDAOS
