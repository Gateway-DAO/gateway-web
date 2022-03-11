import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../../../../../aws-exports';
import { votePost, unvotePost } from '../../../../../../graphql/mutations';

Amplify.configure(awsconfig);

// Fetch all posts and sort by Votes
export const sortPostsByVote = (posts) => {
    let allPosts = [];

    posts.forEach((post) => {
        allPosts.push({
            ...post,
            votes:
                (post.upvotes ? post.upvotes.length : 0) -
                (post.downvotes ? post.downvotes.length : 0),
        });
        allPosts.sort((a, b) => b.votes - a.votes);
    });
    return allPosts;
};

// fetch by channel name
export const filterPostByChannel = (array, channelName) => {
    const filteredArray = array.filter((doc) => doc.channel === channelName);
    return filteredArray;
};

// add user id to upvote array
export const upVoteIncrease = async (postID, userID) => {
    try {
        const res = await API.graphql(
            graphqlOperation(votePost, { postID, userID, type: 'UPVOTE' })
        );
        return res.data.votePost;
    } catch (err) {
        console.log(err);
        return {
            err: true,
            msg: err,
        };
    }
};

// remove user id from upvote array
export const upVoteDecrease = async (postID, userID) => {
    try {
        const res = await API.graphql(
            graphqlOperation(unvotePost, { postID, userID, type: 'UPVOTE' })
        );
        return res.data.unvotePost;
    } catch (err) {
        console.log(err);
        return {
            err: true,
            msg: err,
        };
    }
};

// add user id to downvote array
export const downVoteIncrease = async (postID, userID) => {
    try {
        const res = await API.graphql(
            graphqlOperation(votePost, { postID, userID, type: 'DOWNVOTE' })
        );
        return res.data.votePost;
    } catch (err) {
        return {
            err: true,
            msg: err,
        };
    }
};

//remove user id from downvote array
export const downVoteDecrease = async (postID, userID) => {
    try {
        const res = await API.graphql(
            graphqlOperation(unvotePost, { postID, userID, type: 'DOWNVOTE' })
        );
        return res.data.unvotePost;
    } catch (err) {
        console.log(err);
        return {
            err: true,
            msg: err,
        };
    }
};

// ----------Image uploading
// export const imageUploadHandler = async (id, file, size) => {
//     const options = {
//         maxSizeMB: size,
//         maxWidthOrHeight: 1920,
//         useWebWorker: true,
//     }
//     try {
//         const compressedFile = await imageCompression(file, options)
//         const url = await uploadImage(id, compressedFile)
//         return url
//     } catch (error) {
//         console.log(error)
//     }
// }
