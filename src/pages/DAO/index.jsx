import { useParams, useHistory, Redirect } from 'react-router'
import { ethers } from 'ethers'
import { useEffect } from 'react'
import styled from 'styled-components'

import { useGetDAOByID } from '../../api/database/useGetDAO'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import BigCard from '../../components/BigCard'
import { useState } from 'react'
import { getTokenFromAddress } from '../../api/coingecko'
import React from 'react'
import * as Styled from './style'

const Container = styled.main`
    background-color: #170627;
    min-height: 100vh;
    overflow-x: hidden;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const DAO = (props) => {
    const { id } = useParams()
    const [daoData, setDaoData] = useState({
        tokenAddress: '',
        socials: {},
        categories: [],
        bounties: [],
        description: '',
        howToJoin: [],
        tags: [],
        tokenBenefits: [],
        whitelistedAddresses: [],
    })
    const { data: dbData, loading, error } = useGetDAOByID(id);
    const [loaded, setLoaded] = useState(false)
    const [inputVal, setInputVal] = useState('')
    const history = useHistory()
    const navigate = (e) => {
        history.goBack()
    }
    
    // Get CoinGecko data
    const getCGData = async (address) => await getTokenFromAddress(address);  

    // In case the DAO's token address gets changed
    useEffect(() => {
        const fetchTokenInfo = async () => {
            const cgData = daoData.tokenAddress
                ? await getCGData(daoData.tokenAddress)
                : {}
            
            const tokenData = daoData.tokenAddress && cgData.market_data
                ? {
                      symbol: cgData.symbol,
                      ranking: cgData.market_cap_rank,
                      tokenFeed: {
                          price: cgData.market_data.current_price.usd,
                          ath: cgData.market_data.ath.usd,
                          atl: cgData.market_data.atl.usd,
                          marketCap: cgData.market_data.market_cap.usd,
                          change24h:
                              cgData.market_data.price_change_percentage_24h,
                          change7d:
                              cgData.market_data.price_change_percentage_7d,
                          totalSupply: cgData.market_data.total_supply,
                          circulatingSupply:
                              cgData.market_data.circulating_supply,
                      },
                      showTokenFeed:true
                  }
                : {
                    showTokenFeed:false
                }

            setDaoData({ ...daoData, ...tokenData })
        }

        daoData && daoData.tokenAddress && fetchTokenInfo()
    }, [daoData.tokenAddress])

    // Fetch data regarding these
    useEffect(() => {
        /*
        const getRelatedDAOLogo = async (dao) => {
            const daoDoc = doc(db, 'daos', dao)
            const relatedDao = await getDoc(daoDoc)
            return relatedDao.data().logoURL
        }
        */

        console.log(id)

        const handleData = async () => {
            if (daoData && !loading && !error) {
                const cgData = dbData.tokenAddress
                    ? await getCGData(dbData.tokenAddress).catch((e)=>{console.log(e)})
                    : {}
                
                /*
                let related = []

                // If a DAO has a "related-daos" field, fetch the related DAOs
                if ('related-daos' in dbData) {
                    related = dbData['related-daos'].map(getRelatedDAOLogo)
                }

                related = await Promise.all(related)
                */

                const tokenData = dbData.tokenAddress && cgData.symbol
                    ? {
                        symbol: cgData.symbol,
                        ranking: cgData.market_cap_rank,
                        tokenFeed: {
                            price: cgData.market_data.current_price.usd,
                            ath: cgData.market_data.ath.usd,
                            atl: cgData.market_data.atl.usd,
                            marketCap: cgData.market_data.market_cap.usd,
                            change24h:
                                cgData.market_data.price_change_percentage_24h,
                            change7d:
                                cgData.market_data.price_change_percentage_7d,
                            totalSupply: cgData.market_data.total_supply,
                            circulatingSupply:
                                cgData.market_data.circulating_supply,
                        },
                        showTokenFeed:true
                    }
                    : {
                    showTokenFeed:false
                    }

                    console.log(dbData)

                // Organize presentable data
                const data = {
                    ...dbData,
                    // related,
                    ...tokenData,
                }

                setDaoData(data)
                setLoaded(true)
            }
        }

        handleData()
    }, [id, loading])

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${e.target.value}`)
        }
    }

    if (error) {
        console.error(error);
        return <Redirect to="/404" />
    }

    return (
        <Container isLoaded={loaded}>
            <Header search={{ visible: true }} />
            <Styled.SearchTermContainer>
                <Styled.BackButtonContainer>
                    <Styled.BackHomeButton onClick={(e) => navigate()}>
                        <Styled.BackHomeButtonText>
                            &#8592;
                        </Styled.BackHomeButtonText>
                    </Styled.BackHomeButton>
                    <Styled.BackButtonText>
                        Back to Results
                    </Styled.BackButtonText>
                </Styled.BackButtonContainer>
                <Styled.SearchInputBox>
                    <Styled.SearchInput
                        type="search"
                        placeholder="Search DAO"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyPress={handleEnter}
                    />

                    <Styled.WrappedFiSearch />
                </Styled.SearchInputBox>
            </Styled.SearchTermContainer>
            {loaded &&
                React.createElement(BigCard, {
                    ...daoData,
                    changeDAOData: (data) =>
                        setDaoData({ ...daoData, ...data }),
                })}
            <Footer />
        </Container>
    )
}

export default DAO
