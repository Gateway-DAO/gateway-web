import styled from 'styled-components'

export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 2fr 6fr 1fr;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const ChannelContainer = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
`

export const FeedMessageContainer = styled.div`
    display: grid;
    grid-column: 3 / 5;
    // grid-row: 1fr auto;
`

export const H4Text = styled.h4`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #222222;
    line-height: 40px;
`

export const H5Text = styled.h5`
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
    color: #918d8d;
    line-height: 30px;
    cursor: pointer;
    ${(props) => (props.active ? `font-weight : bold; color :#222222` : '')}
`
