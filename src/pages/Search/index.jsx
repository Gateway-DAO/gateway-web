import styled from "styled-components"
import { useParams, useHistory } from "react-router"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"

import { daos } from "../../api/algolia"
import { getTokenFromAddress } from "../../api/coingecko"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"

const Container = styled.main`
    background-color: #170627;
    height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;
`

const CardBox = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 40px;
    margin-top: 60px;

    /*
    @media only screen and (max-width: 1700px) {
        grid-template-columns: repeat(3, 1fr);
    }
    */

    @media only screen and (max-width: 1170px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 735px) {
        grid-template-columns: repeat(1, 100%);
    }

    @media only screen and (max-width: 480px) {
        margin-top: 60px;
    }

`

const CardContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    @media only screen and (max-width: 945px) {
        padding-top: 75px;
    }
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
    text-color: white;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;

    @media only screen and (max-width: 945px) {
        margin-top: 0;
        flex-direction: column;
        align-items: center;
    }
`

const SearchTerm = styled.p`
    padding: 0 30px;
    margin-left: 20px;
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

    @media only screen and (max-width: 945px) {
        padding: 30px 0;
        margin-left: 0px;
    }
`;


const SearchInputBox = styled.div`
    margin-right: 40px;
    padding-left: 30px;
    background: #FFFFFF;
    width: 22.5%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border-radius: 100px;
    @media only screen and (max-width: 945px) {
        margin: 0;
    }
    @media only screen and (max-width: 480px) {
        width: 60%;
    }
`

const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 10px 0;
    border-radius: 100px;
`

const WrappedFiSearch = styled(FiSearch)`
    font-size: 20px;
    padding-right: 20px;
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

    const [inputVal, setInputVal] = useState(query || "")
    const history = useHistory();

    const handleEnter = e => {
        if (e.key === "Enter") {
            history.push(`/search/${e.target.value}`);
        }
    }

    return (
        <Container>
            <Header/>
            <SearchTermContainer>
                <SearchTerm>{query}</SearchTerm>
                <SearchInputBox>
                    <SearchInput type="search" value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyPress={handleEnter} />
                    <WrappedFiSearch />
                </SearchInputBox>
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