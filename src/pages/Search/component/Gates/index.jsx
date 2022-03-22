// Styling
import * as Styled from './style';
import * as SearchStyled from '../../style';

// Components
import UserCard from '../../../../components/UserCard';
import Loader from '../../../../components/Loader';
import Pagination from '../Pagination';

// Hooks
import { useEffect, useState } from 'react';
import useSearchGates from '../../../../api/database/useSearchGates';

import { Navigate } from 'react-router-dom';

const GateTab = ({ filterQuery }) => {
    const [hits, setHits] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const resultPerPage = 8;
    let from = pageNumber * 8;
    const {
        data: listData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useSearchGates({
        variables: {
            limit: resultPerPage,
            from: from,
            // filter: { init: { eq: true } },
        },
    });

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchGates({
        variables: {
            limit: resultPerPage,
            from: from,
            filter: filterQuery,
        },
    });

    useEffect(() => {
        if (Object.keys(filterQuery).length === 0) {
            console.log('listData', listData);
            setHits(
                !listLoading && !listError ? listData?.searchGates.items : []
            );
            setPageCount(
                Math.ceil(listData?.searchGates.total / resultPerPage)
            );
        } else {
            setHits(
                !searchLoading && !searchError
                    ? searchData.searchGates.items
                    : []
            );

            setPageCount(
                Math.ceil(searchData?.searchGates.items.length / resultPerPage)
            );
        }
    }, [
        filterQuery,
        searchLoading,
        listLoading,
        pageNumber,
        listError,
        searchError,
    ]);

    const searchOrListLoading =
        Object.keys(filterQuery).length === 0 ? listLoading : searchLoading;
    const searchOrListCalled =
        Object.keys(filterQuery).length === 0 ? listCalled : searchCalled;

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
                    Oops! There's no user on our records :/
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
                <Styled.UserContent>
                    {hits?.map((item) => (
                        <UserCard
                            key={item.nonce}
                            name={item.name}
                            username={item.username}
                            pfp={item.pfp}
                            daos={item.daos}
                        />
                    ))}
                </Styled.UserContent>
            </Styled.UserCardBox>
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </>
    );
};

export default GateTab;
