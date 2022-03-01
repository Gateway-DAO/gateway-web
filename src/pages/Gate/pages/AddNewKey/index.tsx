import React, { useEffect, useState } from 'react';
import BackButton from '../../../../components/BackButton';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import * as Styled from './style';
import { useFormik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { Gate } from '../../../../graphql/API';
import {
    createContractInteraction,
    createManualTask,
    createMeetingCode,
    createQuiz,
    createSelfVerify,
    createSnapshotGovernance,
    createTokenHold,
    updateKey,
} from '../../../../graphql/mutations';
import KeySuccess from './pages/AddKeySuccess';

/**
 * It renders the Outlet component with the gateData context.
 * @returns The `AddNewKey` component is being returned.
 */
const AddNewKey = ({ edit = false }) => {
    const { state }: Record<string, any> = useLocation();
    const { gateData }: { gateData: Gate } = useOutletContext();

    // State
    const [createdKey, setCreatedKey] = useState(false);
    const [mutation, setMutation] = useState(updateKey);
    const [backButton, setBackButton] = useState({
        text: 'Gate',
        url: `/gate/${gateData.id}`,
    });
    const [validator, setValidator] = useState(() => (values) => null);
    const [input, setInput] = useState<Record<string, any>>({
        type: 'SELF_VERIFY',
    });

    const [pushToDB, { loading }] = useMutation(gql(mutation));

    const validate = (values) => {
        // eslint-disable-next-line prefer-const
        let errors = {
            ...validator(values),
        };

        return errors;
    };

    // Formik
    const formik = useFormik({
        initialValues: {
            taskLink: state
                ? state.data.task.type.toLowerCase().replace(/_/g, '-')
                : '',
            titleDescriptionPair: state
                ? state.data.information.map((pair) => ({
                      title: pair.title,
                      description: pair.description,
                  }))
                : [
                      {
                          title: '',
                          description: '',
                      },
                  ],
            keysRewarded: state ? state.data.keys : 0,
            peopleLimit: state ? state.data.peopleLimit : 0,
            unlimited: state ? state.data.unlimited : false,
            chain: state ? state.data.task.chain : 1,
            address: state ? state.data.task.address : '',
            amount: state ? state.data.task.amount : 0,
            code: state ? state.data.task.code : '',
            methodName: state ? state.data.task.methodName : '',
            govActive: state ? state.data.task.snapshotType : '',
            spaceID: state ? state.data.task.spaceID : '',
            proposal: state ? state.data.task.proposal : '',
            quiz: {
                title: state ? state.data.task.title : '',
                description: state ? state.data.task.description : '',
                percentage: state ? state.data.task : 0,
                questions: state
                    ? state.data.task.questions
                    : [
                          {
                              question: '',
                              options: [
                                  {
                                      answer: '',
                                      correct: false,
                                  },
                                  {
                                      answer: '',
                                      correct: false,
                                  },
                              ],
                              nrOfCorrectAnswers: 0,
                          },
                      ],
            },
        },
        validate,
        onSubmit: async (values) => {
            await pushToDB({
                variables: {
                    input: {
                        id: uuidv4(),
                        gateID: gateData.id,
                        information: values.titleDescriptionPair,
                        token: '',
                        tokenAmount: 0,
                        keys: values.keysRewarded,
                        peopleLimit: values.peopleLimit,
                        unlimited: values.unlimited,
                        ...(!state && {
                            task: input,
                        }),
                    },
                },
            });

            setCreatedKey(true);
        },
    });

    useEffect(() => {
        const switchTask = () => {
            switch (formik.values.taskLink) {
                case 'self-verify':
                    setInput({
                        type: 'SELF_VERIFY',
                    });
                    return createSelfVerify;
                case 'quiz':
                    setInput({
                        type: 'QUIZ',
                        title: formik.values.quiz.title,
                        description: formik.values.quiz.description,
                        questions: formik.values.quiz.questions,
                        passedAt: Math.floor(
                            formik.values.quiz.questions.length *
                                formik.values.quiz.percentage
                        ),
                    });
                    return createQuiz;
                case 'meeting-code':
                    setInput({
                        type: 'MEETING_CODE',
                        code: formik.values.code,
                        caseSensitive: true,
                    });
                    return createMeetingCode;
                case 'token':
                    setInput({
                        type: 'TOKEN_HOLD',
                        chainID: 1,
                        address: formik.values.address,
                        amount: formik.values.amount,
                    });
                    return createTokenHold;
                case 'sc-interaction':
                    setInput({
                        type: 'CONTRACT_INTERACTION',
                        chainID: formik.values.chain,
                        address: formik.values.address,
                        methodName: formik.values.methodName || '',
                    });
                    return createContractInteraction;
                case 'governance':
                    setInput({
                        type: 'SNAPSHOT_GOVERNANCE',
                        snapshotType: formik.values.govActive.toUpperCase(),
                        spaceID: formik.values.spaceID,
                        proposal: formik.values.proposal,
                    });
                    return createSnapshotGovernance;
                case 'manual':
                    setInput({
                        type: 'MANUAL',
                    });
                    return createManualTask;
                default:
                    return mutation;
            }
        };

        setMutation(state ? updateKey : switchTask());
    }, [formik.values.taskLink]);

    return createdKey ? (
        <KeySuccess edit={!!state} gate={gateData.id} />
    ) : (
        <Styled.Container>
            <BackButton url={backButton.url}>
                Back to {backButton.text}
            </BackButton>
            <Outlet
                context={{
                    gateData,
                    formik,
                    edit: !!state || edit,
                    loading,
                    setBackButton,
                    setValidator,
                    state,
                }}
            />
        </Styled.Container>
    );
};

export default AddNewKey;
