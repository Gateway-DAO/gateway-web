import React from 'react';
import * as Styled from './style';

const SearchedAdmin = ({ val, id, removeAdmin }) => {
    return (
        <Styled.Container>
            <Styled.ProfilePicture src={val.pfp} />
            <Styled.Text>{val.name}</Styled.Text>
            <Styled.Cross onClick={(e) => removeAdmin(id)}>+</Styled.Cross>
        </Styled.Container>
    );
};

export default SearchedAdmin;
