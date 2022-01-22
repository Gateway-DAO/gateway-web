import styled from 'styled-components'
import BackButton from '../../../../../../components/BackButton'

export const AddNewKeyContainer = styled.div`
    min-height: 100vh;
    margin: auto;
    margin-top : 10px;
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
