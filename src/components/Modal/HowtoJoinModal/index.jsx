import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";

const HowtoJoinModal = props => {
    const [inputs, setInputs] = useState(props.data);
    const { updateDAO, data, error, loading } = useUpdateDAO();

    const submitToDB = async () => {
        const newHTJ = inputs.filter(step => !!step.description).map(step => {
            return {
                description: step.description
            }
        })

        await updateDAO({ variables: {
            input: {
                id: props.id,
                howToJoin: newHTJ
            }
        } })

        props.set(newHTJ)
        props.toggle()
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

    if (error) { return <Redirect to="/404" /> }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>How to Contribute?</ModalStyled.Header>

                {inputs.map((step, idx) => (
                    <Styled.Fieldset>
                        <ModalStyled.Label for={`description-${idx}`}>Step {idx + 1}</ModalStyled.Label>
                        <ModalStyled.InputWrapper>
                            <ModalStyled.Input id={`description-${idx}`} key={`htj-input-${idx}`}
                                placeholder="If you hold the required amount of tokens, you are given access to the discord"
                                onChange={e => changeInput(idx, e)} value={step.description} type="text" />
                            <ModalStyled.IconButton onClick={() => deleteInput(idx)} style={{ marginLeft: "10px" }}><FaTrashAlt /></ModalStyled.IconButton>
                        </ModalStyled.InputWrapper>
                    </Styled.Fieldset>
                ))}

                <ModalStyled.InputWrapper>
                    <ModalStyled.IconButton style={{ marginRight: "10px" }} onClick={e => setInputs([...inputs, { description: "" }])}><FaPlus /></ModalStyled.IconButton>
                    <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
                </ModalStyled.InputWrapper>
            </Styled.Container>
        </Modal>
    )
}

export default HowtoJoinModal