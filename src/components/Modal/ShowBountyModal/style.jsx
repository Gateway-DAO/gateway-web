import styled from 'styled-components';

export const Container = styled.div`
    margin: 40px 140px;
    color: white;
    font-family: Poppins sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    margin: 10px 0;
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;

    color: rgba(255, 255, 255, 0.6);

    & a:visited {
        color: #7e3bdc;
    }
`;
