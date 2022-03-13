import React, { useRef, useState } from 'react';
import * as Styled from './style';
import { useClickAway } from 'react-use';
import FilterCheckbox from '../../../../components/FilterCheckbox';

interface Props {
    title: string;
    filterable?: boolean;
    options: string[];
    selected: string[];
    showResult?: () => void;
    handleSelected?: (options: string[]) => void;
}

export default function FilterDropdown(props: Props) {
    const [visible, handleVisible] = useState<boolean>(false);

    const ddContent = useRef<any>(null);

    useClickAway(ddContent, () => {
        if (visible) handleVisible(false);
    });

    const toggle = () => {
        handleVisible(!visible);
    };

    const onSelect = (item: string) => {
        const newFilterOptions: string[] = [...props.selected];
        const index = newFilterOptions.indexOf(item);

        if (index < 0) {
            newFilterOptions.push(item);
        } else {
            newFilterOptions.splice(index, 1);
        }

        props.handleSelected(newFilterOptions);
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
                        <FilterCheckbox
                            onChange={onSelect}
                            checked={!(props.selected.indexOf(item) < 0)}
                            label={item}
                        />
                    </Styled.DropdownItem>
                ))}
                <Styled.FilterAction>
                    <Styled.CancelButton onClick={toggle}>
                        Cancel
                    </Styled.CancelButton>
                    <Styled.SearchButton onClick={props.showResult}>
                        Show Results
                    </Styled.SearchButton>
                </Styled.FilterAction>
            </Styled.DropdownContent>
        </Styled.DropdownContainer>
    );
}
