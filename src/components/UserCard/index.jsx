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
            {/* <Styled.UserCardBox src={props.pfp} onClick={traverse} />
            <Styled.UserInfo>
                <Styled.Name>{props.name}</Styled.Name>
                <Styled.UserName onClick={traverse}>
                    {props.username}
                </Styled.UserName>
                <Styled.DaosProfileContainer>
                    {daos?.map((dao) => (
                        <DaosProfile
                            key={dao.id}
                            imgURL={dao.logoURL}
                            dao={dao.dao}
                        />
                    ))}
                </Styled.DaosProfileContainer>
            </Styled.UserInfo> */}
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
