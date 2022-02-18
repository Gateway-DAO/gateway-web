import React, { useState } from 'react';

// Styling
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';

// Components
import RichEditor from '../../RichTextEditor';
import Modal from '../index';
import Loader from '../../Loader';
import { Navigate } from 'react-router-dom';

// API
import { gql, useMutation } from '@apollo/client';
import { updateDao } from '../../../graphql/mutations';

/**
 * It creates a modal that allows the user to update the What Do We Do section of the DAO.
 * @param props - the props passed to the component
 * @returns The `WDWDModal` component is being returned.
 */
const WDWDModal = (props) => {
    const [WDWD, setWDWD] = useState(props.data);
    const [updateDAO, { loading, error }] = useMutation(gql(updateDao));

    const submitToDB = async () => {
        await updateDAO({
            variables: {
                input: {
                    id: props.id,
                    whatDoWeDo: WDWD,
                },
            },
        });

        props.set(WDWD);
        props.toggle();
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>What Do We Do</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='information'>
                        Information
                    </FormStyled.Label>
                    <RichEditor set={setWDWD} value={WDWD} />
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

export default WDWDModal;
