import React, { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

// Web3
import { CONNECTORS, shortenAddress } from '../utils/web3'
import { useWeb3React } from '@web3-react/core'
import useUpdateUser from '../api/database/useUpdateUser'
import useCreateUser from '../api/database/useCreateUser'

// AWS/GraphQL
import awsconfig from '../aws-exports'
import { getNonce } from '../api/database/getNonce'
import {
    getUser as getUserQuery,
    getUserByAddress as getUserByAddressQuery,
} from '../graphql/queries'
import { useLazyQuery, gql } from '@apollo/client'
import Amplify, { Hub, Auth } from 'aws-amplify'
import useGetFile from '../api/useGetFile'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

export const userContext = createContext({})
const { Provider } = userContext

/**
 * The `useAuth` hook returns the `userContext` object.
 *
 * Structure of authentication:
 * - can connect wallet, retrieve user info based on wallet (READ)
 * - needs to be signed in using Cognito to change/update information (UPDATE)
 * - if no user exists, create new one based on wallet address (CREATE)
 *
 * Get information:
 * - walletConnected: checks if wallet is connected; can fetch user info
 * - loggedIn: checks if user is connected on Cognito; can change information
 * - signIn: for users with connected wallet & not logged in. Necessary for changing info on database
 *
 * @returns The user object.
 */
export const useAuth = () => {
    return useContext(userContext)
}

/**
 * The UserProvider component is a React component that wraps around the children components.
 * It provides the user data to the children components.
 *
 * Structure of authentication:
 * - can connect wallet, retrieve user info based on wallet (READ)
 * - needs to be signed in using Cognito to change/update information (UPDATE)
 * - if no user exists, create new one based on wallet address (CREATE)
 *
 * Get information:
 * - walletConnected: checks if wallet is connected; can fetch user info
 * - loggedIn: checks if user is connected on Cognito; can change information
 * - signIn: for users with connected wallet & not logged in. Necessary for changing info on database
 *
 * @returns None
 */
export const UserProvider = ({ children }) => {
    /* State */
    const [loggedIn, setLoggedIn] = useState(false)
    const [walletConnected, setWalletConnected] = useState(false)
    const [loggingIn, setLoggingIn] = useState(false)
    const [loadingWallet, setLoadingWallet] = useState(false)
    const [userInfo, setUserInfo] = useState(null)

    const web3 = useWeb3React()

    const [
        getUserByAddress,
        {
            data: userBAData,
            loading: userBALoading,
            refetch,
            called: userBACalled,
        },
    ] = useLazyQuery(gql(getUserByAddressQuery), {
        fetchPolicy: 'no-cache',
        variables: {
            wallet: web3.account,
        },
    })

    const [getUser, { data: userData, loading: userLoading }] = useLazyQuery(
        gql(getUserQuery),
        {
            fetchPolicy: 'no-cache',
        }
    )

    const {
        updateUser,
        data: userUpdateData,
        error: userUpdateError,
        loading: userUpdateLoading,
    } = useUpdateUser()

    const {
        createUser,
        data: userCreateData,
        error: userCreateError,
        loading: userCreateLoading,
    } = useCreateUser()

    const { getFile } = useGetFile()

    /**
     * Activates Metamask/injected wallet provider.
     * @returns None
     */
    const activateWeb3 = async () => {
        try {
            setLoadingWallet(true)
            await web3.activate(CONNECTORS.Injected)
            setLoadingWallet(false)
        } catch (err) {
            console.log(`Error connecting to wallet: ${err}`)
        }
    }

    /**
     * With the `signInUserSession` property, checks if loggedIn user is admin.
     * @param signInUserSession - The user's sign-in session.
     * @returns The object containing the `isAdmin` property.
     */
    const getUserGroups = (signInUserSession) => {
        const rval = {}

        if (
            (
                signInUserSession.idToken.payload['cognito:groups'] || []
            ).includes('Admin')
        ) {
            rval.isAdmin = true
        }

        return rval
    }

    /**
     * Signs a user out of the platform, on Cognito.
     * @returns None
     */
    const userSignOut = async () => {
        await Auth.signOut()
        setLoggedIn(false)
        setLoggingIn(false)
        setUserInfo(null)
    }

    /**
     * Update the user's info.
     * @param info - The user's information to be updated.
     * @returns None
     */
    const updateUserInfo = async (info) => {
        const user = await updateUser({
            variables: {
                input: { ...info, id: userInfo.id },
            },
        })

        setUserInfo(user.data.updateUser)
    }

    /**
     * Created a new user.
     * @param info - The information to create the new user.
     * @returns None
     */
    const createNewUser = async (info = { variables: { input: {} } }) => {
        if (web3.active && !!web3.account) {
            const id = uuidv4()

            await Auth.signUp({
                username: id,
                password: 'password',
                attributes: {
                    email: 'no-reply@mygateway.xyz',
                },
            })

            const user = await createUser({
                ...info,
                variables: {
                    input: {
                        id: id,
                        wallet: web3.account,
                        username: web3.account,
                        name: shortenAddress(web3.account),
                        init: false,
                        nonce: Math.round(Math.random() * 1000000),
                        pfp: await getFile('public/logo.png'),
                        ...(info.variables.input || {}),
                    },
                },
            })

            setUserInfo(user.data.createUser)
        }
    }

    /**
     * Signs in a user on Cognito.
     * @returns The user's information.
     */
    const signIn = async () => {
        try {
            !web3.active && (await activateWeb3())
            setLoggingIn(true)

            const { data } = await getNonce(web3.account)

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

            if (!res.signInUserSession) {
                setLoggingIn(false)
                alert('An error occurred on sign in, try again later')
            }

            setLoggingIn(false)

            return userInfo
        } catch (err) {
            console.error(err)
            setLoggingIn(false)
        }
    }

    /* If the user has their wallet connected, get the user's info from the database. */
    useEffect(() => {
        const callback = async () => {
            if (web3.active && web3.account) {
                const userDB = userBACalled
                    ? await refetch({
                          wallet: web3.account,
                      })
                    : await getUserByAddress({
                          variables: {
                              wallet: web3.account,
                          },
                      })

                if (!!userDB.data.getUserByAddress.items.length) {

                    // TODO: remove
                    setUserInfo({
                        ...userDB.data.getUserByAddress.items[0],
                        isAdmin: true
                    })
                } else {
                    await createNewUser()
                }

                setWalletConnected(true)
            }
        }

        callback()
    }, [web3.account, web3.active])

    /* If the user is logged in, check if the user's wallet is connected. If the user's wallet is
    connected, set the walletConnected state to true. */
    useEffect(() => {
        const callback = async () => {
            const { username } = await Auth.currentAuthenticatedUser()

            if (userInfo) {
                if (username === userInfo.id) {
                    setWalletConnected(true)
                } else {
                    Auth.signOut().then(() => {
                        setLoggedIn(false)
                        setLoggingIn(false)
                    })
                }
            }
        }

        callback()
    }, [web3.account])

    /* The useEffect hook is used to run a function after the component mounts.
    
    The callback function is an async function that will try to get the current user's username and
    signInUserSession.
    
    If the username is not null, the user is logged in.
    
    If the username is null, the user is not logged in.
    
    The setUserInfo function is used to set the userInfo state to the user's information.
    
    The setLoggedIn function is used to set the loggedIn state to true if the user is logged in.*/
    useEffect(() => {
        const callback = async () => {
            try {
                const { username, signInUserSession } =
                    await Auth.currentAuthenticatedUser()

                if (username && signInUserSession) {
                    const userDB = await getUser({
                        variables: {
                            id: username,
                        },
                    })
                    setUserInfo({
                        ...userDB.data.getUser,
                        ...getUserGroups(signInUserSession),
                    })
                    setLoggedIn(true)
                }
            } catch (e) {
                console.log(e)
            }
        }

        callback()
    }, [])

    /**
     * When the user signs in, get the user's information from the database and set it in the state.
     * When the user signs out, set states to false.
     * @returns None
     */
    const listener = async ({ payload: { event, data } }) => {
        console.log('event', event)
        switch (event) {
            case 'signIn':
                /*
                const userDB = await getUser({
                    variables: {
                        id: data.username,
                    },
                })
                */
                setUserInfo({
                    ...userInfo,
                    ...getUserGroups(data.signInUserSession),
                })
                setLoggedIn(true)
                break
            case 'signOut':
                setLoggedIn(false)
                setLoggingIn(false)
                break
            default:
        }
    }

    useEffect(() => {
        Hub.listen('auth', listener)
        return () => Hub.remove('auth', listener)
    })

    return (
        <Provider
            value={{
                signIn,
                loggedIn,
                walletConnected,
                ...(loggedIn || walletConnected ? { userInfo } : {}),
                loggingIn,
                updateUserInfo,
                userSignOut,
                wallet: web3.wallet,
                activateWeb3,
                loadingWallet,
            }}
        >
            {children}
        </Provider>
    )
}
