import styled from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

export const Container = styled.div`
    position: relative;
`

export const ConnectToWallet = styled.a`
    border-radius: 20px;
    position: relative;
    border: double 1px transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${(props) =>
        props.wrong
            ? `background-color: #FF003D;
                border: 1px solid #EE787B;`
            : `background-image: linear-gradient(#170627, #170627),
                linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
                background-origin: border-box;
                background-clip: content-box, border-box;
                box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);`}

    &:hover {
        cursor: pointer;
    }

    display: inline-block !important;
`;

export const ConnectText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #e5e5e5;

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
`;

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
`;
