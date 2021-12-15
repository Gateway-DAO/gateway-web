import styled from 'styled-components'

export const Wrapper = styled.div`
    font-family: Be Vietnam;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
`
export const Categories = styled.div`
    display: flex;
`
export const Category = styled.div`
    cursor: pointer;
    color: ${(props) =>
        props.active ? 'rgba(254, 2, 185, 1)' : 'rgba(229, 229, 229, 0.6)'};
    font-size: 14px;
    font-style: normal;
    font-weight: ${(props) => (props.active ? 'bold' : '400')};
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-right: 20px;
`

export const Text = styled.div`
    font-size: 14px;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-right: 10px;
`

export const WhitelistButtonDiv = styled.div`
    display: flex;
    align-items: center;
`

export const WhitelistButton = styled.div`
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
`
export const ButtonText = styled.p`
    padding: 8px 10px 10px 10px;
    font-size: 14px;
`
