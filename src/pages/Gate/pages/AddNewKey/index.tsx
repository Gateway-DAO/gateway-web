import React, { useEffect, useState } from 'react';
import BackButton from '../../../../components/BackButton';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import * as Styled from './style';
import { useFormik } from 'formik';
import { useForm, FormProvider } from 'react-hook-form';
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
    const [backButton, setBackButton] = useState({
        text: 'Gate',
        url: `/gate/${gateData.id}`,
    });

    // Formik
    const methods = useForm({
        defaultValues: {
            titleDescriptionPair: [{
                title: null,
                description: null
            }],
            unlimited: false,
            peopleLimit: 0
        }
    });

    return (
        <Styled.Container>
            {createdKey ? (
                <KeySuccess edit={!!state} gate={gateData.id} />
            ) : (
                <>
                    <BackButton url={backButton.url}>
                        Back to {backButton.text}
                    </BackButton>
                    <FormProvider {...methods}>
                        <Outlet
                            context={{
                                gateData,
                                edit: !!state || edit,
                                setBackButton,
                                setCreatedKey,
                                state,
                            }}
                        />
                    </FormProvider>
                </>
            )}
        </Styled.Container>
    );
};

export default AddNewKey;
