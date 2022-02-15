import { useMemo } from 'react';
import { useMutation, gql } from '@apollo/client';
import {
    createKey as KEY_CREATE,
    createSelfVerify as KEY_SELF_VERIFY,
    createMeetingCode as KEY_MEETING_CODE,
    createTokenHold as KEY_TOKEN_HOLD,
    createQuiz as KEY_QUIZ,
    createSnapshotGovernance as KEY_SNAPSHOT,
    createContractInteraction as KEY_CONTRACT,
} from '../../graphql/mutations';

export const useCreateKey = () => {
    const [createKey, { loading, called, data, error }] = useMutation(
        gql(KEY_CREATE)
    );

    return useMemo(
        () => ({
            createKey,
            data,
            error,
            loading,
        }),
        [called, createKey, loading, KEY_CREATE, error]
    );
};

export const useCreateSelfVerify = () => {
    const [createSelfVerify, { loading, called, data, error }] = useMutation(
        gql(KEY_SELF_VERIFY)
    );

    return useMemo(
        () => ({
            createSelfVerify,
            data,
            error,
            loading,
        }),
        [called, createSelfVerify, loading, KEY_SELF_VERIFY, error]
    );
};

export const useCreateMeetingCode = () => {
    const [createMeetingCode, { loading, called, data, error }] = useMutation(
        gql(KEY_MEETING_CODE)
    );

    return useMemo(
        () => ({
            createMeetingCode,
            data,
            error,
            loading,
        }),
        [called, createMeetingCode, loading, KEY_MEETING_CODE, error]
    );
};

export const useCreateTokenHold = () => {
    const [createTokenHold, { loading, called, data, error }] = useMutation(
        gql(KEY_TOKEN_HOLD)
    );

    return useMemo(
        () => ({
            createTokenHold,
            data,
            error,
            loading,
        }),
        [called, createTokenHold, loading, KEY_TOKEN_HOLD, error]
    );
};

export const useCreateQuiz = () => {
    const [createQuiz, { loading, called, data, error }] = useMutation(
        gql(KEY_QUIZ)
    );

    return useMemo(
        () => ({
            createQuiz,
            data,
            error,
            loading,
        }),
        [called, createQuiz, loading, KEY_QUIZ, error]
    );
};

export const useCreateSnapshot = () => {
    const [createSnapshot, { loading, called, data, error }] = useMutation(
        gql(KEY_SNAPSHOT)
    );

    return useMemo(
        () => ({
            createSnapshot,
            data,
            error,
            loading,
        }),
        [called, createSnapshot, loading, KEY_SNAPSHOT, error]
    );
};

export const useCreateContractInteraction = () => {
    const [createContractInteraction, { loading, called, data, error }] =
        useMutation(gql(KEY_CONTRACT));

    return useMemo(
        () => ({
            createContractInteraction,
            data,
            error,
            loading,
        }),
        [called, createContractInteraction, loading, KEY_CONTRACT, error]
    );
};

export default useCreateKey;
