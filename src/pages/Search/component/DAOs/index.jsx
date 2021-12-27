import * as Styled from './style'
import { useLazySearchDAO } from '../../../../api/database/useSearchDAO'
import { useLazyListDAOs } from '../../../../api/database/useGetDAO'
import Card from '../../../../components/Card'
import { ConnectToWallet } from '../../../../components/WalletHeader/style'


import { useParams, useHistory } from 'react-router'
import { useEffect, useState } from 'react'

const DAOTab = () => {
    const { query } = useParams()
    const [hits, setHits] = useState([])

    const {
        listDAOs,
        data: listData,
        loading: listLoading,
        error: listError,
    } = useLazyListDAOs()
    const {
        searchDAO,
        data: searchData,
        loading: searchLoading,
        error: searchError,
    } = useLazySearchDAO()

    useEffect(() => {
        const searchAsync = async () => {
            if (query === 'all') {
                const res = await listDAOs()
                setHits(res.data.listDAOs.items)
            } else {
                const res = await searchDAO({
                    variables: {
                        filter: {
                            or: [
                                { dao: { matchPhrase: query } },
                                { name: { matchPhrase: query } },
                                { description: { matchPhrase: query } },
                                { categories: { matchPhrase: query } },
                                { tags: { matchPhrase: query } },
                            ],
                        },
                    },
                })

                setHits(res.data.searchDAOs.items)
            }
        }

        searchAsync()
    }, [query])

    return (
        <>
            {hits && (
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
