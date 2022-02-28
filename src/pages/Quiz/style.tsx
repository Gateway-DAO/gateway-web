import styled from 'styled-components';

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
    left: 0;
    width: 100%;
`;
export const Container = styled.div`
    position: relarive;
    width: 100%;
    display: flex;
    align-self: flex-start;
    align-items: center;
    flex-direction: column;
`;
export const ErrorMessage = styled.div`
    position: absolute;
    top: 8%;
    min-width: 300px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #220a38;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Be Vietnam;
    // padding: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: #ffffff;
`;
