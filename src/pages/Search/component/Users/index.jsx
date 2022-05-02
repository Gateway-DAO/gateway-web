// Styling
import * as Styled from './style';
import * as SearchStyled from '../../style';

// Components
import UserCard from '../../../../components/UserCard';
import Loader from '../../../../components/Loader';
import Pagination from '../Pagination';

// Hooks
import { useEffect, useState } from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useSearchUsersQuery } from '../../../../graphql';

const UserTab = ({ filterQuery }) => {
    const [hits, setHits] = useState([]);
    const { query } = useParams();

    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const hitsPerPage = 8;

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchUsersQuery({
        variables: {
            query: query,
            pagination: {
                hitsPerPage,
                page: pageNumber
            }
        },
    });

    useEffect(() => {
        setHits(!searchLoading ? searchData?.search_users?.hits : []);
        setPageCount(
            Math.ceil(searchData?.search_users?.hits.length / hitsPerPage)
        );
    }, [searchLoading, searchData, hitsPerPage]);

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
                        Oops! There's no {query && `"${query}"`} user on our records :/
                    </SearchStyled.MainText>
                    <SearchStyled.SmallText>
                        We couldn't find what you're looking for. Try again later!
                    </SearchStyled.SmallText>
                </SearchStyled.TextBox>
            )}
            {!!hits.length && (
                <Styled.UserCardBox>
                    <Styled.UserContent>
                        {hits?.map((item, idx) => (
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
