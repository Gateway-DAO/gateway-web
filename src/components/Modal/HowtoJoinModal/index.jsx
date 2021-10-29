import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa"

const HowtoJoinModal = props => {
    const [inputs, setInputs] = useState(props.data)

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id)
        const newHTJ = inputs.filter(step => !!step.description).map(step => {
            return {
                description: step.description
            }
        })

        const unsub = onSnapshot(dao, (doc) => {
            props.set(newHTJ)
            props.toggle()
        });

        await updateDoc(dao, {
            howToJoin: newHTJ
        })

        unsub()
    }

    const deleteInput = idx => {
        setInputs(inputs.filter((i, index) => index !== idx))
    }

    const changeInput = (idx, e) => {
        e.preventDefault();
        setInputs(inputs.map((i, index) => {
            if (index === idx) {
                return { description: e.target.value }
            }

            return i
        }))
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>How to Join?</ModalStyled.Header>

                {inputs.map((step, idx) => (
                    <Styled.Fieldset>
                        <ModalStyled.Label for={`description-${idx}`}>Step {idx + 1}</ModalStyled.Label>
                        <Styled.InputWrapper>
                            <ModalStyled.Input id={`description-${idx}`} key={`htj-input-${idx}`}
                                placeholder="If you hold the required amount of tokens, you are given access to the discord"
                                onChange={e => changeInput(idx, e)} value={step.description} type="text" />
                            <ModalStyled.IconButton onClick={() => deleteInput(idx)} style={{ marginLeft: "10px" }}><FaTrashAlt /></ModalStyled.IconButton>
                        </Styled.InputWrapper>
                    </Styled.Fieldset>
                ))}

                <Styled.InputWrapper>
                    <ModalStyled.IconButton style={{ marginRight: "10px" }} onClick={e => setInputs([...inputs, { description: "" }])}><FaPlus /></ModalStyled.IconButton>
                    <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
                </Styled.InputWrapper>
            </Styled.Container>
        </Modal>
    )
}

export default HowtoJoinModal