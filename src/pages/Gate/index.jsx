import { useParams, Navigate, Outlet } from 'react-router-dom'

// Hooks
import { useGetGate } from '../../api/database/useGetGate'
import { useAuth } from '../../contexts/UserContext'
import { onUpdateGate } from '../../graphql/subscriptions'
import { useGetGateStatusByGateID, useGetGateStatusByUserID } from '../../api/database/useGetGateStatus'

// Components
import Page from '../../components/Page'
import { useState, useEffect } from 'react'
import { getTokenFromAddress } from '../../api/coingecko'
import React from 'react'

// AWS
import { API, graphqlOperation } from 'aws-amplify'
import { gql } from '@apollo/client'

const Gate = (props) => {
    const { gate } = useParams()
    const { userInfo } = useAuth()

    const { data: dbData, loading, error } = useGetGate(gate)
    const [gateData, setGateData] = useState(dbData || {})
    const [loaded, setLoaded] = useState(false)

    const { data: GSData, loading: GSLoading } = useGetGateStatusByGateID(gateData.id, {
        filter: {
            status: {
                eq: "COMPLETED"
            }
        }
    })
    const { data: GSUserData, loading: GSUserLoading } = useGetGateStatusByUserID(userInfo?.id, {
        filter: {
            gateID: {
                eq: gateData.id
            }
        }
    })

    // Fetch data regarding these
    useEffect(() => {
        const handleData = async () => {
            if (gateData && !loading && !error) {
                setGateData(dbData.getGate)
                setLoaded(true)
            }
        }

        handleData()
    }, [gate, loading, dbData])

    // Subscription to updates
    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(gql(onUpdateGate))
        ).subscribe({
            next: (data) => {
                let gate = data.value.data.onUpdateGate

                if (gate.id === gateData.id) {
                    console.log('onUpdateGate')
                    setGateData({ ...gateData, ...gate })
                }
            },
        })

        return () => subscription.unsubscribe()
    })

    if (error) {
        console.error(error)
        return <Navigate to="/404" />
    }

    return (
        <Page>
            <Outlet
                context={{
                    gateData: {
                        ...gateData,
                        holders: GSData?.useGetGateStatusByGateID?.items?.length || 0,
                        keysDone: GSUserData?.getGateStatusByUserID?.items[0]?.keysDone || 0
                    },
                    setGateData,
                    loaded,
                    loading,
                }}
            />
        </Page>
    )
}

export default Gate
