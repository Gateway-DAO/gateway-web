import styled from 'styled-components'

export const AddNewKeyContainer = styled.div`
// background-color: #170627;
min-height: 100vh;
// overflow-x: hidden;
// width: 100vw;
// display: flex;
// justify-content: space-between;
// flex-direction: column;
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
export const MarginWrapper = styled.div`
    // position:relative;
    margin: auto 20rem;
`
export const SpaceBox = styled.canvas`
    position: fixed;
    top: 90px;
    left:0;
    right:0;
    z-index: -1;
`
