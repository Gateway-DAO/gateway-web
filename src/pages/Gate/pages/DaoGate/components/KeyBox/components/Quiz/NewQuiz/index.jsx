// Components
import BackButton from '../../../../../../../../../components/BackButton';
import QuestionAndAnswer from './QuestionAndAnswer';
import { ActionButton } from './QuestionAndAnswer/style';
import Loader from '../../../../../../../../../components/Loader';

// Styling
import * as Styled from './style';
import * as ThemeStyled from '../../../../../../../../../theme/style';

// Hooks
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../../../../../../../contexts/UserContext';
import { useModal } from '../../../../../../../../../contexts/ModalContext';
import { useNavigate } from 'react-router-dom';
import { useVerifyTaskMutation } from '../../../../../../../../../graphql';
import { FormStyled } from '../../../../../../../../../components/Form';

const Quiz = (props) => {
    // State
    const [answers, setAnswers] = useState([]);
    const [questionIdx, setQuestionIdx] = useState(0);
    const [loading, setLoading] = useState(false);
    const [clickAble, setClickAble] = useState(false);

    // Hooks
    const [verifyQuiz] = useVerifyTaskMutation();
    const { state } = useLocation();
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    const { showModal } = useModal();

    /**
     * It creates a button that can be used to navigate between questions.
     * @returns A button with the text "Next" or "Finish"
     */
    const DynamicButton = (props) => {
        const onNext = (e) => {
            setQuestionIdx((idx) => idx + 1);
        };

        const onFinish = async (e) => {
            try {
                console.log(answers);
                setLoading(true);

                const res = await verifyQuiz({
                    variables: {
                        user_id: userInfo.id,
                        key_id: state.id,
                        info: {
                            questions: answers
                        },
                    },
                });

                navigate(`/gate/${state.gateData.id}/key-completed`, {
                    state: {
                        key: state,
                        gate: state.gateData,
                        keysDone: state.gateData.keysDone + state.keys,
                        completedGate: res.data.verify_key.completed_gate,
                    },
                });

                setLoading(false);
            } catch (err) {
                setLoading(false);
                const Error = () => (
                    <div>
                        <ThemeStyled.H2>An error occurred</ThemeStyled.H2>
                        <p>{err.message || 'Please try again later!'}</p>
                    </div>
                );
                showModal(<Error />);
                console.log(err);
            }
        };

        if (props.type.toLowerCase() === 'next') {
            return (
                <FormStyled.Button
                    onClick={clickAble ? onNext : null}
                    active={props.active}
                    clickable={clickAble}
                >
                    Next
                </FormStyled.Button>
            );
        } else if (props.type.toLowerCase() === 'finish') {
            return (
                <FormStyled.Button
                    onClick={clickAble ? onFinish : null}
                    active={props.active}
                    clickable={clickAble}
                >
                    {loading && <Loader color='white' />}
                    Finish
                </FormStyled.Button>
            );
        }
    };

    return (
        <Styled.Container>
            <BackButton>Go back</BackButton>
            <Styled.Box>
                <Styled.DaosContainer>
                    <Styled.ImageConstainer src={state.gateData.dao.logo_url} />
                    <Styled.DaoTextBox>
                        {state.gateData.dao.name}
                    </Styled.DaoTextBox>
                </Styled.DaosContainer>
                <Styled.HeadingContainer>
                    {state.task.title}
                </Styled.HeadingContainer>
                <QuestionAndAnswer
                    question={state.task.questions[questionIdx]}
                    questionIdx={questionIdx}
                    totalQuestions={state.task.questions.length}
                    setAnswer={(answer) =>
                        setAnswers((prev) => [
                            ...prev.filter(
                                (obj) => obj.questionIdx !== answer.questionIdx
                            ),
                            answer,
                        ])
                    }
                    setClickAble={setClickAble}
                />
                <DynamicButton
                    type={
                        questionIdx === state.task.questions.length - 1
                            ? 'finish'
                            : 'next'
                    }
                />
            </Styled.Box>
        </Styled.Container>
    );
};

export default Quiz;
