import styled from 'styled-components';

// export const CardBox = styled.div`
//     display: grid;
//     grid-gap: 20px;
//     grid-template-columns: 10px;
//     grid-template-rows: minmax(150px, 1fr);
//     grid-auto-flow: column;
//     grid-auto-columns: calc(25% - 20px * 2);

//     overflow-x: scroll;
//     overflow-y: hidden;

//     &::-webkit-scrollbar {
//         display: none; /* Safari and Chrome */
//     }

//     & > *:last-child {
//         margin-right: 20px;
//     }

//     &:before {
//         content: '';
//         width: 10px;
//     }

//     @media only screen and (max-width: 1450px) {
//         grid-auto-columns: calc(30% - 20px * 2);
//     }

//     @media only screen and (max-width: 1170px) {
//         grid-auto-columns: calc(37.5% - 20px * 2);
//     }

//     @media only screen and (max-width: 768px) {
//         grid-auto-columns: calc(50% - 20px * 2);
//     }

//     @media only screen and (max-width: 550px) {
//         grid-auto-columns: calc(60% - 20px * 2);
//     }

//     @media only screen and (max-width: 480px) {
//         grid-auto-columns: calc(90% - 20px * 2);
//     }

//     @media only screen and (max-width: 300px) {
//         grid-auto-columns: calc(100% - 20px * 2);
//     }
// `

export const CardBox = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    // grid-row-gap: 20px;
    // grid-template-rows: repeat(1, 1fr);
    // grid-auto-rows: 0;
    // overflow-y: hidden;
    // grid-auto-flow: column;
    // margin: 60px 40px;
    margin: 60px 0;
    //margin-top: 60px;

    /*
    @media only screen and (max-width: 1700px) {
        grid-template-columns: repeat(3, 1fr);
    }
    */

    @media only screen and (max-width: 1170px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 735px) {
        grid-template-columns: repeat(1, 100%);
    }

    @media only screen and (max-width: 480px) {
        margin-top: 60px;
    }
`;
