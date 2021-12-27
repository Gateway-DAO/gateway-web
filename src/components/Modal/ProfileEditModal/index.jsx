import * as Styled from './style'
import { useEffect, useState } from 'react'
import Modal from '../index'
import * as ModalStyled from '../style'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import { useAuth } from '../../../contexts/UserContext'
import { Redirect, useHistory } from 'react-router'
import Amplify, { Storage } from 'aws-amplify'
import awsconfig from '../../../aws-exports'

Amplify.configure(awsconfig)

const ProfileEditModal = (props) => {
    const [name, setName] = useState(props.name)
    const [bio, setBio] = useState(props.bio)
    const [socials, setSocials] = useState(props.socials)
    const [membership, setMembers] = useState(props.membership)
    const [pfp, setPfp] = useState(props.pfpURL)
    const history = useHistory()
    const show = props.show
    const { loggedIn, userInfo, updateUserInfo } = useAuth()

    const uploadPfp = async () => {
        const file = pfp
        // const { key } = await Storage.put(`users/${userInfo.wallet}/profile.${file.name.split('.').pop()}`, file)
        const { key } = await Storage.put(
            `profile.${file.name.split('.').pop()}`,
            file,
            { level: 'protected' }
        )
        return await Storage.get(key)
    }

    const onSave = async (props) => {
        try {
            const pfpURL = await uploadPfp()
            await updateUserInfo({
                name,
                bio,
                socials,
                pfp: pfpURL,
            })
        } catch (err) {
            alert('An error occurred. Please try again later!')
            console.log(err)
        }
        props.toggle(!props.show)
    }

    // Handlers
    const changeSocial = (idx, e) => {
        e.preventDefault()
        let copy = [...socials]
        copy[idx].url = e.target.value
        setSocials(copy)
    }

    const deleteSocial = (idx) => setSocials(socials.filter((social, i) => i !== idx))

    const changeSocialName = (idx, newName) => {
        let copy = socials.map((social, i) => {
            if (i === idx) {
                return {
                    ...social,
                    network: newName
                }
            }

            return social
        })
        setSocials(copy)
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Edit Profile</ModalStyled.Header>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="name">
                        Display Name
                    </ModalStyled.Label>
                    <ModalStyled.Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Change your name"
                        value={name}
                    />
                </ModalStyled.Fieldset>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="pfp">
                        Profile Picture
                    </ModalStyled.Label>
                    <ModalStyled.Input
                        onChange={(e) => setPfp(e.target.files[0])}
                        type="file"
                        id="pfp"
                        name="pfp"
                        accept="image/png, image/jpeg"
                    />
                </ModalStyled.Fieldset>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="bio">Bio</ModalStyled.Label>
                    <ModalStyled.Textarea
                        height="100px"
                        id="Bio"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    ></ModalStyled.Textarea>
                </ModalStyled.Fieldset>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="socials">Socials</ModalStyled.Label>
                    {socials.map((social, idx) => {
                        return (
                            <ModalStyled.InputWrapper>
                                <ModalStyled.Select
                                    style={{ marginRight: '10px' }}
                                    onChange={(e) =>
                                        changeSocialName(idx, e.target.value)
                                    }
                                >
                                    <option
                                        value="twitter"
                                        selected={social.network === 'twitter'}
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('twitter')}
                                    >
                                        Twitter
                                    </option>
                                    <option
                                        value="telegram"
                                        selected={social.network === 'telegram'}
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('telegram')}
                                    >
                                        Telegram
                                    </option>
                                    <option
                                        value="medium"
                                        selected={social.network === 'medium'}
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('medium')}
                                    >
                                        Medium
                                    </option>
                                    <option
                                        value="github"
                                        selected={social.network === 'github'}
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('github')}
                                    >
                                        Github
                                    </option>
                                    <option
                                        value="discord"
                                        selected={social.network === 'discord'}
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('discord')}
                                    >
                                        Discord
                                    </option>
                                    <option
                                        value="website"
                                        selected={social.network === 'website'}
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('website')}
                                    >
                                        Website
                                    </option>
                                    <option
                                        value="chat"
                                        selected={social.network === 'chat'}
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('chat')}
                                    >
                                        Chat
                                    </option>
                                    <option
                                        value="other"
                                        selected={social.network.startsWith(
                                            'any'
                                        )}
                                    >
                                        Other
                                    </option>
                                </ModalStyled.Select>
                                <ModalStyled.Input
                                    id={`social-${social.network}`}
                                    type="text"
                                    onChange={(e) => changeSocial(idx, e)}
                                    value={social.url}
                                />
                                <ModalStyled.IconButton
                                    onClick={() => deleteSocial(idx)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </ModalStyled.IconButton>
                            </ModalStyled.InputWrapper>
                        )
                    })}
                    <ModalStyled.IconButton
                        onClick={() =>
                            setSocials([
                                ...socials,
                                {
                                    network: `any-${socials.length}`,
                                    url: ""
                                },
                            ])
                        }
                        style={{
                            width: 'fit-content',
                            alignSelf: 'center',
                        }}
                    >
                        <FaPlus />
                    </ModalStyled.IconButton>
                </ModalStyled.Fieldset>
                <ModalStyled.Button
                    id="submit_msg"
                    type="button"
                    onClick={(e) => onSave(props)}
                >
                    Save Changes
                </ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default ProfileEditModal
