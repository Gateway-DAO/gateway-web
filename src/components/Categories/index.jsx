// Components
import Card from '../Card';
import Loader from '../Loader';

// Styling
import * as Styled from './style';

// Hooks
import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useListDAOs } from '../../api/database/useGetDAO';
import { useSearchDAO } from '../../api/database/useSearchDAO';

const DUMMY_CATEGORIES = [
    'Trending',
    'DeFi',
    'Investment',
    'Media',
    'Social',
    'DeSci',
];
const DUMMY_CATEGORIES_EMOJI = ['🔥', '', '', '', '', ''];

const Categories = (props) => {
    const [numberOfCards, setNumberOfCards] = useState(3);
    const [categories, setCategories] = useState(DUMMY_CATEGORIES);
    const [categoriesEmoji, setCategoriesEmoji] = useState(
        DUMMY_CATEGORIES_EMOJI
    );
    const [totalCards, setTotalCards] = useState(0);
    const [activeCategory, setActiveCategory] = useState(0);
    const [cards, setCards] = useState([]);
    const cardRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const {
        data: DAOData,
        loading: DAOLoading,
        error: DAOError,
    } = useListDAOs();
    const {
        data: searchData,
        loading: searchLoading,
        called: searchCalled,
        error: searchError,
    } = useSearchDAO({
        variables: {
            filter: {
                categories: {
                    match: DUMMY_CATEGORIES[activeCategory],
                },
            },
        },
    });

    // Fetch cards from DB
    useEffect(() => {
        // alert(`Category: ${DUMMY_CATEGORIES[activeCategory]}\nDAOLoading: ${DAOLoading}\nsearchLoading: ${searchLoading}\nDAOData: ${!!DAOData}\nsearchData: ${!!searchData}`)

        if (activeCategory === 0) {
            setTotalCards(!DAOLoading ? DAOData.listDAOs.items.length : 0);
            setCards(!DAOLoading ? DAOData.listDAOs.items : []);
        } else {
            setTotalCards(!searchLoading ? searchData.searchDAOs.total : 0);
            setCards(!searchLoading ? searchData.searchDAOs.items : []);
        }
    }, [activeCategory, DAOLoading, searchLoading, searchData]);

    /*
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

        cardRef.current.addEventListener('mousedown', () =>
            setIsScrolling(false)
        )
        cardRef.current.addEventListener('mousemove', () =>
            setIsScrolling(true)
        )
        cardRef.current.addEventListener('mouseup', () =>
            console.log(isScrolling ? 'drag' : 'click')
        )

        // Add the event listeners
        cardRef.current.addEventListener('mousedown', startDragging, false)
        cardRef.current.addEventListener('mouseup', stopDragging, false)
        cardRef.current.addEventListener('mouseleave', stopDragging, false)
    }, [])
    */

    useEffect(() => {
        let size = window.innerWidth;
        if (size < 735) {
            setNumberOfCards(1);
        } else if (size < 900) {
            setNumberOfCards(1);
        } else if (size < 2000) {
            setNumberOfCards(3);
        } else {
            setNumberOfCards(3);
        }
    }, []);

    //Activate gradient on active category if y page offset is bigger than 0.2 height of page
    const [activeGradient, setActiveGradient] = useState(true);

    /*
    const activateGradient = () => {
        const entireDocumentHeight = window.document.body.offsetHeight
        if (window.pageYOffset > 0.01 * entireDocumentHeight) {
            setActiveGradient(true)
        } else {
            setActiveGradient(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', activateGradient, { passive: true })
    }, [])
    */

    // navigation to search page
    const navigate = useNavigate();
    const traverse = (e) => {
        if (activeCategory === 0) {
            navigate(`/search/daos?query=all`);
        } else navigate(`/search/daos?query=${DUMMY_CATEGORIES[activeCategory]}`);
    };

    if (searchError || DAOError) {
        return <Navigate to='/404' />;
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
                <Styled.AllButton to='/search/daos?query=all'>All</Styled.AllButton>
            </Styled.CategoriesContainer>

            {searchLoading || DAOLoading ? (
                <Styled.LoaderBox>
                    <Loader color='white' size={35} />
                </Styled.LoaderBox>
            ) : (
                <Styled.CardBox className='full' ref={cardRef}>
                    {cards
                        .filter((item, idx) => idx < numberOfCards)
                        .map((card) => {
                            // filter((item, idx) => idx < numberOfCards).
                            return (
                                <Card
                                    id={card.dao}
                                    title={card.name}
                                    description={card.description}
                                    categories={card.categories}
                                    SpaceId={card.SpaceId}
                                    // ranking={card.ranking}
                                    // token={card.token}
                                    // price={card.price}
                                    logoURL={card.logoURL}
                                    bannerURL={card.backgroundURL}
                                    isScrolling={isScrolling}
                                />
                            );
                        })}
                    {totalCards > 3 && (
                        <Styled.MoreCard onClick={traverse}>
                            <Styled.MoreText>
                                +{totalCards - numberOfCards} more
                            </Styled.MoreText>
                        </Styled.MoreCard>
                    )}
                </Styled.CardBox>
            )}
        </Styled.Box>
    );
};

export default Categories;
