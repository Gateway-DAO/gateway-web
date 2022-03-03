import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 20px;
`;

export const Image = styled.img`
    width: 150px;
`;

export const BadgeTitle = styled.h3`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
`;
