import styled from 'styled-components'
import { useState } from 'react'

const FilledInput = `
    background: #220A38;
    border: 1px solid #7E3BDC;
    box-sizing: border-box;
    border-radius: 5px;
`

export const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.marginY || '10px'} 0;
    margin-bottom: ${(props) => props.marginBottom || "30px"};
`
export const FieldsetWrapper = styled.fieldset`
    width: 100%;
    display: flex;
    justify-content:space-between;
    // flex-direction: column;
    // margin: ${(props) => props.marginY || '10px'} 0;
    margin-bottom: ${(props) => props.marginBottom || "30px"};
`
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    margin-top: ${(props) => props.marginTop || "0"};
    margin-bottom: ${(props) => props.marginBottom || "30px"};
`
export const Label = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: #ffffff;
`
export const TextLabel = styled.div`

// position: absolute;
// width: 547px;
// height: 38px;
// left: 435px;
// top: 602px;
margin-left:${props=>props.marginLeft || "0px"};
font-family: Be Vietnam;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */

display: flex;
align-items: center;

color: #E5E5E5;

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
    margin: 15px 0;
    resize: vertical;
    outline: none;

    ${props => props.value ? FilledInput : ""}
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
    margin-top:0;
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
    margin: 15px 0;
    width: 100%;
    outline: none;

    ${(props) => (!!props.value ? FilledInput : '')}
`
export const SmallInput = styled.input`
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
margin: 15px 0;
width:  324px;
outline: none;

${(props) => (!!props.value ? FilledInput : '')}
`
const SearchInput = styled.input`
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
    margin: 15px 0;
    width: 100%;
    outline: none;

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

    ${(props) =>
        props.checked
            ? `background: #220A38;border: 1px solid #7E3BDC;`
            : `background: #170627;border: 1px solid rgba(255, 255, 255, 0.2);`}
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

export const Checkbox = (props) => {
    const [checked, setChecked] = useState(props.checked)

    const toggleChecked = (e) => {
        setChecked(e.target.checked)
        props.onChange(e)
    }

    return (
        <CheckboxContainer checked={checked}>
            <CheckboxInput
                checked={checked}
                type="checkbox"
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={toggleChecked}
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    )
}

export const LockedCheckbox = (props) => {
    return (
        <CheckboxContainer checked={props.checked}>
            <CheckboxInput
                type="checkbox"
                id={props.id}
                name={props.name}
                value={props.value}
                disabled
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    )
}

export const Radio = (props) => {
    return (
        <CheckboxContainer checked={props.checked}>
            <CheckboxInput
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
            />
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
    margin: 15px 0;
    ${'' /* width: 100%; */}
`

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    margin: 15px 0;
`

export const SubText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: rgba(229, 229, 229, 0.6);
`

export const QuestionIcon = styled.span`
    width: 15px;
    height: 15px;
    margin-left: 10px; 
    // padding: 2px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    /* or 118% */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #A5A5A5;
    border: 1px solid #A5A5A5;
    box-sizing: border-box;
    border-radius: 100%;

`
export const DeleteWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;

`
export const DeleteIcon = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 100%;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    // border-radius: 100;    
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DeleteContent = styled.div`
    width: 119px;
    height: 38px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    display: flex;
    align-items: center;

    color: #E5E5E5;

`
