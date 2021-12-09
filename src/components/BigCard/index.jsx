import * as Styled from './style'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import useAdmin from '../../hooks/useAdmin'
import React, { useState, useEffect } from 'react'
import RelatedDAOSection from './components/RelatedDAO'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from '@ethersproject/bignumber'
import EditCardModal from '../Modal/EditCardModal'
import {
    FaDiscord,
    FaTwitter,
    FaMedium,
    FaGithub,
    FaTelegram,
    FaLink,
    FaPencilAlt,
} from 'react-icons/fa'
import { FiGlobe } from 'react-icons/fi'
import { BsChatTextFill } from 'react-icons/bs'
import METAMASK_FOX from '../../assets/icons/MetaMaskFox.svg'
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

    const socials = Object.keys(props.socials).map((key) => {
        switch (key) {
            case 'discord':
                return (
                    <Styled.Social>
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            <FaDiscord />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'twitter':
                return (
                    <Styled.Social>
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            <FaTwitter />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'website':
                return (
                    <Styled.Social>
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            <FiGlobe />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'medium':
                return (
                    <Styled.Social>
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            <FaMedium />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'github':
                return (
                    <Styled.Social>
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            <FaGithub />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'telegram':
                return (
                    <Styled.Social>
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            <FaTelegram />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'chat':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={props.socials[key]}>
                            <BsChatTextFill />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            default:
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={props.socials[key]}>
                            <FaLink />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
        }
    })

    return (
        <>
            <Styled.DaoWrapper>
                <Modals />
                <Styled.ProfileInfoWrapper>
                    <Styled.ProfileInfoContainer>
                        <Styled.ProfileImageContainer src={props?.logoURL} />
                        <Styled.DaoBioInfo>
                            <Styled.DaoTagContainer>
                                {props.categories.map((e) => (
                                    <Styled.Category>
                                        <Styled.CategoryLink
                                            to={`/search/${e}`}
                                        >
                                            {e}
                                        </Styled.CategoryLink>
                                    </Styled.Category>
                                ))}
                            </Styled.DaoTagContainer>
                            <Styled.Title>
                                {props?.name}{' '}
                                <Styled.EditContainer>
                                    {isAdmin && (
                                        <FaPencilAlt
                                            onClick={toggleEditModal}
                                        />
                                    )}{' '}
                                </Styled.EditContainer>
                            </Styled.Title>
                            <Styled.SocialContainer>
                                {socials}
                                {web3.active && (
                                    props.tokenAddress && (
                                    <Styled.TokenHolding>
                                        <Styled.TokenText>
                                            {balance} $
                                            {props.symbol.toUpperCase()}
                                            <span
                                                style={{ marginLeft: '37px' }}
                                            >
                                                <img
                                                    src={METAMASK_FOX}
                                                    alt="meta mask icon"
                                                />
                                            </span>
                                        </Styled.TokenText>
                                    </Styled.TokenHolding> ) 
                                )}
                            </Styled.SocialContainer>
                        </Styled.DaoBioInfo>
                    </Styled.ProfileInfoContainer>
                    {props['related-daos'] && (
                        <Styled.SubDaoContainer>
                            <Styled.TextName>Sub DAOs</Styled.TextName>
                            {props['related-daos'].map((dao, idx) => {
                                return (
                                    <Link to={`/dao/${dao}`}>
                                        <Styled.SubDAOImg
                                            src={props.related[idx]}
                                            title={dao}
                                        />
                                    </Link>
                                )
                            })}
                        </Styled.SubDaoContainer>
                    )}
                </Styled.ProfileInfoWrapper>
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
                </Styled.ProfileAndFeedContainer>
                {profileAndFeed ? (
                    <Profile {...props} />
                ) : (
                    <Feed cardName={props.id} />
                )}
                <RelatedDAOSection
                    categories={props.categories}
                    name={props.name}
                />
            </Styled.DaoWrapper>
        </>
    )
}

export default NewCard
