import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
import { useState } from "react";

const AccomplishmentModal = props => {
    const [accomplish, setAccomplish] = useState(props.data);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id);

        const unsub = onSnapshot(dao, (doc) => {
            props.set(accomplish)
            props.toggle()
        });

        await updateDoc(dao, {
            accomplishments: accomplish
        })

        unsub()
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Accomplishments</ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="information">Information</ModalStyled.Label>
                    <ModalStyled.Textarea id="information" placeholder="We recently raised $5mm from Cowfund!" onChange={e => setAccomplish(e.target.value)}>{accomplish}</ModalStyled.Textarea>
                </Styled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default AccomplishmentModal