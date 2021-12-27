import * as Styled from './style'
import { useState } from 'react'
import UserCard from '../../../../components/UserCard'
import { useParams } from 'react-router'

const UserTab = () => {
    const [hits, setHits] = useState([])
    

    return (
        <Styled.UserCardBox>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </Styled.UserCardBox>
    )
}

export default UserTab
