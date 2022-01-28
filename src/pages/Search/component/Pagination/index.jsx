import * as Styled from './style'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(0)

    let totalPage = 61
    let postPerPage = 8


    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
    
    return (
        <Styled.PaginationContainer>
            <Styled.StyledPaginateContainer>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    pageCount={60}
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
    )
}

export default Pagination
