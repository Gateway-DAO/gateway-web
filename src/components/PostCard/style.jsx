import styled from 'styled-components'

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    margin-right: 40px;
    border-radius: 20px;
    margin-bottom: 20px;
`

export const PostHeaderContainer = styled.div`
    display: flex;
`

export const PostHeaderInfo = styled.span`
    display: flex;
    justify-content: space-between;
    margin: 15px 14px;
`

export const ProfileBioContainer = styled.div`
    display: flex;
    margin-left: 5px;
    align-items: center;
`

export const PostImageContainer = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 999px;
    border-width: 1px;
    padding: 2px;
`

export const PostByInfo = styled.span`
    margin-left: 4px;
    font-family: Be Vietnam;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #8b8393;
`

export const PostByName = styled(PostByInfo)`
    font-weight: bold;
    color: #180b27;
`
export const PostByUsername = styled(PostByInfo)`
    color: #df78fe;
`

export const PostTime = styled.span`
    font-family: Be Vietnam;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
`

export const MessageContainer = styled.p`
    margin: 2px 40px;
    display: flex;
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
`

export const ActivityContainer = styled.div`
    margin: 0px 40px;
    margin-top: 20px;
    display: flex;
    margin-bottom: 20px;
`

export const ActivityTextContainer = styled.span`
    margin-right: 40px;
    font-family: Be Vietnam;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
`
