import React, { useState, useEffect } from 'react';

// Styling
import * as Styled from './style';
import * as ThemeStyled from '../../theme/style';
import { FormStyled } from '../../components/Form';

// Components
import space from '../../utils/canvas';
import CreateQuestion from './Component/CreateQuestion';
import Home from './Component/Home';
import Percentage from './Component/Persentage';

// Hooks
import { useLocation, useOutletContext } from 'react-router-dom';
import { FormikContextType } from 'formik';
import { QuizOptionInput } from '../../graphql/API';

interface Key {
    taskLink: string;
    titleDescriptionPair: { title: string; description: string }[];
    keysRewarded: number;
    peopleLimit: number;
    unlimited: boolean;

    // Contract Interaction
    quiz: {
        title: string;
        description: string;
        passedAt: number;
        questions: {
            question: string;
            options: QuizOptionInput[];
            nrOfCorrectAnswers: number;
        }[];
    };
}

/**
 * This function is responsible for creating a quiz.
 */
const CreateQuiz = () => {
    const {
        formik,
        edit,
        loading,
        setBackButton,
        setValidator,
    }: {
        formik: FormikContextType<Key>;
        edit: boolean;
        loading: boolean;
        setBackButton(obj: Record<string, string | number>): void;
        setValidator(func: () => void): void;
    } = useOutletContext();

    // State
    const { state }: { state: Record<string, any> } = useLocation();
    const [title, setTitle] = useState(edit ? formik.values.quiz.title : '');
    const [description, setDescription] = useState(
        edit ? formik.values.quiz.description : ''
    );
    const [message, setMessage] = useState('Processing your Quiz');
    const [showMessage, setShowMessage] = useState(false);
    const [activeModal, setActiveModal] = useState('HOME');
    const [optionsPerQuestion, setOptionsPerQuestion] = useState([0]);

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
                        setShowMessage={setShowMessage}
                    />
                );
            case 'CREATE_QUIZ':
                return (
                    <CreateQuestion
                        setActiveModal={setActiveModal}
                        setShowMessage={setShowMessage}
                        setOptionsPerQuestion={setOptionsPerQuestion}
                        initialClont={optionsPerQuestion}
                        formik={formik}
                    />
                );
            case 'PERCENTAGE_PAGE':
                return <Percentage formik={formik} />;
            default:
                return <Home />;
        }
    };
    /**
     * This function is used to create a quiz.
     * @param e - event
     * @returns The mutation is returning the data of the quiz.
     */
    const validate = async (values) => {
        // eslint-disable-next-line prefer-const
        let errors = {};

        if (title.length === 0 || description.length === 0) {
            setMessage('Please enter title and description');
        }

        if (values.quiz.questions.length === 0) {
            setMessage('Please enter at least one question');
        }

        values.quiz.questions.forEach((value, idx) => {
            if (value.question.length === 0) {
                setMessage(
                    `In question ${idx + 1} please enter question title`
                );
                return false;
            }
            if (value.options.length === 0) {
                setMessage(
                    `In question ${idx + 1} please enter atleast one option`
                );
                return false;
            }
            if (
                value.nrOfCorrectAnswers === 0 ||
                value.nrOfCorrectAnswers > value.options.length
            ) {
                setMessage(`In question ${idx + 1} no correct answer is there`);
            }
            if (optionsPerQuestion[idx] !== value.options.length) {
                setMessage(`In question ${idx + 1} there is a empty option`);
            }
        });

        return errors;
    };

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });

        setValidator(() => validate);
    }, []);

    return (
        <FormStyled.FormBox onSubmit={formik.handleSubmit}>
            <Styled.Container>
                {showMessage && (
                    <Styled.ErrorMessage>{message}</Styled.ErrorMessage>
                )}
                <ThemeStyled.SpaceBox id='space-canvas' />
                <FormStyled.H1>{edit ? 'Edit Quiz' : 'Add Quiz'}</FormStyled.H1>
                <ActiveModal />
            </Styled.Container>
        </FormStyled.FormBox>
    );
};

export default CreateQuiz;
