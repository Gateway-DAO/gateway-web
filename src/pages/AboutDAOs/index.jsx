// Components
import Header from '../../components/Header'
import TitleSection from '../../components/AboutDaoComponents/TitleSection'
import Footer from '../../components/Footer'
import CardScrollWrapper from '../../components/AboutDaoComponents/CardScrollWrapper'
import Loader from '../../components/Loader'

// Assets
import texts from '../../components/AboutDaoComponents/texts'
import whiteboard from '../../assets/about-dao-whiteboard.png'

// Styling
import * as Styled from './style'

// Hooks
import { useListDAOs } from '../../api/database/useGetDAO'
import React, { useState, useEffect } from 'react'

const AboutDAOS = (props) => {
    const { data, error, loading } = useListDAOs()
    const [cards, setCards] = useState([])

    const typeOfDao = (type) => {
        console.log(`Type: ${type}`)
        const socialDao = cards.filter((card) => card.categories.includes(type)).filter((item, idx) => idx < 4)
        console.log(socialDao)
        return socialDao
    }

    useEffect(() => {
        setCards(loading ? [] : data.listDAOs.items)
    }, [data])

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
                        {!!cards ? <CardScrollWrapper cards={typeOfDao(text.type)} /> : <Loader color="white" size={35} />}
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
