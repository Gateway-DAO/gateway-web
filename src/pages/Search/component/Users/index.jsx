import * as Styled from './style'
import { useEffect, useState } from 'react'
import UserCard from '../../../../components/UserCard'
import { useParams } from 'react-router'
import { useLazySearchUsers } from '../../../../api/database/useSearchUser'
// import { useLazyListUsers } from '../../../../api/database/useGetUser'

const UserTab = (props) => {
    const [hits, setHits] = useState([])

    // const {
    //     listUsers,
    //     data: listData,
    //     loading: listLoading,
    //     error: listError,
    // } = useLazyListUsers()
    const { searchUsers, data, loading, error } = useLazySearchUsers()

    useEffect(() => {
        const handler = async () => {
            // if (props.query === 'all') {
            //     const res = await listUsers()
            //     console.log(res.data.listUsers.items)
            //     // setHits(res.data.listUsers.items)
                
            // } else {
                const users = await searchUsers({
                    variables: {
                        filter: {
                            or: [
                                { daos_ids: { matchPhrase: props.query } },
                                { username: { matchPhrase: props.query } },
                                { bio: { matchPhrase: props.query } },
                                { id: { matchPhrase: props.query } },
                                { name: { matchPhrase: props.query } },
                            ],
                        },
                    },
                })

                setHits(users.data.searchUsers.items)
                console.log(users.data.searchUsers.items)
            }
        // }

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

// filter: {
//     daos_ids: {
//         matchPhrase: props.query,
//     },
// }
