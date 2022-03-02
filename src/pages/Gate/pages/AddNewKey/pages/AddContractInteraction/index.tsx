import React, { useEffect } from 'react';
import { FormStyled } from '../../../../../../components/Form';
import Loader from '../../../../../../components/Loader';
import { FormikContextType } from 'formik';
import { ethers } from 'ethers';
import { useOutletContext } from 'react-router-dom';

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
        formik,
        edit,
        loading,
        setBackButton,
        setValidator,
    }: {
        formik: FormikContextType<Key>;
        edit: boolean;
        loading: boolean;
        setBackButton(obj: Record<string, string | number>): void;
        setValidator(func: () => void): void;
    } = useOutletContext();

    /**
     * It checks if the address is a valid address.
     */
    const validate = (values) => {
        // eslint-disable-next-line prefer-const
        let errors: Record<string, string> = {};

        if (!values.address) {
            errors.address = 'Required';
        } else if (!ethers.utils.isAddress(values.address)) {
            errors.address = "That's not a valid address!";
        }

        if (!values.chain) {
            errors.chain = 'Required';
        }

        return errors;
    };

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });

        setValidator(() => validate);
    }, []);

    return (
        <FormStyled.FormBox onSubmit={formik.handleSubmit}>
            <FormStyled.H1>
                {edit
                    ? 'Edit Contract Interaction'
                    : 'Add Contract Interaction'}
            </FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>Chain*</FormStyled.Label>
                <FormStyled.Select
                    name='chain'
                    onChange={formik.handleChange}
                    valid={!formik.errors.chain}
                >
                    <option value={1}>Ethereum</option>
                    <option value={42220}>Celo</option>
                    <option value={56}>Binance Smart Chain</option>
                    <option value={137}>Polygon/Matic</option>
                    <option value={43114}>Avalanche</option>
                </FormStyled.Select>
                {formik.errors.chain && (
                    <FormStyled.SubText>
                        {formik.errors.chain}
                    </FormStyled.SubText>
                )}
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Contract Address*</FormStyled.Label>
                <FormStyled.Input
                    title='Token'
                    name='address'
                    placeholder='Token Address'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    valid={!formik.errors.address}
                    required
                />
                {formik.errors.address && (
                    <FormStyled.SubText>
                        {formik.errors.address}
                    </FormStyled.SubText>
                )}
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Method Name</FormStyled.Label>
                <FormStyled.Input
                    placeholder='Smart Contract Method Name. Ex: swapETHForToken'
                    name='methodName'
                    value={formik.values.methodName}
                    onChange={formik.handleChange}
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
