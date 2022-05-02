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

import { Navigate, useParams } from 'react-router-dom';
import { useSearchGatesQuery, GatePublishedStatus } from '../../../../graphql';

const GateTab = ({ filterQuery }) => {
    const { query } = useParams();
    const [hits, setHits] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const hitsPerPage = 8;

    // if (!filterQuery['and']) filterQuery['and'] = [];
    // filterQuery['and'].push({ published: { match: 'PUBLISHED' } });

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchGatesQuery({
        variables: {
            query: query,
            pagination: {
                page: pageNumber,
                hitsPerPage
            }
        },
    });

    useEffect(() => {
        setHits(!searchLoading ? searchData?.search_gates?.hits : []);
        setPageCount(
            Math.ceil(!searchLoading ? searchData?.search_gates?.hits.length / hitsPerPage : 0)
        );
    }, [searchData, searchLoading, hitsPerPage]);

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
                {hits?.map((item, idx) => item.published === GatePublishedStatus.published && (
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
