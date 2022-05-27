import React from 'react';
import { useParams, Navigate, Outlet } from 'react-router-dom';

// Components
import Page from '../../components/Page';
import { useState, useEffect } from 'react';
import { getTokenFromAddress } from '../../api/coingecko';

// Hooks
import { Daos, useGetDaoBySlugQuery } from '../../graphql';
import { PartialDeep } from 'type-fest';

/**
 * It fetches data from the DAO's GraphQL API and renders the appropriate page
 * @param props - The props passed to the component.
 * @returns The `Outlet` component is being returned.
 */
const DAO = (props) => {
    const { id } = useParams();
    const [daoData, setDaoData] = useState<PartialDeep<Daos>>({
        token: '',
        categories: [],
        bounties: [],
        description: '',
        how_to_join: [],
        token_benefits: [],
    });
    const {
        data: dbData,
        loading,
        error,
        called,
    } = useGetDaoBySlugQuery({
        variables: {
            slug: id,
        },
    });
    const [loaded, setLoaded] = useState(false);

    // Get CoinGecko data
    const getCGData = async (address) => await getTokenFromAddress(address);

    // In case the DAO's token address gets changed
    useEffect(() => {
        const fetchTokenInfo = async () => {
            const cgData: Record<string, any> = daoData?.token
                ? await getCGData(daoData?.token)
                : {};

            const tokenData =
                daoData.token && cgData.market_data
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
                      };

            setDaoData({ ...daoData, ...tokenData });
        };

        daoData && daoData.token && fetchTokenInfo();
    }, [daoData.token]);

    // Fetch data regarding these
    useEffect(() => {
        const handleData = async () => {
            if (daoData && !loading && !error) {
                const cgData: Record<string, any> = dbData.daos[0].token
                    ? await getCGData(dbData.daos[0].token)
                    : {};

                const tokenData =
                    dbData.daos[0].token && cgData.symbol
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
                          };

                // Organize presentable data
                const data = {
                    ...dbData.daos[0],
                    ...tokenData,
                };

                setDaoData(data);
                setLoaded(true);
            }
        };

        handleData();
    }, [id, loading]);

    useEffect(() => {
        called &&
            dbData &&
            setDaoData({
                ...daoData,
                ...dbData.daos[0],
            });
    }, [dbData, called]);

    /*
    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(gql(onUpdateDao))
        ).subscribe({
            next: (data) => {
                let dao = data.value.data.onUpdateDAO;
                console.log('New thing');
                console.log(dao);

                if (dao.id === daoData.id) {
                    console.log('onUpdateDao');
                    setDaoData({ ...daoData, ...dao });
                }
            },
        });

        return () => subscription.unsubscribe();
    });
    */

    if (error) {
        console.error(error);
        return <Navigate to='/404' />;
    }

    return (
        <Page>
            <Outlet
                context={{
                    daoData,
                    setDaoData,
                    loaded,
                    loading,
                }}
            />
        </Page>
    );
};

export default DAO;
