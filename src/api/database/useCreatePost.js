import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createPost as POST_CREATE } from '../../graphql/mutations';

export const useCreatePost = () => {
    const [createPost, { loading, called, data, error }] = useMutation(
        gql(POST_CREATE)
    );

    return useMemo(
        () => ({
            createPost,
            data,
            error,
            loading,
        }),
        [called, createPost, loading, POST_CREATE, error]
    );
};

export default useCreatePost;
