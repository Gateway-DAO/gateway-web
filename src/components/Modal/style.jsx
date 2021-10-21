import styled from "styled-components"
import { IoMdClose } from "react-icons/io"

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5)
`

export const Container = styled.div`
    background: #170627;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const CloseBtn = styled(IoMdClose)`
    /* Background */
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    position: absolute;
    top: 15px;
    right: 15px;
`