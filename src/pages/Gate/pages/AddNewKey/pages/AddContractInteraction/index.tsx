import React, { useEffect } from 'react';
import { FormStyled } from '../../../../../../components/Form';
import Loader from '../../../../../../components/Loader';
import { ethers } from 'ethers';
import { useOutletContext } from 'react-router-dom';
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
    methodName?: string;
    chain?: number;
}

const AddContractInteraction: React.FC = () => {
    const {
        gateData,
        edit,
        setBackButton,
        setCreatedKey
    }: {
        gateData: Gates;
        edit: boolean;
        loading: boolean;
        setBackButton(obj: Record<string, string | number>): void;
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
                    people_limit: data.peopleLimit || 0,
                    unlimited: data.unlimited,
                    task_type: 'contract_interaction',
                    task: {
                        type: 'contract_interaction',
                        chainID: data.chain,
                        address: data.address,
                        methodName: data.methodName || '',
                    }
                },
            }
        })

        setCreatedKey(true);
    }

    return (
        <FormStyled.FormBox onSubmit={handleSubmit(onSubmit)}>
            <FormStyled.H1>
                {edit
                    ? 'Edit Contract Interaction'
                    : 'Add Contract Interaction'}
            </FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>Chain*</FormStyled.Label>
                <FormStyled.HTMLSelect
                    name='chain'
                    {...register("chain")}

                >
                    <option value={1}>Ethereum</option>
                    <option value={42220}>Celo</option>
                    <option value={56}>Binance Smart Chain</option>
                    <option value={137}>Polygon/Matic</option>
                    <option value={43114}>Avalanche</option>
                </FormStyled.HTMLSelect>
                {errors.chain && (
                    <FormStyled.SubText>
                        {errors.chain}
                    </FormStyled.SubText>
                )}
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Contract Address*</FormStyled.Label>
                <FormStyled.Input
                    title='Token'
                    placeholder='Token Address'
                    {...register("address", { required: true })}
                    value={watch('address')}
                    required
                />
                {errors.address && (
                    <FormStyled.SubText>
                        {errors.address}
                    </FormStyled.SubText>
                )}
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Method Name</FormStyled.Label>
                <FormStyled.Input
                    placeholder='Smart Contract Method Name. Ex: swapETHForToken'
                    name='methodName'
                    {...register("methodName")}
                    value={watch('methodName')}
                />
            </FormStyled.Fieldset>

            <FormStyled.Button type='submit'>
                {loading && <Loader color='white' />}
                Submit
            </FormStyled.Button>
        </FormStyled.FormBox>
    );
};

export default AddContractInteraction;
