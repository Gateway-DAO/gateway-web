/* eslint-disable @typescript-eslint/no-empty-function */
import * as Styled from './style';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import {
    FaDiscord,
    FaTwitter,
    FaMedium,
    FaGithub,
    FaTelegram,
    FaLink,
    FaPencilAlt,
} from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { BsChatTextFill } from 'react-icons/bs';
import useAdmin from '../../hooks/useAdmin';
import { createBrowserHistory } from "history";

//components
import Plugins from './components/Plugins';
// import Members from './components/Members';
import Profile from './components/Profiles';
// import Feed from './components/Feed';
import Gates from './components/Gates';
import EditCardModal from '../Modal/EditCardModal';

// Web3
import { ethers } from 'ethers';
import ERC20_ABI from '../../utils/abis/ERC20.json';
import { useWeb3React } from '@web3-react/core';

// Assets
import avalanche from '../../assets/avalanche-avax-logo.png';
import binance from '../../assets/binance-coin-bnb-logo.png';
import btc from '../../assets/BTC_Logo.png';
import ethereum from '../../assets/Ethereum-icon-purple.png';
import near from '../../assets/near-protocol-near-logo.png';
import polygon from '../../assets/polygon-matic-logo.png';
import solana from '../../assets/solana-sol-logo.png';
import METAMASK_FOX from '../../assets/icons/MetaMaskFox.svg';

