import styled from "styled-components"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

import { daos } from "../../api/algolia"
import { getTokenFromAddress } from "../../api/coingecko"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"

const Container = styled.main`
    background-color: #170627;
    height: 100%;
`

const CardBox = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 40px;
    margin-top: 60px;
`

const Search = props => {
    const { query } = useParams();
    const [hits, setHits] = useState([]);

    useEffect(() => {
        const searchAsync = async () => {
            const { hits: res } = await daos.search(query);
            const parsedInfo = res.map(async hit => {
                // Once we have data, start fetching content from CoinGecko (if the DAO has a token)
                if (hit.tokenAddress) {
                    const json = await getTokenFromAddress(hit.tokenAddress);

                    const tokenInfo = {
                        ranking: json.market_cap_rank,
                        price: json.market_data.current_price.usd || "Nope",
                        token: json.symbol.toUpperCase()
                    }

                    return { ...hit, ...tokenInfo }
                }

                return hit
            })

            const resolved = await Promise.all(parsedInfo)

            setHits(resolved);
        }

        searchAsync();
    }, [query]);

    return (
        <Container>
            <Header search={{
                visible: true,
                value: query
            }} />
            {hits && 
                <CardBox>
                    {hits.map((card, idx) => {
                        return (
                            <Card 
                                key={idx}
                                id={card.objectID}
                                title={card.name}
                                description={card.description}
                                ranking={card.ranking}
                                token={card.token}
                                price={card.price}
                                logoURL={card.logoURL}
                                bannerURL={card.backgroundURL}
                            />
                        );
                    })}
                </CardBox>
            }
            <Footer />
        </Container>
    )
}

export default Search