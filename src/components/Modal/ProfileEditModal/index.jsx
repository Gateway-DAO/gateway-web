// Styling
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';

// Components
import Modal from '../index';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import Loader from '../../Loader';

// Hooks
import { useSignedAuth } from '../../../contexts/UserContext';
import { useEffect, useState } from 'react';
import { useFileUpload } from '../../../api/useFileUpload';
import useSearchDAO from '../../../api/database/useSearchDAO';
import { useLazyGetUserByUsername } from '../../../api/database/useGetUser';
import { ImageUpload } from '../../Form';

const ProfileEditModal = (props) => {
    const [name, setName] = useState(props.name || '');
    const [username, setUsername] = useState(props.username || '');
    const [bio, setBio] = useState(props.bio || '');
    const [socials, setSocials] = useState(
        props.socials || [{ network: 'any-0', url: '' }]
    );
    const [membership, setMembership] = useState(props.membership || []);
    const [pfp, setPfp] = useState(props.pfpURL || '');
    const [updateLoading, setUpdateLoading] = useState(false);
    const [validUsername, setValidUsername] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchRes, setSearchRes] = useState([]);

    const { loggedIn, userInfo, updateUserInfo, walletConnected, signIn } =
        useSignedAuth([props.show]);
    const { uploadFile } = useFileUpload();

    // Get user
    const { getUser } = useLazyGetUserByUsername();

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
    });

    const uploadPfp = async () => {
        const file = pfp;
        return await uploadFile(
            `users/${userInfo.id}/profile.${file.name.split('.').pop()}`,
            file
        );
    };

    const onSave = async () => {
        try {
            setUpdateLoading(true);
            const pfpURL = pfp ? await uploadPfp() : props.pfp;
            await updateUserInfo({
                name,
                username,
                bio,
                socials: socials
                    .filter((social) => social.url !== '')
                    .map((social) => {
                        return { network: social.network, url: social.url };
                    }),
                daos_ids: membership.map((dao) => dao.dao),
                pfp: pfpURL,
            });
        } catch (err) {
            alert('An error occurred. Please try again later!');
            console.log(err);
        }

        setUpdateLoading(false);
        props.toggle(!props.show);
    };

    useEffect(() => {
        const clear = setTimeout(() => {
            !!searchTerm &&
                searchTerm !== searchQuery &&
                setSearchQuery(searchTerm);

            if (!!searchData && !searchLoading) {
                const query = searchData.searchDAOs.items;
                const results = query
                    .map((dao) => {
                        const obj = {
                            name: dao.name,
                            dao: dao.dao,
                            logoURL: dao.logoURL,
                        };

                        if (!membership.includes(obj)) {
                            return obj;
                        }

                        return null;
                    })
                    .slice(0, 5);
                setSearchRes(results);
            }
        }, 1000);

        return () => clearTimeout(clear);
    }, [searchTerm, searchLoading, searchData]);

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
        const unsub = setTimeout(() => {
            if (username !== props.username) {
                getUser({
                    variables: {
                        username,
                    },
                }).then(({ data }) =>
                    setValidUsername(!data.getUserByUsername.items.length)
                );
            } else {
                setValidUsername(true);
            }
        }, 2000);

        return () => clearTimeout(unsub);
    }, [username]);

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Edit Profile</ModalStyled.Header>

                {loggedIn ? (
                    <>
                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='name'>
                                Display Name
                            </FormStyled.Label>
                            <FormStyled.Input
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Change your name'
                                value={name}
                            />
                        </FormStyled.Fieldset>

                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='username'>
                                Username
                            </FormStyled.Label>
                            <FormStyled.Input
                                onChange={(e) => setUsername(e.target.value)}
                                type='text'
                                id='username'
                                name='username'
                                placeholder='Change your username'
                                value={username}
                                valid={validUsername}
                                required
                            />
                            {!validUsername && (
                                <FormStyled.SubText>
                                    That username is already taken!
                                </FormStyled.SubText>
                            )}
                        </FormStyled.Fieldset>

                        <ImageUpload
                            htmlFor='pfp'
                            label='Profile Picture'
                            defaultImageURL={props.pfp}
                            setImage={setPfp}
                        />

                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='bio'>
                                Bio
                            </FormStyled.Label>
                            <FormStyled.Textarea
                                height='100px'
                                id='Bio'
                                onChange={(e) => setBio(e.target.value)}
                                value={bio}
                            ></FormStyled.Textarea>
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
                                                    .map(
                                                        (social) =>
                                                            social.network
                                                    )
                                                    .includes('twitter')}
                                            >
                                                Twitter
                                            </option>
                                            <option
                                                value='telegram'
                                                selected={
                                                    social.network ===
                                                    'telegram'
                                                }
                                                disabled={socials
                                                    .map(
                                                        (social) =>
                                                            social.network
                                                    )
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
                                                    .map(
                                                        (social) =>
                                                            social.network
                                                    )
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
                                                    .map(
                                                        (social) =>
                                                            social.network
                                                    )
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
                                                    .map(
                                                        (social) =>
                                                            social.network
                                                    )
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
                                                    .map(
                                                        (social) =>
                                                            social.network
                                                    )
                                                    .includes('website')}
                                            >
                                                Website
                                            </option>
                                            <option
                                                value='chat'
                                                selected={
                                                    social.network === 'chat'
                                                }
                                                disabled={socials
                                                    .map(
                                                        (social) =>
                                                            social.network
                                                    )
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
                                            onChange={(e) =>
                                                changeSocial(idx, e)
                                            }
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
                                {!!membership.length &&
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
                            {!!searchRes.length && (
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
                            )}
                        </FormStyled.Fieldset>

                        <FormStyled.Button
                            id='submit_msg'
                            type='button'
                            onClick={onSave}
                        >
                            {updateLoading && <Loader color='white' />}
                            Save Changes
                        </FormStyled.Button>
                    </>
                ) : (
                    <FormStyled.Text>
                        Please sign the message on your wallet to access your
                        account.
                    </FormStyled.Text>
                )}
            </Styled.Container>
        </Modal>
    );
};

export default ProfileEditModal;
