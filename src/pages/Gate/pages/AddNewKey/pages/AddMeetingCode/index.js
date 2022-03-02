import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FormStyled } from '../../../../../../components/Form';
import Loader from '../../../../../../components/Loader';

const AddMeetingCode = () => {
    const { formik, edit, loading, setBackButton, setValidator } =
        useOutletContext();

    const validate = (values) => {
        let errors = {};

        if (!values.code) {
            errors.code = 'Required';
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
                {edit ? 'Edit Meeting Code' : 'Add Meeting Code'}
            </FormStyled.H1>

            <FormStyled.Fieldset>
                <FormStyled.Label>What's the code?*</FormStyled.Label>
                <FormStyled.Input
                    name='code'
                    value={formik.values.code}
                    valid={!formik.errors.code}
                    onChange={formik.handleChange}
                    placeholder='Input the meeting code here'
                    required
                />
                {formik.errors.code && (
                    <FormStyled.SubText>
                        {formik.errors.code}
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
