import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { getBounty as GET_BOUNTY, listBountys } from '../../graphql/queries';

export const useGetBounty = (id) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(GET_BOUNTY),
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
        [called, GET_BOUNTY, loading, refetch, id]
    );
};

export const useLazyGetBounty = () => {
    const [getBounty, { loading, called, refetch, data, error }] = useLazyQuery(
        gql(GET_BOUNTY)
    );

    return useMemo(
        () => ({
            getBounty,
            data: data.getBounty.items,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, GET_BOUNTY, loading, refetch]
    );
};

export const useListBounties = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(listBountys),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, listBountys, loading, refetch, config]
    );
};

export const useLazyListBounties = () => {
    const [listBounties, { loading, called, refetch, data, error }] =
        useLazyQuery(gql(listBountys));

    return useMemo(
        () => ({
            listBounties,
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, listBountys, loading, refetch]
    );
};

export default useGetBounty;
