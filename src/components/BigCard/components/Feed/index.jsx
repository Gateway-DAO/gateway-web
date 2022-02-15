import * as Styled from './style';
import { useState, useEffect } from 'react';
import ChannelWrapper from './FeedComponents/ChannelWrapper';
import EditChannelModal from '../../../Modal/EditChannelsModal';
import MakePost from './FeedComponents/MakePost';
import { sortPostsByVote } from './FeedComponents/Handlers';

import { gql } from '@apollo/client';
import { onCreatePost, onDeletePost } from '../../../../graphql/subscriptions';
import { API, graphqlOperation } from 'aws-amplify';

const Feed = (props) => {
    const [currentChannels, setCurrentChannels] = useState(
        props.channels.items
    );
    const [selected, setSelected] = useState(currentChannels[0]);
    const [showEditChannelModal, setShowEditChannelModal] = useState(false);
    const [posts, setPosts] = useState({});

    const toggleEditChannelModel = () =>
        setShowEditChannelModal(!showEditChannelModal);

    const newChannelsSubmitHandler = (data) => {
        setCurrentChannels(data);
        toggleEditChannelModel();
    };

    const Modals = () => (
        <>
            <EditChannelModal
                newChannelsSubmit={newChannelsSubmitHandler}
                channels={currentChannels}
                id={props.id}
                show={showEditChannelModal}
                toggle={toggleEditChannelModel}
            />
        </>
    );

    // On start
    useEffect(() => {
        let newPosts = {};
        currentChannels.forEach(
            (channel) =>
                (newPosts[channel.id] = sortPostsByVote(channel.posts.items))
        );
        setPosts(newPosts);
    }, []);

    // Subscribe to new posts
    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(gql(onCreatePost))
        ).subscribe({
            next: (data) => {
                let post = data.value.data.onCreatePost;
                console.log('onCreate');

                if (Object.keys(posts).includes(post.channelID)) {
                    console.log('It belongs to this channel');
                    let equal = posts[post.channelID].filter(
                        (obj) => obj.id === post.id
                    );

                    if (equal.length === 0) {
                        let newPosts = [post].concat(posts[post.channelID]);
                        setPosts({ ...posts, [post.channelID]: newPosts });
                    }
                }
            },
        });

        return () => subscription.unsubscribe();
    });

    // Subscribe to deleted posts from the user
    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(gql(onDeletePost))
        ).subscribe({
            next: (data) => {
                let post = data.value.data.onDeletePost;
                console.log('onDelete');

                if (Object.keys(posts).includes(post.channelID)) {
                    console.log('It belongs to this channel');
                    let newPosts = posts[post.channelID].filter(
                        (obj) => obj.id !== post.id
                    );
                    setPosts({ ...posts, [post.channelID]: newPosts });
                    console.log(
                        { ...posts, [post.channelID]: newPosts } === posts
                    );
                }
            },
        });

        return () => subscription.unsubscribe();
    });

    return (
        <Styled.FeedContainer>
            <Modals />
            <Styled.ChannelContainer>
                <Styled.H4Text>CHANNELS </Styled.H4Text>
                {currentChannels.map((item) => (
                    <Styled.H5Text
                        key={item.id}
                        onClick={(e) => setSelected(item)}
                        active={selected === item}
                    >
                        #{item.name}
                    </Styled.H5Text>
                ))}
            </Styled.ChannelContainer>
            <MakePost daoID={props.id} channel={selected} />
            <ChannelWrapper
                channel={selected}
                posts={posts[selected.id] || []}
            />
        </Styled.FeedContainer>
    );
};

export default Feed;
