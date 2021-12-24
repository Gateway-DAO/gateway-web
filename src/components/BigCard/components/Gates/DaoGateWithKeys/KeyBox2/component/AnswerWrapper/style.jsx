import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 26px;
    margin-bottom: 52px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 23px;
`
export const Answers = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    cursor: pointer;
`

const ActiveAns = `
    background: rgba(39, 213, 162, 0.2);
    border: 1px solid #27D5A2;
`

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
    line-height: 26px;

    ${(props) => (props.active ? ActiveAns : '')}
`

export const OptionAnswer = styled.div`
    width: 339px;
    height: 40px;
    border: 1px solid #170627;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 11px;
    ${(props) => (props.active ? ActiveAns : '')}
`

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
`

export const QuestionText = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height, or 117% */

    letter-spacing: -0.015em;

    color: #170627;
    margin-top: 11px;
`
