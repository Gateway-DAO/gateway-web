import * as Styled from './style'
import * as SearchStyled from '../../style'

// Components
import Card from '../../../../components/Card'
import Loader from '../../../../components/Loader'
import { Redirect } from 'react-router-dom'

// Hooks
import { useSearchDAO } from '../../../../api/database/useSearchDAO'
import { useListDAOs } from '../../../../api/database/useGetDAO'
import { useParams, useHistory } from 'react-router'
import { useEffect, useState } from 'react'

const DAOTab = () => {
    const { query } = useParams()
    const [loading, setLoading] = useState(true)
    const [hits, setHits] = useState([])

    const {
        data: listData,
        loading: listLoading,
        error: listError,
    } = useListDAOs()

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
    } = useSearchDAO({
        variables: {
            filter: {
                or: [
                    { dao: { wildcard: `*${query}*` } },
                    { name: { wildcard: `*${query}*` } },
                    { description: { wildcard: `*${query}*` } },
                    { categories: { match: `*${query}*` } },
                    { tags: { wildcard: `*${query}*` } },
                ],
            },
        },
    })

    useEffect(() => {
        if (query.toLowerCase() === 'all') {
            setHits(!listLoading ? listData.listDAOs.items : [])
        } else {
            setHits(!searchLoading ? searchData.searchDAOs.items : [])
        }
    }, [query, searchLoading, listLoading])

    if (searchError || listError) {
        return <Redirect to="/404" />
    }

    return (
        <>
            {(!!query ? searchLoading : listLoading) && (
                <SearchStyled.LoaderBox>
                    <Loader color="white" size={35} />
                </SearchStyled.LoaderBox>
            )}

            {!hits.length && !(searchLoading) && (
                <SearchStyled.TextBox>
                    <SearchStyled.MainText>
                        Oops! There's no "{query}" DAO on our records :/
                    </SearchStyled.MainText>
                    <SearchStyled.SmallText>
                        We couldn't find what you're looking for. Try again
                        later!
                    </SearchStyled.SmallText>
                </SearchStyled.TextBox>
            )}

            {!!hits.length && (
                <Styled.CardBox>
                    {hits.map((card, idx) => {
                        return (
                            <Card
                                key={idx}
                                id={card.dao}
                                title={card.name}
                                description={card.description}
                                categories={card.categories}
                                logoURL={card.logoURL}
                                bannerURL={card.backgroundURL}
                            />
                        )
                    })}
                </Styled.CardBox>
            )}
        </>
    )
}

export default DAOTab
