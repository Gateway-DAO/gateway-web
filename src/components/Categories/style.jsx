import styled from 'styled-components'

export const Box = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;

    & > * {
        grid-column: 2 / -2;
    }

    & > .full {
        grid-column: 1 / -1;
    }
`

export const CategoriesContainer = styled.ul`
    text-color: white;
    margin-bottom: 55px;
    display: flex;
    flex-wrap: wrap;
`

export const Category = styled.li`
    display: inline;
    font-family: ${(props) =>
        props.activeGradient ? 'Montserrat' : 'Be Vietnam'};
    font-style: normal;
    font-weight: ${(props) => (props.active ? '700' : '400')};
    font-size: 14px;
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
        props.activeGradient && props.active ? 'gradientIn 1s 1 both;' : 'gradientOut 1s 1 both;'};
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
`

export const CategoryEmoji = styled.p`
    display: inline;
    font-size: ${(props) => (props.activeGradient ? '24px' : '14px')};
    line-height: 20px;
    /* Background - turning off gradeint for emojis*/
    -webkit-text-fill-color: white;
    -moz-text-fill-color: white;
`

/*
export const CardBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`
*/

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
`