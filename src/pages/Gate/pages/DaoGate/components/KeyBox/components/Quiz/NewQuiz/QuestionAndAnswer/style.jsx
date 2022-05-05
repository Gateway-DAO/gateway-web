import styled from 'styled-components';

const ActiveAns = `
    background: #220A38;
    border: 1px solid #7E3BDC;
`;

const activeStyling = `
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0px 3px 8px rgba(255, 0, 184, 0.1);
    border: double 1px transparent;
`;

export const QuestionNOText = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #a5a5a5;

    margin-bottom: 10px;
`;

export const QuestionBox = styled.div`
    margin-top: 44px;
`;

export const QuestionText = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;

    color: #e5e5e5;
`;

export const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 41px;
`;

export const Answers = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    cursor: pointer;
`;
export const Option = styled.span`
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    text-align: center;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => (props.active ? ActiveAns : '')}
`;

export const OptionAnswer = styled.div`
    width: 339px; // TODO: remove absolute width
    border: 1px solid #e5e5e5;
    color: #e5e5e5;
    box-sizing: border-box;
    border-radius: 5px;
    ${(props) => (props.active ? ActiveAns : '')}

    font-family: Be Vietnam;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;

    display: flex;
    align-items: center;
    padding-left: 11px;
`;

export const ActionButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: center;
    color: white;
    width: 210px;
    height: 40px;
    border: ${(props) =>
        props.clickable ? '1px solid #a5a5a5' : '1px solid #4a4a4a'};
    box-sizing: border-box;
    filter: drop-shadow(0px 6px 15px rgba(255, 0, 184, 0.3));
    border-radius: 20px;
    margin-top: 90px;
    ${(props) => (props.active ? activeStyling : ' ')}
    cursor: pointer;
    color: ${(props) => (props.clickable ? '#a5a5a5' : '#4a4a4a')};
`;
