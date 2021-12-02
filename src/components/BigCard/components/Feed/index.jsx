import * as Styled from './style'
import { useState } from 'react'
import FeedWrapper from "./components/FeedWrapper"
const Feed = (props) => {
    const Channels = [
        { name: 'General 🌐', id: 'General' },
        { name: 'Events 🎈', id: 'Events' },
        { name: 'NFTs 🖼️', id: 'NFTs' },
        { name: 'Web3 🚀', id: 'Web3' },
        { name: 'DeFi 💰', id: 'DeFi' },
    ]
    const [selected, setSelected] = useState('General')
    return (
        <Styled.FeedContainer>
            <Styled.ChannelContainer>
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
                <FeedWrapper
                    cardName={props.cardName}
                    channel={selected}
                />
            </Styled.FeedMessageContainer>
        </Styled.FeedContainer>
    )
}

export default Feed
