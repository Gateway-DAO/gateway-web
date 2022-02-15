import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
    getTaskStatus,
    getTaskStatusByGateId,
    getTaskStatusByUserId,
} from '../../graphql/queries';

export const useGetTaskStatus = (id, options = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getTaskStatus),
        {
            variables: { ...options, id },
        }
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getTaskStatus, loading, refetch, id]
    );
};

export const useGetTaskStatusByUserID = (id, options = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getTaskStatusByUserId),
        {
            variables: {
                ...options,
                userID: id,
            },
        }
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getTaskStatusByUserId, loading, refetch, id]
    );
};

export const useGetTaskStatusByGateID = (id, options = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getTaskStatusByGateId),
        {
            variables: {
                ...options,
                gateID: id,
            },
        }
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getTaskStatusByGateId, loading, refetch, id]
    );
};

export default useGetTaskStatus;
