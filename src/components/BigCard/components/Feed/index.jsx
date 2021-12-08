import * as Styled from './style'
import { useState } from 'react'
import ChannelWrapper from './FeedComponents/ChannelWrapper'
import { FiEdit } from 'react-icons/fi'
import EditChannelModal from '../../../Modal/EditChannelsModal'

const Feed = (props) => {
    const Channels = ['General🌐', 'Events🎈', 'NFTs🖼️', 'Web3🚀', 'DeFi💰']
    // const Channels = [
    //     { name: 'General 🌐', id: 'General' },
    //     { name: 'Events 🎈', id: 'Events' },
    //     { name: 'NFTs 🖼️', id: 'NFTs' },
    //     { name: 'Web3 🚀', id: 'Web3' },
    //     { name: 'DeFi 💰', id: 'DeFi' },
    // ]
    const [currentChannels, setCurrentChannels] = useState(Channels)
    const [selected, setSelected] = useState('General')
    const [showEditChannelModal, setShowEditChannelModal] = useState(false)
    const toggleEditChannelModel = () =>
        setShowEditChannelModal(!showEditChannelModal)
    const newChannelsSubmitHandler = (data) => {
        setCurrentChannels(data)
        toggleEditChannelModel()
    }
    const Modals = () => (
        <>
            <EditChannelModal
                newChannelsSubmit={newChannelsSubmitHandler}
                channels={Channels}
                id={props.id}
                show={showEditChannelModal}
                toggle={toggleEditChannelModel}
            />
        </>
    )
    return (
        <Styled.FeedContainer>
            <Modals />
            <Styled.ChannelContainer>
                <Styled.H4Text>
                    CHANNELS{' '}
                    <FiEdit
                        onClick={toggleEditChannelModel}
                        style={{ cursor: 'pointer' }}
                    />
                </Styled.H4Text>
                {currentChannels.map((item) => (
                    <Styled.H5Text
                        key={item}
                        onClick={(e) => setSelected(item)}
                        active={selected === item}
                    >
                        #{item}
                    </Styled.H5Text>
                ))}
            </Styled.ChannelContainer>
            <ChannelWrapper cardName={props.cardName} channel={selected} />
        </Styled.FeedContainer>
    )
}

export default Feed
