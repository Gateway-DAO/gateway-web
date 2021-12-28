import * as Styled from './style'
import { useEffect, useState } from 'react'
import UserCard from '../../../../components/UserCard'
import { useParams } from 'react-router'
import { useLazySearchUsers } from '../../../../api/database/useSearchUser'

const UserTab = (props) => {
    const [hits, setHits] = useState([])
    const { searchUsers, data, loading, error } = useLazySearchUsers()

    useEffect(() => {
        const handler = async () => {
            const users = await searchUsers({
                variables: {
                    filter: {
                        daos_ids: {
                            matchPhrase: props.query,
                        },
                    },
                },
            })

            setHits(users.data.searchUsers.items)
            console.log(users.data.searchUsers.items)
        }

        handler()
    }, [])

    return (
        <Styled.UserCardBox>
            {hits?.map((item) => (
                <UserCard
                    key={item.nonce}
                    name={item.name}
                    username={item.username}
                    pfp={item.pfp}
                    daos={item.daos}
                />
            ))}
        </Styled.UserCardBox>
    )
}

export default UserTab
