import styled from 'styled-components';

export const Container = styled.div`
    margin: 40px 140px;
    color: white;
    font-family: Poppins sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;
export const ChannelNumber = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 10px;
    /* line-height: 90px; */
    /* identical to box height, or 187% */
    text-align: center;
    /* letter-spacing: -0.05em; */
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

export const Underline = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 20px;
`;

export const AddChannelButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
