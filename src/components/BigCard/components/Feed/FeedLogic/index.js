import React from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../../../api/firebase'

const FeedLogic = () => {
    const dummyUsers = [
        {
            badges: ['Badge1', 'Badge2'],
            name: 'Arun',
            bio: 'Some super cool line',
            pfp: 'https://static.wikia.nocookie.net/one-punch-man-fan-fiction/images/7/74/Saitama_With_Hair.png/revision/latest?cb=20160525005147',
            username: 'arun', //is unique
            social: {
                twitter: 'twitter.com/',
                discord: 'discord.com/',
                website: 'website.com/',
            },
            membership: 'Plus Pro Ultra',
            createdAt: Date.now(),
        },
        {
            badges: ['Badge1', 'Badge2'],
            name: 'Manish',
            bio: 'Some super cool line',
            pfp: 'https://static.wikia.nocookie.net/one-punch-man-fan-fiction/images/7/74/Saitama_With_Hair.png/revision/latest?cb=20160525005147',
            username: 'manish', //is unique
            social: {
                twitter: 'twitter.com/',
                discord: 'discord.com/',
                website: 'website.com/',
            },
            membership: 'Plus Pro Ultra',
            createdAt: Date.now(),
        },
        {
            badges: ['Badge1', 'Badge2'],
            name: 'Sanket',
            bio: 'Some super cool line',
            pfp: 'https://static.wikia.nocookie.net/one-punch-man-fan-fiction/images/7/74/Saitama_With_Hair.png/revision/latest?cb=20160525005147',
            username: 'sanket', //is unique
            social: {
                twitter: 'twitter.com/',
                discord: 'discord.com/',
                website: 'website.com/',
            },
            membership: 'Plus Pro Ultra',
            createdAt: Date.now(),
        },
        {
            badges: ['Badge1', 'Badge2'],
            name: 'Nuno',
            bio: 'Some super cool line',
            pfp: 'https://static.wikia.nocookie.net/one-punch-man-fan-fiction/images/7/74/Saitama_With_Hair.png/revision/latest?cb=20160525005147',
            username: 'nuno', //is unique
            social: {
                twitter: 'twitter.com/',
                discord: 'discord.com/',
                website: 'website.com/',
            },
            membership: 'Plus Pro Ultra',
            createdAt: Date.now(),
        },
    ]

    const setUsersHandler = async () => {
        // await setDoc(doc(db, 'users', 'testUser-4'), dummyUsers[3])
    }

    const dummyPost = {
        userID: 'testUser-',
        title: 'Title here',
        content: {
            data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image1: 'https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_800,h_400,c_scale/v1620316360/greenspace.jpg',
        },
        comments: {
            uniqueID: {
                text: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                userID: 'testUser-1',
                upvotes: ['testUser-1', 'testUser-2'],
                createdAt: 'time stamp',
            },
            upvotes: ['testUser-1', 'testUser-1'],
            createdAt: '26 November 2021',
        },
    }

    const setPostHandler = async () => {
        await setDoc(doc(db, 'posts', 'testPost-4'), {
            userID: 'testUser-4',
            title: 'Title goes here',
            content: {
                data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                image1: 'https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_800,h_400,c_scale/v1620316360/greenspace.jpg',
            },
            comments: {
                testComment: {
                    text: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    userID: 'testUser-1',
                    upvotes: [
                        'testUser-1',
                        'testUser-2',
                        'testUser-3',
                        'testUser-4',
                    ],
                    downvotes: [
                        'testUser-1',
                        'testUser-2',
                        'testUser-3',
                        'testUser-4',
                    ],
                    createdAt: 'time stamp',
                },
                upvotes: [
                    'testUser-1',
                    'testUser-2',
                    'testUser-3',
                    'testUser-4',
                ],
                downvotes: [
                    'testUser-1',
                    'testUser-2',
                    'testUser-3',
                    'testUser-4',
                ],
                createdAt: Date.now(),
            },
        })
    }

    return (
        <React.Fragment>
            <button onClick={setUsersHandler}>Submit User</button>
            <button onClick={setPostHandler}>Submit Post</button>
        </React.Fragment>
    )
}
export default FeedLogic
