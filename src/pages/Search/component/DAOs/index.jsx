import * as Styled from './style'
import * as SearchStyled from '../../style'

// Components
import Card from '../../../../components/Card'
import Loader from '../../../../components/Loader'

// Hooks
import { useLazySearchDAO } from '../../../../api/database/useSearchDAO'
import { useLazyListDAOs } from '../../../../api/database/useGetDAO'
import { useParams, useHistory } from 'react-router'
import { useEffect, useState } from 'react'

const DAOTab = () => {
    const { query } = useParams()
    const [loading, setLoading] = useState(true)
    const [hits, setHits] = useState([])

    const {
        listDAOs,
        data: listData,
        loading: listLoading = false,
        error: listError,
    } = useLazyListDAOs()
    const {
        searchDAO,
        data: searchData,
        loading: searchLoading = false,
        error: searchError,
    } = useLazySearchDAO()

    useEffect(() => {
        const searchAsync = async () => {
            setLoading(true)
            if (query === 'all') {
                const res = await listDAOs()
                setHits(res.data.listDAOs.items)
                setLoading(false)
            } else {
                const res = await searchDAO({
                    variables: {
                        filter: {
                            or: [
                                { dao: { wildcard: `*${query}*` } },
                                { name: { wildcard: `*${query}*` } },
                                { description: { wildcard: `*${query}*` } },
                                { categories: { wildcard: `*${query}*` } },
                                { tags: { wildcard: `*${query}*` } },
                            ],
                        },
                    },
                })

                setHits(res.data.searchDAOs.items)
                setLoading(false)
            }
        }

        searchAsync()
    }, [query])

    return (
        <>
            {loading && (
                <SearchStyled.LoaderBox>
                    <Loader color="white" size={35} />
                </SearchStyled.LoaderBox>
            )}

            {(!hits.length && !loading) && (
                <SearchStyled.TextBox>
                    <SearchStyled.MainText>Oops! There's no "{query}" DAO on our records :/</SearchStyled.MainText>
                    <SearchStyled.SmallText>We couldn't find what you're looking for. Try again later!</SearchStyled.SmallText>
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
                                // ranking={card.ranking}
                                // token={card.token}
                                // price={card.price}
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
