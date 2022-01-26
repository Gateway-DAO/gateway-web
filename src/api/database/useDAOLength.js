
import { useQuery, gql } from '@apollo/client'
import { useMemo } from 'react'

const getNumber = gql`
    query GetDAONumber {
        listDAOs {
            items {
                id
            }
        }
    }
`

export const useDAOLength = () => {
    const { loading, called, refetch, data, error } = useQuery(getNumber);

    return useMemo(
        () => ({
            data: data?.listDAOs.items.length,
            loading: loading || (!called && loading === false),
            refetch,
            error,
        }),
        [called, getNumber, loading, refetch]
    );
};

export default useDAOLength;