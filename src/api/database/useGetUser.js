import { useMemo } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import {
    getUser,
    getUserByAddress,
    getUserByUsername,
    listUsers as LIST_USERS,
} from '../../graphql/queries';

export const useGetUser = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(getUser), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data: data?.getUser.items[0],
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, getUser, loading, refetch, id]
    );
};

export const useGetUserByAddress = (wallet) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getUserByAddress),
        {
            variables: { wallet },
        }
    );

    return useMemo(
        () => ({
            data: data?.getUserByAddress.items[0],
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, getUserByAddress, loading, refetch, wallet]
    );
};

export const useGetUserByUsername = (username) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getUserByUsername),
        {
            variables: { username },
        }
    );

    return useMemo(
        () => ({
            data: data?.getUserByUsername.items[0],
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, getUserByUsername, loading, refetch, username]
    );
};

export const useLazyGetUserByUsername = () => {
    const [getUser, { loading, called, refetch, data, error }] = useLazyQuery(
        gql(getUserByUsername)
    );

    return useMemo(
        () => ({
            getUser,
            data,
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, getUser, getUserByUsername, loading, refetch]
    );
};

export const useListUsers = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(LIST_USERS),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, LIST_USERS, loading, refetch, config]
    );
};

export const useLazyListUsers = () => {
    const [listUsers, { loading, called, refetch, data, error }] = useLazyQuery(
        gql(LIST_USERS)
    );

    return useMemo(
        () => ({
            listUsers,
            data,
            loading: loading || (!called && loading === false),
            called,
            refetch,
            error,
        }),
        [called, LIST_USERS, loading, refetch]
    );
};

export default useGetUser;
