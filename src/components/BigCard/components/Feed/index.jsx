import * as Styled from './style'
import { useState } from 'react'
import ChannelWrapper from './FeedComponents/ChannelWrapper'
const Feed = (props) => {
    const [selected, setSelected] = useState('General')
    const Channels = [
        { name: 'General 🌐', id: 'General' },
        { name: 'Events 🎈', id: 'Events' },
        { name: 'NFTs 🖼️', id: 'NFTs' },
        { name: 'Web3 🚀', id: 'Web3' },
        { name: 'DeFi 💰', id: 'DeFi' },
    ]
    return (
        <Styled.FeedContainer>
            <Styled.ChannelContainer>
                <Styled.H4Text>CHANNELS</Styled.H4Text>
                {Channels.map((item) => (
                    <Styled.H5Text
                        key={item.id}
                        onClick={(e) => setSelected(item.id)}
                        active={selected === item.id}
                    >
                        #{item.name}
                    </Styled.H5Text>
                ))}
            </Styled.ChannelContainer>
            <ChannelWrapper cardName={props.cardName} channel={selected} />
        </Styled.FeedContainer>
    )
}

export default Feed
