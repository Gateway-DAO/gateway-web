import styled from "styled-components"
import { AiOutlineLoading } from "react-icons/ai"

export const Container = styled.main`
    background-color: transparent;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;

    overflow-x: hidden;
    
    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    }
`

export const MainBox = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SpaceBox = styled.canvas`
    position: absolute;
    height: calc(100vh - 90px);
    top: 90px;
    z-index: -1;
`

export const MainText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 150px;
    /* or 94% */

    text-align: center;
    letter-spacing: -0.05em;

    /* Background */
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`

export const Button = styled.a`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;

    border: double 1px transparent;
    background-image:   linear-gradient(#170627, #170627), 
                        linear-gradient(90deg, #FF00B8 0%, #7E3BDC 50.52%, #0075FF 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #E5E5E5;

    margin: 10px 20px;

    @media only screen and (max-width: 1170px) {
        margin: 8px 16px;
        font-size: 11px;
    }

    @media only screen and (max-width: 768px) {
        margin: 6px 12px;
        font-size: 9px;
    }
`

export const SpinningLoader = styled(AiOutlineLoading)`
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    margin-right: 5px;
`