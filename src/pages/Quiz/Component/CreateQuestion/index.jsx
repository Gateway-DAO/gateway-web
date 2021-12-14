import * as Styled from './style'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { useState } from 'react'
const CreateQuestion = () => {
    const [questions, setQuestions] = useState([
        {
            question: '',
            optionOne: '',
            optionTwo: '',
            optionThree: '',
            optionFour: '',
            answer: null,
        },
    ])

    const AddQuestionHandler = () => {
        setQuestions((prev) => [
            ...prev,
            {
                question: '',
                optionOne: '',
                optionTwo: '',
                optionThree: '',
                optionFour: '',
                answer: null,
            },
        ])
    }
    const ChangeHandler = (event, index) => {
        const changedName = event.target.name
        const changedValue = event.target.value
        setQuestions((prev) => {
            prev[index][changedName] = changedValue
            return prev
        })
    }
    const submitHandler = () => {
        console.log(questions)
    }
    return (
        <>
            {questions.map((question, index) => (
                <>
                    <Styled.Fieldset>
                        <Styled.Label>QUIZ QUESTION {index + 1}</Styled.Label>
                        <Styled.Input
                            onChange={(e) => ChangeHandler(e, index)}
                            type="text"
                            id="title"
                            name="question"
                            placeholder="i.e. What is our token name?"
                        />
                    </Styled.Fieldset>
                    <Styled.Fieldset>
                        <Styled.Label>QUIZ OPTIONS</Styled.Label>
                        {[
                            'optionOne',
                            'optionTwo',
                            'optionThree',
                            'optionFour',
                        ].map((ele) => (
                            <Styled.AnswerBox>
                                <Styled.IconBox mr="10px">
                                    <BsThreeDotsVertical />
                                </Styled.IconBox>
                                <Styled.AnswerInput
                                    name={ele}
                                    onChange={(e) => ChangeHandler(e, index)}
                                />
                                <Styled.IconBox ml="10px">
                                    <AiOutlineCheck />
                                </Styled.IconBox>
                                <Styled.IconBox ml="10px">
                                    <AiOutlineClose />
                                </Styled.IconBox>
                            </Styled.AnswerBox>
                        ))}
                    </Styled.Fieldset>
                </>
            ))}
            <Styled.AddQuestionBox>
                <Styled.Circle onClick={AddQuestionHandler}>
                    <IoMdAdd style={{ color: 'white' }} />
                </Styled.Circle>
                Add Questions
            </Styled.AddQuestionBox>
            <Styled.Button onClick={submitHandler}>Submit</Styled.Button>
        </>
    )
}

export default CreateQuestion
