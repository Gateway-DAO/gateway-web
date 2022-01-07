import Modal from '../index'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { useState } from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import RichEditor from '../../RichTextEditor'
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";
import { Redirect } from "react-router-dom";

const EditCardModal = (props) => {
    const [name, setName] = useState(props.name)
    const [backgroundURL, setBackgroundURL] = useState(props.backgroundURL)
    const [youtubeURL, setyoutubeURL] = useState(props.youtubeURL || "")
    const [logoURL, setLogoURL] = useState(props.logoURL)
    const [tokenAddress, setTokenAddress] = useState(props.tokenAddress)
    const [description, setDescription] = useState(props.description)
    const [categories, setCategories] = useState(props.categories)
    const [socials, setSocials] = useState(props.socials)
    const [chains, setChains] = useState(props.chains || [])
    const [whitelistedAddresses, setWhitelistedAddresses] = useState(props.whitelistedAddresses || [""])

    const { updateDAO, data, error, loading } = useUpdateDAO()

    const submitToDB = async () => {
        const newInfo = {
            name,
            backgroundURL,
            ...(youtubeURL || {}),
            logoURL,
            tokenAddress,
            description,
            categories,
            socials: socials.map(social => {
                return {network: social.network, url: social.url}
            }),
            chains,
            whitelistedAddresses
        }

        await updateDAO({ variables: {
            input: {
                id: props.id,
                ...newInfo
            }
        } })

        props.changeDAOData(newInfo)
        props.toggle()
    }

    if (error) { return <Redirect to="/404" /> }

    const toggleCheckbox = (e) => {
        const value = e.target.value
        console.log(categories)

        if (categories.includes(value) && !e.target.checked) {
            setCategories(categories.filter((cat) => cat !== value))
        } else if (e.target.checked) {
            setCategories([...categories, value])
        }
    }
    const toggleCheckboxChain = (e)=>{
        const value = e.target.value;
        if(chains.includes(value)&& !e.target.checked){
            setChains(chains.filter((cat) => cat !== value))
        } else if (e.target.checked) {
            setChains([...chains, value])
        }
    }
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

        console.log(copy)
        
        setSocials(copy)
    }

    const changeWhitelistedAddress = (e, idx) => {
        e.preventDefault()
        let newList = [...whitelistedAddresses]
        newList[idx] = e.target.value
        setWhitelistedAddresses(newList)
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
                                        disabled={socials.map(social => social.network).includes(
                                            'twitter'
                                        )}
                                    >
                                        Twitter
                                    </option>
                                    <option
                                        value="telegram"
                                        selected={social.network === 'telegram'}
                                        disabled={socials.map(social => social.network).includes(
                                            'telegram'
                                        )}
                                    >
                                        Telegram
                                    </option>
                                    <option
                                        value="medium"
                                        selected={social.network === 'medium'}
                                        disabled={socials.map(social => social.network).includes(
                                            'medium'
                                        )}
                                    >
                                        Medium
                                    </option>
                                    <option
                                        value="github"
                                        selected={social.network === 'github'}
                                        disabled={socials.map(social => social.network).includes(
                                            'github'
                                        )}
                                    >
                                        Github
                                    </option>
                                    <option
                                        value="discord"
                                        selected={social.network === 'discord'}
                                        disabled={socials.map(social => social.network).includes(
                                            'discord'
                                        )}
                                    >
                                        Discord
                                    </option>
                                    <option
                                        value="website"
                                        selected={social.network === 'website'}
                                        disabled={socials.map(social => social.network).includes(
                                            'website'
                                        )}
                                    >
                                        Website
                                    </option>
                                    <option
                                        value="chat"
                                        selected={social.network === 'chat'}
                                        disabled={socials.map(social => social.network).includes(
                                            'chat'
                                        )}
                                    >
                                        Chat
                                    </option>
                                    <option
                                        value="other"
                                        selected={social.network.startsWith('any')}
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
                                }
                            ])
                        }
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <FaPlus />
                    </ModalStyled.IconButton>
                </ModalStyled.Fieldset>
                <ModalStyled.Fieldset marginBottom="30px">
                    <ModalStyled.Label>Chain</ModalStyled.Label>
                    <Styled.GridBox>
                        <ModalStyled.Checkbox
                            id="chain-1"
                            name="chain"
                            value="ethereum"
                            label="Ethereum"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('ethereum')}
                        />
                        <ModalStyled.Checkbox
                            id="chain-2"
                            name="chain"
                            value="solana"
                            label="Solana"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('solana')}
                        />
                        <ModalStyled.Checkbox
                            id="chain-3"
                            name="chain"
                            value="Polygon"
                            label="Polygon"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Polygon')}
                        />
                        <ModalStyled.Checkbox
                            id="chain-4"
                            name="chain"
                            value="NEAR"
                            label="NEAR"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('NEAR')}
                        />
                        <ModalStyled.Checkbox
                            id="chain-5"
                            name="chain"
                            value="Avalanche"
                            label="Avalanche"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Avalanche')}
                        />
                        <ModalStyled.Checkbox
                            id="chain-6"
                            name="chain"
                            value="Binance"
                            label="Binance"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Binance')}
                        />
                        <ModalStyled.Checkbox
                            id="chain-7"
                            name="chain"
                            value="Bitcoin"
                            label="Bitcoin"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Bitcoin')}
                        />
                        <ModalStyled.Checkbox
                            id="chain-8"
                            name="chain"
                            value="Other"
                            label="Other"
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Other')}
                        />
                    </Styled.GridBox>
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
                    <ModalStyled.Label for="whitelistedAddress">
                    Whitelisted Addresses
                    </ModalStyled.Label>
                    {whitelistedAddresses.map((address, idx) => {
                        return (
                            <ModalStyled.InputWrapper>
                                <ModalStyled.Input
                                    id={`social-${idx}`}
                                    type="text"
                                    onChange={(e) => changeWhitelistedAddress(e, idx)}
                                    value={whitelistedAddresses[idx]}
                                />
                                <ModalStyled.IconButton
                                    onClick={() => setWhitelistedAddresses(whitelistedAddresses.filter((addr, index) => idx !== index))}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </ModalStyled.IconButton>
                            </ModalStyled.InputWrapper>
                        )
                    })}
                    <ModalStyled.IconButton
                        onClick={() =>
                            setWhitelistedAddresses([...whitelistedAddresses, ''])
                        }
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <FaPlus />
                    </ModalStyled.IconButton>
                </ModalStyled.Fieldset>
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
