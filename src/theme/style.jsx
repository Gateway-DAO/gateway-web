import styled from 'styled-components';

/** CONTAINERS **/

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
    left: 0;
    width: 100%;
`;

/** TEXT **/

export const MainText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 90px;
    /* or 94% */

    text-align: center;
    letter-spacing: -0.05em;

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

    width: 100%;
`;

export const H2 = styled(MainText)`
    font-size: 48px;
    font-weight: bold;
`;

// Modal Image
export const Image = styled.div`
    margin-bottom: 25px;
`;
export const Buttom = styled.div`
    display: flex;
    width: ${(props) => props.width || '40px'};
    height: 40px;

    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    margin-left: ${(props) => props.ml || '0'}px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.size || '20px'};
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #e5e5e5;
`;
var size = 0;
export const ToolTip = styled.div`
    ${(size = 1)};
    position: relative;
    &::before,
    ::after {
        position: absolute;
        top: -0.25rem;
        left: 50%;
        transform: translate(-50%, -100%) scale(${size});
    }
    &:before {
        content: 'jsndjd';
        font-family: Poppins;
        font-style: normal;
        color: #ffffff;
        font-size: 10px;
        padding: 0.5rem;
        border-radius: 5px;
        text-align: center;
        width: 100px;
        height: 10px;
        max-width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
    &:hover {
        ${(size = 2)};
    }
    &:hover: {
        ${(size = 2)};
    }
`;
