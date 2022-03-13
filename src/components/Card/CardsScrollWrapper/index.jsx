import React, { useEffect, useRef, useState } from 'react';
import Card from '../index';

import * as Styled from './style';

const CardsScrollWrapper = (props) => {
    // const [isScrolling, setIsScrolling] = useState(false)
    const cardRef = useRef(null);
    const [numberOfCards, setNumberOfCards] = useState(3);
    //Scroll Logic
    // let mouseDown = false
    // let startX, scrollLeft

    // let startDragging = function (e) {
    //     mouseDown = true
    //     startX = e.pageX - cardRef.current.offsetLeft
    //     scrollLeft = cardRef.current.scrollLeft
    // }

    // let stopDragging = function (event) {
    //     mouseDown = false
    // }
    // useEffect(() => {
    //     cardRef.current.addEventListener('mousemove', (e) => {
    //         e.preventDefault()
    //         if (!mouseDown) {
    //             return
    //         }
    //         const x = e.pageX - cardRef.current.offsetLeft
    //         const scroll = x - startX
    //         cardRef.current.scrollLeft = scrollLeft - scroll
    //     })

    //     cardRef.current.addEventListener('mousedown', () =>
    //         setIsScrolling(false)
    //     )
    //     cardRef.current.addEventListener('mousemove', () =>
    //         setIsScrolling(true)
    //     )
    //     cardRef.current.addEventListener('mouseup', () =>
    //         console.log(isScrolling ? 'drag' : 'click')
    //     )

    //     // Add the event listeners
    //     cardRef.current.addEventListener('mousedown', startDragging, false)
    //     cardRef.current.addEventListener('mouseup', stopDragging, false)
    //     cardRef.current.addEventListener('mouseleave', stopDragging, false)
    // }, [])

    useEffect(() => {
        let size = window.innerWidth;
        if (size < 735) {
            setNumberOfCards(1);
        } else if (size < 900) {
            setNumberOfCards(3);
        } else if (size < 2000) {
            setNumberOfCards(4);
        } else {
            setNumberOfCards(4);
        }
    }, []);

    return (
        <Styled.CardBox className='full' ref={cardRef}>
            {props.cards
                .filter((item, idx) => idx < numberOfCards)
                .map((card, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <Card
                                id={card.dao}
                                title={card.name}
                                description={card.description}
                                logoURL={card.logoURL}
                                bannerURL={card.backgroundURL}
                                // isScrolling={isScrolling}
                                categories={card.categories}
                            />
                        </React.Fragment>
                    );
                })}
        </Styled.CardBox>
    );
};

export default CardsScrollWrapper;
