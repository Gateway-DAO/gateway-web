import styled from 'styled-components';

export const Container = styled.main`
    background-color: #170627;
    height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const TextBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainText = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 80px;
    /* identical to box height, or 381% */

    letter-spacing: -0.015em;

    color: #e5e5e5;
`;

export const SmallText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */

    text-align: center;
    letter-spacing: -0.015em;

    color: #e5e5e5;
`;
