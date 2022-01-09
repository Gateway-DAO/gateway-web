// Libraries/components
import React from 'react'
import DropDown from './component/DropBox'
import WrongNetworkModal from '../Modal/WrongNetworkModal'

// Styling
import * as Styled from './style'

// Web3
import { shortenAddress, SUPPORTED_CHAINS } from '../../utils/web3'

// Hooks
import { useAuth } from '../../contexts/UserContext'
import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

const Wallet = (props) => {
    const { signIn, loggedIn, userInfo, loggingIn, activateWeb3, loadingWallet } = useAuth()
    const { active } = useWeb3React()
    const [hidden, setHidden] = useState(false)
    const [wrong, setWrong] = useState(!SUPPORTED_CHAINS.includes(parseInt(window.ethereum.chainId, 16)))
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => setShowModal(!showModal)

    useEffect(() => window.ethereum.on("chainChanged", chain => setWrong(!SUPPORTED_CHAINS.includes(parseInt(chain, 16)))))

    if (wrong && !loggedIn) {
        return (
            <>
                <WrongNetworkModal show={showModal} toggle={toggleModal} />
                <Styled.ConnectToWallet wrong={true} onClick={(e) => setShowModal(true)}>
                    <Styled.ConnectText>WRONG NETWORK</Styled.ConnectText>
                </Styled.ConnectToWallet>
            </>
        )
    }

    return loggedIn ? (
        <>
            <Styled.ConnectToWallet wrong={false} onClick={(e) => setHidden(!hidden)}>
                <Styled.ConnectText>
                    {shortenAddress(userInfo?.wallet, 4, 12)}
                </Styled.ConnectText>
            </Styled.ConnectToWallet>
            {hidden ? <DropDown /> : null}
        </>
    ) : (
        <Styled.ConnectToWallet onClick={active ? signIn : activateWeb3}>
            <Styled.ConnectText>
                {(loggingIn || loadingWallet) && <Styled.SpinningLoader color="white" />} {active ? "Sign In" : "Connect To Wallet"}
            </Styled.ConnectText>
        </Styled.ConnectToWallet>
    )
}

export default Wallet
