import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin: 20px 40px;
    align-items: center;
    justify-content: space-between;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    width:${props=>props.width||"40px"};
    height: 40px;
    
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    margin-left:${props=>props.ml|| '0'}px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: ${props=>props.size||"20px"};
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #E5E5E5;

`
export const TextWrapper = styled.div`
    padding-bottom: 4px;
    margin: 0px 15px;
`
export const Text = styled.div`
    padding: 0;
    font-family: Be Vietnam;
    font-size: 13px;
    color: white;
    letter-spacing: 1px;
`
