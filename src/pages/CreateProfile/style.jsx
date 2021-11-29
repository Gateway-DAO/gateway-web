import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export const Container = styled.main`
    background-color: #170627;
    min-height: 100vh;
    overflow-x: hidden;
    width: auto;
    display: flex;
    // justify-content: space-between;
    flex-direction: column;
`

export const MainBox = styled.section`
    /*
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    */

    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
    margin: 50px 0;
`

export const FormBox = styled.div`
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchBox = styled.ul`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 10px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    flex-direction: column;
    letter-spacing: 0.05em;
    background: #170627;
    color: #e5e5e5;
    margin: 12px 0;
    width: 100%;
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

export const MembershipBox = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
`

export const MembershipIcon = styled.div`
    position: relative;
    margin-right: 16px;
    margin-top: 10px;
`

export const MembershipImg = styled.img`
    position: relative;
    width: 54px;
    border-radius: 100%;
    background-color: white;
`

export const MembershipRemove = styled(FaTimes)`
    position: absolute;
    color: #7E3BDC;
    background: #E5E5E5;
    border-radius: 100%;
    padding: 2px;
    cursor: pointer;
    right: 1px;
    top: -2px;
`

export const Divider = styled.hr`
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    margin: 0;
`

export const SearchItem = styled.li`
    padding: 15px 0;
    ${props => props.divider && "border-top: 1px solid rgba(255, 255, 255, 0.2);"}
    cursor: pointer;
`

/* Form components */

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
`

export const ChildrenWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: transparent;
    }
    &::-webkit-scrollbar-track:hover {
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.2);
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb:active {
        background: rgba(255, 255, 255, 0.9);
    }
`

export const CloseBtn = styled(IoMdClose)`
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

    position: absolute;
    top: 15px;
    right: 15px;
`

export const Header = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 90px;
    /* identical to box height, or 187% */
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

export const SubLabel = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;

    color: rgba(255, 255, 255, 0.6);
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

export const IconButton = styled(Button)`
    display: flex;
    padding: 10px;
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
    margin: 12px 0;
    ${'' /* width: 100%; */}
`
