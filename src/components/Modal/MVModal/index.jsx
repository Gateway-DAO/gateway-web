import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
import { useState } from "react";
import RichEditor from "../../RichTextEditor"

const MVModal = props => {
    const [MV, setMV] = useState(props.data);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id);

        const unsub = onSnapshot(dao, (doc) => {
            props.set(MV)
            props.toggle()
        });

        await updateDoc(dao, {
            missionAndVision: MV
        })

        unsub()
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header> Mission and Vision</ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="information">Information</ModalStyled.Label>
                    <RichEditor set={setMV} value={MV} />
                </Styled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default MVModal