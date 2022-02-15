import { useEffect, useRef, useState } from 'react';
import Card from '../../Card';

import * as Styled from './style';
const CardScrollWrapper = (props) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const cardRef = useRef(null);

    //Scroll Logic
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - cardRef.current.offsetLeft;
        scrollLeft = cardRef.current.scrollLeft;
    };

    let stopDragging = function (event) {
        mouseDown = false;
    };
    useEffect(() => {
        cardRef.current.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if (!mouseDown) {
                return;
            }
            const x = e.pageX - cardRef.current.offsetLeft;
            const scroll = x - startX;
            cardRef.current.scrollLeft = scrollLeft - scroll;
        });

        cardRef.current.addEventListener('mousedown', () =>
            setIsScrolling(false)
        );
        cardRef.current.addEventListener('mousemove', () =>
            setIsScrolling(true)
        );

        // Add the event listeners
        cardRef.current.addEventListener('mousedown', startDragging, false);
        cardRef.current.addEventListener('mouseup', stopDragging, false);
        cardRef.current.addEventListener('mouseleave', stopDragging, false);
    }, []);

    return (
        <Styled.CardBox className='full' ref={cardRef}>
            {props.cards.map((card) => {
                return (
                    <Card
                        id={card.dao}
                        title={card.name}
                        description={card.description}
                        logoURL={card.logoURL}
                        bannerURL={card.backgroundURL}
                        isScrolling={isScrolling}
                        categories={card.categories}
                    />
                );
            })}
        </Styled.CardBox>
    );
};

export default CardScrollWrapper;
