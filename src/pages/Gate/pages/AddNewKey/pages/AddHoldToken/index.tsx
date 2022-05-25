import React, { useEffect } from 'react';
import { FormStyled } from '../../../../../../components/Form';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../../../../../components/Loader';
import { useFormContext } from 'react-hook-form';
import { Gates, useCreateKeyMutation } from '../../../../../../graphql';

interface Key {
    taskLink: string;
    titleDescriptionPair: { title: string; description: string }[];
    keysRewarded: number;
    peopleLimit: number;
    unlimited: boolean;

    // Contract Interaction
    address?: string;
    amount?: number;
}

const AddHoldToken = (props) => {
    const {
        edit,
        gateData,
        setBackButton,
        setCreatedKey
    }: {
        edit: boolean;
        gateData: Gates;
        setBackButton(obj: Record<string, string | number>): void;
        setValidator(func: () => void): void;
        setCreatedKey(any): void;
    } = useOutletContext();

    const { register, handleSubmit, watch, formState: { errors } } = useFormContext();

    const [createKey, { loading }] = useCreateKeyMutation()

    const onSubmit = async data => {
        await createKey({
            variables: {
                object: {
                    gate_id: gateData.id,
                    information: data.titleDescriptionPair,
                    keys: data.keysRewarded,
                    people_limit: data.peopleLimit,
                    unlimited: data.unlimited,
                    task_type: 'token_hold',
                    task: {
                        type: 'token_hold',
                        chainID: 1,
                        address: data.address,
                        amount: data.amount,
                    }
                },
            }
        })

        setCreatedKey(true);
    }

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });
    }, []);

    return (
        <FormStyled.FormBox onSubmit={handleSubmit(onSubmit)}>
            <FormStyled.H1>
                {edit ? 'Edit Hold A Token' : 'Add Hold A Token'}
            </FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.Label>Token Address*</FormStyled.Label>
                <FormStyled.Input
                    placeholder='Token Address'
                    {...register('address')}
                    value={watch('address')}
                    valid={!errors.address}
                    required
                />
                {errors.address && (
                    <FormStyled.SubText>
                        {errors.address}
                    </FormStyled.SubText>
                )}
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Amount Required*</FormStyled.Label>
                <FormStyled.Input
                    placeholder='Minimum amount to hold'
                    type='number'
                    {...register('amount')}
                    value={watch('amount')}
                    valid={!errors.amount}
                    required
                />
                {errors.amount && (
                    <FormStyled.SubText>
                        {errors.amount}
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

export default AddHoldToken;
