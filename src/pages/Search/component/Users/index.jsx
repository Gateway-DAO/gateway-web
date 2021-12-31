// Styling
import * as Styled from './style'
import * as SearchStyled from '../../style'

// Components
import UserCard from '../../../../components/UserCard'
import Loader from '../../../../components/Loader'

// Hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLazySearchUsers } from '../../../../api/database/useSearchUser'
import { useLazyListUsers } from '../../../../api/database/useGetUser'

const UserTab = ({ query }) => {
    const [hits, setHits] = useState([])
    const [loading, setLoading] = useState(true)

    const {
        listUsers,
        data: listData,
        loading: listLoading,
        error: listError,
    } = useLazyListUsers()
    const {
        searchUsers,
        data,
        loading: searchLoading,
        error,
    } = useLazySearchUsers()

    useEffect(() => {
        const handler = async () => {
            setLoading(true)
            if (query.toLowerCase() === 'all') {
                const users = await listUsers({
                    variables: {
                        filter: { init: { eq: true } },
                    },
                })

                setHits(users.data.listUsers.items)
                setLoading(false)
            } else {
                const users = await searchUsers({
                    variables: {
                        filter: {
                            or: [
                                { daos_ids: { wildcard: `*${query}*` } },
                                { username: { wildcard: `*${query}*` } },
                                { bio: { wildcard: `*${query}*` } },
                                { id: { wildcard: `*${query}*` } },
                                { name: { wildcard: `*${query}*` } },
                            ],
                        },
                    },
                })

                setHits(users.data.searchUsers.items)
                setLoading(false)
            }
        }
        // }

        handler()
    }, [])

    if (loading) {
        return (
            <SearchStyled.LoaderBox>
                <Loader color="white" size={35} />
            </SearchStyled.LoaderBox>
        )
    }

    if (!hits.length && !loading) {
        return (
            <SearchStyled.TextBox>
                <SearchStyled.MainText>
                    Oops! There's no "{query}" user on our records :/
                </SearchStyled.MainText>
                <SearchStyled.SmallText>
                    We couldn't find what you're looking for. Try again later!
                </SearchStyled.SmallText>
            </SearchStyled.TextBox>
        )
    }

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
