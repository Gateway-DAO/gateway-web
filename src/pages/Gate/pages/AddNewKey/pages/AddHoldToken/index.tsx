import React, { useEffect } from 'react';
import { FormStyled } from '../../../../../../components/Form';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../../../../../components/Loader';
import { ethers } from 'ethers';
import { FormikContextType } from 'formik';

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

        if (!values.amount) {
            errors.amount = 'Required';
        } else if (values.amount == 0) {
            errors.amount = 'The amount should be greater than zero!';
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
                {edit ? 'Edit Hold A Token' : 'Add Hold A Token'}
            </FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.Label>Token Address*</FormStyled.Label>
                <FormStyled.Input
                    title='Token'
                    placeholder='Token Address'
                    name='address'
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
                <FormStyled.Label>Amount Required*</FormStyled.Label>
                <FormStyled.Input
                    name='amount'
                    type='number'
                    placeholder='Minimum amount to hold'
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    valid={!formik.errors.amount}
                    required
                />
                {formik.errors.amount && (
                    <FormStyled.SubText>
                        {formik.errors.amount}
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
