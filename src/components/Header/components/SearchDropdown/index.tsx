import { useEffect } from 'react';
import * as Styled from './style';
import { useNavigate } from 'react-router-dom';

// queries
import useSearchDAO from '../../../../api/database/useSearchDAO';
import useSearchUsers from '../../../../api/database/useSearchUser';
import useSearchGates from '../../../../api/database/useSearchGates';
import Loader from '../../../Loader';

interface Props {
	query: string;
}

export default function SearchDropdown({ query }: Props) {
	const navigate = useNavigate();

	const {
		data: searchDao,
		loading: searchDaoLoading
	} = useSearchDAO({
		variables: {
			limit: 3,
			from: 0,
			filter: {
				name: {
					matchPhrasePrefix: query
				}
			}
		},
	});

	const {
		data: searchUser,
		loading: searchUserLoading
	} = useSearchUsers({
		variables: {
			limit: 3,
			from: 0,
			filter: {
				name: {
					matchPhrasePrefix: query
				}
			}
		},
	});

	const {
		data: searchGate,
		loading: searchGateLoading
	} = useSearchGates({
		variables: {
			limit: 3,
			from: 0,
			filter: {
				name: {
					matchPhrasePrefix: query
				}
			}
		},
	});

	const goToAll = () => {
		navigate(`/search/daos?query=${query}`);
	}

	return (
		<Styled.Container>
			<Styled.DropdownList>
				{
					(searchDaoLoading || searchUserLoading || searchGateLoading) &&
					<Styled.LoadingBox>
						<Loader color='#170627' size={35} />
					</Styled.LoadingBox>
				}
				{
					!searchDaoLoading &&
					!searchUserLoading &&
					!searchGateLoading &&
					!searchDao.searchDAOs?.items.length &&
					!searchUser.searchUsers?.items.length &&
					!searchGate.searchGates?.items.length &&
					<Styled.Text>{`There is no "${query}" on our records :/`}</Styled.Text>
				}
				{searchDao && searchDao.searchDAOs?.items.map((item, idx) => (
					<Styled.DropdownItem key={idx} onClick={() => navigate(`/dao/${item.dao}`)}>
						<Styled.Img src={item.logoURL}></Styled.Img>
						<Styled.Name>&nbsp;{item.name}</Styled.Name>
						<Styled.Category>&nbsp;•&nbsp;DAO</Styled.Category>
					</Styled.DropdownItem>
				))}
				{searchUser && searchUser.searchUsers?.items.map((item, idx) => (
					<Styled.DropdownItem key={idx} onClick={() => navigate(`/profile/${item.username}`)}>
						<Styled.Img src={item.pfp}></Styled.Img>
						<Styled.Name>&nbsp;{item.name}</Styled.Name>
						<Styled.Info>
							<Styled.Username>&nbsp;@{item.username}</Styled.Username>
							<Styled.Category>&nbsp;•&nbsp;User</Styled.Category>
						</Styled.Info>
					</Styled.DropdownItem>
				))}
				{searchGate && searchGate.searchGates?.items.map((item, idx) => (
					<Styled.DropdownItem key={idx} onClick={() => navigate(`/gate/${item.id}?toSearch=true&viewAsMember=false`)}>
						<Styled.Img src={item.badge.ipfsURL}></Styled.Img>
						<Styled.Name>&nbsp;{item.name}</Styled.Name>
						<Styled.Category>&nbsp;•&nbsp;Gate</Styled.Category>
					</Styled.DropdownItem>
				))}
			</Styled.DropdownList>
			<Styled.DropdownFooter>
				<Styled.ShowAll onClick={goToAll}>See all results</Styled.ShowAll>
			</Styled.DropdownFooter>
		</Styled.Container>
	)
}
