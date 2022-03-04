import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-self: flex-start;
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Text = styled.h1`
    color: white;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 82px;
    /* or 114% */

    letter-spacing: -0.015em;

    @media only screen and (max-width: 1170px) {
        font-size: 64px;
        line-height: 68px;
    }

    @media only screen and (max-width: 507px) {
        font-size: 51px;
        line-height: 68px;
    }

    @media only screen and (max-width: 416px) {
        font-size: 36px;
        line-height: 41px;
    }
`;

export const BigText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 280px;
    /* or 37% */

    display: flex;
    align-items: center;
    letter-spacing: -0.065em;

    height: 197px;
    margin: 1.5rem 0;

    /* Background */
    background: linear-gradient(88.04deg, #ee787b 22.54%, #e153f2 41.08%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    @media only screen and (max-width: 1170px) {
        font-size: 255px;
    }

    @media only screen and (max-width: 507px) {
        font-size: 180px;
        line-height: 45px;
        margin: 0.5rem 0;
        height: 133px;
    }

    @media only screen and (max-width: 416px) {
        font-size: 126px;
        height: 97px;
    }
`;

export const JoinButton = styled.a`
    border-radius: 200px;
    position: relative;
    padding: 0.6rem;
    min-width: 210px;
    margin-top: 2rem;

    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    padding: 0.1rem;

    &:hover {
        cursor: pointer;
        background-image: linear-gradient(
            90deg,
            #ff00b8 0%,
            #7e3bdc 50.52%,
            #0075ff 100%
        );
    }
`;

export const ButtonText = styled.p`
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

    margin: 20px 30px;

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
