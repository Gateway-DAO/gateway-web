import * as Styled from './style'
import { useEffect, useState } from 'react'
import Modal from '../index'
import * as ModalStyled from '../style'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import { useAuth } from '../../../contexts/UserContext'
import { Redirect, useHistory } from 'react-router'

const ProfileEditModal = (props) => {
    const [name, setName] = useState(props.name)
    const [bio, setBio] = useState(props.bio)
    const [socials, setSocials] = useState(props.socials)
    const [membership, setMembers] = useState(props.membership)
    const [pfp, setPfp] = useState(props.pfpURL)
    const history = useHistory()
    const show = props.show
    //update
    const { loggedIn, userInfo, updateUserInfo } = useAuth()

    const onSave = async (props) => {
        try {
            //const pfpURL = await uploadPfp()
            await updateUserInfo({
                name,
                bio,
                socials,
            })
        } catch (err) {
            alert('An error occurred. Please try again later!')
            console.log(err)
        }
        props.toggle(!props.show)
    }

    // Handlers
    const changeSocial = (key, e) => {
        e.preventDefault()
        setSocials({ ...socials, [key]: e.target.value })
    }

    const deleteSocial = (key) => {
        const socialCopy = Object.assign({}, socials)
        delete socialCopy[key]
        setSocials(socialCopy)
    }

    const changeSocialName = (oldKey, newKey) => {
        const socialCopy = {}
        delete Object.assign(socialCopy, socials, {
            [newKey]: socials[oldKey],
        })[oldKey]
        setSocials(socialCopy)
    }
    // new update data

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
                        placeholder="change your name"
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
                    {Object.keys(socials).map((key, idx) => {
                        return (
                            <ModalStyled.InputWrapper>
                                <ModalStyled.Select
                                    style={{ marginRight: '10px' }}
                                    onChange={(e) =>
                                        changeSocialName(key, e.target.value)
                                    }
                                >
                                    <option
                                        value="twitter"
                                        selected={key === 'twitter'}
                                        disabled={Object.keys(socials).includes(
                                            'twitter'
                                        )}
                                    >
                                        Twitter
                                    </option>
                                    <option
                                        value="telegram"
                                        selected={key === 'telegram'}
                                        disabled={Object.keys(socials).includes(
                                            'telegram'
                                        )}
                                    >
                                        Telegram
                                    </option>
                                    <option
                                        value="medium"
                                        selected={key === 'medium'}
                                        disabled={Object.keys(socials).includes(
                                            'medium'
                                        )}
                                    >
                                        Medium
                                    </option>
                                    <option
                                        value="github"
                                        selected={key === 'github'}
                                        disabled={Object.keys(socials).includes(
                                            'github'
                                        )}
                                    >
                                        Github
                                    </option>
                                    <option
                                        value="discord"
                                        selected={key === 'discord'}
                                        disabled={Object.keys(socials).includes(
                                            'discord'
                                        )}
                                    >
                                        Discord
                                    </option>
                                    <option
                                        value="website"
                                        selected={key === 'website'}
                                        disabled={Object.keys(socials).includes(
                                            'website'
                                        )}
                                    >
                                        Website
                                    </option>
                                    <option
                                        value="chat"
                                        selected={key === 'chat'}
                                        disabled={Object.keys(socials).includes(
                                            'chat'
                                        )}
                                    >
                                        Chat
                                    </option>
                                    <option
                                        value="other"
                                        selected={key.startsWith('any')}
                                    >
                                        Other
                                    </option>
                                </ModalStyled.Select>
                                <ModalStyled.Input
                                    id={`social-${key}`}
                                    type="text"
                                    onChange={(e) => changeSocial(key, e)}
                                    value={socials[key]}
                                />
                                <ModalStyled.IconButton
                                    onClick={() => deleteSocial(key)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </ModalStyled.IconButton>
                            </ModalStyled.InputWrapper>
                        )
                    })}
                    <ModalStyled.IconButton
                        onClick={() =>
                            setSocials({
                                ...socials,
                                [`any-${Object.keys(socials).length}`]: '',
                            })
                        }
                        style={{ width: 'fit-content', alignSelf: 'center' }}
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
