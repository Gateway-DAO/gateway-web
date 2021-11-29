import * as Styled from './style'
import { useState,useEffect } from 'react'
import FeedPostWrapper from '../../../FeedPostWrapper'
import FeedLogic from './FeedLogic'
import {
    fetchPostsByCard,
    filterPostByChannel,
} from './Handlers/Handlers'
const Feed = (props) => {
    // const Channels = ['General🌐', 'Events🎈', 'NFTs🖼️', 'Web3🚀', 'DeFi💰']
    const Channels = [
        { name: 'General 🌐', id: 'General' },
        { name: 'Events 🎈', id: 'Events' },
        { name: 'NFTs 🖼️', id: 'NFTs' },
        { name: 'Web3 🚀', id: 'Web3' },
        { name: 'DeFi 💰', id: 'DeFi' },
    ]
    const [selected, setSelected] = useState('General')
    const [feeds,setFeeds]=useState([]);
    const [currentFeed,setCurrentFeeds]=useState([])
    const [postRefreshToggler, setPostRefreshToggler] = useState(false)
       const fetchPosts = async () => {
           const allPosts = await fetchPostsByCard(props.cardName)
        //    const sortedArrayByTime = sortByTime(allPosts)
           setFeeds(allPosts)
       }
       useEffect(() => {
           fetchPosts()
       }, [postRefreshToggler]) 

       useEffect(() => {
          const filterPosts = filterPostByChannel(feeds, selected)
          setCurrentFeeds(filterPosts)
       }, [selected,feeds])
    const posted = ()=>{
        setPostRefreshToggler(prev=>!prev)
    }
    return (
        <Styled.FeedContainer>
            <Styled.ChannelContainer>
                <FeedLogic />
                <Styled.H4Text>CHANNELS</Styled.H4Text>
                {Channels.map((name) => (
                    <Styled.H5Text
                        key={name.id}
                        onClick={(e) => setSelected(name.id)}
                        active={selected === name.id}
                    >
                        #{name.name}
                    </Styled.H5Text>
                ))}
            </Styled.ChannelContainer>
            <Styled.FeedMessageContainer>           
                <FeedPostWrapper
                    currentFeeds={currentFeed}
                    cardName={props.cardName}
                    channel={selected}
                    posted={posted}
                />
            </Styled.FeedMessageContainer>
        </Styled.FeedContainer>
    )
}

export default Feed
