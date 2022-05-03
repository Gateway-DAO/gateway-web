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
import { useVerifyQuiz } from '../../../../../../../../../api/database/useVerifyKeys';
import { useAuth } from '../../../../../../../../../contexts/UserContext';
import { useModal } from '../../../../../../../../../contexts/ModalContext';
import { useNavigate } from 'react-router-dom';

const Quiz = (props) => {
    // State
    const [answers, setAnswers] = useState([]);
    const [questionIdx, setQuestionIdx] = useState(0);
    const [loading, setLoading] = useState(false);
    const [clickAble, setClickAble] = useState(false);

    // Hooks
    const { verifyQuiz } = useVerifyQuiz();
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
                        userID: userInfo.id,
                        keyID: state.id,
                        questions: answers,
                    },
                });
                console.log('res', res);
                if (res.data.verifyQuiz.__typename !== 'Error') {
                    navigate(`/gate/${state.gateData.id}/key-completed`, {
                        state: {
                            key: state,
                            gate: state.gateData,
                            keysDone: state.gateData.keysDone + state.keys,
                        },
                    });
                } else {
                    const Error = () => (
                        <div>
                            <ThemeStyled.H2>An error occurred</ThemeStyled.H2>
                            <p>{res.data.verifyQuiz.msg}</p>
                        </div>
                    );
                    setTimeout(() => {
                        navigate(`/gate/${state.gateData.id}`);
                    }, 5000);
                    showModal(<Error />);
                }

                setLoading(false);
            } catch (err) {
                setLoading(false);
                const Error = () => (
                    <div>
                        <ThemeStyled.H2>An error occurred</ThemeStyled.H2>
                        <p>{err.msg || 'Please try again later!'}</p>
                    </div>
                );
                showModal(<Error />);
                console.log(err);
            }
        };

        if (props.type.toLowerCase() === 'next') {
            return (
                <ActionButton
                    onClick={clickAble ? onNext : null}
                    active={props.active}
                    clickable={clickAble}
                >
                    Next
                </ActionButton>
            );
        } else if (props.type.toLowerCase() === 'finish') {
            return (
                <ActionButton
                    onClick={clickAble ? onFinish : null}
                    active={props.active}
                    clickable={clickAble}
                >
                    {loading && <Loader color='white' />}
                    Finish
                </ActionButton>
            );
        }
    };

    return (
        <Styled.Container>
            <BackButton>Go back</BackButton>
            <Styled.Box>
                <Styled.DaosContainer>
                    <Styled.ImageConstainer src={state.gateData.dao.logoURL} />
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
