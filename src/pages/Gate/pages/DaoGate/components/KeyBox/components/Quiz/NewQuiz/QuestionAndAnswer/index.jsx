import * as Styled from './style'
import { useState } from 'react'
import { ActionButton } from './style'

const QuestionAndAnswer = (props) => {
    const [active, setActive] = useState(false)
    const [answer, setAnswer] = useState('')
    const [answerList, setAnswerList] = useState([])

    function checkElement(selection) {
        return answerList.some(function (el) {
            return el === selection
        })
    }

    const addAnswer = (e, selection) => {
        if (checkElement(selection)) {
            setAnswerList(answerList.filter((value, i) => i !== selection))
        } else {
            setAnswerList(...answerList, selection)
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
                <Styled.Answers onClick={(e) => addAnswer(e, 'A')}>
                    <Styled.Option>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[0]}
                    </Styled.Option>
                    <Styled.OptionAnswer>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers>
                    <Styled.Option>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[1]}
                    </Styled.Option>
                    <Styled.OptionAnswer>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers>
                    <Styled.Option>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[2]}
                    </Styled.Option>
                    <Styled.OptionAnswer>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers>
                    <Styled.Option>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[3]}
                    </Styled.Option>
                    <Styled.OptionAnswer>35,000</Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers>
                    <Styled.Option>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[4]}
                    </Styled.Option>
                    <Styled.OptionAnswer>35,000</Styled.OptionAnswer>
                </Styled.Answers>
            </Styled.AnswerContainer>
            <DynamicButton type="next" active={active} />
        </Styled.QuestionBox>
    )
}

export default QuestionAndAnswer
