import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import {
    verifySnapshot as VERIFY_SNAPSHOT,
    verifyMeetingCode as VERIFY_MEETING_CODE,
    verifyHoldAToken as VERIFY_HOLD_A_TOKEN,
    verifyContractInteraction as VERIFY_CONTRACT_INTERACTION,
    verifySelfVerify as VERIFY_SELF_VERIFY,
    verifyQuiz as VERIFY_QUIZ,
} from '../../graphql/mutations';

export const useVerifySnapshot = () => {
    const [verifySnapshot, { loading, called, data, error }] = useMutation(
        gql(VERIFY_SNAPSHOT)
    );

    return useMemo(
        () => ({
            verifySnapshot,
            data,
            error,
            loading,
        }),
        [called, verifySnapshot, loading, VERIFY_SNAPSHOT, error]
    );
};

export const useVerifyMeetingCode = () => {
    const [verifyMeetingCode, { loading, called, data, error }] = useMutation(
        gql(VERIFY_MEETING_CODE)
    );

    return useMemo(
        () => ({
            verifyMeetingCode,
            data,
            error,
            loading,
        }),
        [called, verifyMeetingCode, loading, VERIFY_MEETING_CODE, error]
    );
};

export const useVerifyHoldAToken = () => {
    const [verifyHoldAToken, { loading, called, data, error }] = useMutation(
        gql(VERIFY_HOLD_A_TOKEN)
    );

    return useMemo(
        () => ({
            verifyHoldAToken,
            data,
            error,
            loading,
        }),
        [called, verifyHoldAToken, loading, VERIFY_HOLD_A_TOKEN, error]
    );
};

export const useVerifyContractInteraction = () => {
    const [verifyContractInteraction, { loading, called, data, error }] =
        useMutation(gql(VERIFY_CONTRACT_INTERACTION));

    return useMemo(
        () => ({
            verifyContractInteraction,
            data,
            error,
            loading,
        }),
        [
            called,
            verifyContractInteraction,
            loading,
            VERIFY_CONTRACT_INTERACTION,
            error,
        ]
    );
};

export const useVerifySelfVerify = () => {
    const [verifySelfVerify, { loading, called, data, error }] = useMutation(
        gql(VERIFY_SELF_VERIFY)
    );

    return useMemo(
        () => ({
            verifySelfVerify,
            data,
            error,
            loading,
        }),
        [called, verifySelfVerify, loading, VERIFY_SELF_VERIFY, error]
    );
};

export const useVerifyQuiz = () => {
    const [verifyQuiz, { loading, called, data, error }] = useMutation(
        gql(VERIFY_QUIZ)
    );

    return useMemo(
        () => ({
            verifyQuiz,
            data,
            error,
            loading,
        }),
        [called, verifyQuiz, loading, VERIFY_QUIZ, error]
    );
};
