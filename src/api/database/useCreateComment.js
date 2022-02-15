import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createComment as COMMENT_CREATE } from '../../graphql/mutations';

export const useCreateComment = () => {
    const [createComment, { loading, called, data, error }] = useMutation(
        gql(COMMENT_CREATE)
    );

    return useMemo(
        () => ({
            createComment,
            data,
            error,
            loading,
        }),
        [called, createComment, loading, COMMENT_CREATE, error]
    );
};

export default useCreateComment;
