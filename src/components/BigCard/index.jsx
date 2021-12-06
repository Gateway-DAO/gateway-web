import * as Styled from './style'

import { useHistory } from 'react-router'
import useAdmin from '../../hooks/useAdmin'
import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from '@ethersproject/bignumber'
import { FaPencilAlt } from 'react-icons/fa'
import RelatedDAOSection from './components/RelatedDAO'
import EditCardModal from '../Modal/EditCardModal'

// Profile tab options
import Profile from './components/Profiles'
import Feed from './components/Feed'

// Web3
import { ethers } from 'ethers'
import ERC20_ABI from '../../utils/abis/ERC20.json'

const NewCard = (props) => {
    const web3 = useWeb3React()
    useEffect(() => {
        if (props.tokenAddress) {
            const getBalance = async (tokenAddress) => {
                const contract = new ethers.Contract(tokenAddress, ERC20_ABI, web3.library);
                const balance = await contract.balanceOf(web3.account) / 10**(await contract.decimals());
                console.log(balance);
                setBalance(parseFloat(balance))
            }

            web3.active && web3.library && getBalance(props.tokenAddress)
        }
    }, [web3.active, props.id])

    const [balance, setBalance] = useState(0)
    const { isAdmin } = useAdmin(props.whitelistedAddresses)
    const [showEditModal, setShowEditModal] = useState(false)

    const toggleEditModal = () => setShowEditModal(!showEditModal)
    const history = useHistory()
    const navigate = (e) => {
        history.goBack()
    }
    // useState Hook to change betweenn Profile Dom And Fedd Dom
    const [profileAndFeed, setProfileAndFeed] = useState(true)

    const Modals = () => (
        <>
            {React.createElement(EditCardModal, {
                ...props,
                show: showEditModal,
                toggle: toggleEditModal,
                changeDAOData: props.changeDAOData,
            })}
        </>
    )

    return (
        <React.Fragment>
            <Styled.Container>
                <Modals />
                <Styled.CardContainer>
                    <Styled.CardBanner src={props?.backgroundURL} />
                    <Styled.BackHomeButton onClick={(e) => navigate()}>
                        <Styled.BackHomeButtonText>
                            &#8592;
                        </Styled.BackHomeButtonText>
                    </Styled.BackHomeButton>
                    <Styled.DAOProfileContainer>
                        <Styled.Logo src={props?.logoURL} />
                        <Styled.Title>
                            {props?.name}
                            {isAdmin && (
                                <Styled.ProfileEditorIcon onClick={toggleEditModal} size={12} />
                            )}
                        </Styled.Title>
                    </Styled.DAOProfileContainer>
                    <Styled.ProfileAndFeedContainer>
                        <Styled.ProfileDiv>
                            <Styled.SelectedTab
                                showActive={profileAndFeed}
                                onClick={() =>
                                    setProfileAndFeed(!profileAndFeed)
                                }
                            >
                                Profile
                            </Styled.SelectedTab>
                            <Styled.SelectedTab
                                showActive={!profileAndFeed}
                                onClick={() =>
                                    setProfileAndFeed(!profileAndFeed)
                                }
                            >
                                Feed
                            </Styled.SelectedTab>
                        </Styled.ProfileDiv>
                        {web3.active && (
                            <Styled.TokenHoldings>
                                <Styled.Text>
                                    Your token holdings is{' '}
                                    <Styled.BalanceText>
                                        {balance} $
                                        {props?.symbol?.toUpperCase()}
                                    </Styled.BalanceText>
                                </Styled.Text>
                            </Styled.TokenHoldings>
                        )}
                    </Styled.ProfileAndFeedContainer>
                    {profileAndFeed ? <Profile {...props} /> : <Feed />}
                </Styled.CardContainer>
            </Styled.Container>
            <RelatedDAOSection
                categories={props.categories}
                name={props.name}
            />
        </React.Fragment>
    )
}

export default NewCard
