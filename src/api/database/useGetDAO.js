import { useMemo } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import {
    getDao,
    getDaoById,
    getDaoByName,
    listDaos,
} from '../../graphql/queries';

export const useGetDAO = (id) => {
    const { loading, called, refetch, data, error } = useQuery(gql(getDao), {
        variables: { id },
    });

    return useMemo(
        () => ({
            data: data?.getDAO.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getDao, loading, refetch, id]
    );
};

export const useLazyGetDAOs = () => {
    const [getDAO, { loading, called, refetch, data, error }] = useLazyQuery(
        gql(getDao)
    );

    return useMemo(
        () => ({
            getDAO,
            data: data.getDAO.items,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getDao, loading, refetch]
    );
};

export const useListDAOs = (config = {}) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(listDaos),
        config
    );

    return useMemo(
        () => ({
            data,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getDao, loading, refetch, config]
    );
};

export const useLazyListDAOs = () => {
    const [listDAOs, { loading, called, refetch, data, error }] = useLazyQuery(
        gql(listDaos)
    );

    return useMemo(
        () => ({
            listDAOs,
            data: data?.listDAOs.items,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, listDaos, loading, refetch]
    );
};

export const useGetDAOByName = (name) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getDaoByName),
        {
            variables: { name },
        }
    );

    return useMemo(
        () => ({
            data: data?.getDAOByName.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getDaoByName, loading, refetch, name]
    );
};

export const useGetDAOByID = (dao) => {
    const { loading, called, refetch, data, error } = useQuery(
        gql(getDaoById),
        {
            variables: { dao: dao },
        }
    );

    return useMemo(
        () => ({
            data: data?.getDAOById.items[0],
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getDaoByName, loading, refetch, dao]
    );
};

export default useGetDAO;
