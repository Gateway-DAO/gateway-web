import Modal from "../index";
import { db } from "../../../api/firebase";
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
        <Modal>
            <h1>How to Join?</h1>

            <fieldset>
                <label for="description">Description</label>
                <textarea id="description"
                 placeholder = "If you hold the required amount of tokens, you are given access to the discord"  
                onChange={e => setDescription(e.target.value)}></textarea>
            </fieldset>
            

            <button id="submit_msg" type="button" onClick={submitToDB}>Submit</button>

        </Modal>
    )
}

export default HowtoJoinModal