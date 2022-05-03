import * as Styled from './style';
import * as SearchStyled from '../../style';

// Components
import Card from '../../../../components/Card';
import Loader from '../../../../components/Loader';
import { Navigate, useLocation } from 'react-router-dom';

// Hooks
import useDAOLength from '../../../../api/database/useDAOLength';
import { useSearchDAO } from '../../../../api/database/useSearchDAO';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';

const DAOTab = ({ filterQuery }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const location = useLocation();
	const params = new URLSearchParams(location.search);
	const query = params.get("query");
    const [hits, setHits] = useState([]);
    const resultPerPage = 8;
    const [pageCount, setPageCount] = useState(0);
    let from = pageNumber * 8;

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchDAO({
        variables: {
            limit: resultPerPage,
            from: from,
            ...(Object.keys(filterQuery).length
                ? { filter: filterQuery }
                : {}),
        },
    });

    useEffect(() => {
        setHits(!searchLoading ? searchData?.searchDAOs?.items : []);
        setPageCount(
            Math.ceil(searchData?.searchDAOs?.total / resultPerPage)
        );
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

            {!searchData?.searchDAOs?.items.length && !searchLoading && searchCalled && (
                <SearchStyled.TextBox>
                    <SearchStyled.MainText>
                        Oops! There's no {query && `"${query}"`} DAO on our records :/
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
