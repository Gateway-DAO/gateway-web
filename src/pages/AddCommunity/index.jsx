import React,{useState,useEffect} from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as Styled from "./style";
import space from '../../utils/canvas'
import RichEditor  from "../../components/RichTextEditor";
import {FaTrashAlt,FaPlus} from 'react-icons/fa'
// import {DAORef} from '../../api/db'
import { db } from '../../api/firebase'
import { doc, getDoc, updateDoc, onSnapshot,setDoc } from '@firebase/firestore'
const AddCommunity = ()=>{
    const [name,setName] = useState("")
    const [backgroundURL, setBackgroundURL] = useState("")
    const [youtubeURL, setyoutubeURL] = useState("")
    const [logoURL, setLogoURL] = useState("")
    const [tokenAddress, setTokenAddress] = useState("")
    const [whitelistedAddress, setwhitelistedAddress] = useState("")
    const [description, setDescription] = useState("Its a rich editor")
    const [categories, setCategories] = useState([])
    const [socials, setSocials] = useState([])
    const [chains, setChains] = useState([])

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

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

    const changeChain = (key, e) => {
        e.preventDefault()
        setChains({ ...chains, [key]: e.target.value })
    }

    const deleteChain = (key) => {
        const chainCopy = Object.assign({}, chains)
        delete chainCopy[key]
        setChains(chainCopy)
    }

    const changeChainName = (oldKey, newKey) => {
        const chainCopy = {}
        delete Object.assign(chainCopy, chains, {
            [newKey]: chains[oldKey],
        })[oldKey]
        setSocials(chainCopy)
    
    }

    const history = useHistory();
    const submitToDB = async () => {
        // const Community  = doc(db, 'daos', name)

        const newInfo = {
            name,
            backgroundURL,
            youtubeURL,
            logoURL,
            tokenAddress,
            description,
            categories,
            socials,
            whitelistedAddress
        }
        
        const daoRef = doc(db, 'daos', name)
        await setDoc(daoRef, newInfo)
        history.push(`/new-community/${name}`);
    }

    return(
        <Styled.Page>
            <Header />
            <Styled.Container>
                <Styled.SpaceBox id="space-canvas" />
                <Styled.Heading>
                    Add your Community
                </Styled.Heading>
                <Styled.Fieldset>
                <Styled.Label for="name">Name</Styled.Label>
                    <Styled.Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Community  name"
                        value={name}
                    />
                </Styled.Fieldset>
                <Styled.Fieldset>
                    <Styled.Label for="logoURL">
                        Logo URL
                    </Styled.Label>
                    <Styled.Input
                        onChange={(e) => setLogoURL(e.target.value)}
                        type="text"
                        id="logoURL"
                        name="logoURL"
                        placeholder="Your Community  logo URL"
                        value={logoURL}
                    />
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="backgroundURL">
                        Background URL
                    </Styled.Label>
                    <Styled.Input
                        onChange={(e) => setBackgroundURL(e.target.value)}
                        type="text"
                        id="backgroundURL"
                        name="backgroundURL"
                        placeholder="Your Community  background URL"
                        value={backgroundURL}
                    />
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="backgroundURL">
                        Youtube URL
                    </Styled.Label>
                    <Styled.Input
                        onChange={(e) => setyoutubeURL(e.target.value)}
                        type="text"
                        id="backgroundURL"
                        name="youtubeURL"
                        placeholder="Your Youtube Video URL"
                        value={youtubeURL}
                    />
                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="description">
                        Description
                    </Styled.Label>
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
                    {Object.keys(socials).map((key, idx) => {
                        return (
                            <Styled.InputWrapper>
                                <Styled.Select
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
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <FaPlus />
                    </Styled.IconButton>
                </Styled.Fieldset>
                {/* <Styled.Fieldset>
                    <Styled.Label for="chain">Chains</Styled.Label>
                    {Object.keys(chains).map((key, idx) => {
                        return (
                            <Styled.InputWrapper>
                                <Styled.Select
                                    style={{ marginRight: '10px' }}
                                    onChange={(e) =>
                                        changeChainName(key, e.target.value)
                                    }
                                >
                                    <option
                                        value="ethereum"
                                        selected={key === 'ethereum'}
                                        disabled={Object.keys(chains).includes(
                                            'ethereum'
                                        )}
                                    >
                                        Ethereum
                                    </option>
                                    <option
                                        value="solana"
                                        selected={key === 'solana'}
                                        disabled={Object.keys(chains).includes(
                                            'solana'
                                        )}
                                    >
                                        Solana
                                    </option>
                                    <option
                                        value="polygon"
                                        selected={key === 'polygon'}
                                        disabled={Object.keys(chains).includes(
                                            'polygon'
                                        )}
                                    >
                                        Polygon
                                    </option>
                                    <option
                                        value="nere"
                                        selected={key === 'nere'}
                                        disabled={Object.keys(chains).includes(
                                            'nere'
                                        )}
                                    >
                                        NEAR
                                    </option>
                                    <option
                                        value="avalanche "
                                        selected={key === 'avalanche'}
                                        disabled={Object.keys(chains).includes(
                                            'avalanche '
                                        )}
                                    >
                                        Avalanche 
                                    </option>
                                    <option
                                        value="binance"
                                        selected={key === 'binance'}
                                        disabled={Object.keys(chains).includes(
                                            'binance'
                                        )}
                                    >
                                        Binance 
                                    </option>
                                    <option
                                        value="bitcoin"
                                        selected={key === 'bitcoin'}
                                        disabled={Object.keys(chains).includes(
                                            'bitcoin'
                                        )}
                                    >
                                        Bitcoin
                                    </option>
                                    <option
                                        value="other"
                                        selected={key.startsWith('any')}
                                    >
                                        Other
                                    </option>
                                </Styled.Select>
                                <Styled.Input
                                    id={`chain-${key}`}
                                    type="text"
                                    onChange={(e) => changeChain(key, e)}
                                    value={chains[key]}
                                />
                                <Styled.IconButton
                                    onClick={() => deleteChain(key)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </Styled.IconButton>
                            </Styled.InputWrapper>
                        )
                    })}
                    <Styled.IconButton
                        onClick={() =>
                            setChains({
                                ...chains,
                                [`any-${Object.keys(chains).length}`]: '',
                            })
                        }
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <FaPlus />
                    </Styled.IconButton>
                </Styled.Fieldset> */}

                <Styled.Fieldset>
                    <Styled.Label for="whitelistedAddress">
                    Your Metamask Wallet Address
                    </Styled.Label>
                    <Styled.Input
                        id="whitelistedAddress"
                        type="text"
                        onChange={(e) => setwhitelistedAddress(e.target.value)}
                        value={whitelistedAddress}
                    />
                </Styled.Fieldset>
                <Styled.Fieldset>
                    <Styled.Label for="tokenAddress">
                    Tocken Address
                    </Styled.Label>
                    <Styled.Input
                        id="tokenAddress"
                        type="text"
                        onChange={(e) => setTokenAddress(e.target.value)}
                        value={tokenAddress}
                    />
                </Styled.Fieldset>

                <Styled.Button
                    id="submit_msg"
                    type="button"
                    onClick={submitToDB}
                >
                    Save Changes
                </Styled.Button>
            </Styled.Container>
            <Footer />
        </Styled.Page> 
    );
}

export default AddCommunity