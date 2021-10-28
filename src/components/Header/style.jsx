import styled from "styled-components"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"

export const HeaderDiv = styled.header`
    width: 100vw;
    position: relative;
    height: 90px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 20px;
    margin: 0 40px;
    background: #170627;
`

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LogoBox = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 25px;
    left: 10px;
    text-decoration: none;
`

export const WalletBox = styled(Box)`
    position: absolute;
    top: 25px;
    right: 50px;
`

export const SearchBox = styled(Box)`
    margin-left: -20px;
    margin-rigth: 20px;
    grid-column: 6 / 8;

    @media only screen and (max-width: 1170px) {
        margin-left: 10px;
        grid-column: 6 / 4;    
    }

    @media only screen and (max-width: 945px) {
        width: 100%;
        margin: 120px auto;
    }

    @media only screen and (max-width: 710px) {
        display: flex;
        width: 60vw;
        justify-content: center;
    }

    @media only screen and (max-width: 480px) {
        display: flex;
        width: 60vw;
        justify-content: center;
        margin-left: -15px;
        margin-top: 120px;
    }

    @media only screen and (max-width: 430px) {
        width: 50vw;
        justify-content: center;
    }

    @media only screen and (max-width: 340px) {
        margin-left: -30px;    
    }
`

export const SearchInputBox = styled.div`
    background: #FFFFFF;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    border-radius: 100px;
`

export const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 10px 30px;
    border-radius: 100px;
`

export const WrappedFiSearch = styled(FiSearch)`
    font-size: 20px;
    padding-right: 20px;
`

export const LogoText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.4em;

    color: #E5E5E5;

    margin-left: 20px;
`

export const Text = styled.p`
    color: ${props => props.color};
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;

    margin-right: 20px;

    @media only screen and (max-width: 1170px) {
        font-size: 12px;
        line-height: 18px;
        margin-right: 15px;
    }
    @media only screen and (max-width: 768px) {
        font-size: 11px;
        line-height: 16px;
        margin-right: 10px;
    }

    @media only screen and (max-width: 550px) {
        display: none;
    }
`