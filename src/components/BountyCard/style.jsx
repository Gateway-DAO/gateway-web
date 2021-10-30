import styled from "styled-components"
import { Text as BGText } from "../BigCard/style";
import { FaTrashAlt } from "react-icons/fa"

export const Container = styled.div`
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 10px 0;
    padding: 25px;
    position: relative;
`

export const BountyInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`

export const BountyInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled(BGText)`
    line-height: 18px;
    letter-spacing: 0.05em;
`

export const BoldText = styled(Text)`font-weight: bold;`

export const TrashBtn = styled(FaTrashAlt)`
    position: absolute;
    top: 20px;
    right: 20px;
`