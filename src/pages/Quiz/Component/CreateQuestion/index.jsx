import { useState} from 'react'
import * as Styled from './style'
import { FormStyled } from '../../../../components/Form'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

const CreateQuestion = ({data, setData, setActiveModal}) => {
    const [questions, setQuestions] = useState(data || [
        {
            question: '',
            options: [
                {
                    answer: '',
                    correct: false,
                },
                {
                    answer: '',
                    correct: false,
                },
            ],
            noOfCorrectAnswer:0
        },
    ])
    //This function add a new question set when user press ADD icon
    const AddQuestionHandler = () => {
        setQuestions([
            ...questions,
            {
                question: '',
                options: [
                    {
                        answer: '',
                        correct: false,
                    },
                    {
                        answer: '',
                        correct: false,
                    },
                ],
                noOfCorrectAnswer: 0
            },
        ])
    }

    //This function delete the quetion section
    const deleteQuestion = (questionNumber) => {
        setQuestions(questions.filter((v, idx) => idx !== questionNumber))
    }

    //This function is used for editing the question
    const editQuestion = (e, index) => {
        const changeValue = e.target.value
        const helper = questions.map((values, idx) => {
            if (idx === index) {
                return {
                    ...values,
                    question: changeValue,
                }
            }
            return values
        })
        setQuestions(helper)
    }

    //This function add new option in question
    const addOption = (index) => {
        const addingOption = questions.map((value, idx) => {
            if (idx === index) {
                value.options.push({ answer: '', correct: false })
            }
            return value
        })

        setQuestions(addingOption)
    }

    //This function is used for editing the options values.
    const editOption = (event, index, optionIndex) => {
        const changedValue = event.target.value
        const helper = questions.map((value, idx) => {
            if (idx === index) {
                let arr = value.options
                arr[optionIndex] = { ...arr[optionIndex], answer: changedValue }
                return {
                    ...value,
                    options: arr,
                }
            }
            return value
        })
        setQuestions(helper)
    }

    //This function is used for deleting the option
    const deleteOption = (questionNumber, optionNumber) => {
        const del = questions.map((value, idx) => {
            if (idx === questionNumber) {
                if (value.options.length > 2) {
                    value.options.splice(optionNumber, 1)
                } else {
                    alert('Each question must has atleast 2 options')
                }
            }
            return value
        })
        setQuestions(del)
    }

    //This finction add correct answer for a question
    const addCorrectAnswer = (questionNumber, optionNumber) => {
        const add = questions.map((value, idx) => {
            if (idx === questionNumber) {
                let arr = value.options
                if (value.options.at(optionNumber).correct) {
                    arr[optionNumber].correct = false;
                    value.noOfCorrectAnswer = value.noOfCorrectAnswer-1;
                } else {
                    arr[optionNumber].correct = true
                    value.noOfCorrectAnswer = value.noOfCorrectAnswer+1;
                }
                return {
                    ...value,
                    options: arr,
                }
            }
            return value
        })
        setQuestions(add)
        console.log(questions)
    }

    const checkToggle = (answer, idx, color) => {
        if (answer) {
            return '#72B841'
        } else {
            return color
        }
    }
    // for sending this to database
    // const submitHandler = () => {
    //     console.log(questions);
    //     setData(questions);
    // }
    const saveQuiz= ()=>{
        setData(questions);
        setActiveModal('PERSENTAGE_PAGE');
    }
    return (
        <>
            {questions.map((question, index) => (
                <>
                    <FormStyled.Fieldset>
                        <FormStyled.Label>QUIZ QUESTION {index + 1}</FormStyled.Label>
                        <FormStyled.Input
                            onChange={(e) => editQuestion(e, index)}
                            type="text"
                            id={`question-${index}`}
                            name="question"
                            placeholder="i.e. What is our token name?"
                            value={question.question}
                            required
                        />
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label>QUIZ OPTIONS</FormStyled.Label>
                        {question.options.map((ele, idx) => (
                            <Styled.AnswerBox>
                                <Styled.IconBox mr="10px">
                                    <BsThreeDotsVertical />
                                </Styled.IconBox>
                                <Styled.AnswerInput
                                    id={`answerInput-${idx}`}
                                    name={ele.answer}
                                    onChange={(e) => editOption(e, index, idx)}
                                    value={ele.answer}
                                    required
                                />
                                <Styled.IconBox
                                    ml="10px"
                                    id={`iconBox-${idx}`}
                                    color={() =>
                                        checkToggle(ele.correct, idx, 'white')
                                    }
                                    border={() =>
                                        checkToggle(
                                            ele.correct,
                                            idx,
                                            'rgba(255, 255, 255, 0.2)'
                                        )
                                    }
                                    onClick={() => addCorrectAnswer(index, idx)}
                                >
                                    <AiOutlineCheck />
                                </Styled.IconBox>
                                <Styled.IconBox
                                    ml="10px"
                                    onClick={
                                        question.options.length > 2
                                            ? () => deleteOption(index, idx)
                                            : undefined
                                    }
                                >
                                    {question.options.length > 2 ? (
                                        <FaTrashAlt
                                            style={{ color: 'white' }}
                                        />
                                    ) : (
                                        <FaTrashAlt
                                            style={{
                                                color: 'rgba(255,255,255,0.2)',
                                            }}
                                        />
                                    )}
                                </Styled.IconBox>
                            </Styled.AnswerBox>
                        ))}
                        <Styled.AnswerBox>
                            <Styled.IconBox
                                mr="10px"
                                border="#A5A5A5"
                                onClick={() =>
                                    addOption(index, question.options.length)
                                }
                            >
                                <IoMdAdd />
                            </Styled.IconBox>
                            <Styled.AddOptionText
                                onClick={() =>
                                    addOption(index, question.options.length)
                                }
                            >
                                Add Answer
                            </Styled.AddOptionText>
                        </Styled.AnswerBox>
                    </FormStyled.Fieldset>
                    {questions.length > 1 && (
                        <FormStyled.DeleteWrapper
                            onClick={(e) => deleteQuestion(index)}
                        >
                            <FormStyled.IconButton>
                                <FaTrashAlt />
                            </FormStyled.IconButton>
                            <FormStyled.TextLabel marginLeft="10px">
                                Delete Section
                            </FormStyled.TextLabel>
                        </FormStyled.DeleteWrapper>
                    )}
                </>
            ))}
            <Styled.AddQuestionBox>
                <Styled.Circle onClick={AddQuestionHandler}>
                    <IoMdAdd style={{ color: 'white' }} />
                </Styled.Circle>
                Add Questions
            </Styled.AddQuestionBox>
            <FormStyled.Button onClick={saveQuiz}>Next</FormStyled.Button>
        </>
    )
}

export default CreateQuestion
