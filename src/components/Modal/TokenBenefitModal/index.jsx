import Modal from '../index'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { FormStyled } from '../../Form'
import { useState } from 'react'
import RichEditor from '../../RichTextEditor'
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";
import { Redirect } from "react-router-dom";

const TokenBenefitModal = (props) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [token, setToken] = useState(null)
    const [amount, setAmount] = useState(null)

    const { updateDAO, data, error, loading } = useUpdateDAO();

    const submitToDB = async () => {
        const newTB = [
            ...(props.data || []),
            {
                title,
                description,
                token,
                amount
            },
        ]

        await updateDAO({ variables: {
            input: {
                id: props.id,
                tokenBenefits: newTB
            }
        } })

        props.set(newTB)
        props.toggle()
    }

    if (error) { return <Redirect to="/404" /> }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Add Token Benefits</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="title">Title</FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Discord Access"
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="description">
                        Description
                    </FormStyled.Label>
                    <RichEditor set={setDescription} value={description} />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="token">Token</FormStyled.Label>
                    <FormStyled.Input
                        id="token"
                        placeholder="Ex: GATE"
                        onChange={(e) => setToken(e.target.value)}
                        value={token}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="amount">
                        Token Amount Required
                    </FormStyled.Label>
                    <FormStyled.Input
                        id="amount"
                        placeholder="Ex: 25"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Button
                    id="submit_msg"
                    type="button"
                    onClick={submitToDB}
                >
                    Submit
                </FormStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default TokenBenefitModal
