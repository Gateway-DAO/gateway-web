import styled from "styled-components"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

import { daos } from "../../api/algolia"
import { getTokenFromAddress } from "../../api/coingecko"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import BigLogo from "../../assets/Gateway.svg"

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
        margin: 0 auto;
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
    margin-left: 40px;
    text-color: white;
    display: flex;
    text-transform: capitalize;

    @media only screen and (max-width: 945px) {
        padding-top: 70px;
        margin-left: -30px;
        justify-content: center;
    }
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

const NoResultsView = styled.div`
    height: 30vh;
    width: auto;
    margin-top: 20px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const BigLogoImg = styled.img`
    width: 198.11px;
    height: 198.11px;
`

const HeaderMedium = styled.p`
    font-weight: 700;
    font-family: Poppins;
    font-size: 21px;
    line-height: 80px;
    font-style: normal;
    letter-spacing: -0.015em;
    color: #E5E5E5;
`

const TextInfo = styled.div`
    font-weight: 400;
    font-family: Poppins;
    font-size: 12px;
    line-height: 16px;
    font-style: normal;
    letter-spacing: -0.015em;
    color: #E5E5E5;
    text-align: center;
`

const SearchTextViolet = styled.button`
    color: #7E3BDC;
    text-decoration: none;
`

const CommunityTextPink = styled.a`
    color: #FE02B9;
    text-decoration: none;
`


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
        <Container>
            <Header search={{
                visible: true,
                value: query
            }} />
            <SearchTermContainer>
                <SearchTerm>{query}</SearchTerm>
            </SearchTermContainer>
            {hits.length > 0 ? 
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
                :
                <NoResultsView>
                    <BigLogoImg src={BigLogo}/>
                    <HeaderMedium>
                        Opps! No results found :(
                    </HeaderMedium>
                    <TextInfo>
                        We couldn't find what you're looking for.<br/>
                        Try to <SearchTextViolet as="a" href="/">Search again</SearchTextViolet> or <CommunityTextPink as="a" href="#">Add your community.</CommunityTextPink>
                    </TextInfo>
                </NoResultsView>
            }
            <Footer />
        </Container>
    )
}

export default Search