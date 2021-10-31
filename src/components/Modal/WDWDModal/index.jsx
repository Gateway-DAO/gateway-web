import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { collection, doc, getDoc, query, updateDoc } from "@firebase/firestore";
import { useState } from "react";

const WDWDModal = props => {
    const [information, setInformation] = useState(null);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id)
        const WhatDoWeDo = (await getDoc(dao)).data().WhatDoWeDo;
        updateDoc(dao, {
            WhatDoWeDo: [
                ...(WhatDoWeDo || []),
                {
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

                <ModalStyled.Header> What Do We Do </ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="information">Information</ModalStyled.Label>
                    <ModalStyled.Textarea id="information"
                        placeholder="
                       We provide the ability for people to find their Web3 communties through an in-depth aggregator with dynamic ability for whitelisted addresses to change information!
                      "
                        onChange={e => setInformation(e.target.value)}></ModalStyled.Textarea>
                </Styled.Fieldset>


                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default WDWDModal