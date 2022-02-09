// Components
import BackButton from '../../../../../../../../../components/BackButton'
import QuestionAndAnswer from './QuestionAndAnswer'
import { ActionButton } from './QuestionAndAnswer/style'

// Styling
import * as Styled from './style'

// Hooks
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useVerifyQuiz } from '../../../../../../../../../api/database/useVerifyKeys'

const Quiz = (props) => {
    const [answers, setAnswers] = useState([])
    const [questionIdx, setQuestionIdx] = useState(0)
    // const { verifyQuiz } = useVerifyQuiz()
    const { state } = useLocation()

    /**
     * It creates a button that can be used to navigate between questions.
     * @returns A button with the text "Next" or "Finish"
     */
    const DynamicButton = (props) => {
        const onNext = (e) => {
            setQuestionIdx((idx) => idx + 1)
        }

        const onFinish = async (e) => {
            try {
                console.log(answers)
            }
            catch (err) {
                alert("An error ocurred")
                console.log(err)
            }
        }

        if (props.type.toLowerCase() === 'next') {
            return (
                <ActionButton onClick={onNext} active={props.active}>
                    Next
                </ActionButton>
            )
        } else if (props.type.toLowerCase() === 'finish') {
            return (
                <ActionButton onClick={onFinish} active={props.active}>
                    Finish
                </ActionButton>
            )
        }
    }

    return (
        <Styled.Container>
            <BackButton>Go back</BackButton>
            <Styled.Box>
                <Styled.DaosContainer>
                    <Styled.ImageConstainer src={state.gateData.dao.logoURL} />
                    <Styled.DaoTextBox>{state.gateData.dao.name}</Styled.DaoTextBox>
                </Styled.DaosContainer>
                <Styled.HeadingContainer>
                    {state.task.title}
                </Styled.HeadingContainer>
                <QuestionAndAnswer
                    question={state.task.questions[questionIdx]}
                    questionIdx={questionIdx}
                    totalQuestions={state.task.questions.length}
                    setAnswer={(answer) => setAnswers(prev => [...prev.filter(obj => obj.questionIdx !== answer.questionIdx), answer])}
                />
                <DynamicButton
                    type={questionIdx === state.task.questions.length - 1 ? "finish" : "next"}
                />
            </Styled.Box>
        </Styled.Container>
    )
}

export default Quiz
