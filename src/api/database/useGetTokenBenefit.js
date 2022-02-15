import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import {
    getTokenBenefit as GET_TB,
    listTokenBenefits as LIST_TB,
} from '../../graphql/queries';

export const useGetTokenBenefit = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(GET_TB), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data: data?.getDAO.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, GET_TB, loading, refetch, id]
    );
};

export const useLazyGetTokenBenefit = () => {
    const [getTokenBenefit, { loading, called, refetch, data, error }] =
        useLazyQuery(gql(GET_TB));

    return useMemo(
        () => ({
            getTokenBenefit,
            data: data.getTokenBenefit.items,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, GET_TB, loading, refetch]
    );
};

export const useListTokenBenefits = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(LIST_TB),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, LIST_TB, loading, refetch, config]
    );
};

export const useLazyListTokenBenefits = () => {
    const [listTokenBenefits, { loading, called, refetch, data, error }] =
        useLazyQuery(gql(LIST_TB));

    return useMemo(
        () => ({
            listTokenBenefits,
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, LIST_TB, loading, refetch]
    );
};

export default useGetTokenBenefit;
