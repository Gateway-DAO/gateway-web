import {
    MdOutlineCheckBox,
    MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const CheckboxInput = styled(MdOutlineCheckBoxOutlineBlank)`
    position: relative;
    color: #e5e5e5;
    font-size: 22px;
`;

export const CheckedboxInput = styled(MdOutlineCheckBox)`
    position: relative;
    color: #170627;
    font-size: 22px;
`;

export const Label = styled.span`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 12px;
    /* or 92% */

    color: #170627;

    margin-left: 8px;
`;
