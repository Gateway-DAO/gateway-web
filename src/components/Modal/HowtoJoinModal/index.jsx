import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
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

                <Styled.HowtoJoinHeader>How to Join? </Styled.HowtoJoinHeader>

                <Styled.Fieldset>
                    <Styled.HowtoJoinLabel for="description">Description</Styled.HowtoJoinLabel>
                    <Styled.HowtoJoinTextarea id="description"
                        placeholder="If you hold the required amount of tokens, you are given access to the discord"
                        onChange={e => setDescription(e.target.value)}></Styled.HowtoJoinTextarea>
                </Styled.Fieldset>


                <Styled.HowtoJoinButton id="submit_msg" type="button" onClick={submitToDB}>Submit</Styled.HowtoJoinButton>
            </Styled.Container>
        </Modal>
    )
}

export default HowtoJoinModal