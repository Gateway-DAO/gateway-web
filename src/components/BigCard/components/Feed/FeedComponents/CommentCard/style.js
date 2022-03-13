import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin: 0 40px;
    border-radius: 20px;
    margin-bottom: 20px;
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
    font-family: Be Vietnam;
    font-style: normal;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #ffffff;
`;
export const PostByUsername = styled(PostByInfo)`
    color: #df78fe;
`;

export const UserLink = styled(Link)`
    text-decoration: none;
    color: #df78fe;
`;

export const PostTime = styled.span`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: rgba(229, 229, 229, 0.5);
`;

export const MessageContainer = styled.p`
    margin: 20px 40px 30px 40px;
    display: flex;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #e5e5e5;
`;

export const ActivityContainer = styled.div`
    margin: 0px 40px;
    margin-top: 20px;
    display: flex;
    margin-bottom: 20px;
`;

export const ActivityTextContainer = styled.span`
    margin-right: 40px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #e5e5e5;
`;
export const ActivityFirstContainer = styled(ActivityTextContainer)`
    background-color: ${(props) => props.inputColor || 'white'};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-right: 10px;
`;
export const ActivitySecondContainer = styled(ActivityTextContainer)`
    background-color: ${(props) => props.inputColor || 'white'};
    border-radius: 100%;
    margin-left: 10px;
    width: 20px;
    height: 20px;
`;
export const VoteContainer = styled(ActivityTextContainer)`
    font-family: Be Vietnam;
    font-weight: 400;
    margin-right: 0;
`;
