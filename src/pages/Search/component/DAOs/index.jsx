import * as Styled from './style'
import * as SearchStyled from '../../style'

// Components
import Card from '../../../../components/Card'
import Loader from '../../../../components/Loader'
import { Navigate } from 'react-router-dom'

// Hooks
import { useSearchDAO } from '../../../../api/database/useSearchDAO'
import { useListDAOs } from '../../../../api/database/useGetDAO'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Pagination from '../Pagination'

const DAOTab = () => {
    const { query } = useParams()
    const [loading, setLoading] = useState(true)
    const [hits, setHits] = useState([])

    // for pagination
    const [nextToken, setNextToken] = useState(undefined)
    const [nextNextToken, setNextNextToken] = useState()
    const [previousTokens, setPreviousTokens] = useState([])
    /* The `useListDAOs` hook is a custom hook that uses the `graphql` package to make a query to the
   server. 
   
   The `useListDAOs` hook returns a `data`, `loading`, `error`, and `called` object. 
   
   The `data` object contains the data returned from the server. 
   
   The `loading` object contains a boolean that indicates whether the data is still loading. 
   
   The `error` object contains an error message if the query failed. 
   
   The `called` object */
    const {
        data: listData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useListDAOs({
        // variables: {
        //     nextToken: nextToken,
        //     limit: 8,
        // },
    })

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
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
            //console.log(listData.listDAOs)
        } else {
            setHits(!searchLoading ? searchData.searchDAOs.items : [])
        }
    }, [query, searchLoading, listLoading])

    if (searchError || listError) {
        return <Navigate to="/404" />
    }

    const searchOrListLoading =
        query.toLowerCase() === 'all' ? listLoading : searchLoading
    const searchOrListCalled =
        query.toLowerCase() === 'all' ? listCalled : searchCalled

    return (
        <>
            {searchOrListLoading && (
                <SearchStyled.LoaderBox>
                    <Loader color="white" size={35} />
                </SearchStyled.LoaderBox>
            )}

            {!hits.length && !searchOrListLoading && searchOrListCalled && (
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
            <Pagination />
        </>
    )
}

export default DAOTab
