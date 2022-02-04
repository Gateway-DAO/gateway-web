import * as Styled from './style'
import { useState } from 'react'
import { ActionButton } from './style'

const QuestionAndAnswer = (props) => {
    const [active, setActive] = useState(false)
    const [answer, setAnswer] = useState('')
    const [answerList, setAnswerList] = useState([])

    function checkElement(selection) {
        let result = false
        const helllo = answerList.some(function (el) {
            if (el === selection) {
                result = true
            }
        })
        return result
    }

    /**
     * Given an event and a selection, add the selection to the answer list if it's not already in the
     * list, otherwise remove it from the list
     */
    const addAnswer = (e, selection) => {
        let result = answerList.includes(selection)
        if (result) {
            setAnswerList(answerList.filter((value) => value == !selection))
        } else {
            setAnswerList([...answerList, selection])
        }
    }


    const DynamicButton = (props) => {
        const onNext = (e) => {
            console.log('next button call')
            setActive(!active)
        }

        const onFinish = (e) => {
            console.log('finish button call')
        }

        if (props.type == 'Next' || 'next') {
            return (
                <ActionButton onClick={onNext} active={props.active}>
                    NEXT
                </ActionButton>
            )
        }

        if (props.type == 'finish' || 'Finish') {
            return (
                <ActionButton onClick={onFinish} active={props.active}>
                    Finish
                </ActionButton>
            )
        }
    }
    return (
        <Styled.QuestionBox>
            <Styled.QuestionNOText>Question 1 OF 3</Styled.QuestionNOText>
            <Styled.QuestionText>
                How many tokens are required for membership?
            </Styled.QuestionText>
            <Styled.AnswerContainer>
                {console.log(answerList)}
                <Styled.Answers onClick={(e) => addAnswer(e, 'A')} >
                    <Styled.Option active={answerList.includes('A')}>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[0]}
                    </Styled.Option>
                    <Styled.OptionAnswer active={answerList.includes('A')}>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers onClick={(e) => addAnswer(e, 'B')}>
                    <Styled.Option active={answerList.includes('B')}>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[1]}
                    </Styled.Option >
                    <Styled.OptionAnswer active={answerList.includes('B')}>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers onClick={(e) => addAnswer(e, 'C')}>
                    <Styled.Option active={answerList.includes('C')}>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[2]}
                    </Styled.Option>
                    <Styled.OptionAnswer active={answerList.includes('C')}>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers onClick={(e) => addAnswer(e, 'D')}>
                    <Styled.Option active={answerList.includes('D')}>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[3]}
                    </Styled.Option>
                    <Styled.OptionAnswer active={answerList.includes('D')}>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers onClick={(e) => addAnswer(e, 'E')}>
                    <Styled.Option active={answerList.includes('E')}>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[4]}
                    </Styled.Option>
                    <Styled.OptionAnswer active={answerList.includes('E')}>35,000</Styled.OptionAnswer>
                </Styled.Answers>
            </Styled.AnswerContainer>
            <DynamicButton type="next" active={active} />
        </Styled.QuestionBox>
    )
}

export default QuestionAndAnswer
