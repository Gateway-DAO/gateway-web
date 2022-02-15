import * as Styled from './style';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, setPageNumber }) => {
    const changePage = ({ selected }) => {
        setPageNumber(selected);
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
