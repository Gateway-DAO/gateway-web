// Styling
import * as Styled from './style';
import * as SearchStyled from '../../style';

// Components
import UserCard from '../../../../components/UserCard';
import Loader from '../../../../components/Loader';
import Pagination from '../Pagination';

// Hooks
import { useEffect, useState } from 'react';
import { useSearchUsers } from '../../../../api/database/useSearchUser';
import useUserLength from '../../../../api/database/useUserLength';

import { Navigate, useSearchParams } from 'react-router-dom';

const UserTab = () => {
    const [hits, setHits] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') || '';

    const [pageCount, setPageCount] = useState(0);
    const pageNumber = parseInt(searchParams.get('page')) || 0;
    const resultPerPage = 8;
    let from = pageNumber * 8;
    const {
        data: listData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useSearchUsers({
        variables: {
            limit: resultPerPage,
            from: from,
            filter: { init: { eq: true } },
        },
    });

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchUsers({
        variables: {
            limit: resultPerPage,
            from: from,
            filter: {
                or: [
                    { daos_ids: { wildcard: `*${query.toLowerCase()}*` } },
                    { username: { wildcard: `*${query.toLowerCase()}*` } },
                    { bio: { wildcard: `*${query.toLowerCase()}*` } },
                    { id: { wildcard: `*${query.toLowerCase()}*` } },
                    { name: { wildcard: `*${query.toLowerCase()}*` } },
                ],
            },
        },
    });

    useEffect(() => {
        if (query.toLowerCase() === '') {
            setHits(!listLoading ? listData.searchUsers.items : []);
            setPageCount(
                Math.ceil(listData?.searchUsers.total / resultPerPage)
            );
        } else {
            setHits(!searchLoading ? searchData.searchUsers.items : []);
            setPageCount(
                Math.ceil(searchData?.searchUsers.items.length / resultPerPage)
            );
        }
    }, [query, searchLoading, listLoading, pageNumber]);

    const searchOrListLoading =
        query.toLowerCase() === 'all' ? listLoading : searchLoading;
    const searchOrListCalled =
        query.toLowerCase() === 'all' ? listCalled : searchCalled;

    if (searchError || listError) {
        return <Navigate to='/404' />;
    }

    if (searchOrListLoading) {
        return (
            <SearchStyled.LoaderBox>
                <Loader color='white' size={35} />
            </SearchStyled.LoaderBox>
        );
    }

    if (!hits.length && !searchOrListLoading && searchOrListCalled) {
        return (
            <SearchStyled.TextBox>
                <SearchStyled.MainText>
                    Oops! There's no "{query}" user on our records :/
                </SearchStyled.MainText>
                <SearchStyled.SmallText>
                    We couldn't find what you're looking for. Try again later!
                </SearchStyled.SmallText>
            </SearchStyled.TextBox>
        );
    }

    return (
        <>
            <Styled.UserCardBox>
                {hits?.map((item) => (
                    <UserCard
                        key={item.nonce}
                        name={item.name}
                        username={item.username}
                        pfp={item.pfp}
                        daos={item.daos}
                    />
                ))}
            </Styled.UserCardBox>
            <Pagination pageCount={pageCount} />
        </>
    );
};

export default UserTab;
