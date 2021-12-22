import * as Styled from './style'
import { useState, useEffect } from 'react'
import ChannelWrapper from './FeedComponents/ChannelWrapper'
import { FiEdit } from 'react-icons/fi'
import EditChannelModal from '../../../Modal/EditChannelsModal'

const Feed = (props) => {
    const [currentChannels, setCurrentChannels] = useState(props.channels.items)
    const [selected, setSelected] = useState(currentChannels[0])
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
                channels={currentChannels}
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
                    {/* <FiEdit
                        onClick={toggleEditChannelModel}
                        style={{ cursor: 'pointer' }}
                    /> */}
                </Styled.H4Text>
                {currentChannels.map((item) => (
                    <Styled.H5Text
                        key={item.id}
                        onClick={(e) => setSelected(item)}
                        active={selected === item}
                    >
                        #{item.name}
                    </Styled.H5Text>
                ))}
            </Styled.ChannelContainer>
            <ChannelWrapper daoID={props.id} channel={selected} />
        </Styled.FeedContainer>
    )
}

export default Feed
