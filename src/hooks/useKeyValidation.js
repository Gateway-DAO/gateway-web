/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { useAuth } from '../contexts/UserContext';
import { useVerifyTaskMutation } from '../graphql';
import * as ThemeStyled from '../theme/style';

export const useKeyValidation = (data, gateData) => {
    // State
    const taskInformation = useRef(null);
    const [loading, setLoading] = useState(false);
    const [buttonBehavior, setButtonBehavior] = useState({
        title: 'Finish Task',
        onClick: () => {},
    });

    // Hooks
    const { userInfo } = useAuth();
    const { showModal } = useModal();
    const navigate = useNavigate();

    // Validation mutations
    const [verifyTask, { data: validationData }] = useVerifyTaskMutation();

    useEffect(() => {
        switch (data?.task?.type) {
            case 'meeting_code':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifyTask({
                                variables: {
                                    user_id: userInfo.id,
                                    key_id: data.id,
                                    gate_id: gateData.id,
                                    info: {
                                        meetingCode: taskInformation.current
                                    },
                                },
                            });

                            if (
                                res.data.verifyMeetingCode.__typename !==
                                'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifyMeetingCode
                                                .completed_gate,
                                    },
                                });
                            } else {
                                const Error = () => (
                                    <div>
                                        <ThemeStyled.H2>
                                            An error occurred
                                        </ThemeStyled.H2>
                                        <p>{res.data.verifyMeetingCode.msg}</p>
                                    </div>
                                );
                                showModal(<Error />);
                            }

                            setLoading(false);
                        } catch (err) {
                            setLoading(false);
                            const Error = () => (
                                <div>
                                    <ThemeStyled.H2>
                                        An error occurred
                                    </ThemeStyled.H2>
                                    <p>
                                        {err.msg || 'Please try again later!'}
                                    </p>
                                </div>
                            );
                            showModal(<Error />);
                        }
                    },
                }));
                break;
            case 'contract_interaction':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            console.log(userInfo);
                            const res = await verifyTask({
                                variables: {
                                    user_id: userInfo?.id,
                                    key_id: data?.id,
                                    gate_id: gateData?.id,
                                },
                            });

                            if (
                                res.data.verifyContractInteraction
                                    .verify_key !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifyContractInteraction
                                                .completed_gate,
                                    },
                                });
                            } else {
                                const Error = () => (
                                    <div>
                                        <ThemeStyled.H2>
                                            An error occurred
                                        </ThemeStyled.H2>
                                        <p>
                                            {
                                                res.data
                                                    .verifyContractInteraction
                                                    .msg
                                            }
                                        </p>
                                    </div>
                                );
                                showModal(<Error />);
                            }

                            setLoading(false);
                        } catch (err) {
                            setLoading(false);
                            const Error = () => (
                                <div>
                                    <ThemeStyled.H2>
                                        An error occurred
                                    </ThemeStyled.H2>
                                    <p>
                                        {err.msg || 'Please try again later!'}
                                    </p>
                                </div>
                            );
                            showModal(<Error />);
                        }
                    },
                }));
                break;
            case 'token_hold':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifyTask({
                                variables: {
                                    user_id: userInfo.id,
                                    key_id: data.id,
                                    gate_id: gateData.id,
                                },
                            });

                            if (
                                res.data.verify_key.__typename !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifyHoldAToken
                                                .completed_gate,
                                    },
                                });
                            } else {
                                const Error = () => (
                                    <div>
                                        <ThemeStyled.H2>
                                            An error occurred
                                        </ThemeStyled.H2>
                                        <p>{res.data.verifyHoldAToken.msg}</p>
                                    </div>
                                );
                                showModal(<Error />);
                            }

                            setLoading(false);
                        } catch (err) {
                            setLoading(false);
                            const Error = () => (
                                <div>
                                    <ThemeStyled.H2>
                                        An error occurred
                                    </ThemeStyled.H2>
                                    <p>
                                        {err.msg || 'Please try again later!'}
                                    </p>
                                </div>
                            );
                            showModal(<Error />);
                        }
                    },
                }));
                break;
            case 'quiz':
                setButtonBehavior({
                    title: 'Start Quiz',
                    onClick: () =>
                        navigate(`quiz/${data.id}`, {
                            state: {
                                gateData: gateData,
                                ...data,
                            },
                        }),
                });
                break;
            case 'self_verify':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifyTask({
                                variables: {
                                    user_id: userInfo.id,
                                    key_id: data.id,
                                    gate_id: gateData.id,
                                },
                            });

                            if (
                                res.data.verify_key.__typename !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verify_key
                                                .completed_gate,
                                    },
                                });
                            } else {
                                const Error = () => (
                                    <div>
                                        <ThemeStyled.H2>
                                            An error occurred
                                        </ThemeStyled.H2>
                                        <p>{res.data.verify_key.msg}</p>
                                    </div>
                                );
                                showModal(<Error />);
                            }

                            setLoading(false);
                        } catch (err) {
                            setLoading(false);
                            const Error = () => (
                                <div>
                                    <ThemeStyled.H2>
                                        An error occurred
                                    </ThemeStyled.H2>
                                    <p>
                                        {err.msg || 'Please try again later!'}
                                    </p>
                                </div>
                            );
                            showModal(<Error />);
                        }
                    },
                }));
                break;
            case 'snapshot':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifyTask({
                                variables: {
                                    user_id: userInfo.id,
                                    key_id: data.id,
                                    gate_id: gateData.id,
                                },
                            });

                            if (
                                res.data.verify_key.__typename !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifySnapshot
                                                .completed_gate,
                                    },
                                });
                            } else {
                                const Error = () => (
                                    <div>
                                        <ThemeStyled.H2>
                                            An error occurred
                                        </ThemeStyled.H2>
                                        <p>{res.data.verifySnapshot.msg}</p>
                                    </div>
                                );
                                showModal(<Error />);
                            }

                            setLoading(false);
                        } catch (err) {
                            setLoading(false);
                            const Error = () => (
                                <div>
                                    <ThemeStyled.H2>
                                        An error occurred
                                    </ThemeStyled.H2>
                                    <p>
                                        {err.msg || 'Please try again later!'}
                                    </p>
                                </div>
                            );
                            showModal(<Error />);
                        }
                    },
                }));
                break;
            default:
                setButtonBehavior((prev) => ({ ...prev }));
        }
    }, [data?.task?.type, userInfo?.id]);

    return useMemo(
        () => ({
            taskInformation: taskInformation.current,
            setInfo: (value) => (taskInformation.current = value),
            buttonBehavior,
            loading,
        }),
        [taskInformation, buttonBehavior, loading]
    );
};

export default useKeyValidation;
