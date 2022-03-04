import styled from 'styled-components';

export const ThirdDiv = styled.div`
    padding-top: 30px;
    color: white;
`;
export const Box = styled.div`
    color: ${(props) => (props.opened ? 'black' : 'white')};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => (props.blocked ? '#A5A5A580' : '#7e3bdc')};
    box-sizing: border-box;
    border-radius: 20px;
    padding: 30px 25px;
    background-color: ${(props) => (props.opened ? 'white' : 'transparent')};
    transition: 0.2s;
`;

export const TextContainer = styled.div`
    margin-bottom: 40px;
`;
export const BoxHeading = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BoxTitle = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
`;

export const EditContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    font-size: 10px;

    margin-right: 10px;

    &:hover {
        cursor: pointer;
        background: #220a38;
        border: 1px solid #7e3bdc;
    }

    &[data-title]:hover:after {
        content: attr(data-title);
        position: absolute;
        padding: 4px 10px;

        top: 36px;

        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        // line-height: px;

        display: flex;
        align-items: center;

        background: #220a38;
        border: 1px solid #7e3bdc;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
`;

export const DeleteContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    font-size: 10px;

    &:hover {
        cursor: pointer;
        background: #220a38;
        border: 1px solid #7e3bdc;
    }

    &[data-title]:hover:after {
        content: attr(data-title);
        position: absolute;
        padding: 4px 10px;

        top: 36px;

        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        // line-height: px;

        display: flex;
        align-items: center;

        background: #220a38;
        border: 1px solid #7e3bdc;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
`;

export const BoxSubtitle = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    /* or 144% */
    color: ${(props) => (props.opened ? '#170627' : '#e5e5e5')};
    h1 {
        display: block;
        font-size: 2em;
        margin-top: 0.67em;
        margin-bottom: 0.67em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }
    h2 {
        display: block;
        font-size: 1.5em;
        margin-top: 0.83em;
        margin-bottom: 0.83em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }
    h3 {
        display: block;
        font-size: 1.17em;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }
    h4 {
        display: block;
        margin-top: 1.33em;
        margin-bottom: 1.33em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }
    h5 {
        display: block;
        font-size: 0.83em;
        margin-top: 1.67em;
        margin-bottom: 1.67em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }
    h6 {
        display: block;
        font-size: 0.67em;
        margin-top: 2.33em;
        margin-bottom: 2.33em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
    }
    img {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        padding-left: 16px;
    }
    li:before {
        content: '•';
        padding-right: 8px;
        color: ${(props) => (props.opened ? '#170627' : '#e5e5e5')};
    }
`;

export const BottonBox = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ActionButton = styled.div`
    display: flex;
    margin-right: 40px;
`;

const DetailsButton = `
    background: linear-gradient(88.53deg, #EE787B 2.77%, #E153F2 51.87%, #495BE0 98.96%);
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
`;

const CompletedButton = `
    border: 1px solid #27D5A2;
`;

export const StartButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: center;
    color: white;
    border-radius: 20px;

    ${(props) =>
        props.blocked
            ? CompletedButton
            : props.opened
            ? DetailsButton
            : `
        border: solid 1px transparent;
        background-image: linear-gradient(#170627, #170627),
            linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
    `}

    &:hover {
        cursor: pointer;
    }

    margin-right: 20px;
`;

export const StartButtonTwo = styled.div`
    min-width: 150px;
    // margin-top: 10px;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    border-radius: 20px;
    border: 1px solid rgba(165, 165, 165, 1);
    &:hover {
        cursor: pointer;
    }
    margin-right: 20px;
`;

export const EditButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: center;
    color: white;
    border-radius: 20px;

    &:hover {
        cursor: pointer;
    }
    margin-right: 20px;

    ${(props) =>
        props.opened
            ? DetailsButton
            : `
    border: solid 1px transparent;
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    `}
`;

export const EditDeleteContainer = styled.div`
    display: flex;
`;

export const ButtonText = styled.p`
    font-size: 14px;
    margin: 12px 50px;
    display: flex;
    align-items: center;
`;

export const InformationDiv = styled.div`
    display: flex;
    /* margin-left: 451px; */
`;
export const KeyRewardBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 43px;
`;
export const CompensationBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 43px;
`;

export const InformationBoxHeading = styled.h4`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
`;

export const InformationBoxInfoText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    /* or 144% */

    color: #a5a5a5;
`;
