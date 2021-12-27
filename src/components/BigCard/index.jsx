import * as Styled from './style'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import useAdmin from '../../hooks/useAdmin'
import React, { useState, useEffect, useRef } from 'react'
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
//components
import Plugins from './components/Plugins'
import Members from './components/Members'

// Web3
import { ethers } from 'ethers'
import ERC20_ABI from '../../utils/abis/ERC20.json'
import Gates from './components/Gates'

// chain Image
import avalanche from '../../assets/avalanche-avax-logo.png'
import binance from '../../assets/binance-coin-bnb-logo.png'
import btc from '../../assets/BTC_Logo.png'
import ethereum from '../../assets/Ethereum-icon-purple.png'
import near from '../../assets/near-protocol-near-logo.png'
import polygon from '../../assets/polygon-matic-logo.png'
import solana from '../../assets/solana-sol-logo.png'

const NewCard = (props) => {
    const web3 = useWeb3React()
    useEffect(() => {
        if (props.tokenAddress && props.showTokenFeed) {
            const getBalance = async (tokenAddress) => {
                const contract = new ethers.Contract(
                    tokenAddress,
                    ERC20_ABI,
                    web3.library
                )
                const balance =
                    (await contract.balanceOf(web3.account)) /
                    10 ** (await contract.decimals())
                console.log(balance)
                setBalance(parseFloat(balance))
            }

            web3.active && web3.library && getBalance(props.tokenAddress)
        }
    }, [web3.active, props.id])

    const [balance, setBalance] = useState(0)
    const { isAdmin } = useAdmin(props.whitelistedAddresses)
    const [showEditModal, setShowEditModal] = useState(false)
    const iconHover = useRef(null)
    const toggleEditModal = () => setShowEditModal(!showEditModal)
    const history = useHistory()
    const navigate = (e) => {
        history.goBack()
    }
    // useState Hook to change betweenn Profile Dom And Fedd Dom
    const [activeTab, setActiveTab] = useState('profile')

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
    const onHover = () => {
        console.log(iconHover.current.id)
    }

    const removeHover = () => {}

    const socials = props.socials.map((social) => {
        switch (social.network) {
            case 'discord':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url} target="_blank">
                            <FaDiscord />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'twitter':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url} target="_blank">
                            <FaTwitter />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'website':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url} target="_blank">
                            <FiGlobe />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'medium':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url} target="_blank">
                            <FaMedium />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'github':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url} target="_blank">
                            <FaGithub />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'telegram':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url} target="_blank">
                            <FaTelegram />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'chat':
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url}>
                            <BsChatTextFill />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            default:
                return (
                    <Styled.Social>
                        <Styled.SocialLink href={social.url}>
                            <FaLink />
                        </Styled.SocialLink>
                    </Styled.Social>
                )
        }
    })
    const chains =
        props.chains &&
        Object.keys(props.chains).map((key) => {
            switch (props.chains[key]) {
                case 'ethereum':
                    return (
                        <Styled.Chain
                            ref={iconHover}
                            id="Ethereum"
                            onMouseEnter={onHover}
                            onMouseLeave={removeHover}
                        >
                            <Styled.ChainLink
                                to={`/search/${props.chains[key]}`}
                            >
                                <img
                                    src={ethereum}
                                    width="22px"
                                    height="22px"
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    )
                case 'solana':
                    return (
                        <Styled.Chain
                            ref={iconHover}
                            id="Solana"
                            onMouseEnter={onHover}
                        >
                            <Styled.ChainLink
                                to={`/search/${props.chains[key]}`}
                            >
                                <img src={solana} width="22px" height="22px" />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    )
                case 'Polygon':
                    return (
                        <Styled.Chain
                            ref={iconHover}
                            id="Polygon"
                            onMouseEnter={onHover}
                        >
                            <Styled.ChainLink
                                to={`/search/${props.chains[key]}`}
                            >
                                <img src={polygon} width="22px" height="22px" />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    )
                case 'NEAR':
                    return (
                        <Styled.Chain
                            ref={iconHover}
                            id="NEAR"
                            onMouseEnter={onHover}
                        >
                            <Styled.ChainLink
                                to={`/search/${props.chains[key]}`}
                            >
                                <img src={near} width="22px" height="22px" />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    )
                case 'Avalanche':
                    return (
                        <Styled.Chain
                            ref={iconHover}
                            id="Avalanche"
                            onMouseEnter={onHover}
                        >
                            <Styled.ChainLink
                                to={`/search/${props.chains[key]}`}
                            >
                                <img
                                    src={avalanche}
                                    width="22px"
                                    height="22px"
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    )
                case 'Binance':
                    return (
                        <Styled.Chain>
                            <Styled.ChainLink
                                to={`/search/${props.chains[key]}`}
                            >
                                <img
                                    src={binance}
                                    width="22px"
                                    height="22px"
                                    ref={iconHover}
                                    id="Binance"
                                    onMouseEnter={onHover}
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    )
                case 'Bitcoin':
                    return (
                        <Styled.Chain ref={iconHover}>
                            <Styled.ChainLink
                                to={`/search/${props.chains[key]}`}
                            >
                                <img
                                    src={btc}
                                    width="22px"
                                    height="22px"
                                    ref={iconHover}
                                    id="Bitcoin"
                                    onMouseEnter={onHover}
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    )
                default:
                    return ''
            }
        })

    const ActiveTab = () => {
        switch (activeTab) {
            case 'profile':
                return <Profile {...props} />
            case 'feed':
                return <Feed {...props} />
            case 'members':
                return <Members />
            case 'gates':
                return <Gates />
            case 'Plugins':
                return <Plugins />
            default:
                return <Profile {...props} />
        }
    }
    // console.log(props);
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
                                {web3.active &&
                                    props.tokenAddress &&
                                    props.showTokenFeed && (
                                        <Styled.TokenHolding>
                                            <Styled.TokenText>
                                                {balance} $
                                                {props.symbol.toUpperCase()}
                                                <span
                                                    style={{
                                                        marginLeft: '37px',
                                                    }}
                                                >
                                                    <img
                                                        src={METAMASK_FOX}
                                                        alt="meta mask icon"
                                                    />
                                                </span>
                                            </Styled.TokenText>
                                        </Styled.TokenHolding>
                                    )}
                                {chains}
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
                            showActive={activeTab === 'profile'}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile
                        </Styled.SelectedTab>
                        <Styled.SelectedTab
                            showActive={activeTab === 'feed'}
                            onClick={() => setActiveTab('feed')}
                        >
                            Discussion
                        </Styled.SelectedTab>
                        <Styled.SelectedTab
                            showActive={activeTab === 'gates'}
                            onClick={() => setActiveTab('gates')}
                        >
                            Gates
                        </Styled.SelectedTab>

                        <Styled.SelectedTab
                            showActive={activeTab === 'members'}
                            onClick={() => setActiveTab('members')}
                        >
                            Members
                        </Styled.SelectedTab>

                        <Styled.SelectedTab
                            showActive={activeTab === 'Plugins'}
                            onClick={() => setActiveTab('Plugins')}
                        >
                            Plugins
                        </Styled.SelectedTab>
                    </Styled.ProfileDiv>
                </Styled.ProfileAndFeedContainer>
                {/* {activeTab === 'profile' ? (
                    <Profile {...props} />
                ) : activeTab === 'feed' ? (
                    <Feed cardName={props.id} />
                ) : <Onboarding/>} */}
                <ActiveTab />
                <RelatedDAOSection
                    categories={props.categories}
                    name={props.name}
                />
            </Styled.DaoWrapper>
        </>
    )
}

export default NewCard
