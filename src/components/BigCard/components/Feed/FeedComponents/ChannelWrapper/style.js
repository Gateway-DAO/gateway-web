import styled from 'styled-components';

export const FeedMessageContainer = styled.div`
    display: grid;
    grid-column: 3 / 5;
    grid-row: 1fr auto;
`;

export const OtherPostButton = styled.button`
    width: 100%;

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
`;
