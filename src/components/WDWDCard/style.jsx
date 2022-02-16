import styled from 'styled-components';

export const Container = styled.div`
    background: #180b27;
    border-radius: 20px;
    margin: 10px 0;
    margin-bottom: 40px;
    // max-width:500px;
    font-family: Be Vietnam;
    font-style: normal;
    font-size: 18px;
    line-height: 34px;
    /* or 212% */

    color: #e5e5e5;

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
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
`;

export const BoldText = styled(Text)`
    font-weight: bold;
`;
