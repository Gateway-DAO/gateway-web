import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { collection, doc, getDoc, query, updateDoc } from "@firebase/firestore";
import { useState } from "react";

const HowtoJoinModal = props => {

    const [description, setDescription] = useState(null);
    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id)
        const howtojoin = (await getDoc(dao)).data().howtojoin;
        updateDoc(dao, {
            howtojoin: [
                ...(howtojoin || []),
                {

                    description

                }
            ]
        })
    }

    const selectCheckBox = e => {
        const value = e.target.value
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>

                <ModalStyled.Header>How to Join? </ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="description">Description</ModalStyled.Label>
                    <ModalStyled.Textarea id="description"
                        placeholder="If you hold the required amount of tokens, you are given access to the discord"
                        onChange={e => setDescription(e.target.value)}></ModalStyled.Textarea>
                </Styled.Fieldset>


                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default HowtoJoinModal