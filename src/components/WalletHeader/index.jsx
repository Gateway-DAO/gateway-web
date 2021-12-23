import React from 'react'
import { shortenAddress } from '../../utils/web3'
import { useAuth } from '../../contexts/UserContext'
import * as Styled from './style'
import { useHistory } from 'react-router'
import DropDown from './component/DropBox'
import { useState } from 'react'

const Wallet = (props) => {
    const { signIn, loggedIn, userInfo, loggingIn } = useAuth()
    const history = useHistory()
    const [hidden, setHidden] = useState(false)

    return loggedIn ? (
        <>
            <Styled.ConnectToWallet onClick={(e) => setHidden(!hidden)}>
                <Styled.ConnectText>
                    {shortenAddress(userInfo.wallet, 4, 12)}
                </Styled.ConnectText>
            </Styled.ConnectToWallet>
            {hidden ? <DropDown /> : null}
        </>
    ) : (
        <Styled.ConnectToWallet onClick={signIn}>
            <Styled.ConnectText>
                {loggingIn && <Styled.SpinningLoader color="white" />} Connect
                To Wallet
            </Styled.ConnectText>
        </Styled.ConnectToWallet>
    )
}

export default Wallet
