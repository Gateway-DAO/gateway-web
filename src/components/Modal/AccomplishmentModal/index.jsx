import React, { useState } from 'react';

// Styling
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';

// Components
import { Navigate } from 'react-router-dom';
import Modal from '../index';
import Loader from '../../Loader';
import RichEditor from '../../RichTextEditor';

// API
import { useMutation, gql } from '@apollo/client';
import { updateDao } from '../../../graphql/mutations';

const AccomplishmentModal = (props) => {
    const [accomplish, setAccomplish] = useState(props.data);
    const [updateDAO, { loading, error }] = useMutation(gql(updateDao));

    const submitToDB = async () => {
        await updateDAO({
            variables: {
                input: {
                    id: props.id,
                    accomplishments: accomplish,
                },
            },
        });

        props.set(accomplish);
        props.toggle();
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Accomplishments</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='information'>
                        Information
                    </FormStyled.Label>
                    <RichEditor set={setAccomplish} value={accomplish} />
                </FormStyled.Fieldset>

                <FormStyled.Button
                    id='submit_msg'
                    type='button'
                    onClick={submitToDB}
                >
                    {loading && <Loader color='white' />}
                    Submit
                </FormStyled.Button>
            </Styled.Container>
        </Modal>
    );
};

export default AccomplishmentModal;
