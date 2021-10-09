import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../Card"

import { query, getDocs, where } from "firebase/firestore"
import { DAORef, allDocs } from "../../api/db"
import { getTokenFromAddress } from "../../api/coingecko"

const DUMMY_CATEGORIES = ["Trending", "DeFi", "Investment", "Media", "Social", "All"]

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
    grid-row-gap: 20px;
`

const Categories = props => {
    const [categories, setCategories] = useState(DUMMY_CATEGORIES);
    const [activeCategory, setActiveCategory] = useState(0);
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        // If Trending or All, implement a different behavior
        let q;

        switch (activeCategory) {
            case 0: // TODO: Need to come up with something for Trending
            case 5:
                // All
                q = await allDocs;
                break;
            default:
                q = await getDocs(query(DAORef, where("categories", "array-contains", DUMMY_CATEGORIES[activeCategory])));
        }

        let { docs } = q;

        let newCards = docs.map(async doc => {
            const data = doc.data();
            const id = doc.id;
            
            // Once we have data, start fetching content from CoinGecko
            const json = await getTokenFromAddress(data.tokenAddress);

            const tokenInfo = {
                ranking: json.market_cap_rank,
                price: json.market_data.current_price.usd || "Nope",
                token: json.symbol.toUpperCase()
            }

            return { id, ...data, ...tokenInfo }
        });

        const resolved = await Promise.all(newCards)
        setCards(resolved);
    }

    // Fetch cards from DB
    useEffect(() => fetchCards(), [activeCategory]);

    return (
        <Box>
            <CategoriesContainer>
                {categories.map((cat, idx) => <Category active={idx === activeCategory} onClick={e => setActiveCategory(idx)}>{cat}</Category>)}
            </CategoriesContainer>
            <CardBox>
                {cards.map(card => {
                    return (
                        <Card
                            id={card.id} 
                            title={card.name}
                            description={card.description}
                            ranking={card.ranking}
                            token={card.token}
                            price={card.price}
                            logoURL={card.logoURL}
                            bannerURL={card.backgroundURL}
                        />
                    );
                })}
            </CardBox>
        </Box>
    )
}

export default Categories;