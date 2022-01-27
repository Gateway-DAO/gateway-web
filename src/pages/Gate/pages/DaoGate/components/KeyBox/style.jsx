import styled from 'styled-components'

export const ThirdDiv = styled.div`
    padding-top: 30px;
    color: white;
`
export const Box = styled.div`
    color: ${(props) => (props.opened ? 'black' : 'white')};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 30px 25px;
    background-color: ${(props) => (props.opened ? 'white' : 'transparent')};
    transition: 0.2s;
`

export const TextContainer = styled.div`
    margin-bottom: 40px;
`

export const BoxTitle = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
`
export const BoxSubtitle = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    /* or 144% */

    color: ${(props) => (props.opened ? '#170627' : '#e5e5e5')};
`
export const BottonBox = styled.div`
    display: flex;
`

const DetailsButton = `
    background: linear-gradient(88.53deg, #EE787B 2.77%, #E153F2 51.87%, #495BE0 98.96%);
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
`

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
        props.opened
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
`
export const StartButtonTwo = styled.div`
    min-width: 150px;
    margin-top: 10px;
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
`

export const ButtonText = styled.p`
    font-size: 14px;
    margin: 12px 50px;
`
