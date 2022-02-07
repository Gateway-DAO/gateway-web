import styled from 'styled-components'

export const Container = styled.div`
    margin: 20px 0;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`

export const HeadingContainer = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 90px;
    /* identical to box height, or 94% */

    text-align: center;
    letter-spacing: -0.05em;

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
`

export const LinksContainer = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const LinksElements = styled.div`
    display: grid;
    grid-template-columns: 122px 1fr 50px;
    margin-top: 10px;
    grid-gap: 10px;
`

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 122px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: rgba(255, 255, 255, 0.6);
`

export const Input = styled.input`
    width: 390px;
    height: 40px;
    background: #170627;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: lowercase;
    display: flex;
    align-items: center;
    padding: 10px;

    color: rgba(255, 255, 255, 0.6);
`

export const TrashContainer = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    padding: 10px;
    color: white;
`

export const SaveButton = styled.div`
    background: #170627;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 20px;
    width: 210px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #e5e5e5;
    margin-top: 81px;
`
