import { useParams, useHistory } from "react-router"
import { useEffect, useState } from "react"

import * as Styled from "./style"

import { daos } from "../../api/algolia"
import { allDocs } from '../../api/db'
import { getTokenFromAddress } from "../../api/coingecko"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import { ConnectToWallet } from "../../components/WalletHeader/style"

const Search = props => {
    const { query } = useParams();
    const [hits, setHits] = useState([]);

    useEffect(() => {
        const searchAsync = async () => {
            if(query==='all'){
                const { hits: res } = await daos.search('');
            // const { hits: res } = await daos.search(query);
            const parsedInfo = res.map(async hit => {
                // Once we have data, start fetching content from CoinGecko (if the DAO has a token)

                /*
                if (hit.tokenAddress) {
                    const json = await getTokenFromAddress(hit.tokenAddress);

                    const tokenInfo = {
                        ranking: json.market_cap_rank,
                        price: json.market_data.current_price.usd || "Nope",
                        token: json.symbol.toUpperCase()
                    }

                    return { ...hit, ...tokenInfo }
                }
                */

                return hit
            })
            const resolved = await Promise.all(parsedInfo)

            setHits(resolved);
        }else{
            
            const { hits: res } = await daos.search(query);
            const parsedInfo = res.map(async hit => {
                return hit
            })
            const resolved = await Promise.all(parsedInfo)

            setHits(resolved);

        }
           
        }

        searchAsync();
    }, [query]);

    const [inputVal, setInputVal] = useState(query || "")
    const history = useHistory();

    const handleEnter = e => {
        if (e.key === "Enter") {
            history.push(`/search/${e.target.value}`);
        }
    }

    return (
        <Styled.Container>
            <Header/>
            <Styled.SearchTermContainer>
                <Styled.SearchTerm>{query}</Styled.SearchTerm>
                <Styled.SearchInputBox>
                    <Styled.SearchInput type="search" value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyPress={handleEnter} />

                    <Styled.WrappedFiSearch />
                </Styled.SearchInputBox>
            </Styled.SearchTermContainer>
            {hits && 
                <Styled.CardBox>
                    {hits.map((card, idx) => {
                        return (
                            <Card 
                                key={idx}
                                id={card.objectID}
                                title={card.name}
                                description={card.description}
                                categories={card.categories}
                                // ranking={card.ranking}
                                // token={card.token}
                                // price={card.price}
                                logoURL={card.logoURL}
                                bannerURL={card.backgroundURL}
                            />
                        );
                    })}
                </Styled.CardBox>
            }
            <Footer />
        </Styled.Container>
    )
}

export default Search