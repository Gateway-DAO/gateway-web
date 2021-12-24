import CardsScrollWrapper from '../../../Card/CardsScrollWrapper'

import * as Styled from './style'
import React, { useEffect, useState } from 'react'
import { query, getDocs, where } from 'firebase/firestore'
import { DAORef, allDocs } from '../../../../api/db'

import { useLazySearchDAO } from '../../../../api/database/useSearchDAO'

const RelatedDAOSection = ({ name, categories }) => {
    const [limitedCards, setLimitedCards] = useState([])

    const { searchDAO, data: searchData, loading: searchLoading, error: searchError } = useLazySearchDAO()

    const filterCurrent = (oldArray,checkName) =>{
        return oldArray.filter((card) => card.name !== checkName)
    }

    const fetchLimitedCards = async () => {
        categories.forEach(async (category) => {
            let q
            q = await getDocs(
                query(DAORef, where('categories', 'array-contains', category))
            )
            
            const res = await searchDAO({ variables: {
                filter: {
                    categories: {
                        match: category
                    }
                }
            } })

            const data = res.data.searchDAOs.items;

            console.log(data)

            setLimitedCards((prev) => {
                if (prev.length !== 0) {
                    const newLimitedCards = [...prev, ...data]
                    const filteredArray = newLimitedCards.filter(
                        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
                    )
                    const finalArray = filterCurrent(filteredArray,name)
                    return finalArray
                } else {
                    const finalArray = filterCurrent(data, name)
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
                        to={`/search/${categories[0]}`}
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
