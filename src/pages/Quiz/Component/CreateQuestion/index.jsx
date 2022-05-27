import { Fragment, useEffect, useState } from 'react';

// Styling
import * as Styled from './style';
import { FormStyled } from '../../../../components/Form';

// Icons
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

import { useFieldArray, useFormContext } from 'react-hook-form';

/* A functional component that is used to create a question and its options. */
const Question = ({ question, idx }) => {
    const {
        register,
        setValue,
        resetField,
        watch,
        formState: { errors },
        control,
    } = useFormContext();

    const { fields, append, prepend, remove, swap, move, insert, update } =
        useFieldArray({
            control,
            name: `quiz.questions.${idx}.options`,
        });

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

    return (
        <Fragment key={question.id}>
            <FormStyled.Fieldset>
                <FormStyled.Label>QUIZ QUESTION {idx + 1}</FormStyled.Label>
                <FormStyled.Input
                    placeholder='i.e. What is our token name?'
                    {...register(`quiz.questions.${idx}.question`)}
                />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>QUIZ OPTIONS</FormStyled.Label>
                {fields.map((ele, optionIdx) => (
                    <Styled.AnswerBox key={ele.id}>
                        <Styled.IconBox mr='10px'>
                            <BsThreeDotsVertical />
                        </Styled.IconBox>
                        <Styled.AnswerInput
                            {...register(
                                `quiz.questions.${idx}.options.${optionIdx}.answer`
                            )}
                            required
                        />
                        <Styled.IconBox
                            ml='10px'
                            id={`iconBox-${optionIdx}`}
                            color={() => checkToggle(ele.correct, optionIdx, 'white')}
                            border={() =>
                                checkToggle(
                                    ele.correct,
                                    optionIdx,
                                    'rgba(255, 255, 255, 0.2)'
                                )
                            }
                            onClick={() =>
                                setValue(
                                    `quiz.questions.${idx}.options.${optionIdx}.correct`,
                                    !watch(
                                        `quiz.questions.${idx}.options.${optionIdx}.correct`
                                    )
                                )
                            }
                        >
                            <AiOutlineCheck />
                        </Styled.IconBox>
                        <Styled.IconBox
                            ml='10px'
                            onClick={
                                question.options.length > 2
                                    ? () =>
                                          resetField(
                                              `quiz.questions.${idx}.options.${optionIdx}`
                                          )
                                    : undefined
                            }
                        >
                            {question.options.length > 2 ? (
                                <FaTrashAlt style={{ color: 'white' }} />
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
                            append({
                                answer: '',
                                correct: false,
                            })
                        }
                    >
                        <IoMdAdd />
                    </Styled.IconBox>
                    <Styled.AddOptionText
                        onClick={() =>
                            append({
                                answer: '',
                                correct: false,
                            })
                        }
                    >
                        Add Answer
                    </Styled.AddOptionText>
                </Styled.AnswerBox>
            </FormStyled.Fieldset>
        </Fragment>
    );
};

/* A functional component that is used to create a question and its options. */
const CreateQuestion = ({
    setActiveModal,
    setShowMessage,
    setOptionsPerQuestion,
    initialClont,
}) => {
    const {
        register,
        setValue,
        resetField,
        watch,
        formState: { errors },
        control,
    } = useFormContext();

    const { fields, append, prepend, remove, swap, move, insert, update } =
        useFieldArray({
            control,
            name: 'quiz.questions',
        });

    /**
     * It sends the quiz to the next phase.
     */
    const saveQuiz = () => {
        setActiveModal('PERCENTAGE_PAGE');
        setShowMessage(false);
    };

    return (
        <>
            {fields.map((question, index) => (
                <>
                    <Question question={question} idx={index} />
                    {fields.length > 1 && (
                        <FormStyled.DeleteWrapper
                            onClick={(e) => remove(index)}
                        >
                            <FormStyled.IconButton>
                                <FaTrashAlt />
                            </FormStyled.IconButton>
                            <FormStyled.TextLabel marginLeft='10px'>
                                Delete Question
                            </FormStyled.TextLabel>
                        </FormStyled.DeleteWrapper>
                    )}
                </>
            ))}
            <Styled.AddQuestionBox>
                <Styled.Circle
                    onClick={() =>
                        append({
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
                        })
                    }
                >
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
