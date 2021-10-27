import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import WrappedBigSearch from '../../components/BigSearch'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import * as Styled from './style'

import space from '../../utils/canvas';

const Home = props => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => space(window.innerHeight, window.innerWidth), [window.innerHeight, window.innerWidth]);
    
    const [activeGradient, setActiveGradient] = useState(0)


    const activateGradient = () => {
        const entireDocumentHeight = window.document.body.offsetHeight;
        const yOffset = window.pageYOffset;
        if(yOffset > 0.25 * entireDocumentHeight){
            setActiveGradient(1)
        } else (setActiveGradient(0))
    }

    useEffect(() => {
        window.addEventListener('scroll', activateGradient, { passive: true });
    }, []);


    return (
        <Styled.HomeContainer>
            <Header />
            
            <Styled.MainBox>
                <Styled.SpaceBox id="space-canvas" />
                <Styled.BigText>Discover Your Community</Styled.BigText>
                <WrappedBigSearch />
            </Styled.MainBox>
            
            <Categories activeGradient={activeGradient}/>

            { /* Call to Action */ }
            <Styled.CTABox>
                <Styled.MediumText>Join us to build the<br />future of communities</Styled.MediumText>
                <Styled.CTAButton><Styled.CTAButtonText>Join Today</Styled.CTAButtonText></Styled.CTAButton>
            </Styled.CTABox>
            <Footer />
            
            
        </Styled.HomeContainer>
    )
}

export default Home