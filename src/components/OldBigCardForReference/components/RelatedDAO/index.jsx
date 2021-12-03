import CardsScrollWrapper from '../../../Card/CardsScrollWrapper'

import * as Styled from './style'
import React, { useEffect, useState } from 'react'
import { query, getDocs, where } from 'firebase/firestore'
import { DAORef, allDocs } from '../../../../api/db'

const RelatedDAOSection = (props) => {
    const [limitedCards, setLimitedCards] = useState([])
    const {name,categories}= props;

    const filterCurrent = (oldArray,checkName) =>{
        return oldArray.filter((card) => card.name !== checkName)
    }

    const fetchLimitedCards = async () => {
        categories.forEach(async (category) => {
            let q
            q = await getDocs(
                query(DAORef, where('categories', 'array-contains', category))
            )
            let { docs } = q
            let newCards = docs.map(async (doc) => {
                const data = doc.data()
                const id = doc.id
                return { id, ...data }
            })
            const resolved = await Promise.all(newCards)
            setLimitedCards((prev) => {
                if (prev.length !== 0) {
                    const newLimitedCards = [...prev, ...resolved]
                    const filteredArray = newLimitedCards.filter(
                        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
                    )
                    const finalArray = filterCurrent(filteredArray,name)
                    return finalArray
                } else {
                    const finalArray = filterCurrent(resolved, name)
                    return finalArray
                }
            })
        })
    }

    useEffect(() => {
        fetchLimitedCards()
    }, [name])

    return (
        <React.Fragment>
            <Styled.RelatedContainer>
                <Styled.BoxContainer>
                    <Styled.MediumText>Related</Styled.MediumText>
                    <Styled.StyledShowAllButton
                        to={`/search/${props.categories[0]}`}
                    >
                        View all
                    </Styled.StyledShowAllButton>
                </Styled.BoxContainer>
            </Styled.RelatedContainer>
            <Styled.CardContainer>
                {limitedCards.length === 0 ? (
                    <Styled.NoRelatedDao>
                        No Related Dao Found
                    </Styled.NoRelatedDao>
                ) : (
                    <CardsScrollWrapper cards={limitedCards} />
                )}
            </Styled.CardContainer>
        </React.Fragment>
    )
}

export default RelatedDAOSection
