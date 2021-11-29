import styled from "styled-components";

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

    & .ql-editor {
      min-height:200px;
    }

    & .ql-toolbar, .ql-container, .ql-snow {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
`