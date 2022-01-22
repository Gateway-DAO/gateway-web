import styled from "styled-components";

export const Container = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const BG = styled.div`
    background-image: url("${props => props.src}");
    filter: blur(20px);
    background-size: cover;
    border-radius: 20px;
    margin: -5px -10px;

    position: absolute;
    width: 100%;
    height: 100%;
`

export const Image = styled.div`
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin: 10%;
    z-index: 2;
`