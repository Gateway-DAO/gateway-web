import styled from 'styled-components';

export const Container = styled.main`
    min-height: 100vh;
    overflow-x: hidden;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;

    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    }
`;
