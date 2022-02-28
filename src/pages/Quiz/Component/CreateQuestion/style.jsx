import styled from 'styled-components';
import { FormStyled } from '../../../../components/Form';

export const AnswerBox = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const IconBox = styled.div`
    color: ${(props) => (props.color ? props.color : `white`)};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    min-width: 40px;
    background: #170627;
    border: 1px solid
        ${(props) => (props.border ? props.border : `rgba(255, 255, 255, 0.2)`)};
    border-radius: 5px;
    margin: 0 auto;
    margin-right: ${(props) => props.mr};
    margin-left: ${(props) => props.ml};
    cursor: pointer;
`;

export const AnswerInput = styled(FormStyled.Input)`
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Be Vietnam;
    padding: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #e5e5e5;
    width: 100%;
    height: 40px;
    margin: 0;
`;

export const AddQuestionBox = styled.div`
    display: flex;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: left;

    margin-top: 10px;
    margin-bottom: 50px;
`;

export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #170627;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    cursor: pointer;
`;

export const AddOptionText = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    color: #e5e5e5;
    padding: 10px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    background: #170627;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
`;
