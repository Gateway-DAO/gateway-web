import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { collection, doc, getDoc, query, updateDoc } from "@firebase/firestore";
import { useState } from "react";

const FAQModal = props => {
    const [questions, setQuestions] = useState(null);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id)
        const FAQ = (await getDoc(dao)).data().FAQ;
        updateDoc(dao, {
            FAQ: [
                ...(FAQ || []),
                {
                    questions
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

                <ModalStyled.Header> FAQ </ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="questions">Questions</ModalStyled.Label>
                    <ModalStyled.Textarea id="questions"
                        placeholder="
                        Q. What does Gateway do?
                        A. We help people find their communities!
                        "
                        onChange={e => setQuestions(e.target.value)}></ModalStyled.Textarea>
                </Styled.Fieldset>


                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default FAQModal