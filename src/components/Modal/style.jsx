import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 5;
`;

export const Container = styled.div`
    background: #170627;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: calc(100% - 80px);
    max-height: calc(100% - 80px);
`;

export const ChildrenWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: transparent;
    }
    &::-webkit-scrollbar-track:hover {
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.2);
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb:active {
        background: rgba(255, 255, 255, 0.9);
    }
`;

export const CloseBtn = styled(IoMdClose)`
    /* Background */
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    position: absolute;
    top: 15px;
    right: 15px;
`;

export const Header = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 90px;
    /* identical to box height, or 187% */
    text-align: center;
    letter-spacing: -0.05em;
    /* Background */
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;
