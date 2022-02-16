import * as Styled from './style';
import React from 'react';
// import "./styles.css";

const KeyStatusBar = (props) => {
    let perc = (1 - props.keys / props.TotalKeys) * 70;
    let final = 70 - perc;

    return (
        <Styled.skill>
            <Styled.Svg
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
            </Styled.Svg>
        </Styled.skill>
    );
};
export default KeyStatusBar;
