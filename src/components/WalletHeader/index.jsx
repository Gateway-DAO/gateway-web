import React, { useContext } from "react"
import { shortenAddress } from "../../utils/web3";
import { useWeb3React } from "@web3-react/core";
import { useAuth } from "../../contexts/UserContext"
import * as Styled from "./style"

const Wallet = props => {
    const { signIn, loggedIn, userInfo, loggingIn } = useAuth();

    return loggedIn ? (
            <Styled.ConnectToWallet>
                <Styled.ConnectText>{shortenAddress(userInfo.uid, 4, 12)}</Styled.ConnectText>
            </Styled.ConnectToWallet>
        ) : (
            <Styled.ConnectToWallet onClick={signIn}>
                <Styled.ConnectText>{ loggingIn && <Styled.SpinningLoader color="white" /> } Connect To Wallet</Styled.ConnectText>
            </Styled.ConnectToWallet>
        )
}

export default Wallet