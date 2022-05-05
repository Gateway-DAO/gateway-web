import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 25vw;
`;

export const DaosContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ImageConstainer = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    margin: 5px;
`;
export const DaoTextBox = styled.h3`
    margin: 5px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #e5e5e5;
`;
export const HeadingContainer = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 90px;
    /* or 94% */

    letter-spacing: -0.05em;

    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;
