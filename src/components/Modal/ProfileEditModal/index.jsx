// Styling
import * as Styled from './style'
import * as ModalStyled from '../style'

// Components
import Modal from '../index'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import Loader from '../../Loader'

// Hooks
import { useAuth } from '../../../contexts/UserContext'
import { useEffect, useState } from 'react'
import { useFileUpload } from '../../../api/database/useFileUpload'
import useSearchDAO from '../../../api/database/useSearchDAO'

const ProfileEditModal = (props) => {
    const [name, setName] = useState(props.name || "")
    const [bio, setBio] = useState(props.bio || "")
    const [socials, setSocials] = useState(props.socials || [{network: "any-0", url: ""}])
    const [membership, setMembership] = useState(props.membership || [])
    const [pfp, setPfp] = useState()
    const [updateLoading, setUpdateLoading] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [searchRes, setSearchRes] = useState([])

    const show = props.show
    const { loggedIn, userInfo, updateUserInfo } = useAuth()
    const { uploadFile } = useFileUpload()

    // Search DAO
    const {
        loading: searchLoading,
        data: searchData,
        error: searchError,
    } = useSearchDAO({
        variables: {
            filter: {
                or: [
                    { dao: { wildcard: `*${searchTerm}*` } },
                    { name: { wildcard: `*${searchTerm}*` } },
                    { description: { wildcard: `*${searchTerm}*` } },
                ],
            },
        },
    })

    const uploadPfp = async () => {
        const file = pfp
        return await uploadFile(
            `users/${userInfo.id}/profile.${file.name.split('.').pop()}`,
            file
        )
    }

    const onSave = async () => {
        try {
            setUpdateLoading(true)
            const pfpURL = pfp && await uploadPfp()
            await updateUserInfo({
                name,
                bio,
                socials: socials.map(social => {
                    return {network: social.network, url: social.url}
                }),
                daos_ids: membership.map(dao => dao.dao),
                pfp: pfpURL,
            })
        } catch (err) {
            alert('An error occurred. Please try again later!')
            console.log(err)
        }

        setUpdateLoading(false)
        props.toggle(!props.show)
    }

    useEffect(() => {
        const clear = setTimeout(() => {
            !!searchTerm &&
                searchTerm !== searchQuery &&
                setSearchQuery(searchTerm)

            if (!!searchData && !searchLoading) {
                const query = searchData.searchDAOs.items
                const results = query.slice(0, 5).map((dao) => {
                    return {
                        name: dao.name,
                        dao: dao.dao,
                        logoURL: dao.logoURL,
                    }
                })
                setSearchRes(results)
            }
        }, 1000)

        return () => clearTimeout(clear)
    }, [searchTerm, searchLoading, searchData])

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

    const addDAO = (dao) => {
        !membership.includes(dao) && setMembership([...membership, dao])
        setSearchRes(searchRes.filter((res) => res.name !== dao.name))
    }

    const removeDAO = (name) => {
        const new_membership = membership.filter((dao) => dao.name !== name)
        setMembership(new_membership)
        searchRes.length != 5 &&
            !searchRes.includes(searchRes.filter((dao) => dao.name === name)) &&
            setSearchRes([
                ...searchRes,
                membership.filter((dao) => dao.name === name)[0],
            ])
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
                                        selected={social.network.startsWith("any")}
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

                <ModalStyled.Fieldset>
                        <ModalStyled.Label for="membership">Membership</ModalStyled.Label>
                        <Styled.MembershipBox>
                            {!!membership.length && membership.map((dao) => {
                                return (
                                    <Styled.MembershipIcon>
                                        <Styled.MembershipImg
                                            src={dao.logoURL}
                                            alt={dao.name}
                                        />
                                        <Styled.MembershipRemove
                                            size={12}
                                            onClick={() => removeDAO(dao.name)}
                                        />
                                    </Styled.MembershipIcon>
                                )
                            })}
                        </Styled.MembershipBox>
                    </ModalStyled.Fieldset>

                    <ModalStyled.Fieldset>
                        <ModalStyled.Input
                            id="dao-search"
                            name="dao-search"
                            type="text"
                            placeholder="Search by DAO name"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {!!searchRes.length && (
                            <Styled.SearchBox>
                                {searchRes.map((res, idx) => (
                                    <Styled.SearchItem
                                        onClick={() => addDAO(res)}
                                        divider={idx !== 0}
                                    >
                                        {res.name}
                                    </Styled.SearchItem>
                                ))}
                            </Styled.SearchBox>
                        )}
                    </ModalStyled.Fieldset>

                <ModalStyled.Button
                    id="submit_msg"
                    type="button"
                    onClick={onSave}
                >
                    {updateLoading && <Loader color="white" />}
                    Save Changes
                </ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default ProfileEditModal
