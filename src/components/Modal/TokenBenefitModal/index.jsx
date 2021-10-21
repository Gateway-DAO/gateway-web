import Modal from "../index";
import * as Styled from "./style";
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
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                
                <Styled.TokenBenefitHeader>Add Token Benefits</Styled.TokenBenefitHeader>

            <label for="title">Title</label>
            <input onChange={e => setTitle(e.target.value)} type="text" id="title" name="title" placeholder="Discord Access" />

            <Styled.Fieldset>
                <label for="description">Description</label>
                <textarea id="description"
                 placeholder = "If you hold the required amount of tokens, you are given access to the discord"  
                onChange={e => setDescription(e.target.value)}></textarea>
            </Styled.Fieldset>

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


            <Styled.TokenBenefitButton      id="submit_msg" type="button" onClick={submitToDB}>Submit</Styled.TokenBenefitButton>

            </Styled.Container>
        </Modal>
    )
}

export default TokenBenefitModal