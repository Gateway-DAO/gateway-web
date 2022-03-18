import * as Styled from './style';
import Wallet from '../WalletHeader';
import logo from '../../assets/Gateway.svg';
import useMediaQueries from '../../hooks/useMediaQueries';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-use';

const Header = (props) => {
    const { xs } = useMediaQueries();
    const location = useLocation();
    const { query: searchQuery } = useParams();
    const [query, setQuery] = useState(location.pathname.includes('/search') && searchQuery);
    const navigate = useNavigate();

    const search = (e) =>{
        if (e.key == 'Enter') {
            navigate(`/search/${query}`, { tab: 'DAOs' });
        }
    }

    return (
        <Styled.HeaderDiv>
            <Styled.LogoBox>
                <Styled.Logo to='/'>
                    <img src={logo} alt='Gateway Logo' />
                    {!xs || <Styled.LogoText>GATEWAY</Styled.LogoText>}
                </Styled.Logo>
                {/* {!xs || <a href="https://readymag.com/u13829565/499896/" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">What are DAOs?</Styled.Text></a>}
                {!xs || <a href="https://forms.gle/xxTYYVqok8oT3Ku47" target="_blank" style={{textDecoration:"none"}} rel="noreferrer"><Styled.Text color="#FF00B8">Add Your Community</Styled.Text></a>} */}
                <Styled.HeaderContent>
                    <Styled.SearchInputBox>
                        <Styled.SearchInput
                            type='text'
                            placeholder='Search DAO'
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
                                <Styled.Text color='#FFFFFF'>DAOs</Styled.Text>
                            </Styled.OptionLink>
                            <Styled.OptionLink
                                to='/search'
                                state={{ tab: 'Gates' }}
                            >
                                <Styled.Text color='#FFFFFF'>Gates</Styled.Text>
                            </Styled.OptionLink>
                            <Styled.OptionLink
                                to='/search'
                                state={{ tab: 'Users' }}
                            >
                                <Styled.Text color='#FFFFFF'>
                                    People
                                </Styled.Text>
                            </Styled.OptionLink>
                            <Styled.OptionLink
                                to='//discord.gg/78wuJuKFVK'
                                target='__blank'
                            >
                                <Styled.Text color='#FFFFFF'>
                                    Join Discord
                                </Styled.Text>
                            </Styled.OptionLink>
                        </Styled.GroupLink>
                    )}
                </Styled.HeaderContent>
            </Styled.LogoBox>
            <Styled.WalletBox>
                <Wallet />
            </Styled.WalletBox>
        </Styled.HeaderDiv>
    );
};

export default Header;
