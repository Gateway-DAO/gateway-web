import * as Styled from './style'
import { useState } from 'react'
import { CircularButton, PaginationBox } from './style'

const Pagination = () => {

    // const {pageDetails , setPageDetails} = useState({
    //     pageNumbers : []
    // })
    let totalPage = 61;
    let postPerPage = 8;
    const pageNumbers = []

    for(let i =1 ; i <= Math.ceil(totalPage / postPerPage) && i <=5; i++){
        pageNumbers.push(i)
    }
    return (
        <Styled.PaginationContainer>
            <PaginationBox>
                <Styled.CircularButton>{'<'}</Styled.CircularButton>
                {
                    pageNumbers.map((element) =>
                        <Styled.CircularButton select={element==3}>{element}</Styled.CircularButton>
                    )
                }

                <Styled.CircularButton value={true}>
                    {'>'}
                </Styled.CircularButton>
            </PaginationBox>
        </Styled.PaginationContainer>
    )
}

export default Pagination
