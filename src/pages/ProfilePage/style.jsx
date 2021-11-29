import styled from "styled-components"

export const Container = styled.main`
    background-color: #170627;
    min-height: 100vh;
    overflow-x: hidden;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const MainBox = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr 6fr 2fr 1fr;
    grid-column-gap: 20px;
    margin-top: 40px;
`

export const LeftSidebar = styled.aside`
    grid-column: 2 / 2;
`

export const Feed = styled.section`
    display: flex;
    flex-direction: column;

    & * {
        color: white;
    }
`

export const RightSidebar = styled.aside`
    
`