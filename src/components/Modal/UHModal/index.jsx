import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { useState } from "react";
import RichEditor from "../../RichTextEditor";
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";
import { Redirect } from "react-router-dom";

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

    if (error) { return <Redirect to="/404" /> }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Upcoming Hangouts</ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="information">Information</ModalStyled.Label>
                    <RichEditor set={setUH} value={UH} />
                </Styled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default UHModal