import React from "react"
import { shortenAddress } from "../../utils/web3";
import { useAuth } from "../../contexts/UserContext"
import * as Styled from "./style"
import { useHistory } from "react-router";

const Wallet = props => {
    const { signIn, loggedIn, userInfo, loggingIn } = useAuth();
    const history = useHistory();

    return loggedIn ? (
            <Styled.ConnectToWallet onClick={() => history.push("/profile")}>
                <Styled.ConnectText>{shortenAddress(userInfo.uid, 4, 12)}</Styled.ConnectText>
            </Styled.ConnectToWallet>
        ) : (
            <Styled.ConnectToWallet onClick={signIn}>
                <Styled.ConnectText>{ loggingIn && <Styled.SpinningLoader color="white" /> } Connect To Wallet</Styled.ConnectText>
            </Styled.ConnectToWallet>
        )
}

export default Wallet