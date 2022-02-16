import styled from 'styled-components';

const ActiveAns = `
    background: rgba(39, 213, 162, 0.2);
    border: 1px solid #27D5A2;
`;

// Containers
export const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Answer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    cursor: pointer;
`;

// Buttons
export const Option = styled.span`
    box-sizing: border-box;
    border: 1px solid #170627;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    text-align: center;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => (props.active ? ActiveAns : '')}
`;

export const OptionAnswer = styled.div`
    width: 339px; // TODO: remove absolute width
    border: 1px solid #170627;
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

// Text
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

export const QuestionText = styled.h2`
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: -0.015em;
    text-align: left;

    // TODO: check if this is the actual margin
    margin-bottom: 15px;
`;
