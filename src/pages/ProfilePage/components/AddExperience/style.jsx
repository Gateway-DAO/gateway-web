import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const NFTContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
`

export const BoxText = styled.h3`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #ffffff;
`

export const ButtonBox = styled(Link)`
    margin-top: 33px;
    background: #170627;
    border-radius: 20px;
    curosr: pointer;
    border: double 1px transparent;
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    text-decoration:none;
`

export const ButtonText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding : 10px 15px;

    color: #e5e5e5;
`

export const NFT = styled.img`
    width: 250px;
    border-radius: 15px;
`

export const NFTBox = styled.div`
    background: #170627;
    border-radius: 20px;
    border: double 1px transparent;
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);

    display: flex;
    align-items: center;
    flex-direction: column;
`