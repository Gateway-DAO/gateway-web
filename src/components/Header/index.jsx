import * as Styled from './style';
import logo from '../../assets/Gateway.svg';
import useMediaQueries from '../../hooks/useMediaQueries';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useRef, useMemo, useEffect } from 'react';
import { useLocation, useClickAway } from 'react-use';
import { SOCIALS } from '../../utils/constants';

// components
import Wallet from '../WalletHeader';
import SearchDropdown from "./components/SearchDropdown";

var timeOut = null;

const Header = (props) => {
	const { xs } = useMediaQueries();
	const location = useLocation();
	const navigate = useNavigate();
	const { tab } = useParams();

	const params = new URLSearchParams(location.search);
	const searchQuery = params.get("query");

	const [flagDropdown, setFlagDropdown] = useState(false);
	const [filterQuery, setFilterQuery] = useState("");
	const [query, setQuery] = useState("");

	const dropdownRef = useRef(null);

	const search = (e) => {
		e.target.value && setFlagDropdown(true);
		if (timeOut !== null) {
			clearTimeout(timeOut);
		}

		timeOut = setTimeout(() => {
			setFilterQuery(e.target.value);
		}, 500);

		!e.target.value && setFlagDropdown(false);

		if (e.key == 'Enter') {
			navigate(`/search/${tab}${query && `?query=${query}`}`);
		}
	}

	useClickAway(dropdownRef, () => {
		setFlagDropdown(false);
	});

	useEffect(() => {
		setQuery(location.pathname.includes('/search') && searchQuery || "")
		setFilterQuery(location.pathname.includes('/search') && searchQuery || "")
	}, [searchQuery])

	const SearchDropDownComponent = useMemo(() => () => flagDropdown && <SearchDropdown query={filterQuery} />, [
		filterQuery,
		flagDropdown
	])

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
					<Styled.SearchBox ref={dropdownRef}>
						<Styled.SearchInputBox>
							<Styled.SearchInput
								type='text'
								placeholder='Search'
								value={query || ""}
								onChange={(e) => setQuery(e.target.value)}
								onKeyUp={search}
								onFocus={(e) => e.target.value && setFlagDropdown(true)}
							/>
							<Styled.WrappedFiSearch />
						</Styled.SearchInputBox>
						<SearchDropDownComponent />
					</Styled.SearchBox>
					{!xs || (
						<Styled.GroupLink>
							<Styled.OptionLink to='/search/daos'>
								<Styled.Text color='#E5E5E5'>DAOs</Styled.Text>
							</Styled.OptionLink>
							<Styled.OptionLink to='/search/gates'>
								<Styled.Text color='#E5E5E5'>Gates</Styled.Text>
							</Styled.OptionLink>
							<Styled.OptionLink to='/search/users'>
								<Styled.Text color='#E5E5E5'>
									People
								</Styled.Text>
							</Styled.OptionLink>
							<Styled.OptionAnchor
								href={SOCIALS.Discord}
								target='__blank'
							>
								<Styled.Text color='#E5E5E5'>
									Join Discord
								</Styled.Text>
							</Styled.OptionAnchor>
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
