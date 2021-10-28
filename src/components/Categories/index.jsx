import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Card from "../Card"

import { query, getDocs, where } from "firebase/firestore"
import { DAORef, allDocs } from "../../api/db"
import { getTokenFromAddress } from "../../api/coingecko"

const DUMMY_CATEGORIES = ["Trending", "DeFi", "Investment", "Media", "Social", "All"]
const DUMMY_CATEGORIES_EMOJI = ["🔥", "", "", "", "", ""]

const Box = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;

    & > * {
        grid-column: 2 / -2;
    }

    & > .full {
        grid-column: 1 / -1;
    }
`

const CategoriesContainer = styled.ul`
    text-color: white;
    margin-bottom: 55px;
`

const Category = styled.li`
    display: inline;
    
    font-family: ${props => props.active ? 'Montserrat' : 'Be Vietnam'};
    font-style: normal;
    font-weight: ${props => props.active ? '800' : 'normal'};

    font-size: ${props => props.active ? '24px' : '14px'};
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: ${props => props.activeGradient&&props.active ? null : 'rgba(255, 255, 255, 0.6)'};

    /* Background */
    background: ${props => props.activeGradient&&props.active ? 'linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%)' : null};
    -webkit-background-clip: ${props => props.activeGradient&&props.active ? 'text' : null };
    -webkit-text-fill-color:  ${props => props.activeGradient&&props.active ? 'transparent' : null}; 
    -moz-background-clip: ${props => props.activeGradient&&props.active ? 'text' : null};
    -moz-text-fill-color: ${props => props.activeGradient&&props.active ? 'transparent' : null};

    margin-right: 25px;

    &:hover {
        cursor: pointer;
    }
`

const CategoryEmoji = styled.p`
    display: inline;
    font-size: ${props => props.activeGradient ? '24px' : '14px'};
    line-height: 20px;
    /* Background - turning off gradeint for emojis*/
    -webkit-text-fill-color: white;
    -moz-text-fill-color: white;
`





/*
const CardBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`
*/

const CardBox = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 10px;
    grid-template-rows: minmax(150px, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: calc(30% - 20px * 2);

    overflow-x: scroll;
    scroll-snap-type: x proximity;

    &::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

    & > *:last-child {
        margin-right: 20px;
    }

    &:before {
        content: '';
        width: 10px;
    }
`

const Categories = props => {
    const [categories, setCategories] = useState(DUMMY_CATEGORIES);
    const [categoriesEmoji, setCategoriesEmoji] = useState(DUMMY_CATEGORIES_EMOJI);
    const [activeCategory, setActiveCategory] = useState(0);
    const [cards, setCards] = useState([]);
    const cardRef = useRef(null);

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
            const json = data.tokenAddress ? await getTokenFromAddress(data.tokenAddress) : {};

            const tokenInfo = data.tokenAddress ? {
                ranking: json.market_cap_rank,
                price: json.market_data.current_price.usd || "Nope",
                token: json.symbol.toUpperCase()
            } : {}

            return { id, ...data, ...tokenInfo }
        });

        const resolved = await Promise.all(newCards)
        setCards(resolved);
    }

    // Fetch cards from DB
    useEffect(() => fetchCards(), [activeCategory]);

    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - cardRef.current.offsetLeft;
        scrollLeft = cardRef.current.scrollLeft;
    }

    let stopDragging = function (event) {
        mouseDown = false;
    }

    useEffect(() => {
        cardRef.current.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - cardRef.current.offsetLeft;
            const scroll = x - startX;
            cardRef.current.scrollLeft = scrollLeft - scroll;
        });
          
        // Add the event listeners
        cardRef.current.addEventListener('mousedown', startDragging, false);
        cardRef.current.addEventListener('mouseup', stopDragging, false);
        cardRef.current.addEventListener('mouseleave', stopDragging, false);
    }, []);

    //Activate gradient on active category if y page offset is bigger than 0.2 height of page 
    const [activeGradient, setActiveGradient] = useState(0)

    const activateGradient = () => {
        const entireDocumentHeight = window.document.body.offsetHeight;
        if(window.pageYOffset > 0.2 * entireDocumentHeight){
            setActiveGradient(1)
        } else {setActiveGradient(0)}
    }
    
    useEffect(() => {
        window.addEventListener('scroll', activateGradient, { passive: true });
    }, []);

    return (
        <Box>
            <CategoriesContainer>
                {categories.map((cat, idx) =><Category activeGradient={activeGradient} active={idx === activeCategory} onClick={e => setActiveCategory(idx)}><CategoryEmoji active={idx === activeCategory} onClick={e => setActiveCategory(idx)}>{categoriesEmoji[idx]}</CategoryEmoji> {cat}</Category>)}
            </CategoriesContainer>
        
            <CardBox className="full" ref={cardRef}>
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