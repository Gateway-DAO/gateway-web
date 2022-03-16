import * as Styled from './style';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ pageCount }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const changePage = ({ selected }) => {
        setSearchParams({ page: parseInt(selected) });
    };

    return (
        <Styled.PaginationContainer>
            <Styled.StyledPaginateContainer>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    pageCount={pageCount}
                    breakLabel={null}
                    onPageChange={changePage}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={4}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'pageactive'}
                    nextLinkClassName={'pageactive'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </Styled.StyledPaginateContainer>
        </Styled.PaginationContainer>
    );
};

export default Pagination;
