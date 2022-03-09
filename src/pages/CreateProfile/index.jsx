import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import normalizeUrl from 'normalize-url';

// Styling
import * as Styled from './style';
import { FormStyled } from '../../components/Form';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

// Components
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { ImageUpload } from '../../components/Form';

// AWS
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';

// Hooks
import { useSearchDAO } from '../../api/database/useSearchDAO';
import { useListDAOs } from '../../api/database/useGetDAO';
import { useFileUpload } from '../../api/useFileUpload';
import { useGetFile } from '../../api/useGetFile';
import { useAuth } from '../../contexts/UserContext';

Amplify.configure(awsconfig);

const CreateProfile = () => {
    const { userInfo, updateUserInfo } = useAuth();
    const navigate = useNavigate();

    // Form state
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    const [bio, setBio] = useState(null);
    const [picture, setPicture] = useState(null);
    const [socials, setSocials] = useState([]);
    const [membership, setMembership] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchRes, setSearchRes] = useState([]);
    const [updateLoading, setUpdateLoading] = useState(false);

    const {
        loading: listLoading,
        data: listData,
        error: listError,
    } = useListDAOs();

    // Search DAO
    const {
        loading: searchLoading,
        data: searchData,
        error: searchError,
    } = useSearchDAO({
        variables: {
            filter: {
                or: [
                    { dao: { wildcard: `*${searchTerm.toLowerCase()}*` } },
                    { name: { wildcard: `*${searchTerm.toLowerCase()}*` } },
                    {
                        description: {
                            wildcard: `*${searchTerm.toLowerCase()}*`,
                        },
                    },
                ],
            },
        },
    });
    const [loading, setLoading] = useState(false);

    // Upload file hook
    const { uploadFile, imgLoading } = useFileUpload();
    const { getFile, imgLoading: getImgLoading } = useGetFile();

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

    const uploadPfp = async () => {
        const file = picture;
        // const { key } = await Storage.put(`users/${userInfo.wallet}/profile.${file.name.split('.').pop()}`, file)
        return await uploadFile(
            `users/${userInfo.id}/profile.${file.name.split('.').pop()}`,
            file
        );
    };

    const onSave = async (e) => {
        e.preventDefault();
        setUpdateLoading(true);
        try {
            const pfpURL = picture
                ? await uploadPfp()
                : await getFile('logo.png');
            await updateUserInfo({
                name,
                username: username.toLowerCase(),
                bio,
                socials: socials
                    .filter((social) => social.url !== '')
                    .map((social) => {
                        return {
                            url: normalizeUrl(social.url, {
                                defaultProtocol: 'https:',
                            }),
                            network: social.network,
                        };
                    }),
                daos_ids: membership.map((dao) => dao.id),
                pfp: pfpURL,
                init: true,
            });
        } catch (err) {
            alert('An error occurred. Please try again later!');
            console.log(err);
        }
        setUpdateLoading(false);
    };

    const addDAO = (dao) => {
        !membership.includes(dao) && setMembership([...membership, dao]);
        setSearchRes(searchRes.filter((res) => res.name !== dao.name));
    };

    const removeDAO = (name) => {
        const new_membership = membership.filter((dao) => dao.name !== name);
        setMembership(new_membership);
        searchRes.length != 5 &&
            !searchRes.includes(searchRes.filter((dao) => dao.name === name)) &&
            setSearchRes([
                ...searchRes,
                membership.filter((dao) => dao.name === name)[0],
            ]);
    };

    useEffect(() => {
        setLoading(true);
        const clear = setTimeout(() => {
            !!searchTerm &&
                searchTerm !== searchQuery &&
                setSearchQuery(searchTerm);

            if (!!searchData && !searchLoading) {
                const query = searchData.searchDAOs.items;
                const results = query.slice(0, 5).map((dao) => {
                    return {
                        name: dao.name,
                        id: dao.dao,
                        logoURL: dao.logoURL,
                    };
                });
                setSearchRes(results);
            }
            setLoading(false);
        }, 2000);

        return () => clearTimeout(clear);
    }, [searchTerm, searchLoading, searchData]);

    return userInfo && userInfo.init ? (
        <Navigate to='/profile' />
    ) : (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.MainText>Create Profile</Styled.MainText>

                <FormStyled.FormBox onSubmit={onSave}>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='name'>
                            Display name
                        </FormStyled.Label>
                        <FormStyled.Input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter your name'
                            required
                        />
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='username'>
                            Username
                        </FormStyled.Label>
                        <FormStyled.Input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type='text'
                            id='username'
                            name='username'
                            placeholder='Enter your username'
                            required
                        />
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='Bio'>Bio</FormStyled.Label>
                        <FormStyled.Textarea
                            height='100px'
                            id='Bio'
                            onChange={(e) => setBio(e.target.value)}
                            value={bio}
                            placeholder='Tell about yourself'
                            required
                            name='bio'
                        ></FormStyled.Textarea>
                    </FormStyled.Fieldset>

                    <ImageUpload
                        htmlFor='pfp'
                        label='Profile Picture'
                        setImage={setPicture}
                    />

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
                                            changeSocialName(
                                                idx,
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option
                                            value='twitter'
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
                                            value='telegram'
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
                                            value='medium'
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
                                            value='github'
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
                                            value='discord'
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
                                            value='website'
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
                                            value='chat'
                                            selected={social.network === 'chat'}
                                            disabled={socials
                                                .map((social) => social.network)
                                                .includes('chat')}
                                        >
                                            Chat
                                        </option>
                                        <option
                                            value='other'
                                            selected={social.network.startsWith(
                                                'any'
                                            )}
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
                            style={{
                                width: 'fit-content',
                                alignSelf: 'center',
                            }}
                        >
                            <FaPlus />
                        </FormStyled.IconButton>
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='membership'>
                            Membership
                        </FormStyled.Label>
                        <Styled.MembershipBox>
                            {membership.length &&
                                membership.map((dao, idx) => {
                                    return (
                                        <Styled.MembershipIcon key={idx}>
                                            <Styled.MembershipImg
                                                src={dao.logoURL}
                                                alt={dao.name}
                                            />
                                            <Styled.MembershipRemove
                                                size={12}
                                                onClick={() =>
                                                    removeDAO(dao.name)
                                                }
                                            />
                                        </Styled.MembershipIcon>
                                    );
                                })}
                        </Styled.MembershipBox>
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Input
                            id='dao-search'
                            name='dao-search'
                            type='text'
                            placeholder='Search by DAO name'
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {loading ? (
                            <Styled.LoadingBox>
                                <Loader color='white' size={32} />
                            </Styled.LoadingBox>
                        ) : (
                            searchRes.length && (
                                <Styled.SearchBox>
                                    {searchRes.map((res, idx) => (
                                        <Styled.SearchItem
                                            onClick={() => addDAO(res)}
                                            divider={idx !== 0}
                                            key={idx}
                                        >
                                            {res.name}
                                        </Styled.SearchItem>
                                    ))}
                                </Styled.SearchBox>
                            )
                        )}
                    </FormStyled.Fieldset>

                    <FormStyled.Button type='submit'>
                        {updateLoading && <Loader color='white' />} Save
                    </FormStyled.Button>
                </FormStyled.FormBox>
            </Styled.MainBox>
        </Styled.Container>
    );
};

export default CreateProfile;
