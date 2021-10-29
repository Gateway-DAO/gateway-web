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
    display: grid;
    grid-template-columns: 40px 1fr 40px;

    & > * {
        grid-column: 2 / -2;
    }

    & > .full {
        grid-column: 1 / -1;
    }
`

const CardBox = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 40px;
    margin-top: 60px;
`

// const SearhTermContainer = styled.div`
//     text-color: white;
//     margin-bottom: 55px;
// `

// const SearchTerm = styled.p`
//     display: inline;
    
//     font-family: 'Montserrat';
//     font-style: normal;
//     font-weight:  '800';
//     font-size: '104px';
//     line-height: 20px;
//     letter-spacing: 0.05em;
//     text-transform: capitalize;
//     color: rgba(255, 255, 255, 0.6);
//     /* Background */
//     background:  'linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);';
//     -webkit-background-clip: 'text';
//     -webkit-text-fill-color: 'transparent';
//     -moz-background-clip: 'text';
//     -moz-text-fill-color: 'transparent';
// `

const SearchTermContainer = styled.div`
    margin-top: 25px;
    margin-left: 40px;
    text-color: white;
    display: flex;
`

const SearchTerm = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
    /* Background */
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color:  transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

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
            <SearchTermContainer>
                <SearchTerm>{query}</SearchTerm>
            </SearchTermContainer>
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