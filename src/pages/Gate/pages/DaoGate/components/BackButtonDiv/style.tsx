import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

/* This is a type definition for the `ButtonWrapper` component. It is used to define the properties
that the component can accept. */
interface IButtonWrapperProps {
    ml?: string | number;
    width?: string | number;
    size?: string | number;
    onClick?(): void;
}

export const Wrapper = styled.div`
    display: flex;
    margin: 20px 40px;
    align-items: center;
    justify-content: space-between;
`;
export const Div = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const ButtonWrapper = styled.div<IButtonWrapperProps>`
    display: flex;
    width: ${(props) => props.width || '40px'};
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    margin-left: ${(props) => props.ml || '0'}px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.size || '20px'};
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #e5e5e5;
    &[data-title]:hover:after {
        content: attr(data-title);
        position: absolute;
        padding: 2px 10px;

        top: 56px;
        right: 0px;

        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        // line-height: px;

        display: flex;
        align-items: center;

        background: #220a38;
        border: 1px solid #7e3bdc;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
`;
export const TextWrapper = styled.div`
    padding-bottom: 4px;
    margin: 0px 15px;
`;
export const Text = styled.p`
    font-family: Be Vietnam;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-align: left;
    color: white;
`;
export const DeleteModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    z-index: 5;
`;
export const DeleteContainer = styled.div`
    background: #170627;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: calc(100% - 80px);
    max-height: calc(100% - 80px);
    height: 300px;
    width: 280px;

    padding-left: 20px;
    padding-right: 20px;
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

    cursor: pointer;
`;
