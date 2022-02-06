import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useVerifyMeetingCode from '../api/database/keys/useVerifyMeetingCode'
import useVerifyContractInteraction from '../api/database/keys/useVerifyContractInteraction'
import useVerifyHoldAToken from '../api/database/keys/useVerifyHoldAToken'
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

                            return res
                        } catch (err) {
                            alert('An error occurred')
                            console.log(err)
                        }
                    },
                }))
                break
            case 'CONTRACT_INTERACTION':
                setButtonBehavior(prev => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            const res = await verifyContractInteraction({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id
                                },
                            })

                            return res
                        } catch (err) {
                            alert('An error occurred')
                            console.log(err)
                        }
                    },
                }))
                break
            case 'TOKEN_HOLD':
                setButtonBehavior(prev => ({
                    ...prev,
                    onClick: async () => {
                        try {
                            const res = await verifyHoldAToken({
                                variables: {
                                    userID: userInfo.id,
                                    keyID: data.id,
                                    gateID: gateData.id
                                },
                            })

                            return res
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
            case 'SNAPSHOT':
            default:
                setButtonBehavior(prev => ({ ...prev }))
        }
    }, [data.task.type])

    return useMemo(
        () => ({
            taskInformation: taskInformation.current,
            setInfo: (value) => taskInformation.current = value,
            buttonBehavior,
        }),
        [taskInformation, buttonBehavior]
    )
}

export default useKeyValidation
