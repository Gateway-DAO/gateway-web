import { useRef } from "react"
import { useHistory } from "react-router";
import styled from "styled-components"
import { FiSearch } from "react-icons/fi";

import Typewriter from 'typewriter-effect/dist/core';

import { daos } from "../../api/algolia";

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  margin-top: 60px;
`

/*
const SearchInput = styled.input`
  padding: 30px 0;
  grid-column: 2 / 3;

  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  text-align: center;
  font-family: "Poppins" sans-serif;
  font-size: 64px;
  line-height: 80px;

  letter-spacing: -0.05em;

  color: #E5E5E5;
`
*/

const SearchInputBox = styled.div`
    grid-column: 2 / 3;
    background: #FFFFFF;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
`

const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;

    padding: 30px;
    border-radius: 100px;

    text-align: center;
    font-family: "Poppins" sans-serif;
    font-size: 64px;
    line-height: 80px;

    letter-spacing: -0.05em;

    color: #E5E5E5;
`

const WrappedFiSearch = styled(FiSearch)`
  padding-right: 40px;
`

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
      <Box>
        <SearchInputBox>
          <SearchInput type="search" placeholder="Search by name" onKeyPress={handleInput} />
          <WrappedFiSearch size={60} />
        </SearchInputBox>
      </Box>
    )
}

const WrappedBigSearch = styled(BigSearch)`
    background-color: white;
    padding: 20px;
`

export default WrappedBigSearch;