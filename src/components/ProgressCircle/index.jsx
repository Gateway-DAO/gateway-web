import * as Styled from './style';
import React from 'react';

const ProgressCircle = (props) => {
    let perc = (1 - props.keys / props.totalKeys) * 70;
    let final = 70 - perc;

    return (
        <Styled.Skill>
            <Styled.SVG
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                width='160px'
                height='160px'
            >
                <defs>
                    <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#e91e63' />
                        <stop offset='100%' stopColor='#673ab7' />
                    </linearGradient>
                </defs>
                <circle
                    fill='none'
                    stroke='url(#GradientColor)'
                    strokeWidth='4px'
                    strokeDasharray='63'
                    strokeDashoffset={perc}
                    cx='12'
                    cy='12'
                    r='9'
                    strokeLinecap='round'
                />
            </Styled.SVG>
        </Styled.Skill>
    );
};

export const GradientSVG = ({
    startColor = '#e91e63',
    endColor = '#673ab7',
    idCSS = 'gradientCSS',
    rotation = 0,
}) => {
    let gradientTransform = `rotate(${rotation})`;

    return (
        <svg style={{ height: 0 }}>
            <defs>
                <linearGradient
                    id={idCSS}
                    gradientTransform={gradientTransform}
                >
                    <stop offset='0%' stopColor={startColor} />
                    <stop offset='100%' stopColor={endColor} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ProgressCircle;
