import React, { useEffect, useState } from 'react';
import BackButton from '../../../../components/BackButton';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import * as Styled from './style';
import { useFormik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import KeySuccess from './pages/AddKeySuccess';
import Space from '../../../../components/Space';
import { Gates, useCreateKeyMutation } from '../../../../graphql';

/**
 * It renders the Outlet component with the gateData context.
 * @returns The `AddNewKey` component is being returned.
 */
const AddNewKey = ({ edit = false }) => {
    const { state }: Record<string, any> = useLocation();
    const { gateData }: { gateData: Gates } = useOutletContext();

    // State
    const [createdKey, setCreatedKey] = useState(false);
    const [pushToDB, { loading }] =  useCreateKeyMutation()
    const [backButton, setBackButton] = useState({
        text: 'Gate',
        url: `/gate/${gateData.id}`,
    });
    const [validator, setValidator] = useState(() => (values) => null);

    const taskDBInput = () => {
        switch (formik.values.taskLink) {
            case 'self-verify':
                return {
                    type: 'SELF_VERIFY',
                };
            case 'quiz':
                return {
                    type: 'QUIZ',
                    title: formik.values.quiz.title,
                    description: formik.values.quiz.description,
                    questions: formik.values.quiz.questions,
                    passedAt: Math.floor(
                        formik.values.quiz.questions.length *
                            formik.values.quiz.percentage
                    ),
                };
            case 'meeting-code':
                return {
                    type: 'MEETING_CODE',
                    code: formik.values.code,
                    caseSensitive: true,
                };
            case 'token':
                return {
                    type: 'TOKEN_HOLD',
                    chainID: 1,
                    address: formik.values.address,
                    amount: formik.values.amount,
                };
            case 'sc-interaction':
                return {
                    type: 'CONTRACT_INTERACTION',
                    chainID: formik.values.chain,
                    address: formik.values.address,
                    methodName: formik.values.methodName || '',
                };
            case 'governance':
                return {
                    type: 'SNAPSHOT_GOVERNANCE',
                    snapshotType: formik.values.govActive.toUpperCase(),
                    spaceID: formik.values.spaceID,
                    proposal: formik.values.proposal,
                };
            case 'manual':
                return {
                    type: 'MANUAL',
                };
            default:
                return { type: '' };
        }
    };

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
            peopleLimit: state ? state.data.people_limit : 0,
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
            try {
                await pushToDB({
                    variables: {
                        object: {
                            gate_id: gateData.id,
                            information: values.titleDescriptionPair,
                            keys: values.keysRewarded,
                            people_limit: values.peopleLimit,
                            unlimited: values.unlimited,
                            task_type: ((edit
                            ? JSON.stringify(taskDBInput())
                            : taskDBInput()) as Record<string, any>).type,
                            task: edit
                                ? JSON.stringify(taskDBInput())
                                : taskDBInput(),
                        },
                    },
                });

                setCreatedKey(true);
            } catch (err) {
                console.log(err);
            }
        },
    });

    return (
        <Styled.Container>
            <Space>
                {createdKey ? (
                    <KeySuccess edit={!!state} gate={gateData.id} />
                ) : (
                    <>
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
                    </>
                )}
            </Space>
        </Styled.Container>
    );
};

export default AddNewKey;
