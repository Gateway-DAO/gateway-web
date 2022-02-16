import styled from 'styled-components';

const SVG = styled.svg`
    cursor: pointer;
`;

const EditIcon = ({ fill = 'white', size = 28, ...props }) => (
    <SVG
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <circle cx='14' cy='14' r='14' fill={fill} />
        <path
            d='M17.25 9L15.875 10.375L18.625 13.125L20 11.75L17.25 9ZM14.5 11.75L9 17.25V20H11.75L17.25 14.5L14.5 11.75Z'
            fill='black'
        />
    </SVG>
);

export default EditIcon;
