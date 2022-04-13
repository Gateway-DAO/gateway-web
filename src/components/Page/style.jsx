import styled from 'styled-components';

export const Container = styled.main`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;

    padding: 0;
    /* overflow: hidden; */

    /* &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    } */
`;

export const Children = styled.div`
    flex: 1;
`