import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Styling
import * as Styled from './style';
import * as ThemeStyled from '../../theme/style';
import { FormStyled } from '../../components/Form';

// Components
import space from '../../utils/canvas';
import CreateQuestion from './Component/CreateQuestion';
import Home from './Component/Home';
import AddKeySuccess from '../Gate/pages/AddNewKey/pages/AddKeySuccess';
import Percentage from './Component/Persentage';

// Hooks
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateQuiz } from '../../api/database/useCreateKey';

/**
 * This function is responsible for creating a quiz.
 */
const CreateQuiz = () => {
    // State

    const { state } = useLocation();
    const edit = state.taskInfo;
    // console.log(edit.passedAt)
    // console.log(edit.questions)
    const [title, setTitle] = useState(edit ? edit.title : '');
    const [description, setDescription] = useState(
        edit ? edit.description : ''
    );
    const [message, setMessage] = useState('Processing your Quiz');
    const [activeModal, setActiveModal] = useState('HOME');
    const [percentage, setPercentage] = useState(edit ? edit?.passedAt : 100);
    const [data, setData] = useState(
        edit
            ? edit.questions
            : [
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
    const [createdKey, setCreatedKey] = useState(false);

    const [loading, setLoading] = useState(false);

    // Hooks
    const navigate = useNavigate();
    const { createQuiz } = useCreateQuiz();
    // const { state } = useLocation()

    const ActiveModal = () => {
        switch (activeModal) {
            case 'HOME':
                return (
                    <Home
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        setActiveModal={setActiveModal}
                    />
                );
            case 'CREATE_QUIZ':
                return (
                    <CreateQuestion
                        data={data}
                        setData={setData}
                        setActiveModal={setActiveModal}
                    />
                );
            case 'PERCENTAGE_PAGE':
                return (
                    <Percentage
                        percentage={percentage}
                        setPercentage={setPercentage}
                        loading={loading}
                    />
                );
            default:
                return <Home />;
        }
    };
    /**
     * This function is used to create a quiz.
     * @param e - event
     * @returns The mutation is returning the data of the quiz.
     */
    const onSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (title.length === 0 || description.length === 0) {
                setMessage('Please enter title and description');
                setTimeout(() => {
                    setLoading(false);
                    setMessage('Processing your Quiz');
                    setActiveModal('HOME');
                }, 5000);

                return false;
            }
            if (data.length === 0) {
                setMessage('Please enter at least one question');
                setTimeout(() => {
                    setLoading(false);
                    setMessage('Processing your Quiz');
                    setActiveModal('CREATE_QUIZ');
                }, 5000);
                return false;
            }

            let validData = true;

            data.forEach((value, idx) => {
                if (value.question.length === 0) {
                    setMessage(
                        `In question ${idx + 1} please enter question title`
                    );
                    // setLoading(false)
                    validData = false;
                    return false;
                }
                if (value.options.length === 0) {
                    setMessage(
                        `In question ${idx + 1} please enter atleast one option`
                    );
                    // setLoading(false)
                    validData = false;
                    return false;
                }
                if (
                    value.nrOfCorrectAnswers === 0 ||
                    value.nrOfCorrectAnswers > value.options.length
                ) {
                    setMessage(
                        `In question ${idx + 1} no correct answer is there`
                    );
                    validData = false;
                    return false;
                }
            });

            if (!validData) {
                setTimeout(() => {
                    setLoading(false);
                    setMessage('Processing your Quiz');
                    setActiveModal('CREATE_QUIZ');
                }, 5000);
                return false;
            }

            await createQuiz({
                variables: {
                    input: {
                        id: uuidv4(),
                        gateID: state.gateData.id,
                        information: state.titleDescriptionPair,
                        token: state.token,
                        tokenAmount: state.amount,
                        keys: state.keysRewarded,
                        peopleLimit: state.peopleLimit,
                        unlimited: state.unlimited,
                        task: {
                            type: 'QUIZ',
                            title,
                            description,
                            questions: data,
                            passedAt: Math.floor(data.length * percentage),
                        },
                    },
                },
            });

            setCreatedKey(true);
        } catch (err) {
            setMessage('We are facing error in saving. Please try again');
            // alert(err)
            console.log(err);
        }

        setTimeout(() => {
            setLoading(false);
            setMessage('Processing your Quiz');
        }, 5000);
    };

    const onEditSave = async (e) => {
        e.preventDefault();
    };

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    return createdKey ? (
        <AddKeySuccess gate={state.gateData.id} />
    ) : (
        <FormStyled.FormBox onSubmit={edit ? onEditSave : onSave}>
            <Styled.Container>
                <ThemeStyled.SpaceBox id='space-canvas' />
                <FormStyled.H1>{edit ? 'Edit Quiz' : 'Add Quiz'}</FormStyled.H1>
                <ActiveModal />
            </Styled.Container>
        </FormStyled.FormBox>
    );
};

export default CreateQuiz;
