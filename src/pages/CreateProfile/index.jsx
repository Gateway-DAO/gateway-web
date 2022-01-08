import React, { useEffect, useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import Moralis from 'moralis'
// import Moralis from "react-moralis"
import { ethers } from 'ethers'

// Styling
import * as Styled from './style'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'

// Components
import Header from '../../components/Header'
import { useAuth } from '../../contexts/UserContext'

// AWS
import { useSearchDAO } from '../../api/database/useSearchDAO'
import { useListDAOs } from '../../api/database/useGetDAO'
import Amplify from 'aws-amplify'
import awsconfig from '../../aws-exports'
import { useFileUpload } from '../../api/database/useFileUpload'
import { useRef } from 'react'

Amplify.configure(awsconfig)

const CreateProfile = () => {
    const { loggedIn, userInfo, updateUserInfo } = useAuth()
    const history = useHistory()

    // Form state
    const [name, setName] = useState(null)
    const [username, setUsername] = useState(null)
    const [bio, setBio] = useState(null)
    const [picture, setPicture] = useState(null)
    const [imgData, setImgData] = useState(null)
    const [socials, setSocials] = useState([])
    const [membership, setMembership] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [searchRes, setSearchRes] = useState([])

    // Picture drag
    const $input = useRef(null)
    const [over, setOver] = useState(false)

    const {
        loading: listLoading,
        data: listData,
        error: listError,
    } = useListDAOs()

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

    // Upload file hook
    const { uploadFile, imgLoading } = useFileUpload()

    const onChangePicture = (e) => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setImgData(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }

    // Handlers
    const changeSocial = (idx, e) => {
        e.preventDefault()
        let copy = [...socials]
        copy[idx].url = e.target.value
        setSocials(copy)
    }

    const deleteSocial = (idx) =>
        setSocials(socials.filter((social, i) => i !== idx))

    const changeSocialName = (idx, newName) => {
        let copy = socials.map((social, i) => {
            if (i === idx) {
                return {
                    ...social,
                    network: newName,
                }
            }

            return social
        })
        setSocials(copy)
    }

    const uploadPfp = async () => {
        const file = picture
        // const { key } = await Storage.put(`users/${userInfo.wallet}/profile.${file.name.split('.').pop()}`, file)
        return await uploadFile(
            `users/${userInfo.id}/profile.${file.name.split('.').pop()}`,
            file
        )
    }

    const onSave = async (e) => {
        e.preventDefault()
        try {
            const pfpURL = await uploadPfp()
            await updateUserInfo({
                name,
                username: username.toLowerCase(),
                bio,
                socials,
                daos_ids: membership.map((dao) => dao.id),
                pfp: pfpURL,
                init: true,
            })
        } catch (err) {
            alert('An error occurred. Please try again later!')
            console.log(err)
        }
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
                        id: dao.dao,
                        logoURL: dao.logoURL,
                    }
                })
                setSearchRes(results)
            }
        }, 2000)

        return () => clearTimeout(clear)
    }, [searchTerm, searchLoading, searchData])

    return userInfo && userInfo.init ? (
        <Redirect to="/profile" />
    ) : (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.MainText>Create Profile</Styled.MainText>

                <Styled.FormBox onSubmit={onSave}>
                    <Styled.Fieldset>
                        <Styled.Label for="name">Display name</Styled.Label>
                        <Styled.Input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="username">Username</Styled.Label>
                        <Styled.Input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                        />
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="Bio">Bio</Styled.Label>
                        <Styled.Textarea
                            height="100px"
                            id="Bio"
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell about yourself"
                            required
                        ></Styled.Textarea>
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                    <Styled.Label for="logo">Profile Picture</Styled.Label>
                    {/* <Styled.Input
                        onChange={(e) => setLogoURL(e.target.value)}
                        type="text"
                        id="logoURL"
                        name="logoURL"
                        placeholder="Your Community  logo URL"
                        value={logoURL}
                    /> */}

                    {!picture ? (
                        <Styled.DragArea
                            hover={over}
                            for="uploadFile"
                            onClick={() => {
                                $input.current.click()
                            }}
                            onDrop={(e) => {
                                e.preventDefault()
                                e.persist()
                                setPicture(e.dataTransfer.files[0])
                                setOver(false)
                            }}
                            onDragOver={(e) => {
                                e.preventDefault()
                                setOver(true)
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault()
                                setOver(false)
                            }}
                        >
                            <Styled.DragHeader hover={over} className="header">
                                <Styled.Span>Upload</Styled.Span> or Drag your
                                image here
                            </Styled.DragHeader>

                            {/* <Styled.button className="button">
                                Browse File 
                            </Styled.button> */}
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                ref={$input}
                                onChange={(e) => setPicture(e.target.files[0])}
                                required
                            ></input>
                        </Styled.DragArea>
                    ) : (
                        <Styled.Background
                            image={URL.createObjectURL(picture)}
                        >
                            <Styled.Cross onClick={() => setPicture(null)}>+</Styled.Cross>
                        </Styled.Background>
                    )}
                </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="socials">Socials</Styled.Label>
                        {socials.map((social, idx) => {
                            return (
                                <Styled.InputWrapper>
                                    <Styled.Select
                                        style={{ marginRight: '10px' }}
                                        onChange={(e) =>
                                            changeSocialName(
                                                idx,
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option
                                            value="twitter"
                                            selected={
                                                social.network === 'twitter'
                                            }
                                            disabled={socials
                                                .map((social) => social.network)
                                                .includes('twitter')}
                                        >
                                            Twitter
                                        </option>
                                        <option
                                            value="telegram"
                                            selected={
                                                social.network === 'telegram'
                                            }
                                            disabled={socials
                                                .map((social) => social.network)
                                                .includes('telegram')}
                                        >
                                            Telegram
                                        </option>
                                        <option
                                            value="medium"
                                            selected={
                                                social.network === 'medium'
                                            }
                                            disabled={socials
                                                .map((social) => social.network)
                                                .includes('medium')}
                                        >
                                            Medium
                                        </option>
                                        <option
                                            value="github"
                                            selected={
                                                social.network === 'github'
                                            }
                                            disabled={socials
                                                .map((social) => social.network)
                                                .includes('github')}
                                        >
                                            Github
                                        </option>
                                        <option
                                            value="discord"
                                            selected={
                                                social.network === 'discord'
                                            }
                                            disabled={socials
                                                .map((social) => social.network)
                                                .includes('discord')}
                                        >
                                            Discord
                                        </option>
                                        <option
                                            value="website"
                                            selected={
                                                social.network === 'website'
                                            }
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
                                    </Styled.Select>
                                    <Styled.Input
                                        id={`social-${social.network}`}
                                        type="text"
                                        onChange={(e) => changeSocial(idx, e)}
                                        value={social.url}
                                    />
                                    <Styled.IconButton
                                        onClick={() => deleteSocial(idx)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        <FaTrashAlt />
                                    </Styled.IconButton>
                                </Styled.InputWrapper>
                            )
                        })}
                        <Styled.IconButton
                            onClick={() =>
                                setSocials([
                                    ...socials,
                                    {
                                        network: `any-${socials.length}`,
                                        url: '',
                                    },
                                ])
                            }
                            style={{
                                width: 'fit-content',
                                alignSelf: 'center',
                            }}
                        >
                            <FaPlus />
                        </Styled.IconButton>
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="membership">Membership</Styled.Label>
                        <Styled.MembershipBox>
                            {membership.length && membership.map((dao) => {
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
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Input
                            id="dao-search"
                            name="dao-search"
                            type="text"
                            placeholder="Search by DAO name"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchRes.length && (
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
                    </Styled.Fieldset>

                    <Styled.Button type="submit">Save</Styled.Button>
                </Styled.FormBox>
            </Styled.MainBox>
        </Styled.Container>
    )
}

export default CreateProfile
