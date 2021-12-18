import { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getDao, getDaoById, getDaoByName } from '../../graphql/queries';

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

export const useGetDAOByName = (name) => {
    const { loading, called, refetch, data, error } = useQuery(gql(getDaoByName), {
        variables: { name },
    });

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
    const { loading, called, refetch, data, error } = useQuery(gql(getDaoById), {
        variables: { dao },
    });

    console.log(data)

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
