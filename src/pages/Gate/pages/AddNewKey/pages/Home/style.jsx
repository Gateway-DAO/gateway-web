import styled from 'styled-components'
import BackButton from '../../../../../../components/BackButton'

const FilledInput = `
    background: #220A38;
    border: 1px solid #7E3BDC;
    box-sizing: border-box;
    border-radius: 5px;
`

const FilledLimitBox = `
    background: #220A38;
`

const FilledUnlimitedBox = `
    background: #7E3BDC;
    color : #ffffff;
`

export const AddNewKeyContainer = styled.div`
    min-height: 100vh;
    margin: auto;
    margin-top: 10px;
    background-color: transparent;
    height: 100%;
    position: relative;

    overflow-x: hidden;

    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    }
`

export const InputContainer = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    margin: 15px 0;

    width: 100%;
    ${(props) => (!!props.value ? FilledInput : '')}
    display : flex;
`

export const Input = styled.input`
    border-radius: 5px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    background: #170627;
    color: #e5e5e5;
    padding: 10px;
    width: 70%;
    border: none;
    outline: none;
    //position : absolute;
    ${(props) => (!!props.value ? FilledLimitBox : '')}
`

export const UnlimitedBoxContainer = styled.div`
    margin: 6px 10px;
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 10px;
    /* or 118% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #a5a5a5;
    cursor: pointer;
    ${(props) => (!props.value ? FilledUnlimitedBox : '')}
    
`

export const BackContainer = styled(BackButton)`
    margin-top: 20px;
`
export const MarginWrapper = styled.div`
    margin: auto 20rem;
`
export const SpaceBox = styled.canvas`
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    z-index: -1;
`
export const Button = styled.button`
    margin-top: 10px;
    
    color: white;
    border-radius: 20px;
    border: solid 1px transparent;
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    cursor: pointer;
`
export const ButtonText = styled.div`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    padding: 9px 70px;
    cursor: pointer;
`