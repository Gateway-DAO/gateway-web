import * as Styled from './style'
import { useEffect, useState } from 'react'
import UserPostCard from '../UserPostCard'
import PostCard from '../PostCard'
import {
    fetchPostByIdAndSortByVote,
} from '../BigCard/components/Feed/Handlers/Handlers'
import { db } from '../../api/firebase'
import { doc, onSnapshot } from 'firebase/firestore'

const FeedPostWrapper = (props) => {
    const loggedInUser = 'testUser-1'
    const [ids, setIds] = useState([])
    const [idsByVote, setIdsByVote] = useState([])
    const channel = props.channel
    const cardName = props.cardName
    useEffect(() => {
        const daoSnapshot = onSnapshot(doc(db, 'daos', cardName), (doc) => {
            const DaoData = doc.data()
            const fieldName = `channel-${channel}`
            const currentPostsIds = DaoData[fieldName]
            let sortedArray = []
            // ---sort by time
            if (currentPostsIds) {
                sortedArray = currentPostsIds.reverse()
            }
            setIds(sortedArray)
        })
        return daoSnapshot
    }, [channel, cardName])

    useEffect(() => {
        // Sort by votes
        if (ids.lenght !== 0) {
            const newSortedIdByVotes = async () => {
                const newIds =await fetchPostByIdAndSortByVote(ids)
                setIdsByVote(newIds)
            }
            newSortedIdByVotes()
        }
    }, [ids])

    return (
        <Styled.FeedPostContainer>
            {console.log('feedPostWrapper', idsByVote)}
            <UserPostCard
                loggedInUserID={loggedInUser}
                cardName={props.cardName}
                channel={props.channel}
            />
            {idsByVote !== 0 &&
                idsByVote.map((id) => (
                    <PostCard loggedInUserID={loggedInUser} key={id} id={id} />
                ))}
            {ids.length === 0 && <p>Empty</p>}
        </Styled.FeedPostContainer>
    )
}

export default FeedPostWrapper
