import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import TitleSection from '../../components/AboutDaoComponents/TitleSection'
import Footer from '../../components/Footer'
import CardScrollWrapper from '../../components/AboutDaoComponents/CardScrollWrapper'
import texts from '../../components/AboutDaoComponents/texts'
import { allDocs } from '../../api/db'
import whiteboard from '../../assets/about-dao-whiteboard.png'
import * as Styled from './style'

const AboutDAOS = (props) => {
    const [cards, setCards] = useState([])

    const fetchAllCards = async () => {
        let allCards = await allDocs
        let { docs } = allCards
        let newCards = docs.map(async (doc) => {
            const data = doc.data()
            const id = doc.id
            return { id, ...data }
        })

        const resolved = await Promise.all(newCards)
        setCards(resolved)
    }
    useEffect(() => {
        fetchAllCards()
    }, [])

    const typeOfDao = (type) => {
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
                        {texts.definition[0]}
                        <Styled.BoldText>{texts.definition[1]}</Styled.BoldText>
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
