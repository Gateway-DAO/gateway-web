import * as Styled from './style';
import * as SearchStyled from '../../style';

// Components
import Card from '../../../../components/Card';
import Loader from '../../../../components/Loader';
import { Navigate } from 'react-router-dom';

// Hooks
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { useSearchDaOsQuery } from '../../../../graphql';

const DAOTab = ({ filterQuery }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const { query } = useParams();
    const [hits, setHits] = useState([]);
    const hitsPerPage = 8;
    const [pageCount, setPageCount] = useState(0);

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchDaOsQuery({
        variables: {
            query,
            pagination: {
                page: pageNumber,
                hitsPerPage
            }
        }
    })

    useEffect(() => {
        setHits(!searchLoading ? searchData?.search_daos?.hits : []);
        setPageCount(
            Math.ceil(searchData?.search_daos?.hits.length / hitsPerPage)
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

            {!searchData?.search_daos?.hits.length && !searchLoading && searchCalled && (
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
