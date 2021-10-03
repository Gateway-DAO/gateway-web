import { useParams } from "react-router";
import { useEffect } from "react";
import styled from "styled-components";

import { db } from "../../api/firebase";
import { collection, doc, getDoc, query } from "@firebase/firestore";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import BigCard from "../../components/BigCard";
import { useState } from "react";
import { getTokenFromAddress } from "../../api/coingecko";
import React from "react";

const Container = styled.main`
    background-color: #170627;
    height: 100%;
`

const DAO = props => {
    const { id } = useParams();
    const [daoData, setDaoData] = useState();

    // Fetch data regarding these
    useEffect(() => {
        // Get the document with the name that matches the given ID
        const getDBData = async () => {
            const daoDoc = doc(db, "daos", id);
            const dao = await getDoc(daoDoc);
            return dao.data();
        }

        // Get CoinGecko data
        const getCGData = async address => await getTokenFromAddress(address);

        const handleData = async () => {
            const dbData = await getDBData();
            const cgData = await getCGData(dbData.tokenAddress);

            /**
             * symbol
             * market_cap_rank
             * market_data.current_price.usd
             * market_data.ath.usd
             * market_data.atl.usd
             * market_data.market_cap.usd
             * market_data.price_change_percentage_24h
             * market_data.price_change_percentage_7d
             * market_data.total_supply
             * market_data.circulating_supply
             */

            // Organize presentable data
            const data = {
                ...dbData,
                symbol: cgData.symbol,
                ranking: cgData.market_cap_rank,
                tokenFeed: {
                    price: cgData.market_data.current_price.usd,
                    ath: cgData.market_data.ath.usd,
                    atl: cgData.market_data.atl.usd,
                    marketCap: cgData.market_data.market_cap.usd,
                    change24h: cgData.market_data.price_change_percentage_24h,
                    change7d: cgData.market_data.price_change_percentage_7d,
                    totalSupply: cgData.market_data.total_supply,
                    circulatingSupply: cgData.market_data.circulating_supply
                }
            }

            setDaoData(data);
        }

        handleData();
    }, []);

    return (
        <Container>
            <Header />
            {daoData && React.createElement(BigCard, daoData)}
            <Footer />
        </Container>
    )
}

export default DAO;