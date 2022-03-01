// Libraries/components
import React, { useState } from 'react';

// Styling
import * as Styled from './style';

// Web3
import { shortenAddress } from '../../utils/web3';

// Hooks
import { useAuth } from '../../contexts/UserContext';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

const WalletBody = (props) => {
    const { loggingIn, activateWeb3, loadingWallet } = useAuth();
    const { active, account } = useWeb3React();
    const [hidden, setHidden] = useState(false);

    useEffect(() => !active && activateWeb3(), []);

    return (
        <>
            <Styled.ConnectToWallet
                onClick={active ? () => setHidden(!hidden) : activateWeb3}
                borderd={props.borderd}
            >
                <Styled.ConnectText borderd={props.borderd}>
                    {(loggingIn || loadingWallet) && (
                        <Styled.SpinningLoader color='white' />
                    )}{' '}
                    {active
                        ? shortenAddress(account, 4, 12)
                        : props.title
                        ? props.title
                        : 'Connect To Wallet'}
                </Styled.ConnectText>
            </Styled.ConnectToWallet>
        </>
    );
};

export default WalletBody;
