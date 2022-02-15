import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';

export const Container = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 6px;
    margin: 10px 0;
    padding: 25px;
    position: relative;

    @media only screen and (max-width: 350px) {
        padding: 0;
    }
`;

export const BountyInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

export const BountyInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-size: 16px;
    line-height: 34px;
    /* or 212% */
    color: #e5e5e5;
`;

export const BoldText = styled(Text)`
    font-weight: bold;
`;

// eslint-disable-next-line react/display-name
export const TrashBtn = React.forwardRef((props, ref) => {
    const Icon = styled(FaTrashAlt)`
        position: absolute;
        top: 20px;
        right: 20px;

        &:hover {
            cursor: pointer;
        }
    `;

    return React.createElement(Icon, { ...props, ref });
});
