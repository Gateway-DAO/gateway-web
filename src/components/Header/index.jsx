import * as Styled from './style';
import Wallet from '../WalletHeader';
import logo from '../../assets/Gateway.svg';
import useMediaQueries from '../../hooks/useMediaQueries';
import BellIcon from '../../theme/icons/Bell'
import Notifications from '../Notifications';
import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { useAuth } from '../../contexts/UserContext'

// API
import { useLazyQuery, gql } from '@apollo/client';
import { getUserByAddress as getUserByAddressQuery } from '../../graphql/queries';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-use';
import { SOCIALS } from '../../utils/constants';
import { ethers } from 'ethers';
import { fetchFollowersAndFollowings } from '../../api/cyberConnect';

const Header = (props) => {
    const { xs } = useMediaQueries();
    const location = useLocation();
    const { query: searchQuery } = useParams();
    const [query, setQuery] = useState(location.pathname.includes('/search') && searchQuery);
    const navigate = useNavigate();
    const { walletConnected, userInfo } = useAuth()
    const [showConnectionRequests, setShowConnectionRequests] = useState(false)
    const [pendingUserData, setPendingUserData] = useState([])

    const toggleConnectionRequests = () => setShowConnectionRequests(!showConnectionRequests)

    const [getUserByAddress, { loading, error, data }] = useLazyQuery(gql(getUserByAddressQuery));

    useAsyncEffect(async () => {
        if (walletConnected) {
            const data = await fetchFollowersAndFollowings(userInfo.wallet);
            const followers = data.data.identity.followers.list.map(f => f.address);
            const followings = new Set(data.data.identity.followings.list.map(f => f.address));
            const pending = followers.filter(f => !followings.has(f));
            const pendingUserData = await Promise.all(pending.map(async p => await getUserByAddress({ variables: { wallet: ethers.utils.getAddress(p) } })));
            setPendingUserData(pendingUserData[0].data.getUserByAddress.items);
        }
    }, [walletConnected, userInfo])

    const search = (e) => {
        if (e.key == 'Enter') {
            navigate(`/search/${query}`, { tab: 'DAOs' });
        }
    }

    return (
        <Styled.HeaderDiv>
            <Styled.LogoBox>
                <Styled.Logo to='/'>
                    <img src={logo} alt='Gateway Logo' />
                    {/* {!xs || <Styled.LogoText>GATEWAY</Styled.LogoText>} */}
                </Styled.Logo>
                {/* {!xs || <a href="https://readymag.com/u13829565/499896/" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">What are DAOs?</Styled.Text></a>}
                {!xs || <a href="https://forms.gle/xxTYYVqok8oT3Ku47" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">Add Your Community</Styled.Text></a>} */}
                <Styled.HeaderContent>
                    <Styled.SearchInputBox>
                        <Styled.SearchInput
                            type='text'
                            placeholder='Search'
                            value={query || ""}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={search}
                        />
                        <Styled.WrappedFiSearch />
                    </Styled.SearchInputBox>
                    {!xs || (
                        <Styled.GroupLink>
                            <Styled.OptionLink
                                to='/search'
                                state={{ tab: 'DAOs' }}
                            >
                                <Styled.Text color='#E5E5E5'>DAOs</Styled.Text>
                            </Styled.OptionLink>
                            <Styled.OptionLink
                                to='/search'
                                state={{ tab: 'Gates' }}
                            >
                                <Styled.Text color='#E5E5E5'>Gates</Styled.Text>
                            </Styled.OptionLink>
                            <Styled.OptionLink
                                to='/search'
                                state={{ tab: 'Users' }}
                            >
                                <Styled.Text color='#E5E5E5'>
                                    People
                                </Styled.Text>
                            </Styled.OptionLink>
                            <Styled.OptionLink
                                to='//discord.gg/78wuJuKFVK'
                                target='__blank'
                            >
                                <Styled.Text color='#E5E5E5'>
                                    Join Discord
                                </Styled.Text>
                            </Styled.OptionLink>
                        </Styled.GroupLink>
                    )}
                </Styled.HeaderContent>
            </Styled.LogoBox>
            {walletConnected && <Styled.NotificationBox>
                <BellIcon onClick={toggleConnectionRequests} size={40} hasNotifications={pendingUserData.length > 0} />
            </Styled.NotificationBox>}
            {showConnectionRequests && <Styled.NotificationCard >
                {<Notifications pendingUserData={pendingUserData} />}
            </Styled.NotificationCard>}
            <Styled.WalletBox>
                <Wallet />
            </Styled.WalletBox>
        </Styled.HeaderDiv>
    );
};

export default Header;
