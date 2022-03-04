import styled from 'styled-components';

export const Content = styled.div`
    margin-left: -14px;
    margin-right: -14px;
    padding: 0 0.7rem;
    display: flow-root;
`;

export const Col = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 14px;
    float: left;
    width: 25%;

    @media only screen and (max-width: 1200px) {
        width: 50%;
    }

    @media only screen and (max-width: 992px) {
        width: 50%;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const PartnerCard = styled.div`
    background: ${(props) =>
        props.background ? props.background : 'transparent'};
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 20px;
    padding: 2rem;
    height: 400px;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::before {
        position: absolute;
        top: 0;
        left: -80%;
        z-index: 2;
        display: block;
        content: '';
        width: 50%;
        height: 100%;
        background: -webkit-linear-gradient(
            left,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
        );
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
        );
        -webkit-transform: skewX(200deg);
        transform: skewX(200deg);
    }

    &:hover {
        cursor: pointer;

        &::before {
            -webkit-animation: shine 0.75s;
            animation: shine 0.75s;
        }
    }

    @-webkit-keyframes shine {
        100% {
            left: 120%;
        }
    }
    @keyframes shine {
        100% {
            left: 125%;
        }
    }
`;

export const PartnerLogo = styled.img`
    display: block;
`;

export const PartnerName = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 42px;
    /* or 233% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.015em;

    color: #e5e5e5;

    opacity: 0.5;

    position: absolute;
    bottom: 1rem;
`;
