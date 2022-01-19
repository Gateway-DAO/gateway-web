import React, { useRef, useState } from 'react'
// import Modal from '../../components/Modal/index';
// import styled from "styled-components";
import RichEditor from '../../components/RichTextEditor'
import * as Styled from './styles'
// import * as Styled from '../../../components/Modal/style';
import Header from '../../components/Header'
import SearchedItem from './Components/SearhedItem'
import { FormStyled, ImageUpload } from '../../components/Form'
// import icon from "../../assets/imageicon.jpeg"
import { FaTrashAlt, FaPlus } from 'react-icons/fa'

const AddGateForm = (toggleForm) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [retroactiveEarners, setretroactiveEarners] = useState([''])
    const fileInputField = useRef(null)
    //const [files, setFile] = useState('')
    const $input = useRef(null)
    const [uploadFile, setUploadFile] = useState(null)
    const [over, setover] = useState(false)
    const [category, setCategory] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [prerequisite, setPrerequisite] = useState('')
    const [prerequisiteList, setPrerequisiteList] = useState([])
    const [keyRequired, setKeyRequired] = useState(0)
    const [badgeName, setBadgeName] = useState('')
    const [admin, setAdmin] = useState('')
    const [adminList, setAdminList] = useState([])

    // console.log(files);

    const onUploadeFile = (file) => {
        if (!file) {
            alert('image is required')
            setUploadFile(null)
            return false
        }
        if (!file.name.match(/\.(jpg|jpeg|png|gif|svg|webm)$/)) {
            alert('select valid image.')
            console.log(file)
            setUploadFile(null)
            return false
        }

        if (file.size < 20000) {
            alert('please upload a file size more than 20kb.')
            setUploadFile(null)
            return false
        }

        if (file.size > 100000000) {
            alert('file size is too big. please upload less than 100mb.')
            setUploadFile(null)
            return false
        }
        setUploadFile(file)
        console.log(file)
    }

    const removeUploadFile = () => {
        setUploadFile(null)
    }
    const addCategories = (e) => {
        if (e.key === 'Enter') {
            setCategoryList([...categoryList, category])
            setCategory('')
        }
    }
    const addPrerequisite = (e) => {
        if (e.key === 'Enter') {
            setPrerequisiteList([...prerequisiteList, prerequisite])
            setPrerequisite('')
        }
    }
    const addAdmin = (e) => {
        if (e.key === 'Enter') {
            setAdminList([...adminList, admin])
            setAdmin('')
        }
    }
    const updateRetroactiveEarner = (e, idx) => {
        console.log(idx)
        const add = retroactiveEarners.map((value, i) => {
            if (idx === i) {
                console.log(retroactiveEarners[i])
                // retroactiveEarners[i]=e;
                return e
            }
            return value
        })

        setretroactiveEarners(add)
    }
    const removeRetroactiveEarner = (idx) => {
        if (retroactiveEarners.length == 1) {
            alert('you have to put atleast one retroactive earner')
            return false
        }
        setretroactiveEarners(
            retroactiveEarners.filter((value, i) => i !== idx)
        )
    }

    const onSave = (e) => {
        e.preventDefault()
        if (!uploadFile) {
            alert('please upload nft')
            return false
        }
        console.log(e)
    }
    return (
        <Styled.Page>
            <Header />
            <Styled.Container
                onSubmit={onSave}
                onKeyPress={(event) => {
                    if (event.which === 13 /* Enter */) {
                        event.preventDefault()
                    }
                }}
            >
                <Styled.Header>Create a New Gate</Styled.Header>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="title">
                        Gate Title*
                    </FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="This will be the title of your Gate"
                        value={name}
                        required
                    />
                </FormStyled.Fieldset>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="description">
                        Description*
                    </FormStyled.Label>
                    <FormStyled.Textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        placeholder="This will be the description of your Gate. We reccommend maximum of 2 lines."
                        required
                    />
                </FormStyled.Fieldset>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="title">
                        KEYS REQUIRED*
                    </FormStyled.Label>
                    <Styled.InputSmall
                        onChange={(e) => setKeyRequired(e.target.value)}
                        type="number"
                        id="keyReq"
                        name="keyReq"
                        placeholder="0"
                        value={keyRequired}
                        required
                    />
                </FormStyled.Fieldset>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="title">
                        Category
                    </FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Search your Category"
                        onKeyPress={addCategories}
                        value={category}
                    />
                    {/* <Styled.SearchIcon>
                            <Styled.SearchIconTop></Styled.SearchIconTop>
                            <Styled.SearchIconBottom></Styled.SearchIconBottom>
                        </Styled.SearchIcon> */}
                    {categoryList.length > 0 && (
                        <Styled.CategoryList>
                            {categoryList.map((category) => {
                                return <SearchedItem val={category} />
                            })}
                        </Styled.CategoryList>
                    )}
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="ProfileImage">
                        Upload Badge or NFT
                    </FormStyled.Label>
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
                            <Styled.DragAreaText
                                hover={over}
                                className="header"
                            >
                                <Styled.Span> Upload </Styled.Span>or Drag your
                                image here
                            </Styled.DragAreaText>

                            {/* <Styled.button className="button">
                                Browse File 
                            </Styled.button> */}
                            <input
                                type="file"
                                accept="image/*, video/*, audio/*"
                                name="file"
                                hidden
                                ref={$input}
                                onChange={(e) => {
                                    //setUploadFile(e.target.files[0])
                                    onUploadeFile(e.target.files[0])
                                }}
                            ></input>
                        </Styled.DragArea>
                    ) : (
                        <Styled.Background
                            image={URL.createObjectURL(uploadFile)}
                        >
                            <Styled.Cross onClick={removeUploadFile}>
                                +
                            </Styled.Cross>
                        </Styled.Background>
                    )}
                    <Styled.AllowedFileType>
                        <p>Image, Video, Audio, or 3D Model</p>
                        <p>File supported: JPG, PNG, GIF, SVG, WEBM,</p>
                        <p>Max size: 100 MB</p>
                    </Styled.AllowedFileType>
                </FormStyled.Fieldset>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="title">
                        BADGE/NFT Name
                    </FormStyled.Label>
                    <Styled.Input
                        onChange={(e) => setBadgeName(e.target.value)}
                        type="text"
                        id="badgeName"
                        name="badgeName"
                        placeholder="Insert the name here"
                        value={badgeName}
                        required
                    />
                </FormStyled.Fieldset>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="title">
                        Admin Privileges
                    </FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setAdmin(e.target.value)}
                        type="text"
                        id="admin"
                        name="admin"
                        placeholder="Search for admins"
                        onKeyPress={addAdmin}
                        value={admin}
                        required
                    />
                    {adminList.length > 0 && (
                        <Styled.CategoryList>
                            {adminList.map((admin) => {
                                return <SearchedItem val={admin} />
                            })}
                        </Styled.CategoryList>
                    )}
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="retroactiveLearner">
                        RETROACTIVE LEARNER
                    </FormStyled.Label>
                    {retroactiveEarners.map((retroactiveEarner, idx) => {
                        return (
                            <FormStyled.InputWrapper>
                                <FormStyled.Input
                                    id={`retroactiveEarners-${idx}`}
                                    type="text"
                                    value={retroactiveEarner}
                                    placeholder="Enter wallet/ens address"
                                    onChange={(e) =>
                                        updateRetroactiveEarner(
                                            e.target.value,
                                            idx
                                        )
                                    }
                                    name={retroactiveEarners}
                                    required
                                />
                                <FormStyled.IconButton
                                    onClick={() => removeRetroactiveEarner(idx)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </FormStyled.IconButton>
                            </FormStyled.InputWrapper>
                        )
                    })}
                    <FormStyled.IconButton
                        onClick={() =>
                            setretroactiveEarners([...retroactiveEarners, ''])
                        }
                        style={{
                            width: 'fit-content',
                            alignSelf: 'center',
                        }}
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                </FormStyled.Fieldset>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="title">
                        Prerequisite
                    </FormStyled.Label>
                    <Styled.Input
                        onChange={(e) => setPrerequisite(e.target.value)}
                        type="text"
                        id="prerequisite"
                        name="prerequisite"
                        placeholder="Search"
                        onKeyPress={addPrerequisite}
                        value={prerequisite}
                        required
                    />
                    {prerequisiteList.length > 0 && (
                        <Styled.CategoryList>
                            {prerequisiteList.map((prerequisite) => {
                                return <SearchedItem val={prerequisite} />
                            })}
                        </Styled.CategoryList>
                    )}
                </FormStyled.Fieldset>

                <FormStyled.Button type="submit">Submit</FormStyled.Button>
            </Styled.Container>
        </Styled.Page>
    )
}
export default AddGateForm
