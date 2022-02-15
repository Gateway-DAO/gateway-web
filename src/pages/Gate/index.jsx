import { useParams, Navigate, Outlet } from 'react-router-dom';

// Hooks
import { useGetGate } from '../../api/database/useGetGate';
import { useAuth } from '../../contexts/UserContext';
import { onUpdateGate } from '../../graphql/subscriptions';

// Components
import Page from '../../components/Page';
import { useState, useEffect } from 'react';
import React from 'react';

// AWS
import { API, graphqlOperation } from 'aws-amplify';
import { gql } from '@apollo/client';

const Gate = (props) => {
    const { gate } = useParams();
    const { userInfo } = useAuth();

    const { data: dbData, loading, error } = useGetGate(gate);
    const [gateData, setGateData] = useState(dbData?.getGate || {});
    const [loaded, setLoaded] = useState(false);
    const [keysDone, setKeysDone] = useState(
        userInfo?.gates?.items?.map((obj) => obj.gateID === gate && obj)[0]
            ?.keysDone || 0
    );
    const [taskStatus, setTaskStatus] = useState(
        userInfo?.gates?.items
            ?.map((obj) => obj.gateID === gate && obj)[0]
            .tasks?.items?.filter((obj) => obj.userID === userInfo.id) || []
    );

    // Fetch data regarding these
    useEffect(() => {
        const handleData = async () => {
            if (dbData && !loading && !error) {
                setGateData(dbData.getGate);
            }
        };

        handleData();
    }, [gate, loading, dbData]);

    useEffect(() => {
        setLoaded(!!gateData && !loading && userInfo !== null);
    }, [gateData, loading, userInfo]);

    useEffect(() => {
        if (userInfo?.gates?.items) {
            setKeysDone(
                userInfo?.gates?.items?.map(
                    (obj) => obj.gateID === gate && obj
                )[0]?.keysDone || 0
            );
            setTaskStatus(
                userInfo?.gates?.items
                    ?.map((obj) => obj.gateID === gate && obj)[0]
                    .tasks?.items?.filter(
                        (obj) => obj.userID === userInfo.id
                    ) || []
            );
        }
    }, [gate, userInfo]);

    // Subscription to updates
    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(gql(onUpdateGate))
        ).subscribe({
            next: (data) => {
                let gate = data.value.data.onUpdateGate;

                if (gate.id === gateData.id) {
                    console.log('onUpdateGate');
                    setGateData({ ...gateData, ...gate });
                }
            },
        });

        return () => subscription.unsubscribe();
    });

    if (error) {
        console.error(error);
        return <Navigate to='/404' />;
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
                    },
                    setGateData,
                    loaded,
                    loading,
                }}
            />
        </Page>
    );
};

export default Gate;
