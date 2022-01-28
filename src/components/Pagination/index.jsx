import React from 'react'
import * as Styled from './style';


const Pagination = ()=>{
    const [pageNumber, setPageNumber] = useState(0);
    const results = 100;
    const usersPerPage = 8;
    const pageCount = Math.ceil(results / usersPerPage);

    return(
        <Styled.List>
            {
                pageArray.map(number=>(
                    <Styled.Page key={number} onClick={()=>paginate(number-1)} >
                        {number}
                    </Styled.Page>
                ))
            }
        </Styled.List>
    )

}

export default Pagination;