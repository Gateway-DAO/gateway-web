import * as Styled from './style';
// import DaosProfile from './component/DaosProfile';
import { useNavigate } from 'react-router-dom';

const UserCard = (props) => {
    const navigate = useNavigate();

    const traverse = (e) => {
        navigate(`/profile/${props.username}`);
    };

    // let daos = props.daos;
    return (
        <Styled.BoxContainer>
            <Styled.UserImage
                background={props.pfp}
                onClick={traverse}
            ></Styled.UserImage>
            <Styled.UserInfo>
                <Styled.UserData>
                    <Styled.UserName>{props.name}</Styled.UserName>
                    <Styled.UserId>{`@${props.username}`}</Styled.UserId>
                </Styled.UserData>
            </Styled.UserInfo>
        </Styled.BoxContainer>
    );
};

export default UserCard;
