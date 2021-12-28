import styled from 'styled-components'

export const UserCardBox = styled.div`
    width: 22vw;
    height: 400px;
    //border: 1px solid white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-image: url(${(props) => props.url});
    z-index: 5;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 36px;
`

export const Name = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
    display: flex;
    align-items: center;

    color: #ffffff;
`

export const UserName = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: lowercase;
    color: #e400ff;
`

export const DaosProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 36px;
    margin-top: 17px;
    margin-bottom: 24px;
`
