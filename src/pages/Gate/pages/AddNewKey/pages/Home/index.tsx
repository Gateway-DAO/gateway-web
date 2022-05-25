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

// Types
import { Gates, useCreateKeyMutation } from '../../../../../../graphql';
import { useFormContext } from 'react-hook-form';

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
        edit,
        state,
        setCreatedKey
    }: {
        gateData: Gates;
        edit: boolean;
        state: Record<string, any>;
        setCreatedKey(any): any;
    } = useOutletContext();

    const { register, handleSubmit, watch, formState: { errors }, setValue, resetField } = useFormContext();

    const [createKey, { loading }] = useCreateKeyMutation()

    const [formErrors, setFormErrors] = useState<IErrors>({
        keysRewarded: '',
        peopleLimit: ''
    })

    // Hooks
    const navigate = useNavigate();

    /**
     * Navigates to the next step of the task or, if it is a self verify task, adds a new key.
     * @returns None
     */
    const onSubmit = async data => {
        setFormErrors({
            keysRewarded: !data.keysRewarded ? 'Keys Rewarded is required.' : '',
            peopleLimit: !data.unlimited && data.peopleLimit <= 0 ? 'People limit can not be less than 0.' : ''
        })

        if (formErrors.keysRewarded || formErrors.peopleLimit) return;

        if (data.taskLink !== 'self-verify') navigate(data.taskLink, {
            state,
        })
        else {
            await createKey({
                variables: {
                    object: {
                        gate_id: gateData.id,
                        information: data.titleDescriptionPair,
                        keys: data.keysRewarded,
                        people_limit: data.peopleLimit,
                        unlimited: data.unlimited,
                        task_type: 'self_verify',
                        task: {
                            type: 'self_verify',
                            chainID: data.chain,
                            address: data.address,
                            methodName: data.methodName || '',
                        }
                    }
                }
            })

            setCreatedKey(true);
        }

        return false;
    };

    return (
        <Styled.AddNewKeyContainer>
            <FormStyled.FormBox action='' onSubmit={handleSubmit(onSubmit)}>
                <FormStyled.H1>
                    {edit ? 'Edit Key' : 'Add a New Key'}
                </FormStyled.H1>

                {watch('titleDescriptionPair').map((pair, idx) => (
                    <React.Fragment key={idx}>
                        <FormStyled.Fieldset marginBottom='0px'>
                            <FormStyled.Label htmlFor='title'>
                                Key Title*
                            </FormStyled.Label>
                            <FormStyled.Input
                                {...register(`titleDescriptionPair.${idx}.title`)}
                                value={watch(`titleDescriptionPair.${idx}.title`)}
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
                                value={watch(`titleDescriptionPair.${idx}.description`)}
                                set={(e) => setValue(`titleDescriptionPair.${idx}.description`, e)}
                            />
                        </FormStyled.Fieldset>

                        {watch('titleDescriptionPair').length > 1 && (
                            <FormStyled.DeleteWrapper
                                onClick={(e) => resetField(`titleDescriptionPair.${idx}`)}
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
                        onClick={() => setValue(`titleDescriptionPair.${watch('titleDescriptionPair').length}`, { title: null, description: null })}
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
                                {...register('keysRewarded', { required: true,})}
                                placeholder='Insert Keys Rewarded'
                                value={watch('keysRewarded')}
                                min={0}
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
                                    !watch('unlimited')
                                        ? watch('peopleLimit')
                                        : ''
                                }
                                valid={!formErrors.peopleLimit}
                            >
                                <Styled.Input
                                    type='number'
                                    min='0'
                                    {...register('peopleLimit')}
                                    placeholder={
                                        watch('unlimited')
                                            ? 'Unlimited'
                                            : 'Insert People Limit'
                                    }
                                    value={
                                        !watch('unlimited')
                                            ? watch('peopleLimit') !== 0 ? watch('peopleLimit')
                                                : '' : ''
                                    }
                                    required={!watch('unlimited')}
                                />
                                <Styled.UnlimitedBoxContainer
                                    onClick={() => setValue('unlimited', !watch('unlimited'))}
                                    value={watch('unlimited')}
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
                            onChange={e => setValue('taskLink', (e.target as HTMLInputElement).value)}
                        >
                            <FormStyled.BigRadio
                                id='task-1'
                                name='task'
                                value='quiz'
                                label='Create a Quiz'
                                checked={watch('taskLink') === 'quiz'}
                            />
                            <FormStyled.BigRadio
                                id='task-2'
                                name='task'
                                value='meeting-code'
                                label='Meeting Code'
                                checked={
                                    watch('taskLink') === 'meeting-code'
                                }
                            />
                            <FormStyled.BigRadio
                                id='task-3'
                                name='task'
                                value='token'
                                label='Hold a Token'
                                checked={watch('taskLink') === 'token'}
                            />
                            <FormStyled.BigRadio
                                id='task-4'
                                name='task'
                                value='sc-interaction'
                                label='Contract Interaction'
                                checked={
                                    watch('taskLink') === 'sc-interaction'
                                }
                            />
                            <FormStyled.BigRadio
                                id='task-5'
                                name='task'
                                value='governance'
                                label='Snapshot Governance'
                                checked={
                                    watch('taskLink') === 'governance'
                                }
                            />
                            <FormStyled.BigRadio
                                id='task-6'
                                name='task'
                                value='self-verify'
                                label='Self Verify'
                                checked={
                                    watch('taskLink') === 'self-verify'
                                }
                            />
                            {/*
                            <FormStyled.BigRadio
                                id='task-6'
                                name='task'
                                value='manual'
                                label='Manual Task'
                                checked={watch('taskLink') === 'manual'}
                            />
                            */}
                        </FormStyled.GridBox>
                    </FormStyled.Fieldset>
                )}

                <FormStyled.Button type='submit'>
                    {loading && <Loader color='white' />}
                    Next
                </FormStyled.Button>
            </FormStyled.FormBox>
        </Styled.AddNewKeyContainer>
    );
};

export default AddNewKey;
