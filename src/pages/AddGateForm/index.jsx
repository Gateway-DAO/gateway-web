import React, { useRef, useState } from "react";
// import Modal from '../../components/Modal/index';
// import styled from "styled-components";
import RichEditor from "../../components/RichTextEditor";
import * as Styled from './styles';
// import * as Styled from '../../../components/Modal/style';
import Header from "../../components/Header";
import SearchedItem from "./Components/SearhedItem";
// import icon from "../../assets/imageicon.jpeg"




const AddGateForm =(toggleForm) =>{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("Its a rich editor")
    const [retroactivelearner,setRetroactivelearner] = useState("");
    const fileInputField = useRef(null);
    const [files, setFile] = useState("");
    const $input = useRef(null);
    const [uploadFile, setUploadFile] = useState(null);
    const [over,setover]= useState(false);
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [prerequisite, setPrerequisite]= useState("");
    const [prerequisiteList, setPrerequisiteList]= useState("");

    console.log(files);
    
    const removeUploadFile= ()=>{
        setUploadFile(null);
    }
    const addCategories = (e)=>{
        if(e.key==='Enter'){
            setCategoryList([...categoryList, category]);
            setCategory("")
        }
    }
    const addPrerequisite = (e)=>{
        if(e.key==='Enter'){
            setPrerequisiteList([...prerequisiteList, prerequisite]);
            setPrerequisite("")
        }
    }
    return (
        <Styled.Page>
        <Header />        
            <Styled.Container>
                <Styled.Header>Create a New Gate</Styled.Header>
                    <Styled.Fieldset>
                        <Styled.Label htmlFor="title">Title</Styled.Label>
                        <Styled.Input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Year Finance for beginners"
                            value={name}
                        />
                    </Styled.Fieldset>
                    <Styled.Fieldset>
                        <Styled.Label htmlFor="description">Description</Styled.Label>
                        <RichEditor set={setDescription} 
                        placeholder ="Through this Gate you will loan everything related Yearn.Finance, from conect your personal wallet to how your wallet works"
                        value={description} />
                    </Styled.Fieldset>   
                    <Styled.Fieldset>
                        <Styled.Label htmlFor="ProfileImage">Upload Badge or NFT</Styled.Label>
                        {!uploadFile ? (
                            <Styled.DragArea
                                hover={over}
                                htmlFor="uploadFile"
                                onClick={() => {
                                    $input.current.click()
                                }}
                                onDrop={(e) => {
                                    e.preventDefault()
                                    e.persist()
                                    setUploadFile(e.dataTransfer.files[0])
                                    setover(false)
                                }}
                                onDragOver={(e) => {
                                    e.preventDefault()
                                    setover(true)
                                }}
                                onDragLeave={(e) => {
                                    e.preventDefault()
                                    setover(false)
                                }}
                            >
                                <Styled.DragAreaText hover={over} className="header">
                                    <Styled.Span> Upload </Styled.Span>or Drag your
                                    image here
                                </Styled.DragAreaText>

                                {/* <Styled.button className="button">
                                Browse File 
                            </Styled.button> */}
                                <input
                                    type="file"
                                    accept="image/*, video/*, audio/*"
                                    hidden
                                    ref={$input}
                                    onChange={(e) => {
                                        setUploadFile(e.target.files[0])
                                    }}
                                    required
                                ></input>
                            </Styled.DragArea>
                        ) : (
                            <Styled.Background image={URL.createObjectURL(uploadFile)}>
                                <Styled.Cross onClick={removeUploadFile}>
                                    +
                                </Styled.Cross>
                            </Styled.Background>
                        )}
                        <Styled.AllowedFileType>
                        <p>Image, Video, Audio, or 3D Model</p>
                        <p>File supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF.</p>
                        <p>Max size: 100 MB</p>
                        </Styled.AllowedFileType>
                    </Styled.Fieldset>
                <Styled.Fieldset>
                    <Styled.Label htmlFor="title">Category</Styled.Label>
                    <Styled.Input
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Search your Category"
                        onKeyPress={addCategories}
                        value={category}
                    />
                    {categoryList.length>0 
                        &&
                        <Styled.CategoryList>
                            {categoryList.map((category)=>{
                                return(
                                    <SearchedItem val={category}/>
                                )
                            })
                            }
                        </Styled.CategoryList> 
                    }
                </Styled.Fieldset>
                <Styled.Fieldset>
                    <Styled.Label htmlFor="retroactiveLearner">
                        RETROACTIVE LEARNER
                    </Styled.Label>
                    <RichEditor set={setDescription} value={retroactivelearner} />
                </Styled.Fieldset>
                <Styled.Fieldset>
                    <Styled.Label htmlFor="title">Prerequisite</Styled.Label>
                    <Styled.Input
                        onChange={(e) => setPrerequisite(e.target.value)}
                        type="text"
                        id="prerequisite"
                        name="prerequisite"
                        placeholder="Search"
                        onKeyPress={addPrerequisite}
                        value={prerequisite}
                    />
                    {prerequisiteList.length>0 
                        &&
                        <Styled.CategoryList>
                            {prerequisiteList.map((prerequisite)=>{
                                return(
                                    <SearchedItem val={prerequisite}/>
                                )
                            })
                            }
                        </Styled.CategoryList> 
                    }
                </Styled.Fieldset>
                
                <Styled.Button
                    id="submit_msg"
                    type="button"    
                >
                    Submit
                </Styled.Button>
            </Styled.Container>
        </Styled.Page>
    )
}
export default AddGateForm
