import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form } from 'formik';
import ReactSelect from 'react-select';
import AsyncReactSelect from 'react-select/async';

const InputDefault = `
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    background: #170627;
    color: #e5e5e5;
`;

const InputWhite = `
    border: 1px solid #170627;
    box-sizing: border-box;
    border-radius: 5px;
    color: #170627;
`;

const FilledInput = `
    background: #220A38;
    border: 1px solid #7E3BDC;
    box-sizing: border-box;
    border-radius: 5px;
`;

const InvalidInput = `
    border: 1px solid #FF003D;
    background: rgba(255, 0, 61, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
`;

/** TEXT **/
export const H1 = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => (props.size ? props.size : `96px`)};
    line-height: 120px;
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

    margin-bottom: 40px;
`;

export const H2 = styled(H1)`
    font-size: 48px;
    margin-bottom: ${(props) => props.mb || `40px`};
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #ffffff;
`;

export const SubText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: rgba(229, 229, 229, 0.6);
`;

export const ErrorText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.05em;

    width: 100%;
    font-size: 0.875em;
    color: #dc3545;
`;

/** CONTAINERS **/
export const FormBox = styled.form`
    max-width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
    margin: 50px 0;
`;

export const FormikFormBox = styled(Form)`
    max-width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
    margin: 50px 0;
`;

interface IMarginProps {
    marginY?: string | number;
    marginBottom?: string | number;
    marginTop?: string | number;
    marginLeft?: string | number;
}

export const Fieldset = styled.fieldset<IMarginProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.marginY || '10px'} 0;
    margin-bottom: ${(props) => props.marginBottom || '30px'};
`;

export const FieldsetRow = styled.fieldset<IMarginProps>`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin-bottom: ${(props) => props.marginBottom || '30px'};
`;

export const Wrapper = styled.div<IMarginProps>`
    display: flex;
    align-self: flex-start;
    align-items: center;
    margin-top: ${(props) => props.marginTop || '0'};
    margin-bottom: ${(props) => props.marginBottom || '30px'};
`;

export const AddWrapper = styled(Wrapper)`
    cursor: pointer;
`;

export const DeleteWrapper = styled(Wrapper)`
    cursor: pointer;
`;

export const GridBox = styled.div<{
    gap?: string | number;
    cols?: string | number;
}>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.cols || '3'}, 1fr);
    grid-column-gap: ${(props) => props.gap || '10px'};
    grid-row-gap: ${(props) => props.gap || '10px'};
    margin: 15px 0;
`;

/** FORM ELEMENTS **/
export const Label = styled.label`
    position: relative;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: ${(props) => props.color || '#ffffff'};
`;

export const TextLabel = styled.div<IMarginProps>`
    margin-left: ${(props) => props.marginLeft || '0px'};
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    display: flex;
    align-items: center;

    color: #e5e5e5;
`;

export const Textarea = styled.textarea<{ height?: string | number }>`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
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

    ${(props) => (props.value ? FilledInput : '')}
`;

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
    margin-bottom: ${(props) => props.mb || `0px`};

    cursor: pointer;
`;

export const IconButton = styled(Button)`
    display: flex;
    padding: 10px;
    margin-top: 0;
`;

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    white?: boolean;
    valid?: boolean;
    name?: string;
}

export const Input = styled.input<IInput>`
    ${(props) => (props.white ? InputWhite : InputDefault)}

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    margin: 15px 0;
    padding: 10px;
    width: ${(props) => props.width || '100%'};
    outline: none;

    ${(props) => (!!props.value && !props.white ? FilledInput : '')}
    ${(props) => (props.valid === false ? InvalidInput : '')}
`;

export const SmallInput = styled.input`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    background: #170627;
    color: #e5e5e5;
    margin: 15px 0;
    outline: none;

    ${(props) => (props.value ? FilledInput : '')}
`;

const SearchInnerInput = styled.input<IInput>`
    ${(props) => (props.white ? 'color: #170627;' : 'color: #e5e5e5;')}

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    padding: 10px;
    width: ${(props) => props.width || '100%'};
    outline: none;
    border: 0px;
    background-color: transparent;
`;

const SearchInputContainer = styled.div`
    ${(props) => (props.white ? InputWhite : InputDefault)}

    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px 0;

    ${(props) => (!!props.value && !props.white ? FilledInput : '')}
    ${(props) => (props.valid === false ? InvalidInput : '')}
`;

