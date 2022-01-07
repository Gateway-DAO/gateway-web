import styled from 'styled-components'

export const BoxContainer = styled.div`
    display: flex;
    position: relative;
`

export const UserCardBox = styled.img`
    width: 22vw;
    height: 400px;
    border-radius: 20px;
    justify-content: end;
    object-fit: cover;
    overflow: hidden;
    //box-shadow: rgba(0, 0, 0, 0.95) 0px -120px 36px -28px inset;
    cursor: pointer;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 36px;
    position: absolute;
    bottom: 5px;
    width: 15vw;
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
    cursor: pointer;
`

export const DaosProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 17px;
`
