import * as Styled from './style'
import { useEffect, useState } from 'react'

const QuestionAndAnswer = ({ question, questionIdx, totalQuestions, setAnswer }) => {
    const [answerList, setAnswerList] = useState([])

    /**
     * Given an event and a selection, add the selection to the answer list if it's not already in the
     * list, otherwise remove it from the list
     */
    const handleAnswer = (selection) => {
        let val;

        if (answerList.includes(selection)) {
            val = answerList.filter((value) => value !== selection)
        } else {
            val = [...answerList, selection]
        }

        setAnswerList(val)

        setAnswer({
            questionIdx,
            answers: val
        })
    }

    useEffect(() => {
        setAnswerList([])
    }, [questionIdx])

    return (
        <Styled.QuestionBox>
            <Styled.QuestionNOText>Question {questionIdx + 1} OF {totalQuestions}</Styled.QuestionNOText>
            <Styled.QuestionText>
                {question.question}
            </Styled.QuestionText>
            <Styled.AnswerContainer>
                {question.options.map((opt, idx) => (
                    <Styled.Answers onClick={(e) => handleAnswer(idx)}>
                        <Styled.Option active={answerList.includes(idx)}>
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[idx]}
                        </Styled.Option>
                        <Styled.OptionAnswer active={answerList.includes(idx)}>
                            {opt.answer}
                        </Styled.OptionAnswer>
                    </Styled.Answers>
                ))}
            </Styled.AnswerContainer>
        </Styled.QuestionBox>
    )
}

export default QuestionAndAnswer
