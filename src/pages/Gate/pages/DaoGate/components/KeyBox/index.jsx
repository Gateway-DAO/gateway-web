import React, { useState } from 'react'
import * as Styled from './style'
import { useCallbackRef } from 'use-callback-ref'
import useKeyValidation from '../../../../../../hooks/useKeyValidation'

// Task Components
import MeetingCode from './components/MeetingCode'
import Snapshot from './components/Snapshot'

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
                return <MeetingCode data={data} setInfo={info => keyValidation.setInfo(info)} />
            case 'SNAPSHOT':
                return <Snapshot data={data} />
            case 'QUIZ':
            case 'SELF_VERIFY':
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
                    <Styled.StartButton
                        opened={opened}
                        blocked={props.blocked}
                        onClick={!props.blocked ? !opened ? startHandler : keyValidation.buttonBehavior.onClick : null}
                    >
                        <Styled.ButtonText>
                            {props.blocked ? "Completed" : startBox ? keyValidation.buttonBehavior.title : "Start"}
                        </Styled.ButtonText>
                    </Styled.StartButton>
                    {(data.information.length > 1 || opened) && (
                        <Styled.StartButtonTwo
                            onClick={startBox ? startHandler : openedHandler}
                        >
                            <Styled.ButtonText>
                                {opened ? 'Hide' : 'Details'}
                            </Styled.ButtonText>
                        </Styled.StartButtonTwo>
                    )}
                </Styled.BottonBox>
            </Styled.Box>
        </Styled.ThirdDiv>
    )
}

export default React.memo(KeyBox)
