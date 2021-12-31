import React, { createContext, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

// Web3
import { CONNECTORS } from '../utils/web3'
import { useWeb3React } from '@web3-react/core'

// AWS/GraphQL
import awsconfig from '../aws-exports'
import { getNonce } from '../api/database/getNonce'
import { getUser as getUserQuery } from '../graphql/queries'
import { useLazyQuery, gql } from '@apollo/client'
import { Hub, Amplify } from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import useUpdateUser from '../api/database/useUpdateUser'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

export const userContext = createContext({})
const { Provider } = userContext

export const useAuth = () => {
    return useContext(userContext)
}

export const UserProvider = ({ children }) => {
    /* State */
    const [loggedIn, setLoggedIn] = useState(false)
    const [loggingIn, setLoggingIn] = useState(false)
    const [loadingWallet, setLoadingWallet] = useState(false)
    const [userInfo, setUserInfo] = useState(null)

    const [getUser, { data: userData, loading: userLoading, called }] =
        useLazyQuery(gql(getUserQuery))
    const {
        updateUser,
        data: userUpdateData,
        error: userUpdateError,
        loading: userUpdateLoading,
    } = useUpdateUser()

    const web3 = useWeb3React()
    const history = useHistory()

    const activateWeb3 = async () => {
        try {
            setLoadingWallet(true)
            await web3.activate(CONNECTORS.Injected)
            setLoadingWallet(false)
        }
        catch (err) {
            console.log(`Error connecting to wallet: ${err}`)
        }
    }

    // AWS
    const signIn = async () => {
        try {
            !web3.active && (await activateWeb3())
            setLoggingIn(true)

            const { data } = await getNonce(web3.account)
            console.log(data)

            const signer = web3.library.getSigner()

            const signature = await signer.signMessage(
                data.getAuthenticationNonce.nonce
            )

            const user = await Auth.signIn(data.getAuthenticationNonce.userId)
            const res = await Auth.sendCustomChallengeAnswer(
                user,
                JSON.stringify({
                    signature,
                    publicAddress: web3.account,
                    nonce: data.getAuthenticationNonce.nonce,
                })
            )

            console.log(res)

            if (res.username) {
                const userDB = await getUser({
                    variables: {
                        id: res.username,
                    },
                })
                setUserInfo(userDB.data.getUser)
                setLoggedIn(true)
            }

            setLoggingIn(false)
        } catch (err) {
            console.error(err)
            setLoggingIn(false)
        }
    }

    // AWS
    const userSignOut = async () => {
        await Auth.signOut()
        setLoggedIn(false)
        setLoggingIn(false)
        setUserInfo(null)
    }

    const updateUserInfo = async (info) => {
        const user = await updateUser({
            variables: {
                input: { ...info, id: userInfo.id },
            },
        })

        setUserInfo(user.data.updateUser)
    }

    // On account change - AWS
    useEffect(() => {
        if (userData) {
            if (userData.getUser.wallet === web3.account) {
                setLoggedIn(true)
            } else {
                Auth.signOut().then(() => {
                    setLoggedIn(false)
                    setUserInfo(null)
                    setLoggingIn(false)
                })
            }
        }
    }, [web3.account])

    const listener = async ({ payload: { event, data } }) => {
        console.log('event', event)
        switch (event) {
            case 'signIn':
                const userDB = await getUser({
                    variables: {
                        id: data.username,
                    },
                })
                setUserInfo(userDB.data.getUser)
                setLoggedIn(true)
                break
            case 'signOut':
                setLoggedIn(false)
                setLoggingIn(false)
                setUserInfo(null)
                break
            default:
        }
    }

    useEffect(() => {
        Hub.listen('auth', listener)
        return () => Hub.remove('auth', listener)
    })

    useEffect(() => {
        const callback = async () => {
            try {
                const { username, signInUserSession } =
                    await Auth.currentAuthenticatedUser()
                if (username) {
                    const userDB = await getUser({
                        variables: {
                            id: username,
                        },
                    })
                    setUserInfo(userDB.data.getUser)
                    setLoggedIn(true)
                }
            } catch (e) {
                console.log(e)
            }
        }
        callback()
    }, [])

    return (
        <Provider
            value={{
                signIn,
                loggedIn,
                ...(loggedIn ? { userInfo } : {}),
                loggingIn,
                updateUserInfo,
                userSignOut,
                walletConnected: web3.active,
                activateWeb3,
                loadingWallet
            }}
        >
            {children}
        </Provider>
    )
}
