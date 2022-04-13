import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 20px;
    padding: 10px 30px;
`;
export const Text = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #ffffff;
`;
export const Cross = styled.div`
    cursor: pointer;
    position: absolute;
    right: -6px;
    top: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: #7e3bdc;
    border: 1px solid #ffffff;
    transform: rotate(45deg);
    z-index: 1;
    font-weight: 500;
    color: #ffffff;
`;
