/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    useVerifyMeetingCode,
    useVerifyContractInteraction,
    useVerifyHoldAToken,
    useVerifySelfVerify,
    useVerifySnapshot,
} from '../api/database/useVerifyKeys';
import { useModal } from '../contexts/ModalContext';
import { useAuth } from '../contexts/UserContext';
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
    const { verifyMeetingCode } = useVerifyMeetingCode();
    const { verifyContractInteraction } = useVerifyContractInteraction();
    const { verifyHoldAToken } = useVerifyHoldAToken();
    const { verifySelfVerify } = useVerifySelfVerify();
    const { verifySnapshot } = useVerifySnapshot();

    useEffect(() => {
        switch (data?.task?.type) {
            case 'MEETING_CODE':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifyMeetingCode({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                    meetingCode: taskInformation.current,
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
                                                .completedGate,
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
            case 'CONTRACT_INTERACTION':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            console.log(userInfo);
                            const res = await verifyContractInteraction({
                                variables: {
                                    userID: userInfo?.id,
                                    keyID: data?.id,
                                    gateID: gateData?.id,
                                },
                            });

                            if (
                                res.data.verifyContractInteraction
                                    .__typename !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifyContractInteraction
                                                .completedGate,
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
            case 'TOKEN_HOLD':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifyHoldAToken({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                },
                            });

                            if (
                                res.data.verifyHoldAToken.__typename !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifyHoldAToken
                                                .completedGate,
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
            case 'QUIZ':
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
            case 'SELF_VERIFY':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifySelfVerify({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                },
                            });

                            if (
                                res.data.verifySelfVerify.__typename !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifySelfVerify
                                                .completedGate,
                                    },
                                });
                            } else {
                                const Error = () => (
                                    <div>
                                        <ThemeStyled.H2>
                                            An error occurred
                                        </ThemeStyled.H2>
                                        <p>{res.data.verifySelfVerify.msg}</p>
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
            case 'SNAPSHOT_GOVERNANCE':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            setLoading(true);
                            const res = await verifySnapshot({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                },
                            });

                            if (
                                res.data.verifySnapshot.__typename !== 'Error'
                            ) {
                                navigate('key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                        keysDone: gateData.keysDone + data.keys,
                                        completedGate:
                                            res.data.verifySnapshot
                                                .completedGate,
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
