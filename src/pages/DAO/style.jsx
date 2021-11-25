import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

export const SearchTermContainer = styled.div`
    margin-top: 25px;
    color: white;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;

    @media only screen and (max-width: 945px) {
        margin-top: 25px;
        margin-bottom: -25px;
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const SearchTerm = styled.p`
    padding: 0 30px;
    margin-left: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
    /* Background */
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    @media only screen and (max-width: 945px) {
        padding: 30px 0;
        margin-left: 0px;
    }
`

export const SearchInputBox = styled.div`
    margin-right: 40px;
    padding-left: 30px;
    background: #ffffff;
    width: 30%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border-radius: 100px;
    @media only screen and (max-width: 945px) {
        margin: 0;
    }
    @media only screen and (max-width: 700px) {
        width: 45%;
    }
    @media only screen and (max-width: 480px) {
        width: 60%;
    }
`

export const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 10px 0;
    border-radius: 100px;
`

export const WrappedFiSearch = styled(FiSearch)`
    font-size: 20px;
    padding-right: 20px;
`
