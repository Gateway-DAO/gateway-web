import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { FormStyled } from "../../Form"
import { useState } from "react";
import RichEditor from "../../RichTextEditor";
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";
import { Redirect } from "react-router-dom";

const MVModal = props => {
    const [MV, setMV] = useState(props.data);
    const { updateDAO, data, error, loading } = useUpdateDAO();

    const submitToDB = async () => {
        await updateDAO({ variables: {
            input: {
                id: props.id,
                missionAndVision: MV
            }
        } })

        props.set(MV)
        props.toggle()
    }

    if (error) { return <Redirect to="/404" /> }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header> Mission and Vision</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="information">Information</FormStyled.Label>
                    <RichEditor set={setMV} value={MV} />
                </FormStyled.Fieldset>

                <FormStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</FormStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default MVModal