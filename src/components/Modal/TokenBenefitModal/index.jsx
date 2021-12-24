import Modal from '../index'
import * as Styled from './style'
import * as ModalStyled from '../style'
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

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="title">Title</ModalStyled.Label>
                    <ModalStyled.Input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Discord Access"
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="description">
                        Description
                    </ModalStyled.Label>
                    <RichEditor set={setDescription} value={description} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="token">Token</ModalStyled.Label>
                    <ModalStyled.Input
                        id="token"
                        placeholder="Ex: GATE"
                        onChange={(e) => setToken(e.target.value)}
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="amount">
                        Token Amount Required
                    </ModalStyled.Label>
                    <ModalStyled.Input
                        id="amount"
                        placeholder="Ex: 25"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Button
                    id="submit_msg"
                    type="button"
                    onClick={submitToDB}
                >
                    Submit
                </ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default TokenBenefitModal
