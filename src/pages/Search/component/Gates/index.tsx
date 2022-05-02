// Styling
import * as Styled from './style';
import * as SearchStyled from '../../style';

// Components
import GateCard from '../../../../components/GateCard';
import Loader from '../../../../components/Loader';
import Pagination from '../Pagination';

// Hooks
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { searchGates } from '../../../../graphql/queries';

import { Navigate, useLocation } from 'react-router-dom';
import { PublishedState } from '../../../../graphql/API';

const GateTab = ({ filterQuery }) => {
    const location = useLocation();
	const params = new URLSearchParams(location.search);
	const query: string = params.get("query");
    const [hits, setHits] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const resultPerPage = 8;
    const from = pageNumber * 8;

    // if (!filterQuery['and']) filterQuery['and'] = [];
    // filterQuery['and'].push({ published: { match: 'PUBLISHED' } });

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useQuery(gql(searchGates), {
        variables: {
            limit: resultPerPage,
            from: from,
            ...(Object.keys(filterQuery).length !== 0
                ? { filter: filterQuery }
                : {}),
        },
    });

    useEffect(() => {
        setHits(!searchLoading ? searchData?.searchGates?.items : []);
        setPageCount(
            Math.ceil(!searchLoading ? searchData?.searchGates?.items.length / resultPerPage : 0)
        );
    }, [searchData, searchLoading, resultPerPage]);

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
                        Oops! There's no {query && `"${query}"`} gate on our records :/
                    </SearchStyled.MainText>
                    <SearchStyled.SmallText>
                        We couldn't find what you're looking for. Try again later!
                    </SearchStyled.SmallText>
                </SearchStyled.TextBox>
            )}
            <Styled.GateCardBox>
                {hits?.map((item, idx) => item.published === PublishedState.PUBLISHED && (
                    <Styled.GateItem key={idx}>
                        <GateCard gate={item} viewAsMember={true} toSearch={true} />
                    </Styled.GateItem>
                ))}
            </Styled.GateCardBox>
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </>
    );
};

export default GateTab;
