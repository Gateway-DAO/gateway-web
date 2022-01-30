import * as Styled from './style'
import { useState } from 'react'
import AnswerWrapper from './component/AnswerWrapper'

const QuizKey = (props) => {
    const [showVideoContainer, setVideoContainer] = useState(true)
    const [nextButton, setNextButton] = useState(0)

    const renderText = () => {
        if (nextButton === 0) {
            return 'START QUIZ'
        } else return 'NEXT'
    }

    const onNext = (e) => {
        setVideoContainer(false)
    }

    return (
        <Styled.KeyContainer>
            <Styled.KeyTitle>Design Squad Intro</Styled.KeyTitle>
            <Styled.Description>
                Watch the video below and answer the quiz, you should have 70%
                of sucess to pass the key. If you do not, you have to wait at
                least 24 hours to take the quiz again.
            </Styled.Description>
            {showVideoContainer ? (
                <Styled.videoContainer>
                    <iframe
                        width="700"
                        height="528"
                        src="https://www.youtube-nocookie.com/embed/qUYBsCJY140"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </Styled.videoContainer>
            ) : (
                <AnswerWrapper />
            )}
            <Styled.ActivityContainer>
                <Styled.StartQuizButton onClick={(e) => onNext()}>
                    <Styled.ButtonText>{renderText()}</Styled.ButtonText>
                </Styled.StartQuizButton>
                <Styled.HideButton>
                    <Styled.HideButtonText>HIDE</Styled.HideButtonText>
                </Styled.HideButton>
            </Styled.ActivityContainer>
        </Styled.KeyContainer>
    )
}

export default QuizKey
