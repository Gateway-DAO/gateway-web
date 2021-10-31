import styled from "styled-components"
import { Text as BGText } from "../BigCard/style";

export const Container = styled.div`
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 10px 0;
    padding: 25px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* or 233% */

    letter-spacing: 0.05em;

    & h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
    }

    & h1 {
        font-size: 20px;
    }

    & h2 {
        font-size: 18px;
    }

    & h3 {
        font-size: 16px;
    }

    & h4 {
        font-size: 14px;
    }

    & ul {
        margin-top: 10px;
    }

    & ul li {
        list-style-type: circle;
        list-style-position: inside;
    }
`

export const BoldText = styled(Text)`font-weight: bold;`