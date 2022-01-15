import { useParams, useHistory, Redirect } from 'react-router'
import styled from 'styled-components'

import { useGetDAOByID } from '../../api/database/useGetDAO'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

import BigCard from '../../components/BigCard'
import { useState, useEffect } from 'react'
import { getTokenFromAddress } from '../../api/coingecko'
import React from 'react'
import * as Styled from './style'

// AWS
import { API, graphqlOperation } from 'aws-amplify'
import { gql } from '@apollo/client'
import { onUpdateDao } from '../../graphql/subscriptions'
import BackButton from '../../components/BackButton'

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
    const { data: dbData, loading, error } = useGetDAOByID(id)
    const [loaded, setLoaded] = useState(false)
    const [inputVal, setInputVal] = useState('')
    const history = useHistory()
    const navigate = (e) => {
        history.goBack()
    }

    // Get CoinGecko data
    const getCGData = async (address) => await getTokenFromAddress(address)

    // In case the DAO's token address gets changed
    useEffect(() => {
        const fetchTokenInfo = async () => {
            const cgData = daoData.tokenAddress
                ? await getCGData(daoData.tokenAddress)
                : {}

            const tokenData =
                daoData.tokenAddress && cgData.market_data
                    ? {
                          symbol: cgData.symbol,
                          ranking: cgData.market_cap_rank,
                          tokenFeed: {
                              price: cgData.market_data.current_price.usd,
                              ath: cgData.market_data.ath.usd,
                              atl: cgData.market_data.atl.usd,
                              marketCap: cgData.market_data.market_cap.usd,
                              change24h:
                                  cgData.market_data
                                      .price_change_percentage_24h,
                              change7d:
                                  cgData.market_data.price_change_percentage_7d,
                              totalSupply: cgData.market_data.total_supply,
                              circulatingSupply:
                                  cgData.market_data.circulating_supply,
                          },
                          showTokenFeed: true,
                      }
                    : {
                          showTokenFeed: false,
                      }

            setDaoData({ ...daoData, ...tokenData })
        }

        daoData && daoData.tokenAddress && fetchTokenInfo()
    }, [daoData.tokenAddress])

    // Fetch data regarding these
    useEffect(() => {
        const handleData = async () => {
            if (daoData && !loading && !error) {
                const cgData = dbData.tokenAddress
                    ? await getCGData(dbData.tokenAddress).catch((e) => {
                          console.log(e)
                      })
                    : {}

                const tokenData =
                    dbData.tokenAddress && cgData.symbol
                        ? {
                              symbol: cgData.symbol,
                              ranking: cgData.market_cap_rank,
                              tokenFeed: {
                                  price: cgData.market_data.current_price.usd,
                                  ath: cgData.market_data.ath.usd,
                                  atl: cgData.market_data.atl.usd,
                                  marketCap: cgData.market_data.market_cap.usd,
                                  change24h:
                                      cgData.market_data
                                          .price_change_percentage_24h,
                                  change7d:
                                      cgData.market_data
                                          .price_change_percentage_7d,
                                  totalSupply: cgData.market_data.total_supply,
                                  circulatingSupply:
                                      cgData.market_data.circulating_supply,
                              },
                              showTokenFeed: true,
                          }
                        : {
                              showTokenFeed: false,
                          }

                // Organize presentable data
                const data = {
                    ...dbData,
                    ...tokenData,
                }

                setDaoData(data)
                setLoaded(true)
            }
        }

        handleData()
    }, [id, loading])

    // Subscription to updates
    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(gql(onUpdateDao))
        ).subscribe({
            next: (data) => {
                let dao = data.value.data.onUpdateDAO
                console.log("New thing")
                console.log(dao)

                if (dao.id === daoData.id) {
                    console.log('onUpdateDao')
                    setDaoData({ ...daoData, ...dao })
                }
            },
        })

        return () => subscription.unsubscribe()
    })

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${e.target.value}`)
        }
    }

    if (error) {
        console.error(error)
        return <Redirect to="/404" />
    }

    return (
        <Styled.Container>
            <Header search={{ visible: true }} />
            <Styled.SearchTermContainer>
                <Styled.BackButtonContainer>
                    <BackButton>Back to Results</BackButton>
                </Styled.BackButtonContainer>
                <Styled.SearchInputBox>
                    <Styled.SearchInput
                        type="text"
                        placeholder="Search DAO"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyPress={handleEnter}
                    />

                    <Styled.WrappedFiSearch />
                </Styled.SearchInputBox>
            </Styled.SearchTermContainer>

            {loading && !loaded && (
                <Styled.LoaderBox>
                    <Loader color="white" size={35} />
                </Styled.LoaderBox>
            )}

            {loaded &&
                React.createElement(BigCard, {
                    ...daoData,
                    changeDAOData: (data) =>
                        setDaoData({ ...daoData, ...data }),
                })}
            <Footer />
        </Styled.Container>
    )
}

export default DAO
