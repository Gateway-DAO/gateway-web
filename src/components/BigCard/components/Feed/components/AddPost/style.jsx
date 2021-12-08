import styled from 'styled-components'

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    margin-right: 40px;
    border-radius: 20px;
    margin-bottom: 20px;
`

export const ColOne = styled.aside`
    display: flex;
    padding: 20px 0;
    justify-content: center;
`

export const ColTwo = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostHeaderContainer = styled.div`
    display: flex;
`

export const PostHeaderInfo = styled.span`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

export const ProfileBioContainer = styled.div`
    display: flex;
    align-items: center;
`

export const PostImageContainer = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border-width: 1px;
    padding: 2px;
`

export const PostByInfo = styled.span`
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
    font-size: 15px;
`
export const PostByUsername = styled(PostByInfo)`
    color: #df78fe;
    margin-left: 4px;
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
    display: flex;
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
`

export const CommentImageContainer = styled.div`
    display: flex;
    margin: 4px;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const CommentImage = styled.img`
    height: 240px;
    width: 240px;
    border-radius: 10px;
`

export const InputComment = styled.textarea`
    flex: 1;
    font-size: 15px;
    border: none;

    :focus {
        outline: none;
    }

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: rgba(23, 6, 39, 0.2);
`

export const ActivityContainer = styled.div`
    display: flex;
    align-items: center;
`

export const ActivityBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const PostButton = styled.button`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    height: 40px;
    width: 121px;
    text-align: center;
    color: #170627;
    background-color: #ffffff;
    border: 1px solid #170627;
    border-radius: 20px;
    margin-right: 20px;
`

export const ActivityTextContainer = styled.span`
    margin-right: 20px;
    font-family: Be Vietnam;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
`

export const ActivityEmojiContainer = styled(ActivityTextContainer)`
    display: flex;
    position: relative;
`

export const EmojiContainer = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
`
