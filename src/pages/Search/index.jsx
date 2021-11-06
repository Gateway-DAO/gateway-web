import { useParams } from "react-router"
import { useEffect, useState } from "react"

import { daos } from "../../api/algolia"
import { getTokenFromAddress } from "../../api/coingecko"

import * as Styled from "./style"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import BigLogo from "../../assets/Gateway.svg"

const Search = props => {
    const { query } = useParams();
    const [hits, setHits] = useState([]);
    // const [numResults, setNumResults] = useState();
    // const [showNoResultsView, setShowNoResultsView] = useState(false);

    // const setResults = () => {
    //     if(numResults === 0) {
    //         setShowNoResultsView(true);
    //     } else {
    //         setShowNoResultsView(false)
    //     }
    // }

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
        
        // setNumResults(hits.length);
        // setResults();
    }, [query]);


    

    return (
        <Styled.Container>
            <Header search={{
                visible: true,
                value: query
            }} />
            <Styled.SearchTermContainer>
                <Styled.SearchTerm>{query}</Styled.SearchTerm>
            </Styled.SearchTermContainer>
            {hits.length > 0 ? 
                <Styled.ResultsView>
                    <Styled.CardBox>
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
                    </Styled.CardBox>
                </Styled.ResultsView>
                :
                <Styled.NoResultsView>
                    {/* <BigLogoImg src={BigLogo}/> */}
                    <Styled.HeaderMedium>
                        Oops! No results found :(
                    </Styled.HeaderMedium>
                    <Styled.TextInfo>
                        We couldn't find what you're looking for.<br/>
                        Try to <Styled.SearchTextViolet as="a" href="/">Search again</Styled.SearchTextViolet> or <Styled.CommunityTextPink as="a" href="#">Add your community.</Styled.CommunityTextPink>
                    </Styled.TextInfo>
                </Styled.NoResultsView>
            }
            <Footer />
        </Styled.Container>
    )
}

export default Search