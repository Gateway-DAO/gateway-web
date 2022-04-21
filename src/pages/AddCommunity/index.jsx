// Libraries/components
import React from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

// Styling
import * as Styled from './style';
import { FormStyled } from '../../components/Form';

// Components
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import SubmitPage from './submitPage';
import { ImageUpload } from '../../components/Form';

// Hooks
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/UserContext';
import { useCreateDAOWithChannels } from '../../api/database/useCreateDAO';
import useFileUpload from '../../api/useFileUpload';

// Utils
import space from '../../utils/canvas';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';

const AddCommunity = () => {
    const { userInfo, walletConnected } = useAuth();
    const { uploadFile } = useFileUpload();

    const [name, setName] = useState('');
    const [tokenAddress, setTokenAddress] = useState('');
    const [whitelistedAddresses, setWhitelistedAddresses] = useState([
        walletConnected ? userInfo.wallet : '',
    ]);
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [socials, setSocials] = useState([
        {
            network: 'twitter',
            url: '',
        },
        {
            network: 'discord',
            url: '',
        },
    ]);
    const [chains, setChains] = useState([]);
    const [bgFile, setBGFile] = useState();
    const [logoFile, setLogoFile] = useState();
    const [spaceId, setSpaceId] = useState('');
    const [updateLoading, setUpdateLoading] = useState(false);

    const { createDAO, data, error, called, loading } =
        useCreateDAOWithChannels();

    useEffect(() => {
        if (walletConnected) {
            space(window.innerHeight, window.innerWidth);
        }
    }, [window.innerHeight, window.innerWidth]);

    const toggleCheckbox = (e) => {
        const value = e.target.value;
        // console.log(categories)

        if (categories.includes(value) && !e.target.checked) {
            setCategories(categories.filter((cat) => cat !== value));
        } else if (e.target.checked) {
            setCategories([...categories, value]);
        }
    };

    const toggleCheckboxChain = (e) => {
        const value = e.target.value;
        if (chains.includes(value) && !e.target.checked) {
            setChains(chains.filter((cat) => cat !== value));
        } else if (e.target.checked) {
            setChains([...chains, value]);
        }
    };

    // Handlers
    const changeSocial = (idx, e) => {
        e.preventDefault();
        let copy = [...socials];
        copy[idx].url = e.target.value;
        setSocials(copy);
    };

    const deleteSocial = (idx) =>
        setSocials(socials.filter((social, i) => i !== idx));

    const changeSocialName = (idx, newName) => {
        let copy = socials.map((social, i) => {
            if (i === idx) {
                return {
                    ...social,
                    network: newName,
                };
            }

            return social;
        });
        setSocials(copy);
    };

    const submitToDB = async () => {
        setUpdateLoading(true);
        try {
            // DAO ID
            const id = uuidv4();

            // Upload files to S3
            const logoURL = await uploadFile(
                `daos/${id}/logo.${logoFile.name.split('.').pop()}`,
                logoFile
            );
            const backgroundURL = await uploadFile(
                `daos/${id}/background.${bgFile.name.split('.').pop()}`,
                bgFile
            );

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
            };

            await createDAO({
                variables: {
                    input: newInfo,
                },
            });
        } catch (err) {
            alert('An error occurred. Please try again later!');
            console.log(err);
        }
        setUpdateLoading(false);
    };

    if (error) {
        console.log(error);
        return <Navigate to='/404' />;
    }

    const changeWhitelistedAddress = (e, idx) => {
        e.preventDefault();
        let newList = [...whitelistedAddresses];
        newList[idx] = e.target.value;
        setWhitelistedAddresses(newList);
    };

    if (!walletConnected) {
        return <Navigate to='/not-authorized' />;
    }

    return data && called ? (
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
                <Styled.SpaceBox id='space-canvas' />
                <Styled.Heading>Add your Community</Styled.Heading>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='name'>Name*</FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Your Community Name'
                        value={name}
                        required
                    />
                </FormStyled.Fieldset>

                <ImageUpload
                    htmlFor='logo'
                    label='Logo'
                    setImage={setLogoFile}
                />
                <ImageUpload
                    htmlFor='background'
                    label='Background Image'
                    setImage={setBGFile}
                />

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='description'>
                        Description*
                    </FormStyled.Label>
                    <FormStyled.Textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Categories*</FormStyled.Label>
                    <FormStyled.GridBox>
                        <FormStyled.Checkbox
                            id='category-1'
                            name='category'
                            value='Protocol'
                            label='Protocol'
                            onChange={toggleCheckbox}
                            checked={categories.includes('Protocol')}
                        />
                        <FormStyled.Checkbox
                            id='category-2'
                            name='category'
                            value='DeFi'
                            label='DeFi'
                            onChange={toggleCheckbox}
                            checked={categories.includes('DeFi')}
                        />
                        <FormStyled.Checkbox
                            id='category-3'
                            name='category'
                            value='Social'
                            label='Social'
                            onChange={toggleCheckbox}
                            checked={categories.includes('Social')}
                        />
                        <FormStyled.Checkbox
                            id='category-4'
                            name='category'
                            value='Grant'
                            label='Grant'
                            onChange={toggleCheckbox}
                            checked={categories.includes('Grant')}
                        />
                        <FormStyled.Checkbox
                            id='category-5'
                            name='category'
                            value='Investment'
                            label='Investment'
                            onChange={toggleCheckbox}
                            checked={categories.includes('Investment')}
                        />
                        <FormStyled.Checkbox
                            id='category-6'
                            name='category'
                            value='Collector'
                            label='Collector'
                            onChange={toggleCheckbox}
                            checked={categories.includes('Collector')}
                        />
                        <FormStyled.Checkbox
                            id='category-7'
                            name='category'
                            value='Framework'
                            label='Framework'
                            onChange={toggleCheckbox}
                            checked={categories.includes('Framework')}
                        />
                        <FormStyled.Checkbox
                            id='category-8'
                            name='category'
                            value='Gaming'
                            label='Gaming'
                            onChange={toggleCheckbox}
                            checked={categories.includes('Gaming')}
                        />
                        <FormStyled.Checkbox
                            id='category-9'
                            name='category'
                            value='DeSci'
                            label='DeSci'
                            onChange={toggleCheckbox}
                            checked={categories.includes('DeSci')}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='socials'>
                        Socials
                    </FormStyled.Label>
                    {socials.map((social, idx) => {
                        return (
                            <FormStyled.InputWrapper key={idx}>
                                <Form.Select
                                    style={{ marginRight: '10px' }}
                                    onChange={(e) =>
                                        changeSocialName(idx, e.target.value)
                                    }
                                    value={social.network}
                                >
                                    <option
                                        value='twitter'
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('twitter')}
                                    >
                                        Twitter
                                    </option>
                                    <option
                                        value='telegram'
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('telegram')}
                                    >
                                        Telegram
                                    </option>
                                    <option
                                        value='medium'
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('medium')}
                                    >
                                        Medium
                                    </option>
                                    <option
                                        value='github'
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('github')}
                                    >
                                        Github
                                    </option>
                                    <option
                                        value='discord'
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('discord')}
                                    >
                                        Discord
                                    </option>
                                    <option
                                        value='website'
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('website')}
                                    >
                                        Website
                                    </option>
                                    <option
                                        value='chat'
                                        disabled={socials
                                            .map((social) => social.network)
                                            .includes('chat')}
                                    >
                                        Chat
                                    </option>
                                    <option value='other'>
                                        Other
                                    </option>
                                </Form.Select>
                                <FormStyled.Input
                                    id={`social-${social.network}`}
                                    type='text'
                                    onChange={(e) => changeSocial(idx, e)}
                                    value={social.url}
                                    placeholder='Add your network URL'
                                    required
                                />
                                <FormStyled.IconButton
                                    onClick={() => deleteSocial(idx)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </FormStyled.IconButton>
                            </FormStyled.InputWrapper>
                        );
                    })}
                    <FormStyled.IconButton
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
                    </FormStyled.IconButton>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Chain</FormStyled.Label>
                    <FormStyled.GridBox>
                        <FormStyled.Checkbox
                            id='chain-1'
                            name='chain'
                            value='ethereum'
                            label='Ethereum'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Ethereum')}
                        />
                        <FormStyled.Checkbox
                            id='chain-2'
                            name='chain'
                            value='solana'
                            label='Solana'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Solana')}
                        />
                        <FormStyled.Checkbox
                            id='chain-3'
                            name='chain'
                            value='Polygon'
                            label='Polygon'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Polygon')}
                        />
                        <FormStyled.Checkbox
                            id='chain-4'
                            name='chain'
                            value='NEAR'
                            label='NEAR'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('NEAR')}
                        />
                        <FormStyled.Checkbox
                            id='chain-5'
                            name='chain'
                            value='Avalanche'
                            label='Avalanche'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Avalanche')}
                        />
                        <FormStyled.Checkbox
                            id='chain-6'
                            name='chain'
                            value='Binance'
                            label='Binance'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Binance')}
                        />
                        <FormStyled.Checkbox
                            id='chain-7'
                            name='chain'
                            value='Bitcoin'
                            label='Bitcoin'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Bitcoin')}
                        />
                        <FormStyled.Checkbox
                            id='chain-8'
                            name='chain'
                            value='Other'
                            label='Other'
                            onChange={toggleCheckboxChain}
                            checked={chains.includes('Other')}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='whitelistedAddress'>
                        Whitelisted Addresses
                    </FormStyled.Label>
                    {whitelistedAddresses.map((address, idx) => {
                        return (
                            <FormStyled.InputWrapper key={idx}>
                                <FormStyled.Input
                                    id={`social-${idx}`}
                                    type='text'
                                    onChange={(e) =>
                                        changeWhitelistedAddress(e, idx)
                                    }
                                    value={whitelistedAddresses[idx]}
                                    required
                                />
                                <FormStyled.IconButton
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
                                </FormStyled.IconButton>
                            </FormStyled.InputWrapper>
                        );
                    })}
                    <FormStyled.IconButton
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
                    </FormStyled.IconButton>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='tokenAddress'>
                        Token Address*
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='tokenAddress'
                        type='text'
                        onChange={(e) => setTokenAddress(e.target.value)}
                        value={tokenAddress}
                        required
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='SpaceId'>
                        Snapshot Space Id
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='SpaceId'
                        type='text'
                        onChange={(e) => setSpaceId(e.target.value)}
                        value={spaceId}
                        required
                    />
                </FormStyled.Fieldset>

                <FormStyled.Button id='submit_msg' onClick={submitToDB}>
                    {updateLoading && <Loader color='white' />}
                    Save Changes
                </FormStyled.Button>
            </Styled.Container>
            <Footer />
        </Styled.Page>
    );
};

export default AddCommunity;
