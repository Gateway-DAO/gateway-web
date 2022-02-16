import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;

    & > * {
        grid-column: 2 / -2;
    }

    & > .full {
        grid-column: 1 / -1;
    }
`;

export const CategoriesContainer = styled.ul`
    text-color: white;
    display: flex;
    flex-wrap: wrap;
`;

export const Category = styled.li`
    display: inline;
    font-family: ${(props) =>
        props.activeGradient ? 'Montserrat' : 'Be Vietnam'};
    font-style: normal;
    font-weight: ${(props) => (props.active ? '700' : '400')};
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    padding: 5px;
    color: ${(props) =>
        props.activeGradient && props.active
            ? '#E5E5E5'
            : 'rgba(255, 255, 255, 0.6)'};
    margin-right: 25px;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 1170px) {
        font-size: 13px;
        line-height: 19px;
        margin-right: 20px;
    }

    @media only screen and (max-width: 768px) {
        line-height: 18px;
        margin-right: 18px;
    }

    /* Active category after scoll gradient*/
    animation: ${(props) =>
        props.activeGradient && props.active
            ? 'gradientIn 1s 1 both;'
            : 'gradientOut 1s 1 both;'};
    @keyframes gradientIn {
        0% {
            background: #e5e5e5;
            letter-spacing: 0.05em;
            font-size: 14px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            -o-background-clip: text;
            -o-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        100% {
            background: linear-gradient(
                88.04deg,
                #ee787b 22.54%,
                #e153f2 41.08%,
                #495be0 65.25%,
                #6a39f3 86.1%
            );
            letter-spacing: -0.015em;
            font-size: 24px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            -o-background-clip: text;
            -o-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }

    @keyframes gradientOut {
        0% {
            background: linear-gradient(
                88.04deg,
                #ee787b 22.54%,
                #e153f2 41.08%,
                #495be0 65.25%,
                #6a39f3 86.1%
            );
            letter-spacing: -0.015em;
            font-size: 24px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            -o-background-clip: text;
            -o-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        100% {
            background: #e5e5e5;
            letter-spacing: 0.05em;
            font-size: 14px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            -o-background-clip: text;
            -o-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }
`;

export const CategoryEmoji = styled.p`
    display: inline;
    font-size: ${(props) => (props.activeGradient ? '24px' : '14px')};
    line-height: 20px;
    /* Background - turning off gradeint for emojis*/
    -webkit-text-fill-color: white;
    -moz-text-fill-color: white;
`;

export const AllButton = styled(Link)`
    text-decoration: none;
    display: inline;
    // font-family: Be Vietnam;
    // font-style: normal;
    // font-weight: 300;
    // font-size: 15px;
    // line-height: 20px;
    // letter-spacing: 0.05em;
    // text-transform: capitalize;
    padding: 3px;
    // color:  rgba(255, 255, 255, 0.6);
    // margin-right: 25px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #ffffff;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 1170px) {
        font-size: 13px;
        line-height: 19px;
        margin-right: 20px;
    }

    @media only screen and (max-width: 768px) {
        line-height: 18px;
        margin-right: 18px;
    }
`;

// export const CardBox = styled.div`
//     display: flex;
//     // align-items:center;
//     justify-content: space-around;
//     padding:20px;
// `

// export const CardBox = styled.div`
//     display: grid;
//     overflow-x:hidden;
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

export const LoaderBox = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px 40px;
`;

export const CardBox = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    // grid-row-gap: 20px;
    // grid-template-rows: repeat(1, 1fr);
    // grid-auto-rows: 0;
    // overflow-y: hidden;
    // grid-auto-flow: column;
    margin: 60px 40px;
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

export const MoreCard = styled.div`
    background-color: transparent;
    border-radius: 20px;
    display: grid;
    border: 1px solid rgba(229, 229, 229, 0.5);
    grid-template-rows: repeat(5, 1fr);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content:center;
    height: 25em;
    position:relative;

    &:hover {
        background: #220A38;
        border: 1px solid #7E3BDC;
        box-sizing: border-box;
        border-radius: 20px;
    }

    @media only screen and (max-width: 1170px) {
        height: 27em;
        min-width: 15em;
    }
    @media only screen and (max-width: 300px) {
      min-width: 200px;
      max-width: 200px;
`;
export const More = styled.div`
    position: absolute;
    width: 54px;
    height: 54px;
    left: 15px;
    top: 12px;
    border-radius: 100%;
    border: 1px solid rgba(229, 229, 229, 0.5);
    box-sizing: border-box;
    text-align: center;
`;
export const MoreSymbol = styled.div`
    position: absolute;
    width: 22px;
    height: 53px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -56%);
    color: #e5e5e5;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
    // display: flex;
    // align-items: center;
    // justify-content:center;
`;
export const MoreText = styled.div`
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 80px;
`;
