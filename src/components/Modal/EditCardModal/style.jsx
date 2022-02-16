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
