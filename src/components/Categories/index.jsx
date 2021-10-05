import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../Card"

import { query, getDocs, where } from "firebase/firestore"
import { DAORef } from "../../api/db"
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
`

const Categories = props => {
    const [categories, setCategories] = useState(DUMMY_CATEGORIES);
    const [activeCategory, setActiveCategory] = useState(0);
    const [cards, setCards] = useState([]);

    // Fetch categories from DB
    useEffect(() => {
        
    }, []);

    // Fetch cards from DB
    useEffect(() => {
        setCards([]);

        const q = query(DAORef, where("categories", "array-contains", DUMMY_CATEGORIES[activeCategory]));
        // const snapshot = getDocs(DAORef);
        const docs = getDocs(q);

        docs.then(e => {
            let newCards = [...cards];

            e.docs.forEach(async doc => {
                const data = doc.data();
                
                // Once we have data, start fetching content from CoinGecko
                const json = await getTokenFromAddress(data.tokenAddress)

                console.log(data.name);
                console.log(data.tokenAddress);
                console.log(json);

                const tokenInfo = {
                    ranking: json.market_cap_rank,
                    price: json.market_data.current_price.usd || "Nope",
                    token: json.symbol.toUpperCase()
                }

                newCards.push({ ...data, ...tokenInfo });
            })

            setCards(newCards);
        });

    }, [activeCategory]);

    return (
        <Box>
            <CategoriesContainer>
                {categories.map((cat, idx) => <Category active={idx === activeCategory} onClick={e => setActiveCategory(idx)}>{cat}</Category>)}
            </CategoriesContainer>
            <CardBox>
                {cards.map(card => {
                    return (
                        <Card 
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