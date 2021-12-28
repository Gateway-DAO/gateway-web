import * as Styled from './style'
import BG_IMG from './img/LOGO.png'
import DaosProfile from './component/DaosProfile'
import { DaoWrapper } from '../BigCard/style'

const UserCard = (props) => {
    let daos = props.daos;
    return (
        <Styled.UserCardBox url={BG_IMG}>
            <Styled.UserInfo>
                <Styled.Name>{props.name}</Styled.Name>
                <Styled.UserName>{props.username}</Styled.UserName>
            </Styled.UserInfo>
            <Styled.DaosProfileContainer>
                {daos?.map((dao) => (
                    <DaosProfile imgURL={dao.logoURL} />
                ))}
            </Styled.DaosProfileContainer>
        </Styled.UserCardBox>
    )
}

export default UserCard
