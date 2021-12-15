import styled from 'styled-components'

export const Page = styled.main`
    // background-color: #170627;
    min-height: 100vh;
    // overflow-x: hidden;
    // width: 100vw;
    // display: flex;
    // justify-content: space-between;
    // flex-direction: column;
    background-color: transparent;
    height: 100%;
    position: relative;

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

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
    // flex:.5;
    // display: grid;
    // grid-template-columns: 3fr 6fr 3fr;
    margin: 50px 0;
`

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
`

export const Heading = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 100px;
    /* or 94% */

    text-align: center;
    letter-spacing: -0.05em;

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

    grid-column: 1/4;
`

export const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.marginY || '10px'} 0;
    ${(props) =>
        props.marginBottom ? 'margin-bottom: ' + props.marginBottom : ''}
`

export const Input = styled.input`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    background: #170627;
    color: #e5e5e5;
    margin: 12px 0;
    width: 100%;
`

export const Label = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
`

export const Textarea = styled.textarea`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    width: 100%;
    height: ${(props) => props.height || '250px'};
    color: #e5e5e5;
    background: #170627;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 12px;
    margin: 12px 0;
    resize: vertical;
`

export const Button = styled.button`
    background: #170627;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 9px 65px;
    color: #e5e5e5;
    margin-top: 15px;

    cursor: pointer;
`