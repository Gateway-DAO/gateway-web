import Modal from '../index'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { db } from '../../../api/firebase'
import { doc, getDoc, onSnapshot, updateDoc } from '@firebase/firestore'
import { useState } from 'react'
import RichEditor from '../../RichTextEditor'

const TokenBenefitModal = (props) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [token, setToken] = useState(null)
    const [amount, setAmount] = useState(null)

    const submitToDB = async () => {
        const dao = doc(db, 'daos', props.id)
        const TBs = (await getDoc(dao)).data().tokenBenefits
        const newTB = [
            ...(TBs || []),
            {
                title,
                description,
                token,
                amount
            },
        ]

        const unsub = onSnapshot(dao, (doc) => {
            props.set(newTB)
            props.toggle()
        });

        await updateDoc(dao, {
            tokenBenefits: newTB
        })

        unsub()
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
