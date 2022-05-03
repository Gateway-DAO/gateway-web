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

import { Navigate, useLocation } from 'react-router-dom';

const UserTab = ({ filterQuery }) => {
    const [hits, setHits] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('query');

    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const resultPerPage = 8;
    let from = pageNumber * 8;

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchUsers({
        variables: {
            limit: resultPerPage,
            from: from,
            ...(Object.keys(filterQuery).length ? { filter: filterQuery } : {}),
        },
    });

    useEffect(() => {
        setHits(!searchLoading ? searchData?.searchUsers?.items : []);
        setPageCount(Math.ceil(searchData?.searchUsers?.total / resultPerPage));
    }, [searchLoading, searchData, resultPerPage]);

    if (searchError) {
        return <Navigate to='/404' />;
    }

    return (
        <>
            {searchLoading && (
                <SearchStyled.LoaderBox>
                    <Loader color='white' size={35} />
                </SearchStyled.LoaderBox>
            )}
            {!hits.length && !searchLoading && searchCalled && (
                <SearchStyled.TextBox>
                    <SearchStyled.MainText>
                        Oops! There's no {query && `"${query}"`} user on our
                        records :/
                    </SearchStyled.MainText>
                    <SearchStyled.SmallText>
                        We couldn't find what you're looking for. Try again
                        later!
                    </SearchStyled.SmallText>
                </SearchStyled.TextBox>
            )}
            {!!hits.length && (
                <Styled.UserCardBox>
                    <Styled.UserContent>
                        {hits
                            ?.filter(
                                (item) =>
                                    !(
                                        item.pfp ==
                                        'https://gateway9189b056d1a34c419355d6ada6e1b9d8184152-dev.s3.us-east-1.amazonaws.com/public/logo.png'
                                    ) &&
                                    item.pfp &&
                                    !(item.pfp == 'null') &&
                                    !item.username?.includes('0x') &&
                                    !item.name?.includes('0x')
                            )
                            .map((item, idx) => (
                                <UserCard
                                    key={idx}
                                    name={item.name}
                                    username={item.username}
                                    pfp={item.pfp}
                                    daos={item.daos}
                                />
                            ))}
                    </Styled.UserContent>
                </Styled.UserCardBox>
            )}
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </>
    );
};

export default UserTab;
