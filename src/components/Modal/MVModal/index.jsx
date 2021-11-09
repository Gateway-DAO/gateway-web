import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
import { useState } from "react";

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
                    <ModalStyled.Textarea id="information" placeholder="Our mission is to provide the best quality information to people learning about DAOs" onChange={e => setMV(e.target.value)}>{MV}</ModalStyled.Textarea>
                </Styled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default MVModal