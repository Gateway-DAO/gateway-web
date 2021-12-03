import Modal from '../index'
import { db } from '../../../api/firebase'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { doc, updateDoc, onSnapshot } from '@firebase/firestore'
import React, { useState } from 'react'
import RichEditor from '../../RichTextEditor'

const WDWDModal = (props) => {
    const [WDWD, setWDWD] = useState(props.data)

    const submitToDB = async () => {
        const dao = doc(db, 'daos', props.id)

        const unsub = onSnapshot(dao, (doc) => {
            props.set(WDWD)
            props.toggle()
        })

        await updateDoc(dao, {
            whatDoWeDo: WDWD,
        })

        unsub()
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>What Do We Do</ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="information">
                        Information
                    </ModalStyled.Label>
                    <RichEditor set={setWDWD} value={WDWD} />

                </Styled.Fieldset>

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

export default WDWDModal
