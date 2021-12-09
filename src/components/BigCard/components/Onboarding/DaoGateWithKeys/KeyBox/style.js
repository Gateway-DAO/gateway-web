import styled from 'styled-components'
import { MemberContainer } from '../../../Profiles/style'
export const ThirdDiv = styled.div`
    padding-top: 30px;
    color: white;
`
export const Box = styled.div`
    color: ${(props) => (props.color ? 'Black' : 'white')};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 30px 20px 30px 20px;
    background-color: ${(props) => (props.bgColor ? 'white' : 'transparent')};
    transition: 0.2s;
`
export const BoxTitle = styled.div`
    /* color: white; */
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0.05em;
    text-align: left;
`
export const BoxSubtitle = styled.div`
    font-family: Be Vietnam;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 20px;
`
export const BottonBox = styled.div`
    display: flex;
`

export const StartButton = styled.div`
    min-width: 150px;
    margin-top: 10px;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    color: white;
    border-radius: 20px;
    border: solid 1px transparent;
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
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
    padding: 5px 30px 8px 30px;
    font-size: 14px;
`

