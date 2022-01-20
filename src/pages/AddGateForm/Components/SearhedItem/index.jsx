import React from "react";
import * as Styled from "./styles"

const SearchedItem =({val , id , setCategoryList , categoryList})=>{

    const removeCategories = (index) => {
        if (categoryList.length === 1) {
            alert('You have to put at least one Category')
            return false
        }
        setCategoryList(
            categoryList.filter((value, i) => i !== id)
        )
    }

    return(
        <Styled.Container>
            <Styled.Text>
                {val}
            </Styled.Text>
            <Styled.Cross onClick={removeCategories}>+</Styled.Cross>
        </Styled.Container>
    )
}

export default SearchedItem