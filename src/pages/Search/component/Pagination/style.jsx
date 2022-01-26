import styled from 'styled-components'

const FilledBox = `
    background-image: linear-gradient(#170627, #170627),
    linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border: double 1px transparent;
`



export const PaginationContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PaginationBox = styled.div`
    display: flex;
`
export const CircularButton = styled.div`
    margin: 10px;
    border: 1px solid rgba(229, 229, 229, 0.5);
    box-sizing: border-box;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;

    //transform: rotate(-180deg);
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    ${(props) => (!!props.select ? `background: rgba(229, 229, 229, 0.2); border : none;` : '')}
    ${(props) => (!!props.value ? FilledBox : '')}
`
