import { Fragment, useState } from 'react';

// Styling
import * as Styled from './style';
import { FormStyled } from '../../../../components/Form';

// Icons
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { useOutletContext } from 'react-router-dom';

const CreateQuestion = ({
    setActiveModal,
    setShowMessage,
    setOptionsPerQuestion,
    initialClont,
}) => {
    const { formik } = useOutletContext();

    const [optionCount, setOptionCount] = useState(initialClont);
    const [questions, setQuestions] = useState(
        formik.values.quiz.questions || [
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
                nrOfCorrectAnswers: 0,
            },
        ]
    );

    /**
     * It adds a new question to the list of questions.
     */
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
                nrOfCorrectAnswers: 0,
            },
        ]);
        setOptionCount([...optionCount, 0]);
    };

    /**
     * It removes the question from the array of questions.
     */
    const deleteQuestion = (questionNumber) => {
        setQuestions(questions.filter((v, idx) => idx !== questionNumber));
    };

    /**
     * This function is used to update the question text in the questions array
     */
    const editQuestion = (e, index) => {
        const changeValue = e.target.value;
        const helper = questions.map((values, idx) => {
            if (idx === index) {
                return {
                    ...values,
                    question: changeValue,
                };
            }
            return values;
        });
        setQuestions(helper);
    };

    /**
     * It adds an option to the question at the specified index.
     */
    const addOption = (index) => {
        const addingOption = questions.map((value, idx) => {
            if (idx === index) {
                value.options.push({ answer: '', correct: false });
            }
            return value;
        });

        setQuestions(addingOption);
    };

    /**
     * This function is used to update the answer of a question option
     */
    const editOption = (event, index, optionIndex) => {
        const changedValue = event.target.value;
        const helper = questions.map((value, idx) => {
            if (idx === index) {
                let arr = value.options;
                if (arr[optionIndex].answer === '') {
                    setOptionCount(
                        optionCount.map((op, i) => {
                            // if (op > 0) {
                            //     return op;
                            // }
                            if (i === index && changedValue !== '') {
                                return op + 1;
                            } else if (i === index && changedValue === '') {
                                return op - 1;
                            }
                            return op;
                        })
                    );
                }
                arr[optionIndex] = {
                    ...arr[optionIndex],
                    answer: changedValue,
                };
                return {
                    ...value,
                    options: arr,
                };
            }
            return value;
        });
        setQuestions(helper);
    };

    /**
     * This function deletes an option from a question
     */
    const deleteOption = (questionNumber, optionNumber) => {
        const del = questions.map((value, idx) => {
            if (idx === questionNumber) {
                if (value.options.length > 2) {
                    value.options.splice(optionNumber, 1);
                } else {
                    alert('Each question must has atleast 2 options');
                }
            }
            return value;
        });
        setQuestions(del);
    };

    /**
     * * If the option is correct, then set the correct value to false and decrease the number of
     * correct answers by 1.
     * * If the option is incorrect, then set the correct value to true and increase the number of
     * correct answers by 1
     */
    const addCorrectAnswer = (questionNumber, optionNumber) => {
        const add = questions.map((value, idx) => {
            if (idx === questionNumber) {
                let arr = value.options;
                if (value.options.at(optionNumber).correct) {
                    arr[optionNumber].correct = false;
                    value.nrOfCorrectAnswers = value.nrOfCorrectAnswers - 1;
                } else {
                    arr[optionNumber].correct = true;
                    value.nrOfCorrectAnswers = value.nrOfCorrectAnswers + 1;
                }
                return {
                    ...value,
                    options: arr,
                };
            }
            return value;
        });
        setQuestions(add);
        console.log(questions);
    };

    /**
     * It checks to see if the answer is correct and returns a color based on that.
     */
    const checkToggle = (answer, idx, color) => {
        if (answer) {
            return '#72B841';
        } else {
            return color;
        }
    };

    /**
     * It sends the quiz to the next phase.
     */
    const saveQuiz = () => {
        formik.setFieldValue('quiz.questions', questions);
        setActiveModal('PERCENTAGE_PAGE');
        setShowMessage(false);
        setOptionsPerQuestion(optionCount);
    };

    return (
        <>
            {questions.map((question, index) => (
                <Fragment key={index}>
                    <FormStyled.Fieldset>
                        <FormStyled.Label>
                            QUIZ QUESTION {index + 1}
                        </FormStyled.Label>
                        <FormStyled.Input
                            onChange={(e) => editQuestion(e, index)}
                            type='text'
                            id={`question-${index}`}
                            name='question'
                            placeholder='i.e. What is our token name?'
                            value={question.question}
                            required
                        />
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label>QUIZ OPTIONS</FormStyled.Label>
                        {question.options.map((ele, idx) => (
                            <Styled.AnswerBox>
                                <Styled.IconBox mr='10px'>
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
                                    ml='10px'
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
                                    ml='10px'
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
                                mr='10px'
                                border='#A5A5A5'
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
                            <FormStyled.TextLabel marginLeft='10px'>
                                Delete Question
                            </FormStyled.TextLabel>
                        </FormStyled.DeleteWrapper>
                    )}
                </Fragment>
            ))}
            <Styled.AddQuestionBox>
                <Styled.Circle onClick={AddQuestionHandler}>
                    <IoMdAdd style={{ color: 'white' }} />
                </Styled.Circle>
                Add Another Question
            </Styled.AddQuestionBox>
            <FormStyled.Button onClick={saveQuiz}>
                Finish Quiz
            </FormStyled.Button>
        </>
    );
};

export default CreateQuestion;
