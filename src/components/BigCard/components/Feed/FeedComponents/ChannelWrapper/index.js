import PostCard from '../PostCard'
import MakePost from '../MakePost'
import * as Styled from './style'
import MakeDummyUser from '../MakeDummyUser'
import { useState, useEffect } from 'react'
import { fetchPostByIdAndSortByVote } from '../Handlers'
import { db } from '../../../../../../api/firebase'
import { doc, onSnapshot } from 'firebase/firestore'

const ChannelWrapper = (props) => {
    // set id login here.. replace testUser-2 with user login id
    const loggedInUser = 'testUser-2'
    const [idsByVote, setIdsByVote] = useState([])
    const [ids, setIds] = useState([])
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

    //Sort by votes
    useEffect(() => {
        // Sort by votes
        if (ids.lenght !== 0) {
            const newSortedIdByVotes = async () => {
                const newIds = await fetchPostByIdAndSortByVote(ids)
                setIdsByVote(newIds)
            }
            newSortedIdByVotes()
        }
    }, [ids])
    return (
        <Styled.FeedMessageContainer>
            <MakeDummyUser />
            <MakePost
                loggedInUserID={loggedInUser}
                cardName={props.cardName}
                channel={props.channel}
            />
            {idsByVote !== 0 &&
                idsByVote.map((id) => (
                    <PostCard loggedInUserID={loggedInUser} key={id} id={id} />
                ))}
            {ids.length === 0 && <p>Empty</p>}
        </Styled.FeedMessageContainer>
    )
}

export default ChannelWrapper
