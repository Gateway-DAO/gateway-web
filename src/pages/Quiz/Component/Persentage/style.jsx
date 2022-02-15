import styled from 'styled-components';

export const Array = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;
export const Block = styled.div`
    width: 140px;
    height: 40px;
    background: #170627;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #e5e5e5;
    cursor: pointer;
    &:hover {
        background: #220a38;
        border: 1px solid #7e3bdc;
    }
    ${(props) =>
        props.checked
            ? `background: #220A38;border: 1px solid #7E3BDC;`
            : `background: #170627;border: 1px solid rgba(255, 255, 255, 0.2);`}
`;
