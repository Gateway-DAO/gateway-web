import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    useVerifyMeetingCode,
    useVerifyContractInteraction,
    useVerifyHoldAToken,
    useVerifySelfVerify,
    useVerifySnapshot,
} from '../api/database/useVerifyKeys'
import { useAuth } from '../contexts/UserContext'

export const useKeyValidation = (data, gateData) => {
    // State
    const taskInformation = useRef(null)
    const [buttonBehavior, setButtonBehavior] = useState({
        title: 'Finish Task',
        onClick: () => {},
    })

    // Hooks
    const { userInfo } = useAuth()
    const navigate = useNavigate()

    // Validation mutations
    const { verifyMeetingCode } = useVerifyMeetingCode()
    const { verifyContractInteraction } = useVerifyContractInteraction()
    const { verifyHoldAToken } = useVerifyHoldAToken()
    const { verifySelfVerify } = useVerifySelfVerify()
    const { verifySnapshot } = useVerifySnapshot()

    useEffect(() => {
        switch (data.task.type) {
            case 'MEETING_CODE':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            const res = await verifyMeetingCode({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                    meetingCode: taskInformation.current,
                                },
                            })

                            if (res.data.__typename !== 'Error') {
                                navigate('/key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                    },
                                })
                            }
                        } catch (err) {
                            alert('An error occurred')
                            console.log(err)
                        }
                    },
                }))
                break
            case 'CONTRACT_INTERACTION':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            const res = await verifyContractInteraction({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                },
                            })

                            if (res.data.__typename !== 'Error') {
                                navigate('/key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                    },
                                })
                            }
                        } catch (err) {
                            alert('An error occurred')
                            console.log(err)
                        }
                    },
                }))
                break
            case 'TOKEN_HOLD':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            const res = await verifyHoldAToken({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                },
                            })

                            if (res.data.__typename !== 'Error') {
                                navigate('/key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                    },
                                })
                            }
                        } catch (err) {
                            alert('An error occurred')
                            console.log(err)
                        }
                    },
                }))
                break
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
                })
                break
            case 'SELF_VERIFY':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            const res = await verifySelfVerify({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                },
                            })

                            if (res.data.__typename !== 'Error') {
                                navigate('/key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                    },
                                })
                            }
                        } catch (err) {
                            alert('An error occurred')
                            console.log(err)
                        }
                    },
                }))
                break
            case 'SNAPSHOT_GOVERNANCE':
                setButtonBehavior((prev) => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            const res = await verifySnapshot({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id,
                                },
                            })

                            if (res.data.__typename !== 'Error') {
                                navigate('/key-completed', {
                                    state: {
                                        key: data,
                                        gate: gateData,
                                    },
                                })
                            }
                        } catch (err) {
                            alert('An error occurred')
                            console.log(err)
                        }
                    },
                }))
                break
            default:
                setButtonBehavior((prev) => ({ ...prev }))
        }
    }, [data.task.type])

    return useMemo(
        () => ({
            taskInformation: taskInformation.current,
            setInfo: (value) => (taskInformation.current = value),
            buttonBehavior,
        }),
        [taskInformation, buttonBehavior]
    )
}

export default useKeyValidation
