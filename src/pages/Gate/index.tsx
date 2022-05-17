/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Navigate, Outlet } from 'react-router-dom';

// Hooks
import { useAuth } from '../../contexts/UserContext';

// Components
import Page from '../../components/Page';
import { useState, useEffect } from 'react';
import React from 'react';
import Loader from '../../components/Loader';

// Styling
import { LoaderBox } from './pages/DaoGate/style';

// API
import { useWeb3React } from '@web3-react/core';
import { Gates, Key_Progress, useGetGateQuery, useGetGateUsersQuery, useGetKeyProgressQuery, Users } from '../../graphql';

// Types
import { PartialDeep } from 'type-fest';

/**
 * This function is responsible for rendering the page
 * @returns The gate page is being returned.
 */
const GatePage: React.FC = () => {
    // State
    const { gate } = useParams();
    const { userInfo, activateWeb3, loggingIn, loadingWallet }: { userInfo?: Users; activateWeb3?(): Promise<boolean>; loggingIn?: boolean; loadingWallet?: boolean; } =
        useAuth();
    const { active } = useWeb3React();
    const [didConnect, setDidConnect] = useState(true);

    /* This is a query to the database. It is a GraphQL query that is being made to the database. */
    const {
        data: dbData,
        loading: gateLoading,
        error,
    } = useGetGateQuery({
        variables: {
            id: gate,
        }
    });

    const {
        data: keyProgressData,
        loading: keyProgressLoading
    } = useGetKeyProgressQuery({
        variables: {
            where: {
                gate_id: {
                    _eq: gate
                },
                user_id: {
                    _eq: userInfo.id
                }
            }
        }
    })

    const {
        data: adminsData,
        loading: adminsLoading,
    } = useGetGateUsersQuery({
        variables: {
            gate_id: gate,
            permission: "admin"
        }
    })

    const [internalLoading, setInternalLoading] = useState<boolean>(true);
    const [gateData, setGateData] = useState<PartialDeep<Gates>>(dbData.gates_by_pk);
    const [keysDone, setKeysDone] = useState<number>(keyProgressData.key_progress.filter(kp => kp.completed !== 'done').map(kp => kp.key.keys).reduce((total, num) => total + num));
    const [taskStatus, setTaskStatus] = useState<PartialDeep<Key_Progress>[]>(keyProgressData.key_progress);
    const [admins, setAdmins] = useState<PartialDeep<Users>[]>(adminsData?.permissions.map(perms => perms.user));
    const [earners, setEarners] = useState<PartialDeep<Users>[]>(dbData.gates_by_pk.earners?.map(earner => earner.user));
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        !active && activateWeb3().then(setDidConnect);
    }, [])

    /* This is a React Hook that is being used to check if the data has been loaded. If the data has
    been loaded, then the `loaded` state is set to `true`. */
    useEffect(() => {
        let loading = (gateLoading && !dbData?.gates_by_pk) || ((loadingWallet || loggingIn) || typeof userInfo === "undefined") || (adminsLoading && !adminsData?.permissions);

        if (!loading && (dbData?.gates_by_pk || false)) {
            setGateData(dbData.gates_by_pk);

            if (userInfo?.id && adminsData?.permissions.map(perms => perms.user_id).includes(userInfo.id)) {
                setIsAdmin(true);
            }
        }

        setInternalLoading(loading);
    }, [gateLoading, dbData, loggingIn, userInfo, adminsLoading, admins]);

    useEffect(() => {
        adminsData && setAdmins(adminsData.permissions.map(perm => perm.user));
    }, [gate, adminsData]);

    useEffect(() => {
        dbData &&
            setEarners(dbData.gates_by_pk.earners.map(earner => earner.user));
    }, [gate]);

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
        )) {
            return <Navigate to='/not-authorized' />;
        }
    }

    return (
        <Page>
            <Outlet
                context={{
                    gateData: {
                        ...gateData,
                        holders: dbData?.gates_by_pk.holders.length || 0,
                        keysDone,
                        taskStatus,
                        adminList: admins || [],
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
