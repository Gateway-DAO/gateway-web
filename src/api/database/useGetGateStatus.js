import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
    getGateStatus,
    getGateStatusByUserId,
    getGateStatusByGateId,
} from '../../graphql/queries';

export const useGetGateStatus = (id, options = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getGateStatus),
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
        [called, getGateStatus, loading, refetch, id]
    );
};

export const useGetGateStatusByUserID = (id, options = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getGateStatusByUserId),
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
        [called, getGateStatusByUserId, loading, refetch, id]
    );
};

export const useGetGateStatusByGateID = (id, options = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getGateStatusByGateId),
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
        [called, getGateStatusByGateId, loading, refetch, id]
    );
};

export default useGetGateStatus;
