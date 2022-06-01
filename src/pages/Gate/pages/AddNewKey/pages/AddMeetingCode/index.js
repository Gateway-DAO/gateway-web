import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FormStyled } from '../../../../../../components/Form';
import Loader from '../../../../../../components/Loader';
import { useFormContext } from 'react-hook-form';
import { useCreateKeyMutation } from '../../../../../../graphql';

const AddMeetingCode = () => {
    const { gateData, edit, setBackButton, setCreatedKey } =
        useOutletContext();

    const { register, handleSubmit, watch, formState: { errors } } = useFormContext();

    const [createKey, { loading }] = useCreateKeyMutation()

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });
    }, []);

    const onSubmit = async data => {
        await createKey({
            variables: {
                object: {
                    gate_id: gateData.id,
                    information: data.titleDescriptionPair,
                    task_type: 'meeting_code',
                    task: {
                        type: 'meeting_code',
                        code: data.code,
                        caseSensitive: true,
                    }
                },
            },
        })
        setCreatedKey(true);
    }

    return (
        <FormStyled.FormBox onSubmit={handleSubmit(onSubmit)}>
            <FormStyled.H1>
                {edit ? 'Edit Meeting Code' : 'Add Meeting Code'}
            </FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>What's the code?*</FormStyled.Label>
                <FormStyled.Input
                    name='code'
                    {...register('code', { required: true })}
                    value={watch('code')}
                    valid={errors.code}
                    placeholder='Input the meeting code here'
                    required
                />
                {errors.code && (
                    <FormStyled.SubText>
                        A code is required
                    </FormStyled.SubText>
                )}
            </FormStyled.Fieldset>

            <FormStyled.Button type='submit'>
                {loading && <Loader color='white' />}
                Submit
            </FormStyled.Button>
        </FormStyled.FormBox>
    );
};

export default AddMeetingCode;
