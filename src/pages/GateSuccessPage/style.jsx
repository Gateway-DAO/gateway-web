import styled from 'styled-components'

export const Container = styled.div`
    background-color: #170627;
    width:100%;
`

export const BoxContainer = styled.div`
    display: flex;
    // margin: 25vh 20vw;
    // max-width:100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 90px;
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
    padding-bottom: 30px;

    /* or 94% */

    text-align: center;
    letter-spacing: -0.05em;
`
export const SmallTextContainer = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-top: 38px;
    color: #ffffff;
`
