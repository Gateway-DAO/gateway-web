import React, { useState } from 'react';

// Styling
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';

// Components
import { Navigate } from 'react-router-dom';
import Modal from '../index';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

// API
import { useMutation, gql } from '@apollo/client';
import { updateDao } from '../../../graphql/mutations';
import Loader from '../../Loader';

const FAQModal = (props) => {
    const [FAQ, setFAQ] = useState(
        props.data.map((obj) => ({
            question: obj.question,
            answer: obj.answer,
        }))
    );
    const [updateDAO, { loading, error }] = useMutation(gql(updateDao));

    const submitToDB = async () => {
        await updateDAO({
            variables: {
                input: {
                    id: props.id,
                    faq: FAQ,
                },
            },
        });

        props.set(FAQ);
        props.toggle();
    };

    const deletePair = (idx) => {
        setFAQ(FAQ.filter((i, index) => index !== idx));
    };

    const changeQuestion = (idx, e) => {
        setFAQ(
            FAQ.map((i, index) => {
                if (index === idx) {
                    return { ...i, question: e.target.value };
                }

                return i;
            })
        );
    };

    const changeAnswer = (idx, e) => {
        setFAQ(
            FAQ.map((i, index) => {
                if (index === idx) {
                    return { ...i, answer: e.target.value };
                }

                return i;
            })
        );
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>FAQ</ModalStyled.Header>

                {FAQ.map((pair, idx) => (
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor={`description-${idx}`}>
                            Question {idx + 1}
                        </FormStyled.Label>
                        <FormStyled.InputWrapper>
                            <div style={{ flex: 1 }}>
                                <FormStyled.Input
                                    id={`question-${idx}`}
                                    key={`q-input-${idx}`}
                                    placeholder='Question'
                                    onChange={(e) => changeQuestion(idx, e)}
                                    value={pair.question}
                                    type='text'
                                />
                                <FormStyled.Input
                                    id={`answer-${idx}`}
                                    key={`a-input-${idx}`}
                                    placeholder='Answer'
                                    onChange={(e) => changeAnswer(idx, e)}
                                    value={pair.answer}
                                    type='text'
                                />
                            </div>
                            <FormStyled.IconButton
                                onClick={() => deletePair(idx)}
                                style={{
                                    marginLeft: '10px',
                                    alignSelf: 'center',
                                }}
                            >
                                <FaTrashAlt />
                            </FormStyled.IconButton>
                        </FormStyled.InputWrapper>
                    </FormStyled.Fieldset>
                ))}

                <FormStyled.InputWrapper>
                    <FormStyled.IconButton
                        style={{ marginRight: '10px' }}
                        onClick={(e) =>
                            setFAQ([...FAQ, { question: '', answer: '' }])
                        }
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                    <FormStyled.Button
                        id='submit_msg'
                        type='button'
                        onClick={submitToDB}
                    >
                        {loading && <Loader color='white' />}
                        Submit
                    </FormStyled.Button>
                </FormStyled.InputWrapper>
            </Styled.Container>
        </Modal>
    );
};

export default FAQModal;
