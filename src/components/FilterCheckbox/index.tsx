import React, { useState } from 'react';
import * as Styled from './style';

export default function FilterCheckbox(props) {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Styled.CheckboxContainer onClick={() => setChecked(!checked)}>
            {checked ? <Styled.CheckedboxInput /> : <Styled.CheckboxInput />}
            <Styled.Label>{props.label}</Styled.Label>
        </Styled.CheckboxContainer>
    );
}
