import Modal from '../index'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { db } from '../../../api/firebase'
import { collection, doc, getDoc, query, updateDoc } from '@firebase/firestore'
import { useState } from 'react'

const TokenBenefitModal = (props) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [token, setToken] = useState(null)
    const [amount, setAmount] = useState(null)
    const [information, setInformation] = useState(null)
    const submitToDB = async () => {
        const dao = doc(db, 'daos', props.id)
        const tokenbenefit = (await getDoc(dao)).data().tokenbenefit
        updateDoc(dao, {
            tokenbenefit: [
                ...(tokenbenefit || []),
                {
                    title,
                    description,
                    token,
                    amount,
                    information,
                },
            ],
        })
    }

    const selectCheckBox = (e) => {
        const value = e.target.value
    }

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
                    <ModalStyled.Textarea
                        id="description"
                        placeholder="If you hold the required amount of tokens, you are given access to the discord"
                        onChange={(e) => setDescription(e.target.value)}
                    ></ModalStyled.Textarea>
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
