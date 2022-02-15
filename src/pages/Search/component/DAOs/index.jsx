import * as Styled from './style';
import * as SearchStyled from '../../style';

// Components
import Card from '../../../../components/Card';
import Loader from '../../../../components/Loader';
import { Navigate } from 'react-router-dom';

// Hooks
import useDAOLength from '../../../../api/database/useDAOLength';
import { useSearchDAO } from '../../../../api/database/useSearchDAO';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';

const DAOTab = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const { query } = useParams();
    const [loading, setLoading] = useState(true);
    const [hits, setHits] = useState([]);
    const resultPerPage = 8;
    const [pageCount, setPageCount] = useState(0);
    let from = pageNumber * 8;

    const {
        data: listData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useSearchDAO({
        variables: {
            limit: resultPerPage,
            from: from,
        },
    });

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchDAO({
        variables: {
            limit: resultPerPage,
            from: from,
            filter: {
                or: [
                    { dao: { wildcard: `*${query}*` } },
                    { name: { wildcard: `*${query}*` } },
                    { description: { wildcard: `*${query}*` } },
                    { categories: { match: `*${query}*` } },
                    { tags: { wildcard: `*${query}*` } },
                ],
            },
        },
    });

    const {
        data: searchDaosLength,
        loading: searchDaosLengthLoading,
        error: searchDaosLengthError,
        called: searchDaosLengthCalled,
    } = useDAOLength({
        variables: {
            filter: {
                or: [
                    { dao: { wildcard: `*${query}*` } },
                    { name: { wildcard: `*${query}*` } },
                    { description: { wildcard: `*${query}*` } },
                    { categories: { match: `*${query}*` } },
                    { tags: { wildcard: `*${query}*` } },
                ],
            },
        },
    });

    useEffect(() => {
        if (query.toLowerCase() === 'all') {
            console.log(query.toLowerCase());
            setHits(!listLoading ? listData.searchDAOs.items : []);
            setPageCount(Math.ceil(listData?.searchDAOs.total / resultPerPage));
        } else {
            setHits(!searchLoading ? searchData.searchDAOs.items : []);
            setPageCount(
                Math.ceil(
                    searchDaosLength?.searchDAOs.items.length / resultPerPage
                )
            );
        }
    }, [
        query,
        searchLoading,
        listLoading,
        searchDaosLengthLoading,
        pageNumber,
    ]);

    if (searchError || listError) {
        return <Navigate to='/404' />;
    }

    const searchOrListLoading =
        query.toLowerCase() === 'all' ? listLoading : searchLoading;

    const searchOrListCalled =
        query.toLowerCase() === 'all' ? listCalled : searchCalled;

    return (
        <>
            {searchOrListLoading && (
                <SearchStyled.LoaderBox>
                    <Loader color='white' size={35} />
                </SearchStyled.LoaderBox>
            )}

            {!hits.length && !searchOrListLoading && searchOrListCalled && (
                <SearchStyled.TextBox>
                    <SearchStyled.MainText>
                        Oops! There's no "{query}" DAO on our records :/
                    </SearchStyled.MainText>
                    <SearchStyled.SmallText>
                        We couldn't find what you're looking for. Try again
                        later!
                    </SearchStyled.SmallText>
                </SearchStyled.TextBox>
            )}

            {!!hits.length && (
                <Styled.CardBox>
                    {hits.map((card, idx) => {
                        return (
                            <Card
                                key={idx}
                                id={card.dao}
                                title={card.name}
                                description={card.description}
                                categories={card.categories}
                                logoURL={card.logoURL}
                                bannerURL={card.backgroundURL}
                            />
                        );
                    })}
                </Styled.CardBox>
            )}
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </>
    );
};

export default DAOTab;
