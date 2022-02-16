import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import {
    getChannel as GET_CHANNEL,
    getChannelByDAOID,
    listChannels as LIST_CHANNELS,
} from '../../graphql/queries';

export const useGetChannel = (id) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(GET_CHANNEL),
        {
            variables: { id },
        }
    );

    return useMemo(
        () => ({
            data: data?.getDAO.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, GET_CHANNEL, loading, refetch, id]
    );
};

export const useLazyGetChannels = () => {
    const [getChannel, { loading, called, refetch, data, error }] =
        useLazyQuery(gql(GET_CHANNEL));

    return useMemo(
        () => ({
            getChannel,
            data: data.getChannel.items,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, GET_CHANNEL, loading, refetch]
    );
};

export const useLazyListChannels = () => {
    const [listChannels, { loading, called, refetch, data, error }] =
        useLazyQuery(gql(LIST_CHANNELS));

    return useMemo(
        () => ({
            listChannels,
            data: data?.listChannels.items,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, LIST_CHANNELS, loading, refetch]
    );
};

export const useGetChannelByDAOID = (dao) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getChannelByDAOID),
        {
            variables: { dao },
        }
    );

    return useMemo(
        () => ({
            data: data?.getChannelByDAOID.items,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getChannelByDAOID, loading, refetch, dao]
    );
};

export default useGetChannel;
