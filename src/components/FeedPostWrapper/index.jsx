import * as Styled from './style'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import UserPostCard from '../UserPostCard'
import PostCard from '../PostCard'
import { getUserById } from '../BigCard/components/Feed/Handlers/Handlers'
import { db } from '../../api/firebase'
import { doc, onSnapshot } from 'firebase/firestore'

const FeedPostWrapper = (props) => {
    const loggedInUser = 'testUser-1'

    const [ids, setIds] = useState([])
    const channel = props.channel
    const cardName = props.cardName
    useEffect(() => {
        const daoSnapshot = onSnapshot(doc(db, 'daos', cardName), (doc) => {
            const DaoData = doc.data()
            const fieldName = `channel-${channel}`
            const currentPostsIds = DaoData[fieldName]
            let sortedArray = []
            if (currentPostsIds) {
                sortedArray = currentPostsIds.reverse()
            }
            setIds(sortedArray)
        })
        return daoSnapshot
    }, [channel, cardName])

    return (
        <Styled.FeedPostContainer>
            <UserPostCard
                loggedInUserID={loggedInUser}
                cardName={props.cardName}
                channel={props.channel}
            />
            {ids !== 0 &&
                ids.map((id) => (
                    <PostCard loggedInUserID={loggedInUser} key={id} id={id} />
                ))}
            {ids.length === 0 && <p>Empty</p>}
        </Styled.FeedPostContainer>
    )
}

export default FeedPostWrapper
