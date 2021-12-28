import * as Styled from './style'
import BG_IMG from './img/LOGO.png'

const UserCard = (props) => {
    return (
        <Styled.UserCardBox url={BG_IMG}>
            <Styled.UserInfo>
                <Styled.Name>{props.name}</Styled.Name>
                <Styled.UserName>{props.username}</Styled.UserName>
            </Styled.UserInfo>
        </Styled.UserCardBox>
    )
}

export default UserCard
