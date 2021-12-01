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
    arrayUnion,
    arrayRemove,
    onSnapshot,
} from 'firebase/firestore'
import imageCompression from 'browser-image-compression'
import { db, uploadImage } from '../../../../../api/firebase'

//Set post in posts Collection and add the post ID in respective [Dao]-[ChannelName]
export const sendPostDataAndSetId = async (data, uniqueID,daoName,channelName) => {
    const daoRef = doc(db, 'daos', daoName)
    await setDoc(doc(db, 'posts', uniqueID), data)
    const fieldName= `channel-${channelName}`
    await updateDoc(daoRef, {
        [fieldName]: arrayUnion(uniqueID),
    })
    console.log('post success')
}

export const getUserById = async (userId) => {
    const userRef = doc(db, 'users', userId)
    const getDocument = await getDoc(userRef)
    const data = await getDocument.data()
    return data
}

//Fetch single post by ID
export const fetchPostById = async(id)=>{
     const postsRef = doc(db, 'posts', id)
     const getDocument = await getDoc(postsRef)
     const data = await getDocument.data()
     console.log("fetchPostByid-",data)
}
//Fetch all posts by ID
export const fetchAllPostsById = async(array)=>{
     let allPosts = []
     for (const id of array) {
         const postsRef = doc(db, 'posts', id)
         const getDocument = await getDoc(postsRef)
         const data = await getDocument.data()
         allPosts.push(data)
     }
     return allPosts;
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
    return postsWithUsers
}

export const filterPostByChannel = (array, channelName) => {
    const filteredArray = array.filter((doc) => doc.channel === channelName)
    return filteredArray
}

export const upVoteIncrease = async (postId, userID) => {
    const postsRef = doc(db, 'posts', postId)
    console.log('dont have id, upvote added')
    await updateDoc(postsRef, {
        upvotes: arrayUnion(userID),
    })
}
export const upVoteDecrease = async (postId, userID) => {
    const postsRef = doc(db, 'posts', postId)
    console.log('have id, upvote removed')
    await updateDoc(postsRef, {
        upvotes: arrayRemove(userID),
    })
}
export const downVoteIncrease = async (postId, userID) => {
    const postsRef = doc(db, 'posts', postId)
    console.log(' dont have id, downvote increase' )
    await updateDoc(postsRef, {
        downvotes: arrayUnion(userID),
    })
}
export const downVoteDecrease = async (postId, userID) => {
    const postsRef = doc(db, 'posts', postId)
    console.log('has id, downvote decrease')
    await updateDoc(postsRef, {
        downvotes: arrayRemove(userID),
    })
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
