import { useEffect, useRef, useState } from 'react'

import Card from '../Card'

import * as Styled from "./style"

import { query, getDocs, where } from 'firebase/firestore'
import { DAORef, allDocs } from '../../api/db'
import { getTokenFromAddress } from '../../api/coingecko'
import { useHistory } from 'react-router-dom'

const DUMMY_CATEGORIES = [
    'Trending',
    'DeFi',
    'Investment',
    'Media',
    'Social',
]
const DUMMY_CATEGORIES_EMOJI = ['🔥', '', '', '', '']

const Categories = (props) => {
    const [numberOfCards, setNumberOfCards] = useState(3);
    const [categories, setCategories] = useState(DUMMY_CATEGORIES)
    const [categoriesEmoji, setCategoriesEmoji] = useState(
        DUMMY_CATEGORIES_EMOJI
    )
    const [activeCategory, setActiveCategory] = useState(0)
    const [cards, setCards] = useState([])
    const cardRef = useRef(null)
    const [isScrolling, setIsScrolling] = useState(false);
    const [totalCards, setTotalCards] = useState(0);
    const fetchCards = async () => {
        // If Trending or All, implement a different behavior
        let q

        switch (activeCategory) {
            case 0: // TODO: Need to come up with something for Trending
            case 5:
                // All
                q = await allDocs
                break
            default:
                q = await getDocs(
                    query(
                        DAORef,
                        where(
                            'categories',
                            'array-contains',
                            DUMMY_CATEGORIES[activeCategory]
                        )
                    )
                )
        }

        let { docs } = q
        console.log(docs.length);
        setTotalCards(docs.length);
        let newCards = docs.map(async (doc) => {
            const data = doc.data()
            const id = doc.id

            /**
             * Once we have data, start fetching content from CoinGecko
             * UPDATE: for now, let's remove this
             
            const json = data.tokenAddress
                ? await getTokenFromAddress(data.tokenAddress)
                : {}

            const tokenInfo = data.tokenAddress
                ? {
                      ranking: json.market_cap_rank,
                      price: json.market_data.current_price.usd || 'Nope',
                      token: json.symbol.toUpperCase(),
                  }
                : {}

            return { id, ...data, ...tokenInfo }
            
            **/

            return { id, ...data }
        })

        const resolved = await Promise.all(newCards)
        setCards(resolved)
        
    }

    // Fetch cards from DB
    useEffect(() => {
        fetchCards()   
        // console.log(totalCards);
    }, [activeCategory])

    let mouseDown = false
    let startX, scrollLeft

    let startDragging = function (e) {
        mouseDown = true
        startX = e.pageX - cardRef.current.offsetLeft
        scrollLeft = cardRef.current.scrollLeft
    }

    let stopDragging = function (event) {
        mouseDown = false
    }

    useEffect(() => {
        cardRef.current.addEventListener('mousemove', (e) => {
            e.preventDefault()
            if (!mouseDown) {
                return
            }
            const x = e.pageX - cardRef.current.offsetLeft
            const scroll = x - startX
            cardRef.current.scrollLeft = scrollLeft - scroll
        })

        cardRef.current.addEventListener('mousedown', () => setIsScrolling(false));
        cardRef.current.addEventListener('mousemove', () => setIsScrolling(true));
        cardRef.current.addEventListener('mouseup', () => console.log(isScrolling ? 'drag' : 'click'));

        // Add the event listeners
        cardRef.current.addEventListener('mousedown', startDragging, false)
        cardRef.current.addEventListener('mouseup', stopDragging, false)
        cardRef.current.addEventListener('mouseleave', stopDragging, false)
    }, [])

    useEffect(()=>{
        let size = window.innerWidth;
        if(size<735){
            setNumberOfCards(1);
        }else if(size<900){
            setNumberOfCards(1);
        }else if(size<2000){
            setNumberOfCards(3);
        }else{
            setNumberOfCards(3);
        }
    },[])

    //Activate gradient on active category if y page offset is bigger than 0.2 height of page
    const [activeGradient, setActiveGradient] = useState(0)

    const activateGradient = () => {
        const entireDocumentHeight = window.document.body.offsetHeight
        if (window.pageYOffset > 0.01 * entireDocumentHeight) {
            setActiveGradient(1)
        } else {
            setActiveGradient(0)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', activateGradient, { passive: true })
    }, [])
    // navigation to search page
    const history = useHistory()
    const navigate = e => {
        if(activeCategory==0){
            history.push(`/search/all`)    
        }else
            history.push(`/search/${DUMMY_CATEGORIES[activeCategory]}`)
    }

    return (
        <Styled.Box>
            <Styled.CategoriesContainer>
                {categories.map((cat, idx) => (
                    <Styled.Category
                        activeGradient={activeGradient}
                        active={idx === activeCategory}
                        onClick={(e) => setActiveCategory(idx)}
                    >
                        <Styled.CategoryEmoji
                            active={idx === activeCategory}
                            onClick={(e) => setActiveCategory(idx)}
                        >
                            {categoriesEmoji[idx]}
                        </Styled.CategoryEmoji>{' '}
                        {cat}
                    </Styled.Category>
                ))}
                <Styled.AllButton to="/search/all">All</Styled.AllButton>
            </Styled.CategoriesContainer>

            <Styled.CardBox className="full" ref={cardRef}>
                {cards.filter((item, idx) => idx < numberOfCards).map((card) => {
                    // filter((item, idx) => idx < numberOfCards).
                    return (
                        <Card
                            id={card.id}
                            title={card.name}
                            description={card.description}
                            categories={card.categories}
                            // ranking={card.ranking}
                            // token={card.token}
                            // price={card.price}
                            logoURL={card.logoURL}
                            bannerURL={card.backgroundURL}
                            isScrolling={isScrolling}
                        />
                    )
                })}
                {totalCards>3&&
                    <Styled.MoreCard onClick={navigate}>
                        {/* <Styled.More><Styled.MoreSymbol>+</Styled.MoreSymbol></Styled.More> */}
                        <Styled.MoreText>+{totalCards-numberOfCards} more</Styled.MoreText>
                    </Styled.MoreCard>
                }
            </Styled.CardBox>

        </Styled.Box>
    )
}

export default Categories
