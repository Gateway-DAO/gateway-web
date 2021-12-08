import Modal from '../index'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { db } from '../../../api/firebase'
import { doc, getDoc, updateDoc, onSnapshot } from '@firebase/firestore'
import { useState } from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import RichEditor from '../../RichTextEditor'
import parser from "html-react-parser";

const EditCardModal = (props) => {
    const [name, setName] = useState(props.name)
    const [backgroundURL, setBackgroundURL] = useState(props.backgroundURL)
    const [youtubeURL, setyoutubeURL] = useState(props.youtubeURL || "")
    const [logoURL, setLogoURL] = useState(props.logoURL)
    const [tokenAddress, setTokenAddress] = useState(props.tokenAddress)
    const [description, setDescription] = useState(props.description)
    const [categories, setCategories] = useState(props.categories)
    const [socials, setSocials] = useState(props.socials)

    const submitToDB = async () => {
        const dao = doc(db, 'daos', props.id)

        const newInfo = {
            name,
            backgroundURL,
            youtubeURL,
            logoURL,
            tokenAddress,
            description,
            categories,
            socials,
        }

        const unsub = onSnapshot(dao, (doc) => {
            props.changeDAOData(newInfo)
            props.toggle()
        })

        await updateDoc(dao, newInfo)

        unsub()
    }

    const toggleCheckbox = (e) => {
        const value = e.target.value
        console.log(categories)

        if (categories.includes(value) && !e.target.checked) {
            setCategories(categories.filter((cat) => cat !== value))
        } else if (e.target.checked) {
            setCategories([...categories, value])
        }
    }
    
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

    return ( 
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Edit Information</ModalStyled.Header>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="name">Name</ModalStyled.Label>
                    <ModalStyled.Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your DAO name"
                        value={name}
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="logoURL">
                        Logo URL
                    </ModalStyled.Label>
                    <ModalStyled.Input
                        onChange={(e) => setLogoURL(e.target.value)}
                        type="text"
                        id="logoURL"
                        name="logoURL"
                        placeholder="Your DAO logo URL"
                        value={logoURL}
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="backgroundURL">
                        Background URL
                    </ModalStyled.Label>
                    <ModalStyled.Input
                        onChange={(e) => setBackgroundURL(e.target.value)}
                        type="text"
                        id="backgroundURL"
                        name="backgroundURL"
                        placeholder="Your DAO background URL"
                        value={backgroundURL}
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="backgroundURL">
                        Youtube URL
                    </ModalStyled.Label>
                    <ModalStyled.Input
                        onChange={(e) => setyoutubeURL(e.target.value)}
                        type="text"
                        id="backgroundURL"
                        name="youtubeURL"
                        placeholder="Your Youtube Video URL"
                        value={youtubeURL}
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="description">
                        Description
                    </ModalStyled.Label>
                    <RichEditor set={setDescription} value={description} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset marginBottom="30px">
                    <ModalStyled.Label>Categories</ModalStyled.Label>
                    <Styled.GridBox>
                        <ModalStyled.Checkbox
                            id="category-1"
                            name="category"
                            value="Protocol"
                            label="Protocol"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Protocol')}
                        />
                        <ModalStyled.Checkbox
                            id="category-2"
                            name="category"
                            value="DeFi"
                            label="DeFi"
                            onChange={toggleCheckbox}
                            checked={categories.includes('DeFi')}
                        />
                        <ModalStyled.Checkbox
                            id="category-3"
                            name="category"
                            value="Social"
                            label="Social"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Social')}
                        />
                        <ModalStyled.Checkbox
                            id="category-4"
                            name="category"
                            value="Grant"
                            label="Grant"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Grant')}
                        />
                        <ModalStyled.Checkbox
                            id="category-5"
                            name="category"
                            value="Investment"
                            label="Investment"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Investment')}
                        />
                        <ModalStyled.Checkbox
                            id="category-6"
                            name="category"
                            value="Collector"
                            label="Collector"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Collector')}
                        />
                        <ModalStyled.Checkbox
                            id="category-7"
                            name="category"
                            value="Framework"
                            label="Framework"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Framework')}
                        />
                        <ModalStyled.Checkbox
                            id="category-8"
                            name="category"
                            value="Gaming"
                            label="Gaming"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Gaming')}
                        />
                    </Styled.GridBox>
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

                {/*
                <ModalStyled.Fieldset marginBottom="30px">
                    <ModalStyled.Label>Level</ModalStyled.Label>
                    <Styled.GridBox onChange={e => setLevel(e.target.value)}>
                        <ModalStyled.Radio id="level-1" name="level" value="Novice" label="Novice" checked={level === "Novice"} />
                        <ModalStyled.Radio id="level-2" name="level" value="Warrior" label="Warrior" checked={level === "Warrior"} />
                        <ModalStyled.Radio id="level-3" name="level" value="Master" label="Master" checked={level === "Master"} />
                        <ModalStyled.Radio id="level-4" name="level" value="Champion" label="Champion" checked={level === "Champion"} />
                        <ModalStyled.Radio id="level-5" name="level" value="Legend" label="Legend" checked={level === "Legend"} />
                    </Styled.GridBox>
                </ModalStyled.Fieldset>
                */}

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="tokenAddress">
                        Token Address
                    </ModalStyled.Label>
                    <ModalStyled.Input
                        id="tokenAddress"
                        type="text"
                        onChange={(e) => setTokenAddress(e.target.value)}
                        value={tokenAddress}
                    />
                </ModalStyled.Fieldset>

                <ModalStyled.Button
                    id="submit_msg"
                    type="button"
                    onClick={submitToDB}
                >
                    Save Changes
                </ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default EditCardModal
