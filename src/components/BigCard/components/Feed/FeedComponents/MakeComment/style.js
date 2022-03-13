import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    margin: 0 40px;
    margin-bottom: 20px;
    z-index: 2;
`;

export const PostHeaderContainer = styled.div`
    display: flex;
`;

export const PostHeaderInfo = styled.span`
    display: flex;
    justify-content: space-between;
    margin: 15px 14px;
`;

export const ProfileBioContainer = styled.div`
    display: flex;
    margin-left: 5px;
    align-items: center;
`;

export const PostImageContainer = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 999px;
    border-width: 1px;
    background-image: url('${(props) => props.src}');
    background-size: cover;
    background-position: center;
    margin-right: 6px;
`;

export const PostByInfo = styled.span`
    margin-left: 4px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: rgba(229, 229, 229, 0.5);
`;

export const PostByName = styled(PostByInfo)`
    color: #ffffff;
`;
export const PostByUsername = styled(PostByInfo)`
    color: #df78fe;
`;

export const PostTime = styled.span`
    font-family: Be Vietnam;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
`;

/*
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
*/

export const InputComment = styled.textarea`
    background-color: #180b27;
    flex: 1;
    margin-left: 20px;
    font-size: 15px;
    border: none;
    padding: 5px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.05em;

    color: #e5e5e5;

    :focus {
        outline: none;
    }

    overflow-y: auto;
`;

export const InputMessage = styled(InputComment)`
    background-color: transparent;
    font-family: Be Vietnam;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    margin: 20px 40px 0px 50px;
`;

export const ActivityContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ActivityBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px 20px 50px;
`;

export const PostButton = styled.button`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    height: 40px;
    width: 121px;
    text-align: center;
    color: #ffffff;
    background-color: #170627;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    cursor: pointer;
`;

export const ActivityTextContainer = styled.span`
    margin-right: 20px;
    font-family: Be Vietnam;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
`;

export const ActivityEmojiContainer = styled(ActivityTextContainer)`
    display: flex;
    position: relative;
`;

export const EmojiContainer = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    z-index: 100;
`;
