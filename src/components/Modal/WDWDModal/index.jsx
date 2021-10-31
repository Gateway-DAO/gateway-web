import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
import { useState } from "react";

const WDWDModal = props => {
    const [WDWD, setWDWD] = useState(props.data);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id);

        const unsub = onSnapshot(dao, (doc) => {
            props.set(WDWD)
            props.toggle()
        });

        await updateDoc(dao, {
            whatDoWeDo: WDWD
        })

        unsub()
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>What Do We Do</ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="information">Information</ModalStyled.Label>
                    <ModalStyled.Textarea id="information" placeholder="We provide the ability for people to find their Web3 communties through an in-depth aggregator with dynamic ability for whitelisted addresses to change information!" onChange={e => setWDWD(e.target.value)}>{WDWD}</ModalStyled.Textarea>
                </Styled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default WDWDModal