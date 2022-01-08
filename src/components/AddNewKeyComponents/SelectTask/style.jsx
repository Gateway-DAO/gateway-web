import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Wrapper = styled.div`
    margin-bottom: 80px;
`

export const Heading = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    color: white;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
`
export const SubHeading = styled.div`
    margin-top: 5px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: rgba(229, 229, 229, 0.6);
    margin-bottom: 25px;
`
export const TasksBox = styled.div`
    display: grid;
    grid-template-columns: 210px 210px 210px;
    grid-gap: 10px;
    color: #444;
    align-self: center;
    justify-items: center;
    justify-content: center;
`
export const TaskBox = styled(Link)`
    display: flex;
    height: 100px;
    width: 200px;
    color: #fff;
    border-radius: 5px;
    padding: 0px;
    font-size: 150%;
    justify-content: center;
    border: solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    cursor: pointer;
    text-decoration:none;
`
export const TaskBoxText = styled.div`
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(165, 165, 165, 1);
    padding: 0px 20px;
`
