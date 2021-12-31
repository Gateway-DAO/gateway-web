import styled from 'styled-components'

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 20px;
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

export const ButtonBox = styled.div`
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
