import { useEffect, useRef, useState } from 'react'

import Card from '../Card'

import * as Styled from "./style"
import {useHistory} from 'react-router-dom'
import { useLazyListDAOs } from '../../api/database/useGetDAO'
import { useLazySearchDAO } from '../../api/database/useSearchDAO'

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
    const [totalCards,setTotalCards]=useState(0);
    const [activeCategory, setActiveCategory] = useState(0)
    const [cards, setCards] = useState([])
    const cardRef = useRef(null)
    const [isScrolling, setIsScrolling] = useState(false);

    const { listDAOs, data: DAOData, loading: DAOLoading, error: DAOError } = useLazyListDAOs()
    const { searchDAO, data: searchData, loading: searchLoading, error: searchError } = useLazySearchDAO()

    const fetchCards = async () => {
        // If Trending or All, implement a different behavior
        let q

        switch (activeCategory) {
            case 0: // TODO: Need to come up with something for Trending
            case 5:
                // All
                const res = await listDAOs()
                setTotalCards(res.data.listDAOs.items.length);
                q = res.data.listDAOs.items
                break
            default:
                const res2 = await searchDAO({ variables: {
                    filter: {
                        categories: {
                            match: DUMMY_CATEGORIES[activeCategory]
                        }
                    }
                } })

                q = res2.data.searchDAOs.items
                setTotalCards(res2.data.searchDAOs.items.length);
        }

        setCards(q)
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
                            id={card.dao}
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
                        <Styled.MoreText>+{totalCards-numberOfCards} more</Styled.MoreText>
                    </Styled.MoreCard>
                }
            </Styled.CardBox>

        </Styled.Box>
    )
}

export default Categories
