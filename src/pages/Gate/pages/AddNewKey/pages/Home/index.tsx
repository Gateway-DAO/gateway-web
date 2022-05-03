import React, { useEffect, useState } from 'react';

// Styling
import * as Styled from './style';
import { FormStyled } from '../../../../../../components/Form';

// Components
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import Loader from '../../../../../../components/Loader';
import RichTextEditor from '../../../../../../components/RichTextEditor';

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom';

// Utils
import space from '../../../../../../utils/canvas';
import { Gate } from '../../../../../../graphql/API';
import { FormikContextType } from 'formik';

/* Defining a type called Key. */
interface Key {
    taskLink: string;
    titleDescriptionPair: { title: string; description: string }[];
    keysRewarded: number;
    peopleLimit: number;
    unlimited: boolean;
}

/* Defining a type for the errors object. */
interface IErrors {
    keysRewarded?: string;
    peopleLimit?: string;
}

const AddNewKey = () => {
    const {
        gateData,
        formik,
        edit,
        loading,
        state,
    }: {
        gateData: Gate;
        formik: FormikContextType<Key>;
        edit: boolean;
        loading: boolean;
        state: Record<string, any>;
    } = useOutletContext();

    const [formErrors, setFormErrors] = useState<IErrors>({
        keysRewarded: '',
        peopleLimit: ''
    })

    // Hooks
    const navigate = useNavigate();

    /**
     * Updates a title on the titleDescriptionPair array.
     * @returns None
     */
    const updateTitle = (e, idx) => {
        e.preventDefault();
        const newValue = e.target.value;

        const add = formik.values.titleDescriptionPair.map((value, i) => {
            if (idx === i) {
                return {
                    ...value,
                    title: newValue,
                };
            }
            return value;
        });
        formik.setFieldValue('titleDescriptionPair', add);
    };

    /**
     * Updates a description on the titleDescriptionPair array.
     * @returns None
     */
    const updateDescription = (e, idx) => {
        // e.preventDefault();
        const newValue = e;

        const add = formik.values.titleDescriptionPair.map((value, i) => {
            if (idx === i) {
                return {
                    ...value,
                    description: newValue,
                };
            }
            return value;
        });

        formik.setFieldValue('titleDescriptionPair', add);
    };

    /**
     * Add a new title/description pair to the titleDescriptionPair array.
     * @returns None
     */
    const addTitleDescription = (e) => {
        e.preventDefault();

        formik.setFieldValue('titleDescriptionPair', [
            ...formik.values.titleDescriptionPair,
            {
                title: '',
                description: '',
            },
        ]);

        window.scrollBy(0, 30);
    };

    /**
     * Deletes a pair on the titleDescriptionPair array.
     * @returns None
     */
    const deletePair = (e, idx) => {
        e.preventDefault();

        formik.setFieldValue(
            'titleDescriptionPair',
            formik.values.titleDescriptionPair.filter((data, i) => i !== idx)
        );
    };

    const unlimitedClicked = () => {
        setFormErrors({
            ...formErrors,
            peopleLimit: ''
        })
        formik.setFieldValue('unlimited', !formik.values.unlimited);
        if (formik.values.unlimited) {
            formik.setFieldValue('peopleLimit', 0);
        }
    };

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    /**
     * Navigates to the next step of the task or, if it is a self verify task, adds a new key.
     * @returns None
     */
    const submit = async (e) => {
        e.preventDefault();

        setFormErrors({
            keysRewarded: !formik.values.keysRewarded ? 'Keys Rewarded is required.' : '',
            peopleLimit: !formik.values.unlimited && formik.values.peopleLimit <= 0 ? 'People limit can not be less than 0.' : ''
        })

        if (formErrors.keysRewarded || formErrors.peopleLimit) return;

        formik.values.taskLink !== 'self-verify'
            ? navigate(formik.values.taskLink, {
                  state,
              })
            : formik.submitForm();

        return false;
    };

    return (
        <Styled.AddNewKeyContainer>
            <Styled.SpaceBox id='space-canvas' />
            <FormStyled.FormBox action='' onSubmit={submit}>
                <FormStyled.H1>
                    {edit ? 'Edit Key' : 'Add a New Key'}
                </FormStyled.H1>

                {formik.values.titleDescriptionPair.map((pair, idx) => (
                    <React.Fragment key={idx}>
                        <FormStyled.Fieldset marginBottom='0px'>
                            <FormStyled.Label htmlFor='title'>
                                Key Title*
                            </FormStyled.Label>
                            <FormStyled.Input
                                id={`title-${idx}`}
                                name='title'
                                onChange={(e) => updateTitle(e, idx)}
                                value={pair.title}
                                placeholder='This will be the title of your Key'
                                required
                            />
                        </FormStyled.Fieldset>
                        <FormStyled.Fieldset marginBottom='0px'>
                            <FormStyled.Label>Description*</FormStyled.Label>
                            <RichTextEditor
                                toolbar={[
                                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['bold', 'italic', 'underline'],
                                    [{ color: [] }],
                                    ['emoji'],
                                ]}
                                value={pair.description}
                                set={(e) => updateDescription(e, idx)}
                            />
                        </FormStyled.Fieldset>

                        {formik.values.titleDescriptionPair.length > 1 && (
                            <FormStyled.DeleteWrapper
                                onClick={(e) => deletePair(e, idx)}
                            >
                                <FormStyled.IconButton>
                                    <FaTrashAlt />
                                </FormStyled.IconButton>
                                <FormStyled.TextLabel marginLeft='10px'>
                                    Delete Section
                                </FormStyled.TextLabel>
                            </FormStyled.DeleteWrapper>
                        )}
                    </React.Fragment>
                ))}

                <FormStyled.AddWrapper>
                    <FormStyled.IconButton
                        onClick={addTitleDescription}
                        style={{
                            width: 'fit-content',
                            alignSelf: 'left',
                        }}
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                    <FormStyled.TextLabel marginLeft='10px'>
                        Add another title and description
                    </FormStyled.TextLabel>
                </FormStyled.AddWrapper>

                {/*
                <FormStyled.FieldsetRow marginBottom="0">
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="token">
                            TOKEN
                        </FormStyled.Label>
                        <FormStyled.Input
                            id="token"
                            name="token"
                            onChange={(e) => setToken(e.target.value)}
                            placeholder="Search"
                            value={token}
                            required
                        />
                    </FormStyled.Fieldset>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="amount">
                            AMOUNT
                        </FormStyled.Label>
                        <FormStyled.Input
                            id="amount"
                            name="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="amount"
                            value={amount > 0 ? amount : ''}
                            required
                        />
                    </FormStyled.Fieldset>
                </FormStyled.FieldsetRow>
                */}

                {!edit && (
                    <FormStyled.FieldsetRow>
                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='keysRewarded'>
                                Keys REWARDED*{' '}
                                <FormStyled.QuestionIcon
                                    data-title='Enter the number of keys user gets on
                                        successfully compleating a task.'
                                    height={60}
                                    width={300}
                                >
                                    ?
                                </FormStyled.QuestionIcon>
                            </FormStyled.Label>
                            <FormStyled.Input
                                id='keysRewarded'
                                name='keysRewarded'
                                onChange={formik.handleChange}
                                placeholder='0'
                                min={0}
                                value={
                                    formik.values.keysRewarded > 0
                                        ? formik.values.keysRewarded
                                        : ''
                                }
                                required
                            />
                            <FormStyled.InputFeedback type='invalid'>{formErrors.keysRewarded}</FormStyled.InputFeedback>
                        </FormStyled.Fieldset>

                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='peopleLimit'>
                                PEOPLE LIMIT*{' '}
                            </FormStyled.Label>
                            <Styled.InputContainer
                                value={
                                    !formik.values.unlimited
                                        ? formik.values.peopleLimit
                                        : ''
                                }
                                valid={!formErrors.peopleLimit}
                            >
                                <Styled.Input
                                    id='peopleLimit'
                                    name='peopleLimit'
                                    type='number'
                                    min='0'
                                    onChange={formik.handleChange}
                                    placeholder={
                                        formik.values.unlimited
                                            ? 'Unlimited'
                                            : ''
                                    }
                                    value={
                                        !formik.values.unlimited
                                            ? formik.values.peopleLimit
                                            : ''
                                    }
                                    required={!formik.values.unlimited}
                                />
                                <Styled.UnlimitedBoxContainer
                                    onClick={unlimitedClicked}
                                    value={formik.values.unlimited}
                                >
                                    Unlimited
                                </Styled.UnlimitedBoxContainer>
                            </Styled.InputContainer>
                            <FormStyled.InputFeedback type='invalid'>{formErrors.peopleLimit}</FormStyled.InputFeedback>
                        </FormStyled.Fieldset>
                    </FormStyled.FieldsetRow>
                )}

                {!edit && (
                    <FormStyled.Fieldset marginBottom='30px'>
                        <FormStyled.Label>Select a Task*</FormStyled.Label>
                        <FormStyled.SubText>
                            You should select one task per key
                        </FormStyled.SubText>
                        <FormStyled.GridBox
                            onChange={(e) =>
                                formik.setFieldValue(
                                    'taskLink',
                                    (e.target as HTMLInputElement).value
                                )
                            }
                        >
                            <FormStyled.BigRadio
                                id='task-1'
                                name='task'
                                value='quiz'
                                label='Create a Quiz'
                                checked={formik.values.taskLink === 'quiz'}
                            />
                            <FormStyled.BigRadio
                                id='task-2'
                                name='task'
                                value='meeting-code'
                                label='Meeting Code'
                                checked={
                                    formik.values.taskLink === 'meeting-code'
                                }
                            />
                            <FormStyled.BigRadio
                                id='task-3'
                                name='task'
                                value='token'
                                label='Hold a Token'
                                checked={formik.values.taskLink === 'token'}
                            />
                            <FormStyled.BigRadio
                                id='task-4'
                                name='task'
                                value='sc-interaction'
                                label='Contract Interaction'
                                checked={
                                    formik.values.taskLink === 'sc-interaction'
                                }
                            />
                            <FormStyled.BigRadio
                                id='task-5'
                                name='task'
                                value='governance'
                                label='Snapshot Governance'
                                checked={
                                    formik.values.taskLink === 'governance'
                                }
                            />
                            <FormStyled.BigRadio
                                id='task-6'
                                name='task'
                                value='self-verify'
                                label='Self Verify'
                                checked={
                                    formik.values.taskLink === 'self-verify'
                                }
                            />
                            {/*
                            <FormStyled.BigRadio
                                id='task-6'
                                name='task'
                                value='manual'
                                label='Manual Task'
                                checked={formik.values.taskLink === 'manual'}
                            />
                            */}
                        </FormStyled.GridBox>
                    </FormStyled.Fieldset>
                )}

                <FormStyled.Button type='submit'>
                    {formik.isSubmitting && <Loader color='white' />}
                    Next
                </FormStyled.Button>
            </FormStyled.FormBox>
        </Styled.AddNewKeyContainer>
    );
};

export default AddNewKey;
