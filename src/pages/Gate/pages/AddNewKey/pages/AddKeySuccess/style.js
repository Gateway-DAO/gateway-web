import styled from 'styled-components';

export const Container = styled.main`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 150px);
`;

export const Heading = styled.h1`
    font-family: Poppins;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -0.05em;
    text-align: center;

    /* Background */
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

    margin-bottom: 40px;
`;

export const RedirectText = styled.p`
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #fff;
`;
