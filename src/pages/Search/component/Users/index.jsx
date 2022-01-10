// Styling
import * as Styled from './style'
import * as SearchStyled from '../../style'

// Components
import UserCard from '../../../../components/UserCard'
import Loader from '../../../../components/Loader'

// Hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSearchUsers } from '../../../../api/database/useSearchUser'
import { useListUsers } from '../../../../api/database/useGetUser'

const UserTab = ({ query }) => {
    const [hits, setHits] = useState([])
    const [loading, setLoading] = useState(true)

    const {
        data: listData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useListUsers({
        variables: {
            filter: { init: { eq: true } },
        },
    })

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchUsers({
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

    useEffect(() => {
        if (query.toLowerCase() === 'all') {
            setHits(!listLoading ? listData.listUsers.items : [])
        } else {
            setHits(!searchLoading ? searchData.searchUsers.items : [])
        }
    }, [query, searchLoading, listLoading])

    const searchOrListLoading = (query.toLowerCase() === 'all' ? listLoading : searchLoading)
    const searchOrListCalled = (query.toLowerCase() === 'all' ? listCalled : searchCalled)

    if (searchOrListLoading) {
        return (
            <SearchStyled.LoaderBox>
                <Loader color="white" size={35} />
            </SearchStyled.LoaderBox>
        )
    }

    if (!hits.length && !searchOrListLoading && searchOrListCalled) {
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