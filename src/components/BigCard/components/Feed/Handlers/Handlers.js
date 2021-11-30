import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
    orderBy,
} from 'firebase/firestore'
import imageCompression from 'browser-image-compression'
import { db, uploadImage } from '../../../../../api/firebase'
export const setPostIdInChannelHandler = async (
    daoName,
    channelName,
    newPostID
) => {
    const daoDoc = doc(db, 'daos', daoName)
    const daoFetch = await getDoc(daoDoc)
    const data = daoFetch.data()
    let allChannels = null
    let channelToUpdateArray = null
    if (data.hasOwnProperty('channels')) {
        allChannels = data.channels
        if (data.channels.hasOwnProperty(channelName)) {
            channelToUpdateArray = data.channels[channelName]
        }
    }
    let updatedArray
    if (channelToUpdateArray) {
        updatedArray = [newPostID, ...channelToUpdateArray]
    } else {
        updatedArray = [newPostID]
    }
    let channels
    switch (channelName) {
        case 'General':
            channels = { ...allChannels, General: [updatedArray] }
            break
        case 'Events':
            channels = { ...allChannels, Events: [updatedArray] }
            break
        case 'NFTs':
            channels = { ...allChannels, NFTs: [updatedArray] }
            break
        case 'Web3':
            channels = { ...allChannels, Web3: [updatedArray] }
            break
        case 'DeFi':
            channels = { ...allChannels, DeFi: [updatedArray] }
            break
        default:
            break
    }
    await updateDoc(daoDoc, {
        channels: channels,
    })
    console.log('Set id success')
}

export const sendPostData = async (data, uniqueID) => {
    await setDoc(doc(db, 'posts', uniqueID), data)
    console.log('post success')
}

export const getUserById = async (userId) => {
    const userRef = doc(db, 'users', userId)
    const getDocument = await getDoc(userRef)
    const data = await getDocument.data()
    return data
}

export const fetchPostsByCard = async (daoName) => {
    const postsRef = collection(db, 'posts')
    const queries = query(
        postsRef,
        orderBy('createdAt', 'desc'),
        where('DAO', '==', daoName)
    )
    const querySnapshot = await getDocs(queries)
    let posts = []
    querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() })
    })
    let postsWithUsers = []
    for (const post of posts) {
        const userRef = doc(db, 'users', post.userID)
        const getDocument = await getDoc(userRef)
        const data = await getDocument.data()
        postsWithUsers.push({
            name: data.name,
            username: data.username,
            ...post,
        })
    }
    console.log(postsWithUsers)
    return postsWithUsers
}

export const filterPostByChannel = (array, channelName) => {
    const filteredArray = array.filter((doc) => doc.channel === channelName)
    return filteredArray
}

export const upVote = async (postId, userId) => {
    const userRef = doc(db, 'posts', postId)
    const getDocument = await getDoc(userRef)
    const data = await getDocument.data()
    console.log(data.upvote)
}

export const imageUploadHandler = async (id, file, size) => {
    const options = {
        maxSizeMB: size,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    }
    try {
        const compressedFile = await imageCompression(file, options)
        const url = await uploadImage(id, compressedFile)
        return url
    } catch (error) {
        console.log(error)
    }
}
