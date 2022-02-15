import styled from 'styled-components';

export const StatusBar = styled.div`
    width: 16px;
    height: 16px;
    border: 4px solid
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 73.96%, #0075ff 100%);
    border-radius: 100%;
    margin-right: 5px;
`;

export const Skill = styled.div`
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

export const SVG = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
`;
