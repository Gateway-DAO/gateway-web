import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    z-index: 10;
    background: white;
    border: 1px solid black;
    border-radius: 20px;
    top: 30%;
    left: 30%;
    display: flex;
    flex-direction: column;

    &:before {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
    }
`