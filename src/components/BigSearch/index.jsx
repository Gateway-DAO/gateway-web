import { useRef } from "react"
import { useHistory } from "react-router";
import styled from "styled-components"
import * as Styled from "./style"

import Typewriter from 'typewriter-effect/dist/core';

import { daos } from "../../api/algolia";

const BigSearch = props => {
    const inputRef = useRef();
    const input = inputRef.current;
    const history = useHistory()

    const handleInput = async e => {
      if (e.key === "Enter") {
        history.push(`search/${e.target.value}`);
      }
    }

    return (
      <Styled.Box>
        <Styled.SearchInputBox>
          <Styled.SearchInput type="search" placeholder="Search by name" onKeyPress={handleInput} />
          <Styled.WrappedFiSearch/>
        </Styled.SearchInputBox>
      </Styled.Box>
    )
}

const WrappedBigSearch = styled(BigSearch)`
    background-color: white;
    padding: 20px;
`

export default WrappedBigSearch;