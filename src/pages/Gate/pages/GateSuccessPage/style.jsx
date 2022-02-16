import styled from 'styled-components';

export const Container = styled.main`
    margin: auto 15%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.span`
    font-family: Be Vietnam;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`;

export const PurpleText = styled(Text)`
    color: #ff00b8;
    font-weight: 700;
`;

export const NFT = styled.img`
    margin-top: 30px;
    border-radius: 20px;
`;

export const SmallTextContainer = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-top: 38px;
    color: #ffffff;
`;
