import { useRef } from "react"
import styled from "styled-components"
import Typewriter from 'typewriter-effect/dist/core';

const SearchInput = styled.input`
  padding: 30px 0;
  width: 100%;

  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  text-align: center;
  font-family: "Poppins" sans-serif;
  font-size: 64px;
  line-height: 80px;
  /* identical to box height, or 125% */

  letter-spacing: -0.05em;

  color: #E5E5E5;
`

const BigSearch = props => {
    const inputRef = useRef();
    const input = inputRef.current;

    return (
        <SearchInput ref={inputRef} placeholder="Search by name" type="text" />
    )
}

const WrappedBigSearch = styled(BigSearch)`
    background-color: white;
    padding: 20px;
`

export default WrappedBigSearch;