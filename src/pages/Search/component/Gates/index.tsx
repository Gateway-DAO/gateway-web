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
import { useParams } from 'react-router';

const GateTab = ({ filterQuery }) => {
    const { query } = useParams();
    const [hits, setHits] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const resultPerPage = 8;
    const from = pageNumber * 8;

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
                ? filterQuery
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
    }, [filterQuery, searchLoading, pageNumber]);

    if (searchLoading) {
        return (
            <SearchStyled.LoaderBox>
                <Loader color='white' size={35} />
            </SearchStyled.LoaderBox>
        );
    }

    if ((!hits.length && !searchLoading && searchCalled) || searchError) {
        return (
            <SearchStyled.TextBox>
                <SearchStyled.MainText>
                    Oops! There's no gate on our records :/
                </SearchStyled.MainText>
                <SearchStyled.SmallText>
                    We couldn't find what you're looking for. Try again later!
                </SearchStyled.SmallText>
            </SearchStyled.TextBox>
        );
    }

    return (
        <>
            <Styled.GateCardBox>
                {hits?.map((item) => (
                    <GateCard gate={item} viewAsMember={true} />
                ))}
            </Styled.GateCardBox>
            <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </>
    );
};

export default GateTab;
