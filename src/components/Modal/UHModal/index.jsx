import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { FormStyled } from "../../Form"
import { useState } from "react";
import RichEditor from "../../RichTextEditor";
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";
import { Navigate } from "react-router-dom";

const UHModal = props => {
    const [UH, setUH] = useState(props.data);
    const { updateDAO, data, error, loading } = useUpdateDAO();

    const submitToDB = async () => {
        await updateDAO({ variables: {
            input: {
                id: props.id,
                upcomingHangouts: UH
            }
        } })

        props.set(UH)
        props.toggle()
    }

    if (error) { return <Navigate to="/404" /> }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Upcoming Hangouts</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="information">Information</FormStyled.Label>
                    <RichEditor set={setUH} value={UH} />
                </FormStyled.Fieldset>

                <FormStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</FormStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default UHModal