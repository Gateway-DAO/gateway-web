import { useMemo } from 'react'
import { useQuery, gql, useLazyQuery } from '@apollo/client'
import {
    getUser,
    getUserByAddress,
    getUserByUsername,
} from '../../graphql/queries'

export const useGetUser = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(getUser), {
        variables: { id },
    })

    return useMemo(
        () => ({
            data: data?.getUser.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getUser, loading, refetch, id]
    )
}

export const useGetUserByAddress = (wallet) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getUserByAddress),
        {
            variables: { wallet },
        }
    )

    return useMemo(
        () => ({
            data: data?.getUserByAddress.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getUserByAddress, loading, refetch, wallet]
    )
}

export const useGetUserByUsername = (dao) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getUserByUsername),
        {
            variables: { dao },
        }
    )

    console.log(data)

    return useMemo(
        () => ({
            data: data?.getUserByUsername.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getUserByUsername, loading, refetch, dao]
    )
}

// export const useLazyListUsers = () => {
//     const [listUsers, { loading, called, refetch, data, error }] = useLazyQuery(
//         gql(listUsers)
//     )

//     return useMemo(
//         () => ({
//             listUsers,
//             data: data?.listUsers.items,
//             loading: loading || (!called && loading === false),
//             refetch,
//             error,
//         }),
//         [called, listUsers, loading, refetch]
//     )
// }

export default useGetUser
