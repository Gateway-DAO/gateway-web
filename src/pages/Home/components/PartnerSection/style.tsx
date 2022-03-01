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

    &:hover {
        cursor: pointer;
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
