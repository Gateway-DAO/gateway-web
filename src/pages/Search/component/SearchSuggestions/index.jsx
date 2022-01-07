import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Styled from './style'

const SearchSuggestions = (props)=>{
    const history = useHistory();
    const search = (e)=>{
        history.push(`/dao/${props.hits.dao}`)
    }
    return(
        <Styled.SearchSuggestionItem onClick={search}>
            <Styled.SearchLogo src={props.hits.logoURL} />
            {props.hits.name}
            <Styled.SearchType>• DAO</Styled.SearchType>
        </Styled.SearchSuggestionItem>
    )
}

export default SearchSuggestions