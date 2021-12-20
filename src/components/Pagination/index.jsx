import React from 'react'
import * as Styled from './style';

const Pagination = ({totalPage, paginate})=>{
    const pageArray=[];
    for(let i=1;i<=totalPage;i++){
        pageArray.push(i);
    }

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