const SearchInputIcon = styled(FaSearch)`
    margin: 0 10px;
`;

export const SearchInput = (props) => (
    <SearchInputContainer {...props}>
        <SearchInnerInput {...props} />
        <SearchInputIcon color='white' />
    </SearchInputContainer>
);

const CheckboxContainer = styled.div<{ checked: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    // height: 100%;
    background: #170627;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 20px 0;

    &:hover {
        background: #220a38;
        border: 1px solid #7e3bdc;
    }

    &:hover label {
        color: white;
    }

    ${(props) =>
        props.checked
            ? ` background: #220A38;
                border: 1px solid #7E3BDC;
                
                & label {
                    color: white;
                }
                `
            : `background: #170627;border: 1px solid rgba(255, 255, 255, 0.2);`}
`;

const BigCheckboxContainer = styled(CheckboxContainer)`
    padding: 50px 0;
    // cursor: pointer;
`;

const CheckboxInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;
    cursor: pointer;
    opacity: 0;
`;

const CheckboxLabel = styled.label`
    position: absolute;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #a5a5a5;
`;

export const Checkbox = (props) => {
    const [checked, setChecked] = useState(props.checked);

    const toggleChecked = (e) => {
        setChecked(e.target.checked);
        props.onChange(e);
    };

    return (
        <CheckboxContainer checked={checked}>
            <CheckboxInput
                checked={checked}
                type='checkbox'
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={toggleChecked}
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

export const LockedCheckbox = (props) => {
    return (
        <CheckboxContainer checked={props.checked}>
            <CheckboxInput
                type='checkbox'
                id={props.id}
                name={props.name}
                value={props.value}
                disabled
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

export const Radio = (props) => {
    return (
        <CheckboxContainer checked={props.checked}>
            <CheckboxInput
                type='radio'
                id={props.id}
                name={props.name}
                value={props.value}
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

export const BigRadio = (props) => {
    return (
        <BigCheckboxContainer checked={props.checked}>
            <CheckboxInput
                type='radio'
                id={props.id}
                name={props.name}
                value={props.value}
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </BigCheckboxContainer>
    );
};

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const HTMLSelect = styled.select`
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

    ${(props) => (props.valid === false ? InvalidInput : '')}
`;

const __reactSelect = (props) => (
    <ReactSelect {...props} classNamePrefix='select' />
);

const __asyncReactSelect = (props) => (
    <AsyncReactSelect {...props} classNamePrefix='select' />
);

/* Adding a style to the select component. */
const selectStyle = `
    width: 100%;

    & .select__control {
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        border-radius: 5px;
        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: 0.05em;
        background: #170627;
        color: #e5e5e5;
        margin: 15px 0;
        padding: 10px 0;

        ${(props) => (props.valid === false ? InvalidInput : '')}
    }

    & .select__control:focus {
        border: 1px solid #7e3bdc !important;
        background: #220a38 !important;
        box-shadow: 0 0 0 1px #7e3bdc !important;
    }

    & .select__option {
        background: #220a38;
    }

    & .select__option:hover, & .select__option:focus {
        background: rgba(255, 255, 255, 0.1);
    }

    & .select__menu {
        z-index: 11;
    }
`;

export const Select = styled(__reactSelect)`
    ${selectStyle}
`;

export const AsyncSelect = styled(__asyncReactSelect)`
    ${selectStyle}
`;

export const QuestionIcon = styled.a`
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
    color: #a5a5a5;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 100%;

    &[data-title]:hover:after {
        content: attr(data-title);
        position: absolute;
        padding: 4px;
        left: 80px;
        top: -26px;
        width: ${(props) => props.width}
        height: ${(props) => props.height}

        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        // line-height: px;

        display: flex;
        align-items: center;

        background: #220a38;
        border: 1px solid #7e3bdc;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
`;

export const DeleteIcon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 100%;
    color: white;
    border: 1px solid #a5a5a5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

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

    color: #e5e5e5;
`;

const InvalidFeedback = `
    color: #FF003D;
    font-size: 14px;
    margin-top: -10px;
`;

const ValidFeedback = `
    color: #7E3BDC;
    font-size: 14px;
    margin-top: -10px;
`;

export const InputFeedback = styled.div`
    ${(props) => (
        props.type === 'invalid'
        ? InvalidFeedback
        : ValidFeedback
    )}
`;
