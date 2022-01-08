import * as Styled from './style'
import DaosProfile from './component/DaosProfile'
import { useHistory } from 'react-router-dom'

const UserCard = (props) => {
    const history = useHistory()

    const navigate = (e) => {
        history.push(`/profile/${props.username}`)
    }

    let daos = props.daos
    return (
        <Styled.BoxContainer>
            <Styled.UserCardBox src={props.pfp} onClick={navigate} />
            <Styled.UserInfo>
                <Styled.Name>{props.name}</Styled.Name>
                <Styled.UserName onClick={navigate}>
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
            </Styled.UserInfo>
        </Styled.BoxContainer>
    )
}

export default UserCard
