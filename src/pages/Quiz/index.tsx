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
import { useOutletContext } from 'react-router-dom';
import { Gates, useCreateKeyMutation } from '../../graphql';
import { useFormContext } from 'react-hook-form';

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
            options: Record<string, any>[];
            nrOfCorrectAnswers: number;
        }[];
    };
}

/**
 * This function is responsible for creating a quiz.
 */
const CreateQuiz: React.FC = () => {
    const {
        gateData,
        edit,
        setBackButton,
        setCreatedKey
    }: {
        gateData: Gates;
        edit: boolean;
        loading: boolean;
        setBackButton(obj: Record<string, string | number>): void;
        setCreatedKey(any): void;
    } = useOutletContext();

    const { handleSubmit, formState: { errors } } = useFormContext();

    // State
    const [message, setMessage] = useState('Processing your Quiz');
    const [showMessage, setShowMessage] = useState(false);
    const [activeModal, setActiveModal] = useState('HOME');
    const [optionsPerQuestion, setOptionsPerQuestion] = useState([0]);

    const [createKey, { loading }] = useCreateKeyMutation()

    const ActiveModal = () => {
        switch (activeModal) {
            case 'HOME':
                return (
                    <Home
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
                    />
                );
            case 'PERCENTAGE_PAGE':
                return <Percentage loading={loading} />;
            default:
                return (
                    <Home
                        setActiveModal={setActiveModal}
                        setShowMessage={setShowMessage}
                    />
                );
        }
    };

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });
    }, []);

    const onSubmit = async data => {
        await createKey({
            variables: {
                object: {
                    gate_id: gateData.id,
                    information: data.titleDescriptionPair,
                    keys: data.keysRewarded,
                    people_limit: data.peopleLimit || 0,
                    unlimited: data.unlimited,
                    task_type: 'quiz',
                    task: {
                        type: 'quiz',
                        title: data.quiz.title,
                        description: data.quiz.description,
                        questions: data.quiz.questions,
                        passedAt: Math.floor(
                            data.quiz.questions.length *
                            data.quiz.percentage
                        ),
                    }
                }
            }
        })
        setCreatedKey(true);
    } 

    return (
        <FormStyled.FormBox onSubmit={handleSubmit(onSubmit)}>
            <Styled.Container>
                <FormStyled.H1>{edit ? 'Edit Quiz' : 'Add Quiz'}</FormStyled.H1>
                <ActiveModal />
            </Styled.Container>
        </FormStyled.FormBox>
    );
};

export default CreateQuiz;
