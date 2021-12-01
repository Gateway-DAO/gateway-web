import { useParams, useHistory } from 'react-router'
import { useEffect } from 'react'
import styled from 'styled-components'

import { db } from '../../api/firebase'
import { collection, doc, getDoc, query } from '@firebase/firestore'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import NewCard from '../../components/NewBigCard'
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
    const [loaded, setLoaded] = useState(false)
    const [inputVal, setInputVal] = useState(query || '')
    const history = useHistory()
    const navigate = (e) => {
        history.goBack()
    }

    // Get CoinGecko data
    const getCGData = async (address) => await getTokenFromAddress(address)

    // Get the document with the name that matches the given ID
    const getDBData = async () => {
        const daoDoc = doc(db, 'daos', id)
        const dao = await getDoc(daoDoc)
        return dao.data()
    }

    // In case the DAO's token address gets changed
    useEffect(() => {
        const fetchTokenInfo = async () => {
            const cgData = daoData.tokenAddress
                ? await getCGData(daoData.tokenAddress)
                : {}

            const tokenData = daoData.tokenAddress
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
                  }
                : {}

            setDaoData({ ...daoData, ...tokenData })
        }

        daoData && daoData.tokenAddress && fetchTokenInfo()
    }, [daoData.tokenAddress])

    // Fetch data regarding these
    useEffect(() => {
        const getRelatedDAOLogo = async (dao) => {
            const daoDoc = doc(db, 'daos', dao)
            const relatedDao = await getDoc(daoDoc)
            return relatedDao.data().logoURL
        }

        const handleData = async () => {
            const dbData = await getDBData()
            const cgData = dbData.tokenAddress
                ? await getCGData(dbData.tokenAddress)
                : {}
            let related = []

            // If a DAO has a "related-daos" field, fetch the related DAOs
            if ('related-daos' in dbData) {
                related = dbData['related-daos'].map(getRelatedDAOLogo)
            }

            related = await Promise.all(related)

            const tokenData = dbData.tokenAddress
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
                  }
                : {}

            // Organize presentable data
            const data = {
                ...dbData,
                related,
                id,
                ...tokenData,
            }

            setDaoData(data)
            setLoaded(true)
        }

        handleData()
    }, [id])

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${e.target.value}`)
        }
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
                React.createElement(NewCard, {
                    ...daoData,
                    changeDAOData: (data) =>
                        setDaoData({ ...daoData, ...data }),
                })}
            <Footer />
        </Container>
    )
}

export default DAO
