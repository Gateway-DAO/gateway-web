import styled from "styled-components";
import { useState } from "react";
import { IoMdClose } from 'react-icons/io'

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
export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
`

// export const FormBox = styled.div`
//     grid-column: 2/3;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

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

export const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${props => props.marginY || "10px"} 0;
    ${props => props.marginBottom ? "margin-bottom: " + props.marginBottom : ""}
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

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 30px;
  margin: 10px 0;
`

const CheckboxContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

    width: 100%;
    height: 100%;
    background: #170627;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 10px 0;

    ${props => props.checked ? `background: #220A38;border: 1px solid #7E3BDC;` : `background: #170627;border: 1px solid rgba(255, 255, 255, 0.2);`}
`

const CheckboxInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;

    opacity: 0;
`

const CheckboxLabel = styled.label`
    position: absolute;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: rgba(255, 255, 255, 0.6);
`

export const Checkbox = props => {
    const [checked, setChecked] = useState(props.checked);

    const toggleChecked = e => {
        setChecked(e.target.checked)
        props.onChange(e)
    }

    return (
        <CheckboxContainer checked={checked}>
            <CheckboxInput checked={checked} type="checkbox" id={props.id} name={props.name} value={props.value} onChange={toggleChecked} />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    )
}

export const LockedCheckbox = props => {
    return (
        <CheckboxContainer checked={props.checked}>
            <CheckboxInput type="checkbox" id={props.id} name={props.name} value={props.value} disabled />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    )
}


export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`


export const Select = styled.select`
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
    ${'' /* width: 100%; */}
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

export const IconButton = styled(Button)`
    display: flex;
    padding: 10px;
`

export const Text = styled.p`
    margin: 50px auto;
    color: white;
    font-family: Poppins;
    font-style: normal;

`