import styled from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

export const ConnectToWallet = styled.a`
    border-radius: 200px;
    position: relative;
    padding: 0.6rem;
    min-width: 210px;

    ${(props) =>
        props.wrong
            ? `background-color: #FF003D;
                border: 1px solid #EE787B;`
            : props.borderd
            ? `background-image: linear-gradient(#170627, #170627),
                linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
                background-origin: border-box;
                background-clip: content-box, border-box;
                box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
                padding: 0.1rem;`
            : `background: linear-gradient(88.53deg, #EE787B 2.77%, #E153F2 51.87%, #495BE0 98.96%);
                box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);`}

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        padding: 1px;
        margin-top: 1rem;
    }
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
    justify-content: center;

    color: #e5e5e5;

    ${(props) => (props.borderd ? `margin: 20px 30px` : `margin: 10px 20px`)};

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
