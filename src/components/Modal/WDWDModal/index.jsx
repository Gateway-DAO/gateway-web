import Modal from "../index";
import { db } from "../../../api/firebase";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
// import { useState } from "react";
// import RichTextEditor from '../../RichTextEditor/Richedit'
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/emoji", Emoji);

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }],
  [{ align: [] }],
  ["image", "emoji"]
];
const WDWDModal = props => {
    const [WDWD, setWDWD] = useState(props.data);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id);

        const unsub = onSnapshot(dao, (doc) => {
            props.set(WDWD)
            props.toggle()
        });

        await updateDoc(dao, {
            whatDoWeDo: WDWD
        })

        unsub()
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>What Do We Do</ModalStyled.Header>

                <Styled.Fieldset>
                    <ModalStyled.Label for="information">Information</ModalStyled.Label>
                    {/* <RichTextEditor /> */}
                   <div className="App">
                        <Styled.RichEditor_root>
                        <ReactQuill
                            value={WDWD}
                            onChange={(val) => setWDWD(val)}
                            modules={{
                            imageResize: {
                                // parchment: Quill.import('parchment'),
                                modules: ["Resize", "DisplaySize"]
                            },
                            toolbar: {
                                container: TOOLBAR_OPTIONS
                            },
                            "emoji-toolbar": true,
                            "emoji-textarea": false,
                            "emoji-shortname": true
                            }}
                        />
                        {/* <button onClick={() => console.log(text)}>Print</button>
                    
                        <div id="output">{parser(text)}</div> */}
                        </Styled.RichEditor_root>
                        </div>
                    {/* <ModalStyled.Textarea id="information" placeholder="We provide the ability for people to find their Web3 communties through an in-depth aggregator with dynamic ability for whitelisted addresses to change information!" onChange={e => setWDWD(e.target.value)}>{WDWD}</ModalStyled.Textarea> */}
                </Styled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default WDWDModal