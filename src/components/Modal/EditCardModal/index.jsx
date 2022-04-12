import Modal from '../index';
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled, ImageUpload } from '../../Form';
import { useState } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { useUpdateDAO } from '../../../api/database/useUpdateDAO';
import { Navigate } from 'react-router-dom';
import useFileUpload from '../../../api/useFileUpload';
import normalizeUrl from 'normalize-url';
import Loader from '../../Loader';
import { ytVideoID } from '../../../utils/functions';

const EditCardModal = (props) => {
    const [name, setName] = useState(props.name);
    const [backgroundFile, setBackgroundFile] = useState(null);
    const [youtubeURL, setYoutubeURL] = useState(props.youtubeURL || '');
    const [validYoutubeURL, setValidYoutubeURL] = useState(true);
    const [logoFile, setLogoFile] = useState(null);
    const [tokenAddress, setTokenAddress] = useState(props.tokenAddress);
    const [description, setDescription] = useState(props.description);
    const [categories, setCategories] = useState(props.categories);
    const [socials, setSocials] = useState(props.socials || []);
    const [snapshotID, setSnapshotID] = useState(props.snapshotID);
    const [chains, setChains] = useState(props.chains || []);
    const [whitelistedAddresses, setWhitelistedAddresses] = useState(
        props.whitelistedAddresses || ['']
    );
    const [errorMessage, setErrorMessage] = useState(
        'An error occurred. Try again later!'
    );
    const [updateLoading, setUpdateLoading] = useState(false);

    const { updateDAO, data, error, loading } = useUpdateDAO();
    const { uploadFile } = useFileUpload();

    const submitToDB = async () => {
        setUpdateLoading(true);
        try {
            // Upload files to S3
            if ((logoFile === null && props.logoURL === null) || (backgroundFile === null && props.backgroundURL === null)) {
                setErrorMessage('Files not uploaded');
                console.log(logoFile);
                console.log(backgroundFile);
                throw 'Files not uploaded';
            }
            if (name === '') {
                setErrorMessage('Name cannot be empty');
                throw 'Name cannot be empty';
            }
            if (tokenAddress === '') {
                setErrorMessage('tokenAddress cannot be empty');
                throw 'tokenAddress cannot be empty';
            }
            const logoURL =
                logoFile ?
                (await uploadFile(
                    `daos/${props.id}/logo.${logoFile.name.split('.').pop()}`,
                    logoFile
                )) : props.logoURL;
            const backgroundURL =
                backgroundFile ?
                (await uploadFile(
                    `daos/${props.id}/background.${backgroundFile.name
                        .split('.')
                        .pop()}`,
                    backgroundFile
                )) : props.backgroundURL;

            const newInfo = {
                name,
                ...(backgroundFile ? { backgroundURL } : {}),
                ...(youtubeURL && validYoutubeURL
                    ? {
                          youtubeURL: normalizeUrl(youtubeURL, {
                              defaultProtocol: 'https:',
                          }),
                      }
                    : {}),
                ...(logoFile ? { logoURL } : {}),
                tokenAddress,
                description,
                categories,
                socials: socials.map((social) => {
                    return { network: social.network, url: social.url };
                }),
                chains,
                whitelistedAddresses,
                snapshotID,
            };

            await updateDAO({
                variables: {
                    input: {
                        id: props.id,
                        ...newInfo,
                    },
                },
            });

            props.changeDAOData(newInfo);
            props.toggle();
        } catch (err) {
            alert(errorMessage);
            console.log(err);
        }
        setUpdateLoading(false);
    };

    const toggleCheckbox = (e) => {
        const value = e.target.value;
        console.log(categories);

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

    const changeWhitelistedAddress = (e, idx) => {
        e.preventDefault();
        let newList = [...whitelistedAddresses];
        newList[idx] = e.target.value;
        setWhitelistedAddresses(newList);
    };

    const ytVideoValidator = (e) => {
        const url = e.target.value;
        const id = ytVideoID(url);

        setYoutubeURL(url);

        setValidYoutubeURL(!!id.length);
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Edit Information</ModalStyled.Header>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='name'>Name</FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Your DAO name'
                        value={name}
                    />
                </FormStyled.Fieldset>

                <ImageUpload
                    htmlFor='logo'
                    label='Logo'
                    setImage={setLogoFile}
                    defaultImageURL={props.logoURL}
                />
                <ImageUpload
                    htmlFor='background'
                    label='Background'
                    setImage={setBackgroundFile}
                    defaultImageURL={props.backgroundURL}
                />

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='backgroundURL'>
                        Youtube URL
                    </FormStyled.Label>
                    <FormStyled.Input
                        onChange={ytVideoValidator}
                        type='text'
                        id='backgroundURL'
                        name='youtubeURL'
                        placeholder='Your Youtube Video URL'
                        value={youtubeURL}
                    />
                    {!validYoutubeURL && (
                        <FormStyled.SubText>
                            Invalid YouTube Video URL
                        </FormStyled.SubText>
                    )}
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='description'>
                        Description
                    </FormStyled.Label>
                    <FormStyled.Textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Categories</FormStyled.Label>
                    <Styled.GridBox>
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
                    </Styled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='socials'>
                        Socials
                    </FormStyled.Label>
                    {socials.map((social, idx) => {
                        return (
                            <FormStyled.InputWrapper key={idx}>
                                <FormStyled.Select
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
                                    <option
                                        value='other'
                                    >
                                        Other
                                    </option>
                                </FormStyled.Select>
                                <FormStyled.Input
                                    id={`social-${social.network}`}
                                    type='text'
                                    onChange={(e) => changeSocial(idx, e)}
                                    value={social.url}
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
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Chain</FormStyled.Label>
                    <Styled.GridBox>
                        <FormStyled.Checkbox
                            id='chain-1'
                            name='chain'
                            value='ethereum'
                            label='Ethereum'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('ethereum')}
                        />
                        <FormStyled.Checkbox
                            id='chain-2'
                            name='chain'
                            value='solana'
                            label='Solana'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('solana')}
                        />
                        <FormStyled.Checkbox
                            id='chain-3'
                            name='chain'
                            value='Polygon'
                            label='Polygon'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Polygon')}
                        />
                        <FormStyled.Checkbox
                            id='chain-4'
                            name='chain'
                            value='NEAR'
                            label='NEAR'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('NEAR')}
                        />
                        <FormStyled.Checkbox
                            id='chain-5'
                            name='chain'
                            value='Avalanche'
                            label='Avalanche'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Avalanche')}
                        />
                        <FormStyled.Checkbox
                            id='chain-6'
                            name='chain'
                            value='Binance'
                            label='Binance'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Binance')}
                        />
                        <FormStyled.Checkbox
                            id='chain-7'
                            name='chain'
                            value='Bitcoin'
                            label='Bitcoin'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Bitcoin')}
                        />
                        <FormStyled.Checkbox
                            id='chain-8'
                            name='chain'
                            value='Other'
                            label='Other'
                            onChange={toggleCheckboxChain}
                            checked={chains && chains.includes('Other')}
                        />
                    </Styled.GridBox>
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
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='tokenAddress'>
                        Token Address
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='tokenAddress'
                        type='text'
                        onChange={(e) => setTokenAddress(e.target.value)}
                        value={tokenAddress}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='snapshotID'>
                        Snapshot ID
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='snapshotID'
                        type='text'
                        onChange={(e) => setSnapshotID(e.target.value)}
                        value={snapshotID}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Button
                    id='submit_msg'
                    type='button'
                    onClick={submitToDB}
                >
                    {updateLoading && <Loader color='white' />}
                    Save Changes
                </FormStyled.Button>
            </Styled.Container>
        </Modal>
    );
};

export default EditCardModal;
