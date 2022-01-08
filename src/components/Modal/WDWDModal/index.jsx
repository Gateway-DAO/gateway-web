import Modal from '../index'
import { db } from '../../../api/firebase'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { doc, updateDoc, onSnapshot } from '@firebase/firestore'
import React, { useState } from 'react'
import RichEditor from '../../RichTextEditor'
import { useUpdateDAO } from "../../../api/database/useUpdateDAO"

const WDWDModal = (props) => {
    const [WDWD, setWDWD] = useState(props.data);
    const { updateDAO, data, error, loading } = useUpdateDAO();

    const submitToDB = async () => {
        await updateDAO({ variables: {
            input: {
                id: props.id,
                whatDoWeDo: WDWD
            }
        } })

        props.set(WDWD)
        props.toggle()
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
