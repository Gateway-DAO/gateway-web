import * as Styled from './style'

import { useHistory } from 'react-router'
import useAdmin from '../../hooks/useAdmin'
import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from '@ethersproject/bignumber'
import { FaPencilAlt } from 'react-icons/fa'

const NewCard = (props) => {
    const web3 = useWeb3React()
    useEffect(() => {
        if (props.tokenAddress) {
            const getBalance = async (tokenAddress) =>
                web3.active &&
                web3.library &&
                setBalance(await web3.library.getBalance(tokenAddress))

            getBalance(props.tokenAddress)
        }
    }, [web3.active])

    const [balance, setBalance] = useState(BigNumber.from(0))
    const { isAdmin } = useAdmin(props.whitelistedAddresses)
    const [showEditModal, setShowEditModal] = useState(false)

    const toggleEditModal = () => setShowEditModal(!showEditModal)
    const history = useHistory()
    const navigate = (e) => {
        history.goBack()
    }
    // useState Hook to change betweenn Profile Dom And Fedd Dom
    const [profileAndFeed, setProfileAndFeed] = useState(true)

    return (
        <Styled.Container>
            <Styled.CardContainer>
                <Styled.CardBanner src={props?.backgroundURL} />
                <Styled.BackHomeButton onClick={(e) => navigate()}>
                    <Styled.BackHomeButtonText>
                        &#8592;
                    </Styled.BackHomeButtonText>
                </Styled.BackHomeButton>
                <Styled.DAOProfileContainer>
                    <Styled.Logo src={props?.logoURL} />
                    <Styled.Title>{props?.name}</Styled.Title>
                </Styled.DAOProfileContainer>
                <Styled.ProfileAndFeedContainer>
                    <Styled.ProfileDiv>
                        <Styled.SelectedTab
                            showActive={profileAndFeed}
                            onClick={() => setProfileAndFeed(!profileAndFeed)}
                        >
                            Profile
                        </Styled.SelectedTab>
                        <Styled.SelectedTab
                            showActive={!profileAndFeed}
                            onClick={() => setProfileAndFeed(!profileAndFeed)}
                        >
                            Feed
                        </Styled.SelectedTab>
                    </Styled.ProfileDiv>
                    {web3.active && (
                        <Styled.TokenHoldings>
                            <Styled.Text>
                                Your token holdings is{' '}
                                <Styled.BalanceText>
                                    {balance.toNumber()} $
                                    {props?.symbol?.toUpperCase()}
                                </Styled.BalanceText>
                            </Styled.Text>
                        </Styled.TokenHoldings>
                    )}
                </Styled.ProfileAndFeedContainer>
            </Styled.CardContainer>
        </Styled.Container>
    )
}

export default NewCard
