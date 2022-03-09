import styled from 'styled-components';

const SVG = styled.svg`
    cursor: pointer;
`;

const DDIcon = ({ fill = '#e5e5e5', active = false, size = 30, ...props }) => (
    <SVG
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <circle
            cx='15'
            cy='15'
            r='14'
            stroke={fill}
            fill={active ? '#ffffff' : 'transparent'}
            strokeOpacity='0.2'
        />
        <path
            d='M15.33 18L10.9999 13.5L19.6602 13.5L15.33 18Z'
            fill={active ? '#170627' : fill}
        />
    </SVG>
);

export default DDIcon;
