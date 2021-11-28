import * as Styled from './style'
import { useState } from 'react'
import FeedPostWrapper from '../../../FeedPostWrapper'
import FeedLogic from './FeedLogic'

const Feed = () => {
    const Channels = ['General🌐', 'Events🎈', 'NFTs🖼️', 'Web3🚀', 'DeFi💰']
    const [selected, setSelected] = useState('General🌐')

    return (
        <Styled.FeedContainer>
            <Styled.ChannelContainer> 
                <FeedLogic/>
                <Styled.H4Text>CHANNELS</Styled.H4Text>
                {Channels.map((name) => (
                    <Styled.H5Text
                        key={name}
                        onClick={(e) => setSelected(name)}
                        active={selected === name}
                    >
                        #{name}
                    </Styled.H5Text>
                ))}
            </Styled.ChannelContainer>
            <Styled.FeedMessageContainer>
                <FeedPostWrapper channel={selected} />
            </Styled.FeedMessageContainer>
        </Styled.FeedContainer>
    )
}

export default Feed
