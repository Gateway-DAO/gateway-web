import styled from 'styled-components';

export const Container = styled.main`
    margin: auto 15%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CircleBox = styled.div`
    background: #220a38;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 5px;

    width: 30%;
    height: 30%;

    padding: 35px;
    margin-bottom: 70px;

    & .CircularProgressbar .CircularProgressbar-path {
        stroke: url(#circleGradient);
    }
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

    margin-bottom: 70px;
`;

export const CircleText = styled.p`
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0.05em;
    text-align: center;

    color: white;
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
