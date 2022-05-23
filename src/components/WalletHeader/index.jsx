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
import { useNavigate } from 'react-router-dom';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

const Wallet = (props) => {
    const { loggedIn, loggingIn, activateWeb3, loadingWallet, userInfo } =
        useAuth();
    const { active, account } = useWeb3React();
    const [hidden, setHidden] = useState(false);

    const [showModal, setShowModal] = useState(false);
    return (
        <Styled.Container>
            <Styled.ConnectToWallet
                onClick={active ? () => setHidden(!hidden) : activateWeb3}
            >
                <Styled.ConnectText>
                    {(loggingIn || loadingWallet) && (
                        <Styled.SpinningLoader color='white' />
                    )}{' '}
                    {active
                        ? userInfo?.username
                            ? `@${userInfo.username}`
                            : shortenAddress(account, 4, 12)
                        : 'Connect To Wallet'}
                    {userInfo?.username && (hidden ? (
                        <GoChevronUp
                            color='#FE02B9'
                            style={{ marginLeft: 10 }}
                        />
                    ) : (
                        <GoChevronDown
                            color='#FE02B9'
                            style={{ marginLeft: 10 }}
                        />
                    ))}
                </Styled.ConnectText>
            </Styled.ConnectToWallet>
            {hidden ? <DropDown toggle={setHidden} /> : null}
        </Styled.Container>
    );
};

export default Wallet;
