import styled from "styled-components"

export const Container = styled.div`
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 10px 0;
    padding: 25px;
    // max-width:500px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 190%;
    
    /* or 233% */

    letter-spacing: 0.05em;

    & h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        margin: 10px 0;
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
        margin: 10px 0;
    }

    & ul li {
        list-style-type: circle;
        list-style-position: inside;
    }
`

export const BoldText = styled(Text)`font-weight: bold;`