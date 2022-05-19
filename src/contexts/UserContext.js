import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Web3
import { shortenAddress } from '../utils/web3';
import { useWeb3React } from '@web3-react/core';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Portis from '@portis/web3';

// GraphQL
import { useModal } from './ModalContext';
import { Web3ModalConnector } from '../utils/Web3ModalConnector';
import { usernameGenerator } from '../utils/functions';
import { useGetUserByAddressLazyQuery, useUpdateUserMutation, useCreateUserMutation, useUpdateSocialsMutation} from '../graphql';
import { useNavigate } from 'react-router-dom';
// import use3ID from '../hooks/use3ID';

export const userContext = createContext({});
const { Provider } = userContext;

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
    return useContext(userContext);
};

/**
 * The `useSignedAuth` hook returns the `userContext` object, but AWS-signed in.
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
export const useSignedAuth = (deps = []) => {
    const context = useContext(userContext);

    const testers = [context.walletConnected, !context.loggedIn, ...deps];

    useEffect(() => {
        testers.every((val) => val) && context.signIn();
    }, [context.walletConnected, context.loggedIn, ...deps]);

    return context;
};

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
    // Hooks
    const web3 = useWeb3React();
    const navigate = useNavigate();
    // const threeID = use3ID();
    const { showErrorModal } = useModal();

    // Database
    const [getUserByAddress, { data: fetchedUserData }] = useGetUserByAddressLazyQuery({
        variables: {
            wallet: web3.account,
        }
    });
    const [updateUser] = useUpdateUserMutation();
    const [createUser] = useCreateUserMutation();
    const [updateSocials] = useUpdateSocialsMutation();
    
    /* State */
    const [loggedIn, setLoggedIn] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [loadingWallet, setLoadingWallet] = useState(false);
    const [userInfo, setUserInfo] = useState(
        fetchedUserData?.users[0] || null
    );

    /**
     * Activates Metamask/injected wallet provider.
     * @returns boolean
     */
    const activateWeb3 = async () => {
        try {
            setLoadingWallet(true);

            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: '19128174ace8471f88c08ca304b087e9', // required
                    },
                },
                portis: {
                    package: Portis, // required
                    options: {
                        id: '05880af7-bb63-4795-b558-4b6f9ba21288', // required
                    },
                },
            };

            const connector = new Web3ModalConnector({
                providerOptions,
                cacheProvider: true,
            });

            await web3.activate(
                connector,
                (error) => {
                    throw error;
                },
                true
            );

            setLoadingWallet(false);
            localStorage.setItem('gateway-wallet', '1');

            return true;
        } catch (err) {
            console.log(`Error connecting to wallet: ${err}`);

            setLoadingWallet(false);
            localStorage.setItem('gateway-wallet', '0');

            return false;
        }
    };

    /**
     * Signs a user out of the platform, on Cognito.
     * @returns None
     */
    const userSignOut = async () => {
        await web3.deactivate();
        localStorage.setItem('gateway-wallet', '0');
        setLoggedIn(false);
        setLoggingIn(false);
        setUserInfo(null);
    };

    /**
     * Update the user's info.
     * @param info - The user's information to be updated.
     * @returns None
     */
    const updateUserInfo = async (info) => {
        const { socials, ...newInfo } = info;
        await updateUser({
            variables: {
                id: userInfo?.id || info?.id,
                set: newInfo,
            },
        });

        if (socials) {
            await updateSocials({
                variables: {
                    objects: socials
                }
            })
        }

        setUserInfo((prev) => ({
            ...prev,
            ...info,
        }));
    };

    /**
     * Created a new user.
     * @param info - The information to create the new user.
     * @returns None
     */
    const createNewUser = async (info = { variables: { input: {} } }) => {
        if (web3.active && !!web3.account) {
            const user = await createUser({
                ...info,
                variables: {
                    object: {
                        wallet: web3.account,
                        username: usernameGenerator(),
                        name: shortenAddress(web3.account),
                        init: false,
                        pfp: `https://api.staging.mygateway.xyz/storage/file?key=logo.png`,
                        ...(info.variables.input || {}),
                    },
                },
            });

            setUserInfo(user.data.insert_users_one);

            return user.data.insert_users_one;
        }
    };

    /**
     * Signs in a user on Cognito.
     * @returns The user's information.
     */
    const signIn = () => {
        const callback = async () => {
            !web3.active && (await activateWeb3());

            // TODO: implement authentication system
        };

        setLoggingIn(true);
        callback().catch((err) => {
            showErrorModal(
                'An error occurred while signing in. Please try again later.'
            );
            console.log(err);
        });
        setLoggingIn(false);
    };

    /* If the user has their wallet connected, get the user's info from the database. */
    useEffect(() => {
        const callback = async () => {
            // TODO: implement authentication method
            if (web3.active && web3.account) {
                // 1. fetch/create user based on the wallet
                const userDB = await getUserByAddress({
                    variables: {
                        wallet: web3.account,
                    },
                });

                if (userDB.data.users.length > 0) {
                    setUserInfo({
                        ...userDB.data.users[0],
                        isAdmin: false,
                    });
                } else {
                    await createNewUser();
                }

                setWalletConnected(true);
            }
        };

        setLoggingIn(true);
        callback();
        setLoggingIn(false);
    }, [web3.account, web3.active]);

    useEffect(() => {
        JSON.parse(localStorage.getItem('gateway-wallet')) && activateWeb3();
    }, []);

    const value = React.useMemo(
        () => ({
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
        }),
        [
            walletConnected,
            userInfo,
            web3.wallet,
            loadingWallet,
            loggedIn,
            loggingIn,
        ]
    );

    return <Provider value={value}>{children}</Provider>;
};