const NewCard = (props) => {
    const web3 = useWeb3React();
    const navigate = useNavigate();
    const history = createBrowserHistory();
    const { isAdmin } = useAdmin(props.whitelistedAddresses);
    const [viewAsMember, setViewAsMember] = useState(!isAdmin);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchViewAsMember = searchParams.get('viewAsMember');

    useEffect(() => {
        if (props.tokenAddress && props.showTokenFeed) {
            const getBalance = async (tokenAddress) => {
                try {
                    const contract = new ethers.Contract(
                        tokenAddress,
                        ERC20_ABI,
                        web3.library
                    );
                    const balance =
                        (await contract.balanceOf(web3.account)) /
                        10 ** (await contract.decimals());
                    setBalance(parseFloat(balance));
                } catch (err) {
                    setBalance(0);
                }
            };
            web3.active && web3.library && getBalance(props.tokenAddress) && !searchViewAsMember && setViewAsMember(!isAdmin);
            !web3.active && setViewAsMember(true);
        }

        return () => {};
    }, [web3.active, props.id, props, searchViewAsMember]);

    const [balance, setBalance] = useState(0);
    const [showEditModal, setShowEditModal] = useState(false);
    const iconHover = useRef(null);
    const toggleEditModal = () => setShowEditModal(!showEditModal);

    const Modals = () => (
        <>
            {React.createElement(EditCardModal, {
                ...props,
                show: showEditModal,
                toggle: toggleEditModal,
                changeDAOData: props.changeDAOData,
            })}
        </>
    );

    const removeHover = () => {};

    const socials = props.socials ? props.socials?.map((social, idx) => {
        switch (social.network) {
            case 'discord':
                return (
                    <Styled.Social key={idx} data-title='Discord'>
                        <Styled.SocialLink href={social.url} target='_blank'>
                            <FaDiscord />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
            case 'twitter':
                return (
                    <Styled.Social key={idx} data-title='twitter'>
                        <Styled.SocialLink href={social.url} target='_blank'>
                            <FaTwitter size={20} />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
            case 'website':
                return (
                    <Styled.Social key={idx} data-title='website'>
                        <Styled.SocialLink href={social.url} target='_blank'>
                            <FiGlobe />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
            case 'medium':
                return (
                    <Styled.Social key={idx} data-title='medium'>
                        <Styled.SocialLink href={social.url} target='_blank'>
                            <FaMedium />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
            case 'github':
                return (
                    <Styled.Social key={idx} data-title='Github'>
                        <Styled.SocialLink href={social.url} target='_blank'>
                            <FaGithub />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
            case 'telegram':
                return (
                    <Styled.Social key={idx} data-title='Telegram'>
                        <Styled.SocialLink href={social.url} target='_blank'>
                            <FaTelegram />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
            case 'chat':
                return (
                    <Styled.Social key={idx} data-title='Chat'>
                        <Styled.SocialLink href={social.url}>
                            <BsChatTextFill />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
            default:
                return (
                    <Styled.Social key={idx} data-title='other social network'>
                        <Styled.SocialLink href={social.url}>
                            <FaLink />
                        </Styled.SocialLink>
                    </Styled.Social>
                );
        }
    }) : [];

    const chains =
        props.chains &&
        Object.keys(props.chains).map((key, idx) => {
            switch (props.chains[key]) {
                case 'ethereum':
                    return (
                        <Styled.Chain
                            key={idx}
                            ref={iconHover}
                            id='Ethereum'
                            onMouseLeave={removeHover}
                        >
                            <Styled.ChainLink
                                to={`/search/daos?query=${props.chains[key]}`}
                            >
                                <img
                                    src={ethereum}
                                    width='22px'
                                    height='22px'
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    );
                case 'solana':
                    return (
                        <Styled.Chain key={idx} ref={iconHover} id='Solana'>
                            <Styled.ChainLink
                                to={`/search/daos?query=${props.chains[key]}`}
                            >
                                <img src={solana} width='22px' height='22px' />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    );
                case 'Polygon':
                    return (
                        <Styled.Chain key={idx} ref={iconHover} id='Polygon'>
                            <Styled.ChainLink
                                to={`/search/daos?query=${props.chains[key]}`}
                            >
                                <img src={polygon} width='22px' height='22px' />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    );
                case 'NEAR':
                    return (
                        <Styled.Chain key={idx} ref={iconHover} id='NEAR'>
                            <Styled.ChainLink
                                to={`/search/daos?query=${props.chains[key]}`}
                            >
                                <img src={near} width='22px' height='22px' />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    );
                case 'Avalanche':
                    return (
                        <Styled.Chain key={idx} ref={iconHover} id='Avalanche'>
                            <Styled.ChainLink
                                to={`/search/daos?query=${props.chains[key]}`}
                            >
                                <img
                                    src={avalanche}
                                    width='22px'
                                    height='22px'
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    );
                case 'Binance':
                    return (
                        <Styled.Chain>
                            <Styled.ChainLink
                                key={idx}
                                to={`/search/daos?query=${props.chains[key]}`}
                            >
                                <img
                                    src={binance}
                                    width='22px'
                                    height='22px'
                                    ref={iconHover}
                                    id='Binance'
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    );
                case 'Bitcoin':
                    return (
                        <Styled.Chain key={idx} ref={iconHover}>
                            <Styled.ChainLink
                                to={`/search/daos?query=${props.chains[key]}`}
                            >
                                <img
                                    src={btc}
                                    width='22px'
                                    height='22px'
                                    ref={iconHover}
                                    id='Bitcoin'
                                />
                            </Styled.ChainLink>
                        </Styled.Chain>
                    );
                default:
                    return '';
            }
        });

    const ActiveTab = () => {
        switch (searchParams.get('tab')) {
            case 'profile':
                return <Profile {...props} viewAsMember={viewAsMember} />;
            /*
            case 'feed':
                return <Feed {...props} />;
            case 'members':
                return <Members daoName={props.name} />;
            */
            case 'gates':
                return <Gates {...props} viewAsMember={viewAsMember} />;
            case 'Plugins':
                return <Plugins {...props} />;
            default:
                return <Gates {...props} viewAsMember={viewAsMember} />;
        }
    };

    useEffect(() => { searchViewAsMember && setViewAsMember(JSON.parse(searchViewAsMember)) }, [searchViewAsMember]);

    return (
        <>
            <Styled.DaoWrapper>
                <Modals />
                <Styled.ProfileInfoWrapper>
                    <Styled.ProfileInfoContainer>
                        <Styled.ProfileImageContainer src={props?.logoURL} />
                        <Styled.DaoBioInfo>
                            <Styled.DaoTagContainer>
                                {props.categories.map((category, idx) => (
                                    <Styled.Category key={idx}>
                                        <Styled.CategoryLink
                                            to={`/search/daos?query=${category}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate('/search/daos');
                                                history.push('/search/daos', { categorySearch: [category] })
                                            }}
                                        >
                                            {category}
                                        </Styled.CategoryLink>
                                    </Styled.Category>
                                ))}
                            </Styled.DaoTagContainer>
                            <Styled.Title>
                                {props?.name}{' '}
                                <Styled.EditContainer>
                                    {(isAdmin && !viewAsMember) && (
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
                                                        alt='meta mask icon'
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
                                );
                            })}
                        </Styled.SubDaoContainer>
                    )}
                </Styled.ProfileInfoWrapper>
                <Styled.ProfileAndFeedContainer>
                    <Styled.ProfileDiv>
                        <Styled.SelectedTab
                            showActive={
                                searchParams.get('tab') === 'gates' ||
                                searchParams.get('tab') === null
                            }
                            onClick={() => setSearchParams({ tab: 'gates' })}
                        >
                            Gates
                        </Styled.SelectedTab>

                        <Styled.SelectedTab
                            showActive={searchParams.get('tab') === 'profile'}
                            onClick={() => setSearchParams({ tab: 'profile' })}
                        >
                            Profile
                        </Styled.SelectedTab>

                        {/*
                        <Styled.SelectedTab
                            showActive={searchParams.get('tab') === 'feed'}
                            onClick={() => setSearchParams({ tab: 'feed' })}
                        >
                            Discussion
                        </Styled.SelectedTab>
                        */}

                        {/*
                        <Styled.SelectedTab
                            showActive={searchParams.get('tab') === 'members'}
                            onClick={() => setSearchParams({ tab: 'members' })}
                        >
                            Members
                        </Styled.SelectedTab>
                        */}

                        {/*
                        <Styled.SelectedTab
                            showActive={activeTab === 'Plugins'}
                            onClick={() => setActiveTab('Plugins')}
                        >
                            Plugins
                        </Styled.SelectedTab>
                        */}
                    </Styled.ProfileDiv>
                    {isAdmin && (
                        <Styled.AdminAndMemberViewWrapper>
                            <Styled.ChangeViewButton
                                active={viewAsMember}
                                onClick={() => setViewAsMember(!viewAsMember)}
                            >
                                {viewAsMember
                                    ? `View AS ADMIN`
                                    : `View AS MEMBER`}
                            </Styled.ChangeViewButton>
                            {/* <Styled.ChangeViewButton
                                active={viewAsMember}
                                onClick={() => setViewAsMember(true)}
                            >
                                View AS MEMBER
                            </Styled.ChangeViewButton> */}
                        </Styled.AdminAndMemberViewWrapper>
                    )}
                </Styled.ProfileAndFeedContainer>
                {/* {activeTab === 'profile' ? (
                    <Profile {...props} />
                ) : activeTab === 'feed' ? (
                    <Feed cardName={props.id} />
                ) : <Onboarding/>} */}
                <ActiveTab />
            </Styled.DaoWrapper>
        </>
    );
};

export default NewCard;
