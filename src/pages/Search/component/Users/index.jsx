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

import { Navigate } from 'react-router-dom';

const UserTab = ({ query }) => {
    const [hits, setHits] = useState([]);
    const [loading, setLoading] = useState(true);

    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
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
            ...(query?.length && {
                filter: {
                    or: [
                        { daos_ids: { wildcard: `*${query.toLowerCase()}*` } },
                        { username: { wildcard: `*${query.toLowerCase()}*` } },
                        { bio: { wildcard: `*${query.toLowerCase()}*` } },
                        { id: { wildcard: `*${query.toLowerCase()}*` } },
                        { name: { wildcard: `*${query.toLowerCase()}*` } },
                    ],
                },
            }),
        },
    });

    useEffect(() => {
        setHits(!searchLoading ? searchData.searchUsers.items : []);
        setPageCount(
            Math.ceil(searchData?.searchUsers.total / resultPerPage)
        );
    }, [query, searchLoading, listLoading, pageNumber]);

    if (searchError || listError) {
        return <Navigate to='/404' />;
    }

    if (searchLoading) {
        return (
            <SearchStyled.LoaderBox>
                <Loader color='white' size={35} />
            </SearchStyled.LoaderBox>
        );
    }

    if (!hits.length && !searchLoading && searchCalled) {
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
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </>
    );
};

export default UserTab;
