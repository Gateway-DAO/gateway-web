import React from 'react'
import * as Styled from './styles'

const SearchedItem = ({ val, id, removeCategories }) => {
    return (
        <Styled.Container>
            <Styled.Text>{val}</Styled.Text>
            <Styled.Cross onClick={(e) => removeCategories(id)}>+</Styled.Cross>
        </Styled.Container>
    )
}

export default SearchedItem
