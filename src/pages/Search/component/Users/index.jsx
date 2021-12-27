import * as Styled from './style'
import { useEffect, useState } from 'react'
import UserCard from '../../../../components/UserCard'
import { useParams } from 'react-router'
import { useLazySearchUsers } from '../../../../api/database/useSearchUser'

const UserTab = props => {
    const [hits, setHits] = useState([])
    const { searchUsers, data, loading, error } = useLazySearchUsers()

    useEffect(() => {
        const handler = async () => {
            const users = await searchUsers({ variables: {
                filter: {
                    daos_ids: {
                        matchPhrase: props.query
                    }
                }
            } })

            console.log(users.data.searchUsers.items)
        }

        handler()
    }, [])
    
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
