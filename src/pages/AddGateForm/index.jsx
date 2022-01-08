import React, { useRef, useState } from "react";
// import Modal from '../../components/Modal/index';
// import styled from "styled-components";
import RichEditor from "../../components/RichTextEditor";
import * as Styled from './style';
import * as ModalStyled from '../../components/Modal/style';
import Header from "../../components/Header";
import icon from "../../assets/imageicon.jpeg"


const AddGateForm =({maxFiles=1}) =>{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("Its a rich editor")
const [retroactivelearner,setRetroactivelearner] = useState("");
const fileInputField = useRef(null);
    const [files, setFile] = useState("");
    const $input = useRef(null);
    const [over,setover]= useState(false);
console.log(files);
   

    return (
            <Styled.Page>
                <Header />
                
                <Styled.Container>
                    <ModalStyled.Header>Create a New Gate</ModalStyled.Header>
                        <ModalStyled.Fieldset>
                         <ModalStyled.Label for="title">Title</ModalStyled.Label>
                            <ModalStyled.Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Year Finance for beginners"
                        value={name}
                    />
                        </ModalStyled.Fieldset>
                    <ModalStyled.Fieldset>
                    <ModalStyled.Label for="description">
                        Description
                    </ModalStyled.Label>
                    <RichEditor set={setDescription} 
                    placeholder ="Through this Gate you will loan everything related Yearn.Finance, from conect your personal wallet to how your wallet works"
                    value={description} />
                </ModalStyled.Fieldset>   

               

                     <ModalStyled.Fieldset>
                     <ModalStyled.Label for="ProfileImage">
                         PROFILE IMAGE
                    </ModalStyled.Label>
                      
                         <Styled.drag_area for = "uploadFile"
                          onClick={()=> {$input.current.click()}}
                          onDrop={(e) => {
                            e.preventDefault();
                            e.persist();
                            setFile(URL.createObjectURL(e.dataTransfer.files[0]));
                            setover(false);
                          }}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setover(true);
                          }}
                          onDragLeave={(e) => {
                            e.preventDefault();
                            setover(false);
                          }}
                                         >
                            <Styled.icon>
                              <img src={icon}
                              width = '42px'
                              height = '42px'></img>
                            </Styled.icon>
                            
                            <Styled.header className="header">
                            <Styled.span> Upload </Styled.span>or Drag your image here
                            </Styled.header>
                            
                            {/* <Styled.button className="button">
                                Browse File 
                            </Styled.button> */}
                            <input type="file"  hidden ref={$input} onChange={e=> {setFile(URL.createObjectURL(e.target.files[0]))}}>
                            </input>

                         </Styled.drag_area>
                         {files?<img src={files} maxWidth='337px' height='256px'>

                         </img>
                         : ''}
                     {/* <Styled.FileUploadContainer>
        <Styled.InputLabel>{label}</Styled.InputLabel>
        <Styled.DragDropText>Drag and drop your files anywhere or</Styled.DragDropText>
        <Styled.UploadFileBtn type="button" >
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </Styled.UploadFileBtn>
        <Styled.FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </Styled.FileUploadContainer> */}
      </ModalStyled.Fieldset>
                     <ModalStyled.Fieldset>
                    <ModalStyled.Label for="retroactiveLearner">
                        RETROACTIVE LEARNER
                    </ModalStyled.Label>
                    <RichEditor set={setDescription} value={retroactivelearner} />
                </ModalStyled.Fieldset>

                <ModalStyled.Button
                    id="submit_msg"
                    type="button"
                    
                >
                    Submit
                </ModalStyled.Button>
                </Styled.Container>
                </Styled.Page>
        

    )
}
export default AddGateForm
