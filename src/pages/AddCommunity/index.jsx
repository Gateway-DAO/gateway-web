import React,{useState,useEffect,useRef} from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as Styled from "./style";
import space from '../../utils/canvas'
import RichEditor  from "../../components/RichTextEditor";
import {FaTrashAlt,FaPlus} from 'react-icons/fa'
import { Redirect } from "react-router-dom";
import useCreateDAO from '../../api/database/useCreateDAO'
import { v4 as uuidv4 } from 'uuid'

const AddCommunity = ()=>{
    const [name, setName] = useState("")
    const [backgroundURL, setBackgroundURL] = useState("")
    const [youtubeURL, setyoutubeURL] = useState("")
    const [logoURL, setLogoURL] = useState("")
    const [tokenAddress, setTokenAddress] = useState("")
    const [whitelistedAddresses, setWhitelistedAddresses] = useState("") 
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState([])
    const [socials, setSocials] = useState([])
    const [chains, setChains] = useState([])
    const [backGroundImage,setbackGroundImage]= useState("")
    const [files,setFile]= useState("")
    const [over,setover] = useState(false)
    const [bghover,setbghover] =useState(false)
    const $input =useRef(null)
    const $bgImage =useRef(null)
    const [SpaceId,setSpaceId] = useState("")
    const { createDAO, data, error, loading } = useCreateDAO()

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

    const toggleCheckboxChain = (e)=>{
        const value = e.target.value;
        if(chains.includes(value)&& !e.target.checked){
            setChains(chains.filter((cat) => cat !== value))
        } else if (e.target.checked) {
            setChains([...chains, value])
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

    const history = useHistory();
    const submitToDB = async () => {
        // const Community  = doc(db, 'daos', name)

        const newInfo = {
            id: uuidv4(),
            dao: name.toLowerCase().replace(/\s/g, ''),
            name,
            backgroundURL,
            youtubeURL,
            logoURL,
            tokenAddress,
            description,
            categories,
            chains,
            socials,
            whitelistedAddresses,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        await createDAO({ variables: {
            input: newInfo
        }});

        if (data) {
            history.push(`/new-community/${name}`);
        }
    }

    if (error) {
        console.log(error)
        return <Redirect to="/404" />
    }
   
    const removeBackgroundImage=()=>{
        setbackGroundImage("");
    }
    const removeFiles=()=>{
        setFile("");
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
                    <Styled.Label for="logo">
                        Logo 
                    </Styled.Label>
                    {/* <Styled.Input
                        onChange={(e) => setLogoURL(e.target.value)}
                        type="text"
                        id="logoURL"
                        name="logoURL"
                        placeholder="Your Community  logo URL"
                        value={logoURL}
                    /> */}
                    
                    {!files?<Styled.drag_area hover={over} for = "uploadFile"
                          onClick={()=> {$input.current.click()}}
                          onDrop={(e) => {
                            e.preventDefault();
                            e.persist();
                            setFile(URL.createObjectURL(e.dataTransfer.files[0]));
                            setover(false);
                          }}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setover(true);
                          }}
                          onDragLeave={(e) => {
                            e.preventDefault();
                            setover(false);
                          }}
                                         >
                        
                            
                            <Styled.header hover={over} className="header">
                            <Styled.span> Upload </Styled.span>or Drag your image here
                            </Styled.header>
                            
                            {/* <Styled.button className="button">
                                Browse File 
                            </Styled.button> */}
                            <input type="file"  hidden ref={$input} onChange={e=> {setFile(URL.createObjectURL(e.target.files[0]))}}>
                            </input>

                         </Styled.drag_area> : 
                         
                          <Styled.Background image={files}> 
                             <Styled.Cross onClick={removeFiles}>
                          {/* <ImCross /> */}
                          +
                      </Styled.Cross>

                          {/* <Styled.Image src={files} >
                         
                          </Styled.Image>   */}
                           
                          </Styled.Background>}

                </Styled.Fieldset>

                <Styled.Fieldset>
                    <Styled.Label for="backgroundURL">
                        Background 
                    </Styled.Label>
                    {/* <Styled.Input
                        onChange={(e) => setBackgroundURL(e.target.value)}
                        type="text"
                        id="backgroundURL"
                        name="backgroundURL"
                        placeholder="Your Community  background URL"
                        value={backgroundURL}
                    /> */}
                  { !backGroundImage?  <Styled.drag_area hover={bghover} for = "backGroundImageUpload"
                          onClick={()=> {$bgImage.current.click()}}
                          onDrop={(e) => {
                            e.preventDefault();
                            e.persist();
                            setbackGroundImage(URL.createObjectURL(e.dataTransfer.files[0]));
                            setbghover(false);
                          }}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setbghover(true);
                          }}
                          onDragLeave={(e) => {
                            e.preventDefault();
                            setbghover(false);
                          }}
                                         >
                            <Styled.header hover={bghover} className="header">
                            <Styled.span> Upload </Styled.span>or Drag your image here
                            </Styled.header>
                            
                            {/* <Styled.button className="button">
                                Browse File 
                            </Styled.button> */}
                            <input type="file"  hidden ref={$bgImage} onChange={e=> {setbackGroundImage(URL.createObjectURL(e.target.files[0]))}}>
                            </input>

                         </Styled.drag_area> : 
                         <Styled.Background image={backGroundImage}> 
                             <Styled.Cross onClick={removeBackgroundImage}>
                          {/* <ImCross /> */}
                          + 
                          </Styled.Cross>
                          {/* <Styled.Image  src={backGroundImage} >
                         
                         </Styled.Image>   */}
                             
                             
                             
                             </Styled.Background>}
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
                    <Styled.Label for="whitelistedAddresses">
                    Your Metamask Wallet Address
                    </Styled.Label>
                    <Styled.Input
                        id="whitelistedAddresses"
                        type="text"
                        onChange={(e) => setWhitelistedAddresses(e.target.value)}
                        value={whitelistedAddresses}
                    />
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
                    />
                </Styled.Fieldset>
                <Styled.Fieldset>
                    <Styled.Label for="SpaceId">
                   Snapshot Space Id
                    </Styled.Label>
                    <Styled.Input
                        id="SpaceId"
                        type="text"
                        onChange={(e) => setSpaceId(e.target.value)}
                        value={SpaceId}
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