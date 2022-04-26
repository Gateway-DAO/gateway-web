/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Navigate, Outlet } from 'react-router-dom';

// Hooks
import { gql, useQuery } from '@apollo/client';
import { useAuth } from '../../contexts/UserContext';

// Components
import Page from '../../components/Page';
import { useState, useEffect } from 'react';
import React from 'react';
import Loader from '../../components/Loader';

// Styling
import { LoaderBox } from './pages/DaoGate/style';

// API
import { getGate, listGates, listUsers } from '../../graphql/queries';
import { Gate, User } from '../../graphql/API';
import { useGateAdmin } from '../../hooks/useAdmin';
import { useWeb3React } from '@web3-react/core';

/**
 * This function is responsible for rendering the page
 * @returns The gate page is being returned.
 */
const GatePage: React.FC = () => {
    // State
    const { gate } = useParams();
    const { userInfo, activateWeb3, loggingIn, loadingWallet }: { userInfo?: User; activateWeb3?(): Promise<boolean>; loggingIn?: boolean; loadingWallet?: boolean; } =
        useAuth();
    const { active } = useWeb3React();
    const [didConnect, setDidConnect] = useState(true);

    /* This is a query to the database. It is a GraphQL query that is being made to the database. */
    const {
        data: dbData,
        loading: gateLoading,
        error,
    } = useQuery(gql(getGate), {
        variables: {
            id: gate,
        },
    });

    const {
        data: adminsData,
        loading: adminsLoading,
        error: adminsError,
    } = useQuery(gql(listUsers), {
        variables: {
            filter: {
                ...(dbData &&
                    dbData?.getGate.admins.length > 0 && {
                        or: dbData?.getGate.admins.map((admin) => ({
                            id: {
                                eq: admin,
                            },
                        })),
                    }),
            },
        },
    });

    const {
        data: earnersData,
        loading: earnersLoading,
        error: earnersError,
    } = useQuery(gql(listUsers), {
        variables: {
            filter: {
                ...(dbData &&
                    dbData?.getGate.admins.length > 0 && {
                        or: dbData?.getGate.retroactiveEarners.map((admin) => ({
                            wallet: {
                                eq: admin,
                            },
                        })),
                    }),
            },
        },
    });

    const {
        data: preRequisitesData,
        loading: preRequisitesLoading,
        error: preRequisitesError,
    } = useQuery(gql(listGates), {
        variables: {
            filter: {
                ...(dbData &&
                    dbData?.getGate.preRequisites.completedGates.length > 0 && {
                        or: dbData?.getGate.preRequisites.completedGates.map(
                            (gateID) => ({
                                id: {
                                    eq: gateID,
                                },
                            })
                        ),
                    }),
            },
        },
    });

    const [internalLoading, setInternalLoading] = useState<boolean>(true);
    const [gateData, setGateData] = useState<Gate | null>(dbData?.getGate || {});
    const [keysDone, setKeysDone] = useState<number>(
        userInfo?.gates?.items?.filter(
            (obj: Record<string, any>) => obj.gateID === gate
        )[0]?.keysDone || 0
    );
    const [taskStatus, setTaskStatus] = useState(
        userInfo?.gates?.items?.filter(
            (obj: Record<string, any>) => obj.gateID !== gate
        ).length > 0
            ? userInfo?.gates?.items
                  ?.filter((obj: Record<string, any>) => obj.gateID !== gate)[0]
                  .tasks?.items?.map(
                      (obj: Record<string, any>) =>
                          obj.userID === userInfo.id && obj
                  )
            : []
    );
    const [admins, setAdmins] = useState<User[]>(adminsData?.listUsers.items);
    const [earners, setEarners] = useState<User[]>(earnersData?.listUsers.items);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [preRequisites, setPreRequisites] = useState<Gate[]>(
        preRequisitesData?.listGates.items
    );

    useEffect(() => {
        !active && activateWeb3().then(setDidConnect);
    }, [])

    /* This is a React Hook that is being used to check if the data has been loaded. If the data has
    been loaded, then the `loaded` state is set to `true`. */
    useEffect(() => {
        let loading = (gateLoading && !dbData?.getGate) || ((loadingWallet || loggingIn) || typeof userInfo === "undefined") || (adminsLoading && !adminsData?.listUsers) || (preRequisitesLoading && !preRequisitesData?.listGates);

        if (!loading && (dbData?.getGate || false)) {
            setGateData(dbData.getGate);

            console.log(dbData?.getGate?.admins);
            console.log(userInfo);
            
            if (userInfo?.id && dbData?.getGate?.admins.includes(userInfo.id)) {
                setIsAdmin(true);
            }
        }

        setInternalLoading(loading);
    }, [gateLoading, dbData, loggingIn, userInfo, adminsLoading, admins, preRequisitesLoading, preRequisitesData]);

    /* Fetching the data from the database. */
    useEffect(() => {
        setKeysDone(
            userInfo?.gates?.items?.filter(
                (obj: Record<string, any>) => obj.gateID === gate
            )[0]?.keysDone || 0
        );
        setTaskStatus(
            userInfo?.gates?.items?.filter(
                (obj: Record<string, any>) => obj.gateID === gate && obj
            ).length > 0
                ? userInfo?.gates?.items
                      ?.filter(
                          (obj: Record<string, any>) =>
                              obj.gateID === gate && obj
                      )[0]
                      .tasks?.items?.filter(
                          (obj: Record<string, any>) =>
                              obj.userID === userInfo.id
                      )
                : []
        );
    }, [gate, userInfo]);

    useEffect(() => {
        adminsData && setAdmins(adminsData?.listUsers.items);
    }, [gate, adminsData]);

    useEffect(() => {
        preRequisitesData &&
            setPreRequisites(preRequisitesData?.listGates.items);
    }, [gate, preRequisitesData]);

    useEffect(() => {
        earnersData &&
            setEarners(earnersData?.listUsers.items);
    }, [gate, earnersData]);

    /* This is a catch-all error handler. If there is an error, it will be logged to the console and
    the user will be redirected to the 404 page. */
    if (error) {
        return <Navigate to='/404' />;
    }

    if (!didConnect) {
        return <Navigate to='/404' />;
    }

    if (internalLoading) {
        return (
            <Page>
                <LoaderBox>
                    <Loader color='white' size={35} />
                </LoaderBox>
            </Page>
        );
    } else {
        if ((
            !isAdmin &&
            (gateData.published == 'NOT_PUBLISHED' ||
                gateData.published == 'PAUSED')
        ) ) {
            return <Navigate to='/not-authorized' />;
        }
    }

    return (
        <Page>
            <Outlet
                context={{
                    gateData: {
                        ...gateData,
                        holders: dbData?.getGate?.holders || 0,
                        keysDone,
                        taskStatus,
                        adminList: admins || [],
                        preRequisitesList: preRequisites || [],
                        retroactiveEarnersList: earners || [],
                    },
                    setGateData,
                    loading: internalLoading,
                    isAdmin,
                }}
            />
        </Page>
    );
};

export default GatePage;
