import Modal from "../index";
import { db } from "../../../api/firebase";
import { collection, doc, getDoc, query, updateDoc } from "@firebase/firestore";
import { useState } from "react";

const TokenBenefitModal = props => {
  
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [token, setToken] = useState(null);
    const [amount, setAmount] = useState(null);
    const [information, setInformation] = useState(null);
    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id)
        const tokenbenefit = (await getDoc(dao)).data().tokenbenefit;
        updateDoc(dao, {
            tokenbenefit: [
                ...(tokenbenefit || []),
                {
                    title,
                    description,
                    token,
                    amount,
                    information

              
                }
            ]
        })
    }

    const selectCheckBox = e => {
        const value = e.target.value
    }

    return (
        <Modal>
            <h1>Add Token Benefits</h1>

            <label for="title">Title</label>
            <input onChange={e => setTitle(e.target.value)} type="text" id="title" name="title" placeholder="Discord Access" />

            <fieldset>
                <label for="description">Description</label>
                <textarea id="description"
                 placeholder = "If you hold the required amount of tokens, you are given access to the discord"  
                onChange={e => setDescription(e.target.value)}></textarea>
            </fieldset>

            <fieldset>
                <label for="token">Token</label>
                <textarea id="token"
                placeholder = "GATE"  
                onChange={e => setToken(e.target.value)}></textarea>
            </fieldset>

            <fieldset>
                <label for="amount">Token Amount Required</label>
                <textarea id="amount"
                  placeholder = "25"  
                 onChange={e => setAmount(e.target.value)}></textarea>
            </fieldset>

            <fieldset>
                <label for="information">Additional Information</label>
                <textarea id="information"
                onChange={e => setInformation(e.target.value)}></textarea>
            </fieldset>

            <button id="submit_msg" type="button" onClick={submitToDB}>Submit</button>

        </Modal>
    )
}

export default TokenBenefitModal