import styled from "styled-components"
import { FiSearch } from "react-icons/fi";

export const Box = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  margin-top: 60px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 10fr 1fr;
  }
`

export const SearchInputBox = styled.div`
    grid-column: 2 / 3;
    background: #FFFFFF;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;

    @media only screen and (min-width: 768px) {
        grid-column: 2 / 3;
        border-radius: 100px;
    } 
`

export const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;

    padding: 10px;
    border-radius: 50px;

    text-align: center;
    font-family: "Poppins" sans-serif;
    font-size: 24px;

    letter-spacing: -0.05em;

    color: #E5E5E5;

    width: 100%;

    @media only screen and (min-width: 768px) {
        padding: 30px;
        border-radius: 100px;
        font-size: 64px;
        line-height: 80px;
    }
`

export const WrappedFiSearch = styled(FiSearch)`
  padding-right: 40px;
`