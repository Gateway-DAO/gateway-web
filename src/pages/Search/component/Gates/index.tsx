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

import { Navigate, useParams } from 'react-router-dom';

const GateTab = ({ filterQuery }) => {
    const { query } = useParams();
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
                : query?.length
                ? {
                    filter: {
                        or: [
                            {
                                name: {
                                    wildcard: `*${query.toLowerCase()}*`,
                                },
                            },
                        ],
                    },
                } : {}),
        },
    });

    useEffect(() => {
        setHits(!searchLoading ? searchData?.searchGates?.items : []);
        setPageCount(
            Math.ceil(searchData?.searchGates?.total / resultPerPage)
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
                {hits?.map((item, idx) => (
                    <GateCard key={idx} gate={item} viewAsMember={true} />
                ))}
            </Styled.GateCardBox>
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </>
    );
};

export default GateTab;
