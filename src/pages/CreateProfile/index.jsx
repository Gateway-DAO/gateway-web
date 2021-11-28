import React, { useEffect, useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router'

// Styling
import * as Styled from './style'
import { FaTrashAlt, FaPlus } from "react-icons/fa"

// Components
import Header from '../../components/Header'
import { useAuth } from '../../contexts/UserContext'

// Storage
import { storage } from '../../api/firebase'
import { ref, uploadBytes } from "@firebase/storage"

const CreateProfile = () => {
    const { loggedIn, userInfo, updateUserInfo } = useAuth()
    const history = useHistory()

    // Form state
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("")
    const [pfp, setPfp] = useState("")
    const [socials, setSocials] = useState({})

    // Handlers
    const changeSocial = (key, e) => {
        e.preventDefault();
        setSocials({ ...socials, [key]: e.target.value });
    }

    const deleteSocial = (key) => {
        const socialCopy = Object.assign({}, socials);
        delete socialCopy[key];
        setSocials(socialCopy);
    }

    const changeSocialName = (oldKey, newKey) => {
        const socialCopy = {};
        delete Object.assign(socialCopy, socials, {[newKey]: socials[oldKey] })[oldKey];
        setSocials(socialCopy);
    }

    const uploadPfp = async e => {
        alert("Yo")
        const file = e.target.files[0]
        setPfp(file)
        const pfpRef = ref(storage, file.name)

        const res = await uploadBytes(pfpRef, e.target.files[0])
        res && alert("Deu lol")
    }

    const onSave = async () => {
        updateUserInfo({
            name,
            username,
            bio,
            socials,
            init: true
        }, () => history.push("/profile"))
    }

    return userInfo && userInfo.init ? <Redirect to="/profile" /> : (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.MainText>Create Profile</Styled.MainText>
                
                <Styled.FormBox>
                    <Styled.Fieldset>
                        <Styled.Label for="name">Display name</Styled.Label>
                        <Styled.Input onChange={e => setName(e.target.value)} type="text" id="name" name="name" />
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="username">Username</Styled.Label>
                        <Styled.Input onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" />
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="Bio">Bio</Styled.Label>
                        <Styled.Textarea height="100px" id="Bio" onChange={e => setBio(e.target.value)}></Styled.Textarea>
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="pfp">Profile Picture</Styled.Label>
                        <Styled.Input onChange={uploadPfp} type="file" id="pfp" name="pfp" />
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="socials">Socials</Styled.Label>
                        {Object.keys(socials).map((key, idx) => {
                            return (
                                <Styled.InputWrapper>
                                    <Styled.Select style={{ marginRight: "10px" }} onChange={e => changeSocialName(key, e.target.value)}>
                                        <option value="twitter" selected={key === "twitter"} disabled={Object.keys(socials).includes("twitter")}>Twitter</option>
                                        <option value="telegram" selected={key === "telegram"} disabled={Object.keys(socials).includes("telegram")}>Telegram</option>
                                        <option value="medium" selected={key === "medium"} disabled={Object.keys(socials).includes("medium")}>Medium</option>
                                        <option value="github" selected={key === "github"} disabled={Object.keys(socials).includes("github")}>Github</option>
                                        <option value="discord" selected={key === "discord"} disabled={Object.keys(socials).includes("discord")}>Discord</option>
                                        <option value="website" selected={key === "website"} disabled={Object.keys(socials).includes("website")}>Website</option>
                                        <option value="chat" selected={key === "chat"} disabled={Object.keys(socials).includes("chat")}>Chat</option>
                                        <option value="other" selected={key.startsWith("any")}>Other</option>
                                    </Styled.Select>
                                    <Styled.Input id={`social-${key}`} type="text" onChange={e => changeSocial(key, e)} value={socials[key]} />
                                    <Styled.IconButton onClick={() => deleteSocial(key)} style={{ marginLeft: "10px" }}><FaTrashAlt /></Styled.IconButton>
                                </Styled.InputWrapper>
                            )
                        })}
                        <Styled.IconButton onClick={() => setSocials({ ...socials, [`any-${Object.keys(socials).length}`]: "" })} style={{ width: "fit-content", alignSelf: "center" }}><FaPlus /></Styled.IconButton>
                    </Styled.Fieldset>

                    <Styled.Button onClick={onSave}>
                        Save
                    </Styled.Button>
                </Styled.FormBox>
            </Styled.MainBox>
        </Styled.Container>
    )
}

export default CreateProfile
