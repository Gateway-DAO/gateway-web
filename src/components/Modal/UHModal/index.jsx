import React, { useState } from 'react';

// Styling
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';

// Components
import RichEditor from '../../RichTextEditor';
import { Navigate } from 'react-router-dom';
import Modal from '../index';

// API
import { useMutation, gql } from '@apollo/client';
import { updateDao } from '../../../graphql/mutations';
import Loader from '../../Loader';

const UHModal = (props) => {
    const [UH, setUH] = useState(props.data);
    const [updateDAO, { loading, error }] = useMutation(gql(updateDao));

    const submitToDB = async () => {
        await updateDAO({
            variables: {
                input: {
                    id: props.id,
                    upcomingHangouts: UH,
                },
            },
        });

        props.set(UH);
        props.toggle();

        window.location.reload();
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Upcoming Hangouts</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='information'>
                        Information
                    </FormStyled.Label>
                    <RichEditor set={setUH} value={UH} />
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

export default UHModal;
