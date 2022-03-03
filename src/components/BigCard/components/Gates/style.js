import styled from 'styled-components';
export const Wrapper = styled.div``;

export const GatesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    margin: 0 30px;
    margin-top: 60px;
    place-items: center;

    @media only screen and (max-width: 1700px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 1350px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 785px) {
        grid-template-columns: repeat(1, 100%);
    }

    @media only screen and (max-width: 480px) {
        margin-top: 60px;
    }
`;
