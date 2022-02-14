import React, { useState } from 'react'
import * as Styled from './style'
import useKeyValidation from '../../../../../../hooks/useKeyValidation'

import { AiFillCheckCircle } from 'react-icons/ai'

// Task Components
import MeetingCode from './components/MeetingCode'
import Snapshot from './components/Snapshot'
import ManualTask from './components/ManualTask'

const KeyBox = (props) => {
    const [opened, setOpened] = useState(false)
    const [startBox, setStartBox] = useState(false)
    const data = props.data
    const keyValidation = useKeyValidation(data, props.gateData)

    const openedHandler = () => {
        setOpened((prev) => !prev)
    }

    const startHandler = () => {
        setOpened((prev) => !prev)
        setStartBox((prev) => !prev)
    }

    const Task = () => {
        switch (data.task.type) {
            case 'MEETING_CODE':
                return (
                    <MeetingCode
                        data={data}
                        setInfo={(info) => keyValidation.setInfo(info)}
                    />
                )
            case 'SNAPSHOT_GOVERNANCE':
                return <Snapshot data={data} />
            case 'QUIZ':
            case 'SELF_VERIFY': <ManualTask data={data}/>
            case 'SC_INTERACTION':
            default:
                return null
        }
    }

    return (
        <Styled.ThirdDiv>
            <Styled.Box opened={opened} blocked={props.blocked}>
                <Styled.TextContainer>
                    <Styled.BoxTitle>
                        {data.information[0].title}
                    </Styled.BoxTitle>
                    <Styled.BoxSubtitle opened={opened}>
                        {data.information[0].description}
                    </Styled.BoxSubtitle>
                </Styled.TextContainer>
                {opened && (
                    <Styled.TextContainer>
                        {data.information.slice(1).map((key) => (
                            <>
                                <Styled.BoxTitle>{key.title}</Styled.BoxTitle>
                                <Styled.BoxSubtitle opened={opened}>
                                    {key.description}
                                </Styled.BoxSubtitle>
                            </>
                        ))}

                        {startBox && <Task />}
                    </Styled.TextContainer>
                )}
                <Styled.BottonBox>
                    <Styled.ActionButton>
                        <Styled.StartButton
                            opened={opened}
                            blocked={props.blocked}
                            onClick={
                                !props.blocked
                                    ? !opened
                                        ? startHandler
                                        : keyValidation.buttonBehavior.onClick
                                    : null
                            }
                        >
                            <Styled.ButtonText>
                                {props.blocked && (
                                    <AiFillCheckCircle
                                        color="#27D5A2"
                                        size={24}
                                        style={{ marginRight: 10 }}
                                    />
                                )}
                                {props.blocked
                                    ? 'Completed'
                                    : startBox
                                    ? keyValidation.buttonBehavior.title
                                    : 'Start'}
                            </Styled.ButtonText>
                        </Styled.StartButton>
                        {(data.information.length > 1 || opened) && (
                            <Styled.StartButtonTwo
                                onClick={
                                    startBox ? startHandler : openedHandler
                                }
                            >
                                <Styled.ButtonText>
                                    {opened ? 'Hide' : 'Details'}
                                </Styled.ButtonText>
                            </Styled.StartButtonTwo>
                        )}
                    </Styled.ActionButton>
                    {!opened && (
                        <Styled.InformationDiv>
                            <Styled.KeyRewardBox>
                                <Styled.InformationBoxHeading>
                                    Key Reward
                                </Styled.InformationBoxHeading>
                                <Styled.InformationBoxInfoText>
                                    {data.keys}
                                </Styled.InformationBoxInfoText>
                            </Styled.KeyRewardBox>
                            {/* <Styled.CompensationBox>
                                <Styled.InformationBoxHeading>
                                    Compensation
                                </Styled.InformationBoxHeading>
                                <Styled.InformationBoxInfoText>
                                    100 $BANK
                                </Styled.InformationBoxInfoText>
                            </Styled.CompensationBox> */}
                        </Styled.InformationDiv>
                    )}
                </Styled.BottonBox>
            </Styled.Box>
        </Styled.ThirdDiv>
    )
}

export default React.memo(KeyBox)
