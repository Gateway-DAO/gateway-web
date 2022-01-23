import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { FormStyled } from "../../Form";
import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";

const HowtoJoinModal = props => {
    const [inputs, setInputs] = useState(props.data);
    const { updateDAO, data, error, loading } = useUpdateDAO();

    const submitToDB = async () => {
        const newHTJ = inputs.filter(step => !!step).map(step => {
            return step
        })

        await updateDAO({ variables: {
            input: {
                id: props.id,
                howToJoin: newHTJ
            }
        } })

        props.set(newHTJ)
        props.toggle()

        window.location.reload()
    }

    const deleteInput = idx => {
        setInputs(inputs.filter((i, index) => index !== idx))
    }

    const changeInput = (idx, e) => {
        e.preventDefault();
        setInputs(inputs.map((i, index) => {
            if (index === idx) {
                return e.target.value
            }

            return i
        }))
    }

    if (error) { return <Navigate to="/404" /> }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>How to Contribute?</ModalStyled.Header>

                {inputs.map((step, idx) => (
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor={`description-${idx}`}>Step {idx + 1}</FormStyled.Label>
                        <FormStyled.InputWrapper>
                            <FormStyled.Input id={`description-${idx}`} key={`htj-input-${idx}`}
                                placeholder="If you hold the required amount of tokens, you are given access to the discord"
                                onChange={e => changeInput(idx, e)} value={step} type="text" />
                            <FormStyled.IconButton onClick={() => deleteInput(idx)} style={{ marginLeft: "10px" }}><FaTrashAlt /></FormStyled.IconButton>
                        </FormStyled.InputWrapper>
                    </FormStyled.Fieldset>
                ))}

                <FormStyled.InputWrapper>
                    <FormStyled.IconButton style={{ marginRight: "10px" }} onClick={e => setInputs([...inputs, ""])}><FaPlus /></FormStyled.IconButton>
                    <FormStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</FormStyled.Button>
                </FormStyled.InputWrapper>
            </Styled.Container>
        </Modal>
    )
}

export default HowtoJoinModal