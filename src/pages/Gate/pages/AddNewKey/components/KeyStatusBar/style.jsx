import styled from 'styled-components';

export const StatusBar = styled.div`
    width: 16px;
    height: 16px;
    border: 4px solid
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 73.96%, #0075ff 100%);
    // border-image-source: linear-gradient(90deg, #FF00B8 0%, #7E3BDC 73.96%, #0075FF 100%);
    border-radius: 100%;
    margin-right: 5px;
`;
// export const body =styled.div`
// background: #e3edf7;
// height:100vh;
// display: flex;
// align-items: center;
// justify-content:center;
// `

export const skill = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
`;
export const Circle = styled.circle`
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 4px;
    stroke-dasharray: 472;
    stroke-dashoffset: 0;
`;
export const Svg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
`;
