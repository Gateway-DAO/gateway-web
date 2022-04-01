import styled from 'styled-components';

const FilledEditor = `
    background: #220A38;
    border: 1px solid #7E3BDC;
    box-sizing: border-box;
`;

export const RichEditor = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    letter-spacing: 0.05em;
    border-radius: 10px;
    padding: 15px 0;
    color: #e5e5e5;
    & .ql-editor {
        min-height: 200px;
        font-size: 16px;
    }
    & .ql-container {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    & .ql-toolbar {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    & .ql-toolbar .ql-stroke {
        fill: none;
        stroke: #a5a5a5;
    }
    & .ql-toolbar .ql-fill {
        fill: #a5a5a5;
        stroke: none;
    }
    & .ql-toolbar .ql-picker {
        color: #a5a5a5;
    }
`;
