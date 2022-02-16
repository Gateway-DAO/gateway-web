import styled from 'styled-components';

export const CardBox = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 10px;
    grid-template-rows: minmax(150px, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: calc(25% - 20px * 2);

    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    & > *:last-child {
        margin-right: 20px;
    }

    &:before {
        content: '';
        width: 10px;
    }

    @media only screen and (max-width: 1450px) {
        grid-auto-columns: calc(30% - 20px * 2);
    }

    @media only screen and (max-width: 1170px) {
        grid-auto-columns: calc(37.5% - 20px * 2);
    }

    @media only screen and (max-width: 768px) {
        grid-auto-columns: calc(50% - 20px * 2);
    }

    @media only screen and (max-width: 550px) {
        grid-auto-columns: calc(60% - 20px * 2);
    }

    @media only screen and (max-width: 480px) {
        grid-auto-columns: calc(90% - 20px * 2);
    }

    @media only screen and (max-width: 300px) {
        grid-auto-columns: calc(100% - 20px * 2);
    }
`;
