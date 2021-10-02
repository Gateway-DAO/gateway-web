import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../Card"

const DUMMY_CATEGORIES = ["Trending", "DeFi", "Investment", "Media", "Social", "All"]

const DUMMY_CARDS = [
    {
        name: "Friends With Benefits",
        verified: true,
        description: "Friends with Benefits is the ultimate cultural membership powered by a community of our favorite Web3 artists, operators, and thinkers bound together by ...",
        ranking: 1,
        token: "$FWB",
        price: "$192.43",
        logoURL: "https://assets.coingecko.com/coins/images/14391/large/xRGEXmQN_400x400.png?1615868085",
        bannerURL: "https://images.prismic.io/fwb-gallery/cf4b4fde-a4bb-40b9-a0f8-01ac564e778a_FWB_PARIS_2021_FINAL_WIDE.jpg?auto=compress,format&rect=0,0,1200,675&w=1200&h=675"
    }
]

const Box = styled.div`
    margin: 0 40px;
`

const CategoriesContainer = styled.ul`
    text-color: white;
    margin-bottom: 55px;
`

const Category = styled.li`
    display: inline;
    
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};

    margin-right: 25px;
`

const CardBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
`

const Categories = props => {
    const [categories, setCategories] = useState(DUMMY_CATEGORIES);
    const [activeCategory, setActiveCategory] = useState(0);
    const [cards, setCards] = useState(DUMMY_CARDS);

    // Fetch categories from DB
    useEffect(() => {

    }, []);

    // Fetch cards from DB
    useEffect(() => {

    }, [categories]);

    return (
        <Box>
            <CategoriesContainer>
                {categories.map((cat, idx) => <Category active={idx === activeCategory} onClick={e => setActiveCategory(idx)}>{cat}</Category>)}
            </CategoriesContainer>
            <CardBox>
                {cards.map(card => {
                    return (<Card 
                        title={card.name}
                        description={card.description}
                        ranking={card.ranking}
                        token={card.token}
                        price={card.price}
                        logoURL={card.logoURL}
                        bannerURL={card.bannerURL}
                    />);
                })}
            </CardBox>
        </Box>
    )
}

export default Categories;