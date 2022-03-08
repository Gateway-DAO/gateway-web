// Libraries/components
import React from 'react';
import DropDown from './component/DropBox';
import WrongNetworkModal from '../Modal/WrongNetworkModal';

// Styling
import * as Styled from './style';

// Web3
import { shortenAddress, SUPPORTED_CHAINS } from '../../utils/web3';

// Hooks
import { useAuth } from '../../contexts/UserContext';
import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import { Auth } from 'aws-amplify';

Auth.configure({
    oauth: {
        domain: 'auth-dev.mygateway.xyz',
        scope: ['email', 'openid'],
        redirectSignIn: 'http://localhost:3000/auth',
        redirectSignOut: 'http://localhost:3000/sign-out',
        responseType: 'code',
        attributes: {
            username: 'sub',
        },
    },
});

const Wallet = (props) => {
    const { loggedIn, loggingIn, activateWeb3, loadingWallet } = useAuth();
    const { active, account } = useWeb3React();
    const [hidden, setHidden] = useState(false);
    const [wrong, setWrong] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    // useEffect(() => !active && activateWeb3(), []);

    useEffect(() =>
        window.ethereum.on('chainChanged', (chain) =>
            setWrong(!SUPPORTED_CHAINS.includes(parseInt(chain, 16)))
        )
    );

    if (wrong && !loggedIn) {
        return (
            <>
                <WrongNetworkModal show={showModal} toggle={toggleModal} />
                <Styled.ConnectToWallet
                    wrong={true}
                    onClick={(e) => setShowModal(true)}
                >
                    <Styled.ConnectText>WRONG NETWORK</Styled.ConnectText>
                </Styled.ConnectToWallet>
            </>
        );
    }

    return (
        <>
            <Styled.ConnectToWallet
                onClick={
                    active
                        ? () => setHidden(!hidden)
                        : () => Auth.federatedSignIn({ provider: 'Discord' })
                }
            >
                <Styled.ConnectText>
                    {(loggingIn || loadingWallet) && (
                        <Styled.SpinningLoader color='white' />
                    )}{' '}
                    {active
                        ? shortenAddress(account, 4, 12)
                        : 'Connect To Wallet'}
                </Styled.ConnectText>
            </Styled.ConnectToWallet>
            {hidden ? <DropDown toggle={setHidden} /> : null}
        </>
    );
};

export default Wallet;
