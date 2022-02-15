import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    width: 1px;
    background-color: white;
`;

export const Label = styled.label`
    color: white;
    pointer-events: none;
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: transparent;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA5NiA5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTYgOTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMzMzMzMzM7fQ0KPC9zdHlsZT4NCjxnIGlkPSJYTUxJRF80XyI+DQoJPHBvbHlnb24gaWQ9IlhNTElEXzZfIiBjbGFzcz0ic3QwIiBwb2ludHM9IjM4LjUsNjEuMiAyNS4zLDQ4IDIwLjgsNTIuNSAzOC41LDcwLjIgNzYuNSwzMi4yIDcyLDI3LjcgCSIvPg0KPC9nPg0KPC9zdmc+DQo=');
    background-position: center center;
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    pointer-events: none;
    filter: invert();
    padding-left: 3px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-top: -8px;
    content: '';
    top: 50%;
    right: 0;
    border-radius: 4px;
    border: 1px solid white;
    background: #ffffff;
    transition: 0.2s;
    background-color: transparent;
    margin: 0px 15px 0px 2px;
`;

export const CheckboxComponent = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <Label htmlFor={HiddenCheckbox} checked={checked} />
        <StyledCheckbox checked={checked} />
    </CheckboxContainer>
);
export default CheckboxComponent;
