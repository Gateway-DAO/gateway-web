import styled from 'styled-components';

export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 2fr 6fr;
    margin-top: 55px;
    margin-bottom: 30px;
`;

export const ChannelContainer = styled.div`
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
`;

export const FeedMessageContainer = styled.div`
    display: grid;
    grid-column: 3 / 5;
    grid-row: 1fr auto;
`;

export const H4Text = styled.h4`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #e5e5e5;
    margin-bottom: 26px;
`;

export const H5Text = styled.h5`
    font-family: Be Vietnam;
    font-style: normal;
    font-size: 21px;
    line-height: 42px;
    /* or 200% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    cursor: pointer;

    color: rgba(229, 229, 229, 0.5);

    ${(props) => (props.active ? `font-weight: bold; color :#ffffff` : '')}
`;
