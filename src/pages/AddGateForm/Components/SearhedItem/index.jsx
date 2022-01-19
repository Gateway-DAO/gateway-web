import React from "react";
import * as Styled from "./styles"

const SearchedItem =({val})=>{

    return(
        <Styled.Container>
            <Styled.Text>
                {val}
            </Styled.Text>
            <Styled.Cross>+</Styled.Cross>
        </Styled.Container>
    )
}

export default SearchedItem