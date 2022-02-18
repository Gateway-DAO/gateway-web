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

const MVModal = (props) => {
    const [MV, setMV] = useState(props.data);
    const [updateDAO, { loading, error }] = useMutation(gql(updateDao));

    const submitToDB = async () => {
        await updateDAO({
            variables: {
                input: {
                    id: props.id,
                    missionAndVision: MV,
                },
            },
        });

        props.set(MV);
        props.toggle();
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header> Mission and Vision</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label for='information'>
                        Information
                    </FormStyled.Label>
                    <RichEditor set={setMV} value={MV} />
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

export default MVModal;
