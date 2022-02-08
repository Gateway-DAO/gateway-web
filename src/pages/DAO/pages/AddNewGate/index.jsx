import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Styling
import * as Styled from './styles'
import { FormStyled } from '../../../../components/Form'

// Components
import SearchedItem from './Components/SearhedItem'
import SearchedAdmin from './Components/SearchedAdmin'
import SearchRes from './Components/SearchRes'

// Hooks
import { useCreateGate } from '../../../../api/database/useCreateGate'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useAuth } from '../../../../contexts/UserContext'
import useMint from '../../../../hooks/useMint'
import useSearchUsers from '../../../../api/database/useSearchUser'

// Icons
import { FaTrashAlt, FaPlus } from 'react-icons/fa'

// Utils
import { uploadFileToIPFS } from '../../../../api/IPFSFileUpload'
import FormData from 'form-data'
import Loader from '../../../../components/Loader'
import { useEffect } from 'react'

/* This is a React component that will render the form to add a gate. */
const AddGateForm = (props) => {
    const $input = useRef(null)
    const { userInfo } = useAuth()

    // State
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [retroactiveEarners, setRetroactiveEarners] = useState([''])
    const [uploadFile, setUploadFile] = useState(null)
    const [over, setover] = useState(false)
    const [category, setCategory] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [prerequisite, setPrerequisite] = useState('')
    const [prerequisiteList, setPrerequisiteList] = useState([])
    const [keyRequired, setKeyRequired] = useState(0)
    const [badgeName, setBadgeName] = useState('')
    const [admin, setAdmin] = useState('')
    const [adminList, setAdminList] = useState([{
        name: userInfo?.name || "",
        username: userInfo?.username || "",
        pfp: userInfo?.pfp || ""
    }])
    const [updateLoading, setUpdateeLoading] = useState(false)
    const [adminSearch, setAdminSearch] = useState([])

    // Hooks
    const { daoData } = useOutletContext()
    const { createGate, loading, data, error } = useCreateGate()
    const { data: searchUserData, loading: searchUserLoading } = useSearchUsers({
        variables: {
            filter: {
                or: [
                    { name: { wildcard: `*${admin.toLowerCase()}*` } },
                    { username: { wildcard: `*${admin.toLowerCase()}*` } },
                    { bio: { wildcard: `*${admin.toLowerCase()}*` } },
                ],
            },
        },
    })
    const { batchMint } = useMint()
    const navigate = useNavigate()

    /* If the user has not selected a file, alert them that they need to do so. If the file is not
    an image, alert them that they need to select an image. If the file is too large, alert them
    that they need to select a file size less than 20kb. If the file is too large, alert them that
    they need to select a file size less than 100mb. If the file is an image and is less than 20kb,
    set the uploadFile state to the file.
    */
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
    }

    /* Removing the file from the upload file state. */
    const removeUploadFile = () => {
        setUploadFile(null)
    }

    /* The addCategories function is called when the user presses the Enter key. 
    The function adds the current value of the category input to the categoryList array and clears
    the input. */
    const addCategories = (e) => {
        if (e.key === 'Enter') {
            setCategoryList([...categoryList, category])
            setCategory('')
        }
    }

    /**
     * It removes the category from the list of categories.
     */
    const removeCategories = (id) => {
        setCategoryList(categoryList.filter((value, i) => i !== id))
    }

    /* The addPrerequisite function is called when the user presses the Enter key. 
    The function adds the prerequisite to the prerequisiteList array and clears the prerequisite
    text field. */
    const addPrerequisite = (e) => {
        if (e.key === 'Enter') {
            setPrerequisiteList([...prerequisiteList, prerequisite])
            setPrerequisite('')
        }
    }

    /**
     * It adds an admin to the list of admins.
     */
    const addAdmin = (admin) => {
        setAdminList([...adminList, admin])
        setAdminSearch(prev => prev.filter(adm => adm.id !== admin.id))
    }

    /**
     * It removes the admin from the list of admins.
     */
    const removeAdmin = (id) => {
        setAdminList(prev => prev.filter(adm => adm.id !== id))
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

        setRetroactiveEarners(add)
    }

    /* The removeRetroactiveEarner function is called when the user clicks the remove button. It
    removes the retroactive earner at the index of the button that was clicked. */
    const removeRetroactiveEarner = (idx) => {
        if (retroactiveEarners.length === 1) {
            alert('You have to put at least one retroactive earner')
            return false
        }
        setRetroactiveEarners(
            retroactiveEarners.filter((value, i) => i !== idx)
        )
    }

    /* We create a new gate with the variables we've defined. */
    const onSave = async (e) => {
        setUpdateeLoading(true)
        try {
            e.preventDefault()

            if (!uploadFile) {
                alert('Please upload an NFT')
                return false
            }

            const form = new FormData()
            form.append('file', uploadFile, 'image.png')

            const hash = await uploadFileToIPFS(form)
            const gateID = uuidv4()

            await batchMint(retroactiveEarners.map(re => re.length > 0 && re), "k2t6wyfsu4pg1h5v2ive5e8xnw823zyl548fswjx0zu4qx30jw5mzkfry7k2tk")

            await createGate({
                variables: {
                    input: {
                        id: gateID,
                        daoID: daoData.id,
                        name: title,
                        description,
                        categories: categoryList,
                        admins: adminList.map(admin => admin.id),
                        keysNumber: keyRequired,
                        published: false,
                        badge: {
                            name: badgeName,
                            ipfsURL: hash,
                        },
                    },
                },
            })

            navigate(`/gate/${gateID}`)
        } catch (err) {
            alert('An error occurred. Please try again later!')
            console.log(err)
            setUpdateeLoading(false)
        }
        setUpdateeLoading(false)
    }

    useEffect(() => {
        const clear = setTimeout(() => {
            if (!admin) {
                setAdminSearch([])
            }

            if (!!searchUserData && !searchUserLoading) {
                const query = searchUserData.searchUsers.items
                const results = query.slice(0, 5).map((user) => {
                    return {
                        name: user.name,
                        username: user.username,
                        id: user.id,
                        pfp: user.pfp,
                    }
                })
                setAdminSearch(results)
            }
        }, 2000)

        return () => clearTimeout(clear)
    }, [admin])

    return (
        <Styled.Page>
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
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="This will be the title of your Gate"
                        value={title}
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
                    
                    {categoryList.length > 0 && (
                        <Styled.CategoryList>
                            {categoryList.map((category, id) => {
                                return (
                                    <SearchedItem
                                        val={category}
                                        id={id}
                                        removeCategories={removeCategories}
                                    />
                                )
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
                        value={admin}
                    />

                    {adminList.length > 0 && (
                        <Styled.CategoryList>
                            {adminList.map((admin) => <SearchedAdmin val={admin} id={admin.id} removeAdmin={removeAdmin} />)}
                        </Styled.CategoryList>
                    )}

                    {adminSearch.length > 0 && (
                        <Styled.SearchBox>
                            {adminSearch.map(admin => <SearchRes res={admin} addAdmin={addAdmin} />)}
                        </Styled.SearchBox>
                    )}
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="retroactiveLearner">
                        RETROACTIVE EARNER
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
                                />
                                <Styled.IconBox
                                    ml="10px"
                                    onClick={
                                        retroactiveEarners.length > 1
                                            ? () => removeRetroactiveEarner(idx)
                                            : undefined
                                    }
                                >
                                    {retroactiveEarners.length > 1 ? (
                                        <FaTrashAlt
                                            style={{ color: 'white' }}
                                        />
                                    ) : (
                                        <FaTrashAlt
                                            style={{
                                                color: 'rgba(255,255,255,0.2)',
                                            }}
                                        />
                                    )}
                                </Styled.IconBox>
                            </FormStyled.InputWrapper>
                        )
                    })}
                    <FormStyled.IconButton
                        onClick={(e) => {
                            e.preventDefault()
                            setRetroactiveEarners([...retroactiveEarners, ''])
                        }}
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
                    />
                    {prerequisiteList.length > 0 && (
                        <Styled.CategoryList>
                            {prerequisiteList.map((prerequisite) => {
                                return <SearchedItem val={prerequisite} />
                            })}
                        </Styled.CategoryList>
                    )}
                </FormStyled.Fieldset>

                <FormStyled.Button type="submit">
                    {updateLoading && <Loader color="white" />}
                    Submit
                </FormStyled.Button>
            </Styled.Container>
        </Styled.Page>
    )
}
export default AddGateForm
