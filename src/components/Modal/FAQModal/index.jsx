import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { doc, onSnapshot, updateDoc } from "@firebase/firestore";
import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const FAQModal = props => {
    const [FAQ, setFAQ] = useState(props.faq);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id);

        const unsub = onSnapshot(dao, (doc) => {
            props.set(FAQ)
            props.toggle()
        });

        await updateDoc(dao, {
            FAQ: FAQ
        })

        unsub()
    }

    const deletePair = idx => {
        setFAQ(FAQ.filter((i, index) => index !== idx))
    }

    const changeQuestion = (idx, e) => {
        setFAQ(FAQ.map((i, index) => {
            if (index === idx) {
                return { ...i, question: e.target.value }
            }

            return i
        }))
    }

    const changeAnswer = (idx, e) => {
        setFAQ(FAQ.map((i, index) => {
            if (index === idx) {
                return { ...i, answer: e.target.value }
            }

            return i
        }))
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>

                <ModalStyled.Header> FAQ </ModalStyled.Header>

                {FAQ.map((pair, idx) => (
                    <Styled.Fieldset>
                        <ModalStyled.Label for={`description-${idx}`}>Question {idx + 1}</ModalStyled.Label>
                        <ModalStyled.InputWrapper>
                            <div style={{ flex: 1 }}>
                                <ModalStyled.Input id={`question-${idx}`} key={`q-input-${idx}`} placeholder="Question" onChange={e => changeQuestion(idx, e)} value={pair.question} type="text" />
                                <ModalStyled.Input id={`answer-${idx}`} key={`a-input-${idx}`} placeholder="Answer" onChange={e => changeAnswer(idx, e)} value={pair.answer} type="text" />
                            </div>
                            <ModalStyled.IconButton onClick={() => deletePair(idx)} style={{ marginLeft: "10px", alignSelf: "center" }}><FaTrashAlt /></ModalStyled.IconButton>
                        </ModalStyled.InputWrapper>
                    </Styled.Fieldset>
                ))}

                <ModalStyled.InputWrapper>
                    <ModalStyled.IconButton style={{ marginRight: "10px" }} onClick={e => setFAQ([...FAQ, { question: "", answer: "" }])}><FaPlus /></ModalStyled.IconButton>
                    <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
                </ModalStyled.InputWrapper>
            </Styled.Container>
        </Modal>
    )
}

export default FAQModal