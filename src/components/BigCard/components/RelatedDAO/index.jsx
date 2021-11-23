import CardsScrollWrapper from '../../../Card/CardsScrollWrapper'

import * as Styled from './style'
import React, { useEffect, useState } from 'react'
import { query, getDocs, where } from 'firebase/firestore'
import { DAORef, allDocs } from '../../../../api/db'

const RelatedDAOSection = (props) => {
     const [cards, setCards] = useState([])

     const fetchAllCards = async () => {
         let allCards = await allDocs
         let { docs } = allCards
         let newCards = docs.map(async (doc) => {
             const data = doc.data()
             const id = doc.id
             return { id, ...data }
         })

         const resolved = await Promise.all(newCards)
         const filterCurrent = resolved.filter((card)=>card.name!==props.name)
         const relatedDao = filterCurrent.filter((card)=>props.categories.some((i)=> card.categories.includes(i)))
         setCards(relatedDao)
     }
     useEffect(() => {
         fetchAllCards()
     }, [])

    return (
        <React.Fragment>
            <Styled.RelatedContainer>
                <Styled.BoxContainer>
                    <Styled.MediumText>Related</Styled.MediumText>
                    <Styled.StyledShowAllButton to={`/search/${props.categories[0]}`}>View all
                    </Styled.StyledShowAllButton>
                </Styled.BoxContainer>
            </Styled.RelatedContainer>
            <Styled.CardContainer>
                {cards.length === 0 ? (
                    console.log('null')
                ) : (
                    <CardsScrollWrapper cards={cards} />
                )}
            </Styled.CardContainer>
        </React.Fragment>
    )
}

export default RelatedDAOSection
