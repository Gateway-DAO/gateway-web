import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 25px;
`;
export const Title = styled.div`
    color: white;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 12px;
`;
export const SingleInputDiv = styled.input`
    border-radius: 5px;
    border: solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    width: 98%;
    font-family: Be Vietnam;
    padding: 10px 0px 10px 10px;
    color: white;
`;
export const MultiInputDiv = styled.textarea`
    border-radius: 5px;
    border: solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    width: 98%;
    font-family: Be Vietnam;
    padding: 10px 0px 10px 10px;
    color: white;
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
`;
export const ButtonDiv = styled.button`
    border: 1px solid #a5a5a5;
    border-radius: 20px;
    background: none;
    cursor: pointer;
`;
export const ButtonText = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: white;
    padding: 10px 50px;
`;
export const Select = styled.select`
    border-radius: 5px;
    border: solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    width: 100%;
    font-family: Be Vietnam;
    padding: 10px 0px 10px 10px;
    color: white;
`;
export const OptionWrapper = styled.div`
    border-bottom: 1px solid rgba(229, 229, 229, 0.15);
`;
export const Option = styled.option`
    background: #220a38;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
`;
export const ChainLogo = styled.img`
    width: 16px;
    height: 16px;
    // left: 413px;
    // top: 432px;
    // background: ${(props) => `url(${props.logo})`};
    // transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const DateInput = styled.input`
    font-family: Be Vietnam;
    border-radius: 5px;
    border: solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    width: 98%;
    font-family: Be Vietnam;
    padding: 10px 0px 10px 10px;
    color: white;
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        font-size: 15px;
    }
`;

export const TwoSelectWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
`;
export const SmallTitle = styled.div`
    font-family: Be Vietnam;
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin: 12px 0px;
`;
export const TwoSelect = styled.select`
    border-radius: 5px;
    border: solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    width: 100%;
    font-family: Be Vietnam;
    padding: 10px 0px 10px 10px;
    color: white;
`;

export const CheckBoxLabel = styled.label`
    color: white;
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: right;
`;

export const NumberInputDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
`;
export const NumberInput = styled.input`
    border-radius: 5px;
    border: solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    width: 100%;
    font-family: Be Vietnam;
    padding: 10px 0px 10px 10px;
    color: white;
`;
export const NumberBox = styled.div`
    border-radius: 5px;
    border: solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    width: 100%;
    font-family: Be Vietnam;
    padding: 10px 0px 10px 10px;
    color: white;
`;
export const NumberDiv = styled.input`
    color: white;
    border: none;
    text-align: center;
    width: 50px;
    background-color: transparent;
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-decoration: none;
    &:focus {
        outline: none;
    }
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;
