import * as Styled from './style'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import UserPostCard from '../UserPostCard'
import PostCard from '../PostCard'
import CommentPostCard from '../CommentPostCard'
import {
    fetchPostByCardAndChannel,
    fetchPostsByCard,
    fetchAllPostsById,
} from '../BigCard/components/Feed/Handlers/Handlers'
import { db } from '../../api/firebase'
import { doc, onSnapshot } from 'firebase/firestore'

const FeedPostWrapper = (props) => {
    const [ids, setIds] = useState([])
    const channel = props.channel
    const cardName = props.cardName
    useEffect(() => {
        const daoSnapshot = onSnapshot(
            doc(db, 'daos', cardName),
            (doc) => {
                const DaoData = doc.data()
                const fieldName = `channel-${channel}`
                const currentPostsIds = DaoData[fieldName]
                let sortedArray = []
                if (currentPostsIds) {
                    sortedArray = currentPostsIds.reverse()
                }
                setIds(sortedArray)
            }
        )
        return daoSnapshot
    }, [channel, cardName])

    return (
        <Styled.FeedPostContainer>
            {console.log('feedPostWrapper')}
            <UserPostCard
                cardName={props.cardName}
                channel={props.channel}
                posted={props.posted}
            />
            {ids !== 0 && ids.map((id) => <PostCard key={id} id={id} />)}
            {ids.length === 0 && <p>Empty</p>}
            {/* <CommentPostCard /> */}
        </Styled.FeedPostContainer>
    )
}

export default FeedPostWrapper
