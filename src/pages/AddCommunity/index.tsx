// Libraries/components
import React from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

// Styling
import * as Styled from './style';
import { FormStyled } from '../../components/Form';

// Components
import Loader from '../../components/Loader';
import SubmitPage from './submitPage';
import { ImageUpload } from '../../components/Form';
import Page from '../../components/Page';

// Hooks
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/UserContext';
import useFile from '../../api/useFile';
import { useCreateDaoMutation } from '../../graphql';

// Utils
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';
import { useFieldArray, useForm } from 'react-hook-form';

const AddCommunity = () => {
    const { userInfo, walletConnected }: Record<string, any> = useAuth();
    const [bgFile, setBGFile] = useState();
    const [logoFile, setLogoFile] = useState();

    const { uploadFile } = useFile();

    const [createDAO, { data, error, called, loading }] =
        useCreateDaoMutation();

    const { register, handleSubmit, control, watch, setValue } = useForm({
        defaultValues: {
            name: null,
            description: null,
            socials: [
                {
                    network: 'twitter',
                    url: '',
                },
                {
                    network: 'discord',
                    url: '',
                },
            ],
            admins: [userInfo && {
                id: userInfo.id
            }],
            categories: [],
            chains: [],
            tokenAddress: null,
            spaceId: null,
        },
    });

    const {
        fields: socials,
        append: socials_append,
        remove: socials_remove,
        update: socials_update
    } = useFieldArray({
        control,
        name: 'socials',
    });

    const {
        fields: admins,
        append: admins_append,
        remove: admins_remove,
    } = useFieldArray({
        control,
        name: 'admins',
    });

    const toggleCheckbox = (e) => {
        const value = (e.target as HTMLInputElement).value;

        const categories: string[] = watch('categories');

        if (categories.includes(value) && !e.target.checked) {
            setValue('categories', categories.filter(obj => obj !== value));
        } else if (e.target.checked) {
            setValue('categories', [...categories, value]);
        }
    };

    const toggleCheckboxChain = (e) => {
        const value = (e.target as HTMLInputElement).value;

        const chains: string[] = watch('chains');

        if (chains.includes(value) && !e.target.checked) {
            setValue('chains', chains.filter(obj => obj !== value));
        } else if (e.target.checked) {
            setValue('chains', [...chains, value]);
        }
    };

    const onSubmit = async (data) => {
        try {
            // DAO ID
            const id = uuidv4();

            // Upload files to S3
            const logoURL = await uploadFile(logoFile, `/daos/${id}/`);
            const backgroundURL = await uploadFile(bgFile, `/daos/${id}/`);

            await createDAO({
                variables: {
                    object: {
                        id,
                        slug: data.name
                            .toLowerCase()
                            .replace(/ /g, '-')
                            .replace(/[-]+/g, '-')
                            .replace(/[^\w-]+/g, ''),
                        name: data.name,
                        background_url: backgroundURL,
                        logo_url: logoURL,
                        token: data.tokenAddress,
                        description: data.description,
                        categories: data.categories,
                        chains: data.chains,
                        socials: data.socials,
                        ens: data.spaceId,
                    },
                },
            });
        } catch (err) {
            alert('An error occurred. Please try again later!');
            console.log(err);
        }
    };

    if (error) {
        console.log(error);
        return <Navigate to='/404' />;
    }

    return data && called ? (
        <SubmitPage />
    ) : (
        <Page>
            <Styled.Heading>Add your Community</Styled.Heading>

            <FormStyled.FormBox onSubmit={handleSubmit(onSubmit)}>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='name'>Name*</FormStyled.Label>
                    <FormStyled.Input
                        {...register('name', { required: true })}
                        type='text'
                        placeholder='Your Community Name'
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
                        {...register('description', { required: true })}
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
                            checked={watch('categories').includes('Protocol')}
                        />
                        <FormStyled.Checkbox
                            id='category-2'
                            name='category'
                            value='DeFi'
                            label='DeFi'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('DeFi')}
                        />
                        <FormStyled.Checkbox
                            id='category-3'
                            name='category'
                            value='Social'
                            label='Social'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('Social')}
                        />
                        <FormStyled.Checkbox
                            id='category-4'
                            name='category'
                            value='Grant'
                            label='Grant'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('Grant')}
                        />
                        <FormStyled.Checkbox
                            id='category-5'
                            name='category'
                            value='Investment'
                            label='Investment'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('Investment')}
                        />
                        <FormStyled.Checkbox
                            id='category-6'
                            name='category'
                            value='Collector'
                            label='Collector'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('Collector')}
                        />
                        <FormStyled.Checkbox
                            id='category-7'
                            name='category'
                            value='Framework'
                            label='Framework'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('Framework')}
                        />
                        <FormStyled.Checkbox
                            id='category-8'
                            name='category'
                            value='Gaming'
                            label='Gaming'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('Gaming')}
                        />
                        <FormStyled.Checkbox
                            id='category-9'
                            name='category'
                            value='DeSci'
                            label='DeSci'
                            onChange={toggleCheckbox}
                            checked={watch('categories').includes('DeSci')}
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
                                    {...register(`socials.${idx}.network`)}
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
                                    <option value='other'>Other</option>
                                </Form.Select>
                                <FormStyled.Input
                                    id={`social-${social.network}`}
                                    type='text'
                                    onChange={(e) => socials_update(idx, {
                                        network: social.network,
                                        url: e.target.value
                                    })}
                                    value={social.url}
                                    placeholder='Add your network URL'
                                    required
                                />
                                <FormStyled.IconButton
                                    onClick={() => socials_remove(idx)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </FormStyled.IconButton>
                            </FormStyled.InputWrapper>
                        );
                    })}
                    <FormStyled.IconButton
                        onClick={() =>
                            socials_append({
                                network: `any-${socials.length}`,
                                url: '',
                            })
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
                            checked={watch('chains').includes('Ethereum')}
                        />
                        <FormStyled.Checkbox
                            id='chain-2'
                            name='chain'
                            value='solana'
                            label='Solana'
                            onChange={toggleCheckboxChain}
                            checked={watch('chains').includes('Solana')}
                        />
                        <FormStyled.Checkbox
                            id='chain-3'
                            name='chain'
                            value='Polygon'
                            label='Polygon'
                            onChange={toggleCheckboxChain}
                            checked={watch('chains').includes('Polygon')}
                        />
                        <FormStyled.Checkbox
                            id='chain-4'
                            name='chain'
                            value='NEAR'
                            label='NEAR'
                            onChange={toggleCheckboxChain}
                            checked={watch('chains').includes('NEAR')}
                        />
                        <FormStyled.Checkbox
                            id='chain-5'
                            name='chain'
                            value='Avalanche'
                            label='Avalanche'
                            onChange={toggleCheckboxChain}
                            checked={watch('chains').includes('Avalanche')}
                        />
                        <FormStyled.Checkbox
                            id='chain-6'
                            name='chain'
                            value='Binance'
                            label='Binance'
                            onChange={toggleCheckboxChain}
                            checked={watch('chains').includes('Binance')}
                        />
                        <FormStyled.Checkbox
                            id='chain-7'
                            name='chain'
                            value='Bitcoin'
                            label='Bitcoin'
                            onChange={toggleCheckboxChain}
                            checked={watch('chains').includes('Bitcoin')}
                        />
                        <FormStyled.Checkbox
                            id='chain-8'
                            name='chain'
                            value='Other'
                            label='Other'
                            onChange={toggleCheckboxChain}
                            checked={watch('chains').includes('Other')}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                {/*
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='admins'>Admins</FormStyled.Label>
                    {admins.map((address, idx) => {
                        return (
                            <FormStyled.InputWrapper key={idx}>
                                <FormStyled.Input
                                    id={`admin-${idx}`}
                                    type='text'
                                    {...register(`admins.${idx}`, { required: true })}
                                />
                                <FormStyled.IconButton
                                    onClick={() => admins_remove(idx)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <FaTrashAlt />
                                </FormStyled.IconButton>
                            </FormStyled.InputWrapper>
                        );
                    })}
                    <FormStyled.IconButton
                        onClick={() => admins_append('')}
                        style={{
                            width: 'fit-content',
                            alignSelf: 'center',
                        }}
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                </FormStyled.Fieldset>
                */}

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='tokenAddress'>
                        Token Address*
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='tokenAddress'
                        type='text'
                        {...register('tokenAddress', { required: true })}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='SpaceId'>
                        Snapshot Space Id
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='SpaceId'
                        type='text'
                        {...register('spaceId')}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Button id='submit_msg'>
                    {loading && <Loader color='white' />}
                    Save Changes
                </FormStyled.Button>
            </FormStyled.FormBox>
        </Page>
    );
};

export default AddCommunity;
