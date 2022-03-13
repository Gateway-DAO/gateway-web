import React, { useRef, useState } from 'react';
import * as Styled from './style';
import { useClickAway } from 'react-use';
import FilterCheckbox from '../../../../components/FilterCheckbox';

export default function FilterDropdown(props) {
    const [visible, handleVisible] = useState(false);

    const ddContent = useRef(null);

    useClickAway(ddContent, () => {
        if (visible) handleVisible(false);
    });

    const toggle = () => {
        handleVisible(!visible);
    };

    return (
        <Styled.DropdownContainer ref={ddContent}>
            <Styled.DropdownButton onClick={toggle}>
                <Styled.Title>{props.title}</Styled.Title>
                <Styled.Icon active={visible}></Styled.Icon>
            </Styled.DropdownButton>
            <Styled.DropdownContent visible={visible}>
                {props.filterable ? (
                    <Styled.FilterBox>
                        <Styled.FilterItem
                            type='text'
                            placeholder={`Add ${props.title}`}
                        ></Styled.FilterItem>
                        <Styled.WrappedFiSearch />
                    </Styled.FilterBox>
                ) : null}
                {props.options.map((item, idx) => (
                    <Styled.DropdownItem key={idx}>
                        <FilterCheckbox label={item} />
                    </Styled.DropdownItem>
                ))}
                <Styled.FilterAction>
                    <Styled.CancelButton onClick={toggle}>
                        Cancel
                    </Styled.CancelButton>
                    <Styled.SearchButton>Show Results</Styled.SearchButton>
                </Styled.FilterAction>
            </Styled.DropdownContent>
        </Styled.DropdownContainer>
    );
}
