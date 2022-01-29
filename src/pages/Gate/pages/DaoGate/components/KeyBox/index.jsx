import { useState } from 'react'
import * as Styled from './style'

// Task components
import MeetingCode from './components/MeetingCode'

const KeyBox = (props) => {
    const [opened, setOpened] = useState(false)
    const [startBox, setStartBox] = useState(false)
    const [taskVerify, setTaskVerify] = useState(() => {})
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
                return <MeetingCode data={data} verify={func => setTaskVerify(func)} />
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
                    <Styled.StartButton opened={opened} onClick={!opened ? startHandler : taskVerify}>
                        <Styled.ButtonText>
                            {startBox ? 'Finish Task' : 'Start'}
                        </Styled.ButtonText>
                    </Styled.StartButton>
                    {data.information.length > 1 && (
                        <Styled.StartButtonTwo>
                            <Styled.ButtonText onClick={openedHandler}>
                                {opened ? 'Hide' : 'Details'}
                            </Styled.ButtonText>
                        </Styled.StartButtonTwo>
                    )}
                </Styled.BottonBox>
            </Styled.Box>
        </Styled.ThirdDiv>
    )
}

export default KeyBox
