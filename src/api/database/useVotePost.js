import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import { votePost as VOTE_POST } from '../../graphql/mutations';

export const useVotePost = () => {
    const [votePost, { loading, called, data, error }] = useMutation(
        gql(VOTE_POST)
    );

    return useMemo(
        () => ({
            votePost,
            data,
            error,
            loading,
        }),
        [called, votePost, loading, VOTE_POST, error]
    );
};

export default useVotePost;
