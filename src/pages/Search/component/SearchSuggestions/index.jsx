import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './style';

const SearchSuggestions = (props) => {
    const navigate = useNavigate();
    const search = (e) => {
        navigate(`/dao/${props.hits.dao}`);
    };
    return (
        <Styled.SearchSuggestionItem onClick={search}>
            <Styled.SearchLogo src={props.hits.logoURL} />
            {props.hits.name}
            <Styled.SearchType>• DAO</Styled.SearchType>
        </Styled.SearchSuggestionItem>
    );
};

export default SearchSuggestions;
