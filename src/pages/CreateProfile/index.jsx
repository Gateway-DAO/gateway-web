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

// Storage
import { storage } from '../../api/firebase'
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage'

// Database
import { db } from '../../api/firebase'
import { collection, query, where, getDocs } from '@firebase/firestore'
import { daos } from '../../api/algolia'

const CreateProfile = () => {
    const { loggedIn, userInfo, updateUserInfo } = useAuth()
    const history = useHistory()

    // Form state
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')
    const [picture, setPicture] = useState(null)
    const [imgData, setImgData] = useState(null)
    const [socials, setSocials] = useState({})
    const [membership, setMembership] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchRes, setSearchRes] = useState([])

    const onChangePicture = (e) => {
        if (e.target.files[0]) {
            console.log('picture: ', e.target.files)
            setPicture(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setImgData(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
        }
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

    const uploadPfp = async () => {
        const file = picture
        const pfpRef = ref(
            storage,
            `/images/${userInfo.uid}/profile.${file.name.split('.').pop()}`
        )
        await uploadBytes(pfpRef, file)
        return await getDownloadURL(pfpRef)
    }

    const onSave = async () => {
        try {
            const pfpURL = await uploadPfp()
            await updateUserInfo(
                {
                    name,
                    username: username.toLowerCase(),
                    bio,
                    socials,
                    daos: membership.map((dao) => dao.id),
                    pfp: pfpURL,
                    init: true,
                },
                () => history.push('/profile')
            )
        } catch (err) {
            alert('An error occurred. Please try again later!')
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

    // Listeners
    useEffect(() => {
        const getMemberships = async () => {
            const address = userInfo.uid
            Moralis.start({
                serverUrl: 'https://tppdzaw584lv.usemoralis.com:2053/server',
                appId: 'PHwU3Sg5svxT49hbICB9JEtIsdVXsx1wFkOxyfwJ',
            })

            const balances = (
                await Moralis.Web3API.account.getTokenBalances({ address })
            ).map((val) => {
                return { balance: val.balance, tokenAddress: val.token_address }
            })

            console.log(balances)

            balances.forEach(async (balance) => {
                const daoRef = collection(db, 'daos')
                const q = query(
                    daoRef,
                    where('tokenAddress', 'in', [
                        ethers.utils.getAddress(balance.tokenAddress),
                        balance.tokenAddress,
                    ])
                )
                const dao = (await getDocs(q)).docs[0]
                const info = dao
                    ? {
                          name: dao.data().name,
                          id: dao.id,
                          logoURL: dao.data().logoURL,
                      }
                    : {}
                dao &&
                    !membership.includes(info) &&
                    setMembership([...membership, info])
            })
        }

        loggedIn && !!userInfo.uid && getMemberships()
    }, [loggedIn])

    useEffect(() => {
        const clear = setTimeout(() => {
            !!searchTerm &&
                daos.search(searchTerm).then((res) => {
                    const query = res.hits
                    const results = query.slice(0, 5).map((dao) => {
                        return {
                            name: dao.name,
                            id: dao.objectID,
                            logoURL: dao.logoURL,
                        }
                    })
                    setSearchRes(results)
                    console.log(results)
                })
        }, 2000)

        return () => clearTimeout(clear)
    }, [searchTerm])

    return userInfo && userInfo.init ? (
        <Redirect to="/profile" />
    ) : (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.MainText>Create Profile</Styled.MainText>

                <Styled.FormBox>
                    <Styled.Fieldset>
                        <Styled.Label for="name">Display name</Styled.Label>
                        <Styled.Input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                        />
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="username">Username</Styled.Label>
                        <Styled.Input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            name="username"
                        />
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="Bio">Bio</Styled.Label>
                        <Styled.Textarea
                            height="100px"
                            id="Bio"
                            onChange={(e) => setBio(e.target.value)}
                        ></Styled.Textarea>
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="pfp">Profile Picture</Styled.Label>
                        <Styled.Input
                            onChange={onChangePicture}
                            type="file"
                            id="pfp"
                            name="pfp"
                            accept="image/png, image/jpeg"
                        />
                        {!!picture && <img src={imgData} alt="upload image" />}
                    </Styled.Fieldset>

                    <Styled.Fieldset>
                        <Styled.Label for="socials">Socials</Styled.Label>
                        {Object.keys(socials).map((key, idx) => {
                            return (
                                <Styled.InputWrapper>
                                    <Styled.Select
                                        style={{ marginRight: '10px' }}
                                        onChange={(e) =>
                                            changeSocialName(
                                                key,
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option
                                            value="twitter"
                                            selected={key === 'twitter'}
                                            disabled={Object.keys(
                                                socials
                                            ).includes('twitter')}
                                        >
                                            Twitter
                                        </option>
                                        <option
                                            value="telegram"
                                            selected={key === 'telegram'}
                                            disabled={Object.keys(
                                                socials
                                            ).includes('telegram')}
                                        >
                                            Telegram
                                        </option>
                                        <option
                                            value="medium"
                                            selected={key === 'medium'}
                                            disabled={Object.keys(
                                                socials
                                            ).includes('medium')}
                                        >
                                            Medium
                                        </option>
                                        <option
                                            value="github"
                                            selected={key === 'github'}
                                            disabled={Object.keys(
                                                socials
                                            ).includes('github')}
                                        >
                                            Github
                                        </option>
                                        <option
                                            value="discord"
                                            selected={key === 'discord'}
                                            disabled={Object.keys(
                                                socials
                                            ).includes('discord')}
                                        >
                                            Discord
                                        </option>
                                        <option
                                            value="website"
                                            selected={key === 'website'}
                                            disabled={Object.keys(
                                                socials
                                            ).includes('website')}
                                        >
                                            Website
                                        </option>
                                        <option
                                            value="chat"
                                            selected={key === 'chat'}
                                            disabled={Object.keys(
                                                socials
                                            ).includes('chat')}
                                        >
                                            Chat
                                        </option>
                                        <option
                                            value="other"
                                            selected={key.startsWith('any')}
                                        >
                                            Other
                                        </option>
                                    </Styled.Select>
                                    <Styled.Input
                                        id={`social-${key}`}
                                        type="text"
                                        onChange={(e) => changeSocial(key, e)}
                                        value={socials[key]}
                                    />
                                    <Styled.IconButton
                                        onClick={() => deleteSocial(key)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        <FaTrashAlt />
                                    </Styled.IconButton>
                                </Styled.InputWrapper>
                            )
                        })}
                        <Styled.IconButton
                            onClick={() =>
                                setSocials({
                                    ...socials,
                                    [`any-${Object.keys(socials).length}`]: '',
                                })
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
                        <Styled.SubLabel>
                            Membership based on token holdings.
                        </Styled.SubLabel>
                        <Styled.MembershipBox>
                            {membership.map((dao) => {
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
                        <Styled.Label for="dao-search">
                            Your dao/community doesn’t have a token?
                        </Styled.Label>
                        <Styled.Input
                            id="dao-search"
                            name="dao-search"
                            type="search"
                            placeholder="Search"
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

                    <Styled.Button onClick={onSave}>Save</Styled.Button>
                </Styled.FormBox>
            </Styled.MainBox>
        </Styled.Container>
    )
}

export default CreateProfile
