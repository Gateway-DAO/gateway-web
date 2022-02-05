import React, { useState, useRef, useEffect } from 'react'
import * as Styled from './style'
import { useCallbackRef } from 'use-callback-ref'

// Task components
import MeetingCode from './components/MeetingCode'
import Quiz from './components/Quiz'
import Snapshot from './components/Snapshot'

const KeyBox = (props) => {
    const [questionIdx, setQuestionIdx] = useState(0)
    const [opened, setOpened] = useState(false)
    const [startBox, setStartBox] = useState(false)
    const taskVerify = useRef(null)
    //const buttonBehavior = useRef(null)
    const [_, update] = useState(null);
    const buttonBehavior = useCallbackRef(null, () => update({}));
    const data = props.data

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
                return <MeetingCode data={data} setVerify={taskVerify} />
            case 'QUIZ':
                return (
                    // <Quiz
                    //     data={data}
                    //     setVerify={taskVerify}
                    //     buttonBehavior={buttonBehavior}
                    //     questionIdx={questionIdx}
                    //     setQuestionIdx={setQuestionIdx}
                    // />
                    <Snapshot 
                        
                    />
                )
            case 'SNAPSHOT':
                return (
                    <Snapshot 
                        data={data}
                    />
                )
            case 'SELF_VERIFY':
            default:
                return null
        }
    }

    return (
        <Styled.ThirdDiv>
            <Styled.Box opened={opened}>
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
                        onClick={
                            !opened
                                ? startHandler
                                : buttonBehavior.current
                                ? buttonBehavior.current.onClick
                                : taskVerify.current
                        }
                    >
                        <Styled.ButtonText>
                            {startBox
                                ? buttonBehavior.current
                                    ? buttonBehavior.current.text
                                    : 'Finish Task'
                                : 'Start'}
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
