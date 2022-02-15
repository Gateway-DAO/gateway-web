import styled from 'styled-components';

export const DragArea = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #170627;
    border: ${(props) =>
        props.hover
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px dashed rgba(255, 255, 255, 0.2)'};
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 15px;
`;

export const Header = styled.div`
    width: 100%;
    height: 32px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    text-align: center;
    color: ${(props) =>
        props.hover ? ' rgba(255, 255, 255, 1)' : ' rgba(255, 255, 255, 0.2)'};
`;

export const Span = styled.span`
    color: #fe02b9;
`;

export const Background = styled.div`
    position: relative;
    width: 337px;
    height: 256px;
    margin-top: 15px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 4px;
`;

export const Cross = styled.div`
    cursor: pointer;
    position: absolute;
    left: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -4%;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: #7e3bdc;
    border: 1px solid #ffffff;
    transform: rotate(45deg);
    z-index: 10;
    font-weight: 500;
    color: #ffffff;
`;
