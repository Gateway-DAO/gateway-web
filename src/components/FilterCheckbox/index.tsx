import React from 'react';
import * as Styled from './style';

interface Props {
    label: string;
    value: string;
    checked: boolean;
    onChange: (label: string) => void;
}

export default function FilterCheckbox(props: Props) {
    return (
        <Styled.CheckboxContainer onClick={() => props.onChange(props.value)}>
            {props.checked ? (
                <Styled.CheckedboxInput />
            ) : (
                <Styled.CheckboxInput />
            )}
            <Styled.Label>{props.label}</Styled.Label>
        </Styled.CheckboxContainer>
    );
}
