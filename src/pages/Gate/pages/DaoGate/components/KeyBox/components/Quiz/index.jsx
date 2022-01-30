import React, { useEffect, useState } from 'react'

// Styling
import { FormStyled } from '../../../../../../../../components/Form'

// Hooks
// import useVerifyQuiz from '../../../../../../../../api/database/keys/useVerifyQuiz'
import { useAuth } from '../../../../../../../../contexts/UserContext'
import Question from './components/Question'

const Quiz = ({ data, setVerify, buttonBehavior }) => {
    const { userInfo } = useAuth()
    // const { verifyQuiz } = useVerifyQuiz()
    const [questionIdx, setQuestionIdx] = useState(0)
    const [answers, setAnswers] = useState([])

    const nrQuestions = data.task.questions.length

    const nextQuestion = () => {
        console.log('Hey')
        if (questionIdx + 1 < nrQuestions) {
            setQuestionIdx((prev) => prev + 1)
        }
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
    }

    useEffect(() => {
        setVerify.current = verify
    }, [])

    // TODO: fix this
    useEffect(() => {
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
            />
        </>
    )
}

export default React.memo(Quiz)
