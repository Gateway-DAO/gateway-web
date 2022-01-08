// Libraries/components
import React from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'

// Styling
import * as Styled from './style'

// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RichEditor from '../../components/RichTextEditor'
import SubmitPage from './submitPage'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../../contexts/UserContext'
import { useCreateDAOWithChannels } from '../../api/database/useCreateDAO'
import useFileUpload from '../../api/database/useFileUpload'

// Utils
import space from '../../utils/canvas'
import { v4 as uuidv4 } from 'uuid'

const AddCommunity = () => {
    const { userInfo, loggedIn } = useAuth()
    const { uploadFile } = useFileUpload()

    const [name, setName] = useState('')
    const [tokenAddress, setTokenAddress] = useState('')
    const [whitelistedAddresses, setWhitelistedAddresses] = useState([
        loggedIn ? userInfo.wallet : '',
    ])
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [socials, setSocials] = useState([
        {
            network: 'twitter',
            url: '',
        },
        {
            network: 'discord',
            url: '',
        },
    ])
    const [chains, setChains] = useState([])
    const [bgFile, setBGFile] = useState()
    const [logoFile, setLogoFile] = useState()
    const [over, setover] = useState(false)
    const [bghover, setbghover] = useState(false)
    const $input = useRef(null)
    const $bgImage = useRef(null)
    const [spaceId, setSpaceId] = useState('')
    const { createDAO, data, error, called, loading } =
        useCreateDAOWithChannels()

    const [logoImg, setLogoImg] = useState(null)
    const [BGImg, setBGImg] = useState(null)

    useEffect(() => {
        if (loggedIn) {
            space(window.innerHeight, window.innerWidth)
        }
    }, [window.innerHeight, window.innerWidth])

    const toggleCheckbox = (e) => {
        const value = e.target.value
        console.log(categories)

        if (categories.includes(value) && !e.target.checked) {
            setCategories(categories.filter((cat) => cat !== value))
        } else if (e.target.checked) {
            setCategories([...categories, value])
        }
    }

    const toggleCheckboxChain = (e) => {
        const value = e.target.value
        if (chains.includes(value) && !e.target.checked) {
            setChains(chains.filter((cat) => cat !== value))
        } else if (e.target.checked) {
            setChains([...chains, value])
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

    const history = useHistory()
    const submitToDB = async () => {
        // DAO ID
        const id = uuidv4()

        // Upload files to S3
        const logoURL = await uploadFile(
            `daos/${id}/logo.${logoFile.name.split('.').pop()}`,
            logoFile
        )
        const backgroundURL = await uploadFile(
            `daos/${id}/logo.${bgFile.name.split('.').pop()}`,
            bgFile
        )

        const newInfo = {
            id,
            dao: name
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[-]+/g, '-')
                .replace(/[^\w-]+/g, ''),
            name,
            backgroundURL,
            logoURL,
            tokenAddress,
            description,
            categories,
            chains,
            socials,
            whitelistedAddresses,
            snapshotID: spaceId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        await createDAO({
            variables: {
                input: newInfo,
            },
        })
    }

    if (error) {
        console.log(error)
        return <Redirect to="/404" />
    }

    const removeBackgroundImage = () => setBGFile(null)

    const removeLogoFile = () => setLogoFile('')

    const changeWhitelistedAddress = (e, idx) => {
        e.preventDefault()
        let newList = [...whitelistedAddresses]
        newList[idx] = e.target.value
        setWhitelistedAddresses(newList)
    }

    if (!loggedIn) {
        return <Redirect to="/sign-in" />
    }

    return (data && called) ? (
        <SubmitPage
            dao={name
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[-]+/g, '-')
                .replace(/[^\w-]+/g, '')}
        />
    ) : (
        <Styled.Page>
            <Header />
            <Styled.Container>
                <Styled.SpaceBox id="space-canvas" />
                <Styled.Heading>Add your Community</Styled.Heading>

                <Styled.Fieldset>
                    <Styled.Label for="name">Name</Styled.Label>
                    <Styled.Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Community Name"
                        value={name}
                        required
                    />
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="logo">Logo</Styled.Label>

                    {!logoFile ? (
                        <Styled.DragArea
                            hover={over}
                            for="uploadFile"
                            onClick={() => {
                                $input.current.click()
                            }}
                            onDrop={(e) => {
                                e.preventDefault()
                                e.persist()
                                setLogoImg(
                                    URL.createObjectURL(e.dataTransfer.files[0])
                                )
                                setLogoFile(e.dataTransfer.files[0])
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
                            <Styled.Header hover={over} className="header">
                                <Styled.Span> Upload </Styled.Span>or Drag your
                                image here
                            </Styled.Header>

                            {/* <Styled.button className="button">
                            Browse File 
                        </Styled.button> */}
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                ref={$input}
                                onChange={(e) => {
                                    setLogoImg(
                                        URL.createObjectURL(e.target.files[0])
                                    )
                                    setLogoFile(e.target.files[0])
                                }}
                                required
                            ></input>
                        </Styled.DragArea>
                    ) : (
                        <Styled.Background image={logoImg}>
                            <Styled.Cross onClick={removeLogoFile}>
                                {/* <ImCross /> */}+
                            </Styled.Cross>

                            {/* <Styled.Image src={files} >
                    
                    </Styled.Image>   */}
                        </Styled.Background>
                    )}
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="backgroundURL">Background</Styled.Label>
                    {/* <Styled.Input
                    onChange={(e) => setBackgroundURL(e.target.value)}
                    type="text"
                    id="backgroundURL"
                    name="backgroundURL"
                    placeholder="Your Community  background URL"
                    value={backgroundURL}
                /> */}
                    {!bgFile ? (
                        <Styled.DragArea
                            hover={bghover}
                            for="backGroundImageUpload"
                            onClick={() => {
                                $bgImage.current.click()
                            }}
                            onDrop={(e) => {
                                e.preventDefault()
                                e.persist()
                                setBGImg(
                                    URL.createObjectURL(e.dataTransfer.files[0])
                                )
                                setBGFile(e.dataTransfer.files[0])
                                setbghover(false)
                            }}
                            onDragOver={(e) => {
                                e.preventDefault()
                                setbghover(true)
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault()
                                setbghover(false)
                            }}
                        >
                            <Styled.Header hover={bghover} className="header">
                                <Styled.Span> Upload </Styled.Span>or Drag your
                                image here
                            </Styled.Header>

                            {/* <Styled.button className="button">
                            Browse File 
                        </Styled.button> */}
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                ref={$bgImage}
                                onChange={(e) => {
                                    setBGImg(
                                        URL.createObjectURL(e.target.files[0])
                                    )
                                    setBGFile(e.target.files[0])
                                }}
                                required
                            ></input>
                        </Styled.DragArea>
                    ) : (
                        <Styled.Background image={BGImg}>
                            <Styled.Cross onClick={removeBackgroundImage}>
                                {/* <ImCross /> */}+
                            </Styled.Cross>
                            {/* <Styled.Image  src={backGroundImage} >
                    
                    </Styled.Image>   */}
                        </Styled.Background>
                    )}
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="description">Description</Styled.Label>
                    <RichEditor set={setDescription} value={description} />
                </Styled.Fieldset>

                <Styled.Fieldset marginBottom="30px">
                    <Styled.Label>Categories</Styled.Label>
                    <Styled.GridBox>
                        <Styled.Checkbox
                            id="category-1"
                            name="category"
                            value="Protocol"
                            label="Protocol"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Protocol')}
                        />
                        <Styled.Checkbox
                            id="category-2"
                            name="category"
                            value="DeFi"
                            label="DeFi"
                            onChange={toggleCheckbox}
                            checked={categories.includes('DeFi')}
                        />
                        <Styled.Checkbox
                            id="category-3"
                            name="category"
                            value="Social"
                            label="Social"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Social')}
                        />
                        <Styled.Checkbox
                            id="category-4"
                            name="category"
                            value="Grant"
                            label="Grant"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Grant')}
                        />
                        <Styled.Checkbox
                            id="category-5"
                            name="category"
                            value="Investment"
                            label="Investment"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Investment')}
                        />
                        <Styled.Checkbox
                            id="category-6"
                            name="category"
                            value="Collector"
                            label="Collector"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Collector')}
                        />
                        <Styled.Checkbox
                            id="category-7"
                            name="category"
                            value="Framework"
                            label="Framework"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Framework')}
                        />
                        <Styled.Checkbox
                            id="category-8"
                            name="category"
                            value="Gaming"
                            label="Gaming"
                            onChange={toggleCheckbox}
                            checked={categories.includes('Gaming')}
                        />
                    </Styled.GridBox>
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="socials">Socials</Styled.Label>
                    {socials.map((social, idx) => {
                        return (
                            <Styled.InputWrapper>
                                <Styled.Select
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
                                </Styled.Select>
                                <Styled.Input
                                    id={`social-${social.network}`}
                                    type="text"
                                    onChange={(e) => changeSocial(idx, e)}
                                    value={social.url}
                                    placeholder="Add your network URL"
                                    required
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

                <Styled.Fieldset marginBottom="30px">
                    <Styled.Label>Chain</Styled.Label>
                    <Styled.GridBox>
                        <Styled.Checkbox
                            id="chain-1"
                            name="chain"
                            value="ethereum"
                            label="Ethereum"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Ethereum')}
                        />
                        <Styled.Checkbox
                            id="chain-2"
                            name="chain"
                            value="solana"
                            label="Solana"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Solana')}
                        />
                        <Styled.Checkbox
                            id="chain-3"
                            name="chain"
                            value="Polygon"
                            label="Polygon"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Polygon')}
                        />
                        <Styled.Checkbox
                            id="chain-4"
                            name="chain"
                            value="NEAR"
                            label="NEAR"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('NEAR')}
                        />
                        <Styled.Checkbox
                            id="chain-5"
                            name="chain"
                            value="Avalanche"
                            label="Avalanche"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Avalanche')}
                        />
                        <Styled.Checkbox
                            id="chain-6"
                            name="chain"
                            value="Binance"
                            label="Binance"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Binance')}
                        />
                        <Styled.Checkbox
                            id="chain-7"
                            name="chain"
                            value="Bitcoin"
                            label="Bitcoin"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Bitcoin')}
                        />
                        <Styled.Checkbox
                            id="chain-8"
                            name="chain"
                            value="Other"
                            label="Other"
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Other')}
                        />
                    </Styled.GridBox>
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="whitelistedAddress">
                        Whitelisted Addresses
                    </Styled.Label>
                    {whitelistedAddresses.map((address, idx) => {
                        return (
                            <Styled.InputWrapper>
                                <Styled.Input
                                    id={`social-${idx}`}
                                    type="text"
                                    onChange={(e) =>
                                        changeWhitelistedAddress(e, idx)
                                    }
                                    value={whitelistedAddresses[idx]}
                                    required
                                />
                                <Styled.IconButton
                                    onClick={() =>
                                        setWhitelistedAddresses(
                                            whitelistedAddresses.filter(
                                                (addr, index) => idx !== index
                                            )
                                        )
                                    }
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </Styled.IconButton>
                            </Styled.InputWrapper>
                        )
                    })}
                    <Styled.IconButton
                        onClick={() =>
                            setWhitelistedAddresses([
                                ...whitelistedAddresses,
                                '',
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
                    <Styled.Label for="tokenAddress">
                        Token Address
                    </Styled.Label>
                    <Styled.Input
                        id="tokenAddress"
                        type="text"
                        onChange={(e) => setTokenAddress(e.target.value)}
                        value={tokenAddress}
                        required
                    />
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="SpaceId">Snapshot Space Id</Styled.Label>
                    <Styled.Input
                        id="SpaceId"
                        type="text"
                        onChange={(e) => setSpaceId(e.target.value)}
                        value={spaceId}
                        required
                    />
                </Styled.Fieldset>

                <Styled.Button id="submit_msg" onClick={submitToDB}>
                    Save Changes
                </Styled.Button>
            </Styled.Container>
            <Footer />
        </Styled.Page>
    )
}

export default AddCommunity
