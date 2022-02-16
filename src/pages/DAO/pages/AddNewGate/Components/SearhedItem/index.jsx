import React from 'react';
import * as Styled from './styles';

const SearchedItem = ({ val, id, remove }) => {
    return (
        <Styled.Container>
            <Styled.Text>{val}</Styled.Text>
            <Styled.Cross onClick={(e) => remove(id)}>+</Styled.Cross>
        </Styled.Container>
    );
};

export default SearchedItem;
