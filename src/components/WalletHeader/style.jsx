import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

export const ConnectToWallet = styled.a`
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;

    border: double 1px transparent;
    background-image:   linear-gradient(#170627, #170627), 
                        linear-gradient(90deg, #FF00B8 0%, #7E3BDC 50.52%, #0075FF 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover {
        cursor: pointer;
    }
`

export const ConnectText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #E5E5E5;

    margin: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 1170px) {
        margin: 8px 16px;
        font-size: 11px;
    }

    @media only screen and (max-width: 768px) {
        margin: 6px 12px;
        font-size: 9px;
    }
`

export const SpinningLoader = styled(AiOutlineLoading)`
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    margin-right: 5px;
`