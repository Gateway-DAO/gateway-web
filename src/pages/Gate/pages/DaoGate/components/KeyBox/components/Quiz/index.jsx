import React, { useEffect, useState } from 'react'

// Styling
import { FormStyled } from '../../../../../../../../components/Form'

// Hooks
// import useVerifyQuiz from '../../../../../../../../api/database/keys/useVerifyQuiz'
import { useAuth } from '../../../../../../../../contexts/UserContext'
import Question from './components/Question'

const Quiz = ({
    data,
    setVerify,
    buttonBehavior,
    questionIdx,
    setQuestionIdx,
}) => {
    const { userInfo } = useAuth()
    // const { verifyQuiz } = useVerifyQuiz()

    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const nrQuestions = data.task.questions.length

    const nextQuestion = () => {
        console.log('Hey')
        if (questionIdx + 1 < nrQuestions) {
            console.log(selectedAnswer)
            setAnswers([...answers, selectedAnswer])
            setQuestionIdx((prev) => prev + 1)
        }
        console.log(answers)
    }

    const verify = async () => {
        try {
            /*
            const res = await verifyMeetingCode({
                variables: {
                    userID: userInfo.id,
                    keyID: data.id,
                    meetingCode,
                },
            })

            return res
            */
        } catch (err) {
            alert('An error occurred')
            console.log(err)
        }
        console.log('finally you have sumbitted your answer')
    }

    useEffect(() => {
        setVerify.current = verify
    }, [])

    // TODO: fix this
    useEffect(() => {
        console.log(nrQuestions)
        console.log(questionIdx)
        if (questionIdx + 1 < nrQuestions) {
            buttonBehavior.current = {
                text: 'Next',
                onClick: nextQuestion,
            }
        } else if (questionIdx + 1 === nrQuestions) {
            buttonBehavior.current = {
                text: 'Finish Task',
                onClick: verify,
            }
        }
    }, [questionIdx])

    return (
        <>
            <Question
                question={data.task.questions[questionIdx]}
                nrQuestions={data.task.questions.length}
                idx={questionIdx}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
            />
        </>
    )
}

export default React.memo(Quiz)
