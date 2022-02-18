import Modal from '../index';
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';
import { useState } from 'react';
import RichEditor from '../../RichTextEditor';
import { useCreateTokenBenefit } from '../../../api/database/useCreateTokenBenefit';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../../Loader';

const TokenBenefitModal = (props) => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [token, setToken] = useState(null);
    const [amount, setAmount] = useState(null);

    const { createTokenBenefit, error, loading } = useCreateTokenBenefit();

    const submitToDB = async () => {
        const newTB = {
            id: uuidv4(),
            daoID: props.id,
            title,
            description,
            token,
            amount,
        };

        await createTokenBenefit({
            variables: {
                input: newTB,
            },
        });

        props.set([...props.data, newTB]);
        props.toggle();
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Add Token Benefits</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='title'>Title</FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Discord Access'
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='description'>
                        Description
                    </FormStyled.Label>
                    <RichEditor set={setDescription} value={description} />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='token'>Token</FormStyled.Label>
                    <FormStyled.Input
                        id='token'
                        placeholder='Ex: GATE'
                        onChange={(e) => setToken(e.target.value)}
                        value={token}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='amount'>
                        Token Amount Required
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='amount'
                        placeholder='Ex: 25'
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
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

export default TokenBenefitModal;
