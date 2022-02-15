import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 43px;
    width: 100vh;
    height: 60vh;
`;

export const PluginBox = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    width: 325px;
    height: 250px;
    background: #170627;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10px;
`;

export const ImageContainer = styled.img`
    width: 80px;
    height: 80px;
    margin-top: 36px;
    color: white;
    border-radius: 50%;
`;

export const ConnectButton = styled.div`
    background: #170627;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 20px;
    margin-top: 12px;
`;

export const ButtonText = styled.h4`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #e5e5e5;
    padding: 10px 70px;
`;

export const PluginName = styled.h3`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #e5e5e5;
    margin-top: 12px;
`;
