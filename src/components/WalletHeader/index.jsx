import React, { useState } from "react"
import styled from "styled-components";
import { shortenAddress, CONNECTORS } from "../../utils/web3";
import { useWeb3React } from "@web3-react/core";

const ConnectToWallet = styled.a`
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;

    border: double 1px transparent;
    background-image:   linear-gradient(#170627, #170627), 
                        linear-gradient(90deg, #FF00B8 0%, #7E3BDC 50.52%, #0075FF 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

const ConnectText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #E5E5E5;

    margin: 10px 20px;
`

const Wallet = props => {
    const { active, account, activate } = useWeb3React();

    return active ? 
        account && (
            <ConnectToWallet>
                <ConnectText>{shortenAddress(account, 4, 12)}</ConnectText>
            </ConnectToWallet>
        ) : (
            <ConnectToWallet onClick={e => activate(CONNECTORS.Injected)}>
                <ConnectText>Connect To Wallet</ConnectText>
            </ConnectToWallet>
        )
}

export default Wallet