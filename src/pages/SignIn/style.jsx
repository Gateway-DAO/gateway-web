import styled from "styled-components"

export const Container = styled.main`
    background-color: transparent;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    overflow-x: hidden;
    
    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    }
`

export const MainBox = styled.section`
    margin: 100px 0;
    flex: 1;
`

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
`