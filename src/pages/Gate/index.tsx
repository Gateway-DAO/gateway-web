/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Navigate, Outlet } from 'react-router-dom';

// Hooks
import { gql, useQuery } from '@apollo/client';
import { useAuth } from '../../contexts/UserContext';

// Components
import Page from '../../components/Page';
import { useState, useEffect } from 'react';
import React from 'react';

// API
import { getGate } from '../../graphql/queries';

/**
 * This function is responsible for rendering the page
 * @returns The gate page is being returned.
 */
const Gate: React.FC = () => {
    const { gate } = useParams();
    const { userInfo }: Record<string, any> = useAuth();

    /* This is a query to the database. It is a GraphQL query that is being made to the database. */
    const {
        data: dbData,
        loading,
        error,
    } = useQuery(gql(getGate), {
        variables: {
            id: gate,
        },
    });

    const [gateData, setGateData] = useState(dbData?.getGate || {});
    const [loaded, setLoaded] = useState(false);
    const [keysDone, setKeysDone] = useState(
        userInfo?.gates?.items?.map(
            (obj: Record<string, any>) =>
                (obj.gateID === gate && obj?.keysDone) || 0
        )
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

    // Fetch data regarding these
    useEffect(() => {
        const handleData = async () => {
            if (dbData && !loading && !error) {
                setGateData(dbData.getGate);
            }
        };

        handleData();
    }, [gate, loading, dbData]);

    /* This is a React Hook that is being used to check if the data has been loaded. If the data has
    been loaded, then the `loaded` state is set to `true`. */
    useEffect(() => {
        setLoaded(!!gateData && !loading && userInfo !== null);
    }, [gateData, loading, userInfo]);

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

    /* This is a catch-all error handler. If there is an error, it will be logged to the console and
    the user will be redirected to the 404 page. */
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
