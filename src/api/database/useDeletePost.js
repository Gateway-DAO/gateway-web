import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { deletePost as POST_DELETE } from '../../graphql/mutations';

export const useDeletePost = () => {
    const [deletePost, { loading, called, data, error }] = useMutation(
        gql(POST_DELETE)
    );

    return useMemo(
        () => ({
            deletePost,
            data,
            error,
            loading,
        }),
        [called, deletePost, loading, POST_DELETE, error]
    );
};

export default useDeletePost;
