import React, { useContext } from "react"
import { shortenAddress } from "../../utils/web3";
import { useWeb3React } from "@web3-react/core";
import { userContext } from "../../contexts/UserContext"
import * as Styled from "./style"

const Wallet = props => {
    const { active, account } = useWeb3React();
    const { signIn, loggedIn } = useContext(userContext);

    return loggedIn ? (
            <Styled.ConnectToWallet>
                <Styled.ConnectText>{shortenAddress(account, 4, 12)}</Styled.ConnectText>
            </Styled.ConnectToWallet>
        ) : (
            <Styled.ConnectToWallet onClick={signIn}>
                <Styled.ConnectText>Connect To Wallet</Styled.ConnectText>
            </Styled.ConnectToWallet>
        )
}

export default Wallet