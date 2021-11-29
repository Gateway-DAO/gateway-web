import React from 'react'
import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
} from 'firebase/firestore'
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
        await setDoc(doc(db, 'users', 'testUser-4'), dummyUsers[3])
    }

    const setPostIDHandler = async (channelName, newPostID) => {
        const daoDoc = doc(db, 'daos', 'Forefront')
        const daoFetch = await getDoc(daoDoc)
        const data = daoFetch.data()
        const allChannels = data.channels
        const channelToUpdateArray = data.channels[channelName]
        let updatedArray
        if (channelToUpdateArray) {
            updatedArray = [newPostID, ...channelToUpdateArray]
        } else {
            updatedArray = [newPostID]
        }
        let channels
        switch (channelName) {
            case 'General':
                channels = { General: updatedArray, ...allChannels }
                break
            case 'Events':
                channels = { Events: updatedArray, ...allChannels }
                break
            case 'NFTs':
                channels = { NFTs: updatedArray, ...allChannels }
                break
            case 'Web3':
                channels = { Web3: updatedArray, ...allChannels }
                break
            case 'DeFi':
                channels = { DeFi: updatedArray, ...allChannels }
                break
            default:
                break
        }
        await updateDoc(daoDoc, {
            channels: channels,
        })
    }

    return (
        <React.Fragment>
            {/* <button onClick={setUsersHandler}>Submit User</button> */}
        </React.Fragment>
    )
}
export default FeedLogic
