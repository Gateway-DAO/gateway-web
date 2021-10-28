import styled from "styled-components"
import { FiSearch } from "react-icons/fi";

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  margin-top: 60px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 20px 1fr 20px;
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

    padding: 20px 0;
    border-radius: 50px;

    text-align: center;
    font-family: "Poppins" sans-serif;
    font-size: 44px;

    letter-spacing: -0.05em;

    color: #E5E5E5;

    width: 100%;

    @media only screen and (min-width: 768px) {
        padding: 30px;
        border-radius: 100px;
        font-size: 64px;
        line-height: 80px;
    }

    @media only screen and (max-width: 470px) {
        font-size: 35px;
        line-height: 45px;
    }

    @media only screen and (max-width: 380px) {
        font-size: 30px;
    }

    @media only screen and (max-width: 310px) {
        font-size: 25px;
        padding: 15px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 20px;
        padding: 10px;
    }
`

export const WrappedFiSearch = styled(FiSearch)`
  padding-right: 35px;
  font-size: 100px;
  @media only screen and (max-width: 768px) {
    font-size: 70px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 470px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 35px;
    padding-right: 10px;
  }
`