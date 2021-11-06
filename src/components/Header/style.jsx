import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderDiv = styled.header`
    width: 100vw;
    position: relative;
    height: 90px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 20px;
    background: #170627;

    &:before{
        content: "";
        position: absolute;
        left: 3%;
        bottom: 0;
        height: 1px;
        width: 94%;  /* or 100px */
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
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
    left: 50px;
    text-decoration: none;
`

export const WalletBox = styled(Box)`
    position: absolute;
    top: 25px;
    right: 45px;
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

    margin-left: 40px;

    @media only screen and (max-width: 1170px) {
        font-size: 12px;
        line-height: 18px;
        margin-right: 15px;
    }
    @media only screen and (max-width: 768px) {
        font-size: 11px;
        line-height: 16px;
        margin-right: 10px;
        display: none;
    }
`