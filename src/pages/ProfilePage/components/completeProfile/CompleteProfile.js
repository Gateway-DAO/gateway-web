import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import space from '../../../../utils/canvas';
import { useAuth } from '../../../../contexts/UserContext';
import Header from '../../../../components/Header';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import useFileUpload from '../../../../api/useFileUpload';
import normalizeUrl from 'normalize-url';
import { useWeb3React } from '@web3-react/core';
import './CompleteProfile.css';
import Page from '../../../../components/Page';

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,
    FilePondPluginFileValidateType
);

const CompleteProfile = () => {
    // Hooks
    const { uploadFile } = useFileUpload();
    const location = useLocation();
    const { userInfo, updateUserInfo } = useAuth();
    const navigate = useNavigate();
    const web3 = useWeb3React();

    // State
    const [redirect, setRedirect] = useState(false);
    // const [isUser, setIsUser] = useState(location.state.isUser || false);
    const [isValidated, setIsValidated] = useState(false);
    const [files, setFiles] = useState([]);
    const [user, setUser] = useState({
        displayName: userInfo?.name || '',
        userName: userInfo?.username || '',
        avatar: userInfo?.pfp || '',
        userBio: userInfo?.bio || '',
        socials:
            userInfo?.socials?.map((social) => ({
                platform_name: social.network,
                placeholder: social.url,
                platform_value: social.url,
            })) || [],
    });

    const [platforms, setPlatforms] = useState([
        'Select',
        'Twitter',
        'Telegram',
        'Discord',
        'Github',
        'Email',
    ]);
    const [isDisplayNameFilled, setIsDisplayNameFilled] = useState(false);
    const [isUserNameFilled, setIsUserNameFilled] = useState(false);
    const [isHeadLineFilled, setIsHeadLineFilled] = useState(false);
    const [isSocialValueFilled, setIsSocialValueFilled] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    useEffect(() => {
        // isUser &&
        space(window.innerHeight, window.innerWidth);
    }, [window.innerHeight, window.innerWidth]);

    useEffect(() => {
        handleFormFilled();
    }, [user]);

    useEffect(() => {
        if (userInfo) {
            setFiles([
                {
                    source: userInfo.pfp || '',
                    options: { type: 'local' },
                },
            ]);
        } else {
            return <Navigate to='/404' />;
        }
    }, []);

    const handleFormFilled = () => {
        if (user.displayName.length > 0) {
            setIsDisplayNameFilled(true);
        } else {
            setIsDisplayNameFilled(false);
        }
        if (user.userName.length > 0) {
            setIsUserNameFilled(true);
        } else {
            setIsUserNameFilled(false);
        }
        if (user.userBio.length > 0) {
            setIsHeadLineFilled(true);
        } else {
            setIsHeadLineFilled(false);
        }

        for (let i = 0; i < user.socials.length; i++) {
            let flags = isSocialValueFilled;
            if (user.socials[i].platform_value.length > 0) {
                flags[i] = true;
                setIsSocialValueFilled(flags);
            } else {
                flags[i] = false;
                setIsSocialValueFilled(flags);
            }
        }
    };

    const handleInit = () => {
        console.log('FilePond instance has initialised');
    };

    const handleAddSocial = () => {
        setUser((prevState) => {
            return {
                ...prevState,
                socials: [
                    ...prevState.socials,
                    {
                        platform_name: '',
                        placeholder: '',
                        platform_value: '',
                    },
                ],
            };
        });
    };

    const handleRemoveSocial = (social) => {
        const filtered = user.socials.filter(
            (previousTag, index) => index !== social
        );
        console.log('filtered', filtered);
        setUser((prevState) => {
            return {
                ...prevState,
                socials: filtered,
            };
        });
    };

    const handleSocialChange = (e, index) => {
        const { name, value } = e.target;
        const { socials } = user;
        const list = [...socials];
        list[index][name] = value;
        setUser((prevState) => {
            return {
                ...prevState,
                socials: list,
            };
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() !== false) {
            console.log('submitted', user);
            try {
                // Upload files to S3
                const avatarURL = await uploadFile(
                    `users/${userInfo.id}/profile.${files[0].file.name
                        .split('.')
                        .pop()}`,
                    files[0].file,
                    { contentType: 'image/jpeg' }
                );

                await updateUserInfo({
                    name: user.displayName,
                    username: user.userName,
                    pfp: avatarURL,
                    bio: user.userBio,
                    socials: user.socials.map((social) => ({
                        network: social.platform_name,
                        url: normalizeUrl(social.platform_value, {
                            forceHttps: true,
                        }),
                    })),
                });

                // redirect
                setRedirect(true);
            } catch (err) {
                console.log(err);
            }
        }

        setIsValidated(true);
    };

    if (redirect) {
        return <Navigate to='/profiles' />;
    }

    return (
        <Page space>
            <div className='main-about-section'>
                <canvas id='space-canvas'></canvas>
                <Container>
                    <div className='back-link'>
                        <a href='#'>
                            <div
                                className='arrow-back'
                                onClick={() => navigate('..')}
                            >
                                <img src='/left-arrow-icon.svg' alt='' />
                            </div>
                        </a>
                        <span style={{ color: 'white', marginLeft: '20px' }}>
                            Back to Profile
                        </span>
                    </div>
                </Container>
                <div className='gt-about-section gt-complete-profile'>
                    <Container>
                        <h1>
                            {window.location.pathname !==
                            '/profiles/edit-profile'
                                ? 'Complete Profile'
                                : 'Edit Profile'}
                        </h1>
                        <Form
                            method='post'
                            className='completeprofile'
                            noValidate
                            validated={isValidated}
                            onSubmit={handleSubmit}
                        >
                            <div className='mb-3 row'>
                                <Form.Group
                                    className='col'
                                    controlId='displayName'
                                >
                                    <Form.Label>Display name</Form.Label>
                                    <Form.Control
                                        className={`${
                                            isDisplayNameFilled
                                                ? 'change-background-to-fill'
                                                : ''
                                        }`}
                                        required
                                        name='displayName'
                                        size='lg'
                                        type='text'
                                        placeholder=''
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        value={user.displayName}
                                    />
                                </Form.Group>
                            </div>
                            <div className='mb-3 row'>
                                <Form.Group
                                    className='col'
                                    controlId='userName'
                                >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        className={`${
                                            isUserNameFilled
                                                ? 'change-background-to-fill'
                                                : ''
                                        }`}
                                        required
                                        name='userName'
                                        size='lg'
                                        type='text'
                                        placeholder='mygateway.xyz/username'
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        value={user.userName}
                                    />
                                </Form.Group>
                            </div>
                            <div className='mb-3 row'>
                                <Form.Group
                                    className='col'
                                    controlId='userAvatar'
                                >
                                    <Form.Label>AVATAR</Form.Label>
                                    <FilePond
                                        required={true}
                                        files={files}
                                        allowMultiple={true}
                                        allowReorder={true}
                                        maxFiles={1}
                                        name='avatar'
                                        allowFileEncode='true'
                                        content-type='image/jpeg'
                                        acceptedFileTypes={[
                                            'image/png',
                                            'image/PNG',
                                            'image/jpg',
                                            'image/JPG',
                                            'image/jpeg',
                                            'image/JPEG',
                                            'image/webp',
                                        ]}
                                        server={{
                                            load: (source, load) => {
                                                console.log({
                                                    source,
                                                });
                                                var myRequest = new Request(
                                                    source
                                                );
                                                fetch(myRequest).then(
                                                    (response) => {
                                                        response
                                                            .blob()
                                                            .then((myBlob) => {
                                                                console.log({
                                                                    myBlob,
                                                                });
                                                                load(myBlob);
                                                            })
                                                            .catch((err) => {
                                                                console.log(
                                                                    err
                                                                );
                                                            });
                                                    }
                                                );
                                            },
                                        }}
                                        labelIdle="<img src='/completeprofile/Vector.svg' /><span class='avatar-upload-action'>Upload</span> or drag your avatar here."
                                        oninit={() => handleInit()}
                                        onupdatefiles={setFiles}
                                        // onupdatefiles={_files => {
                                        // 	setFiles(_files.map(_file => _file.file));
                                        // }}
                                        onaddfile={(error, file) => {
                                            // console.log("error", error);
                                            if (error == null) {
                                                var reader = new FileReader();
                                                reader.onloadend = function () {
                                                    // console.log('RESULT', reader.result);
                                                    setUser((prevState) => {
                                                        return {
                                                            ...prevState,
                                                            avatar: reader.result,
                                                        };
                                                    });
                                                };
                                                reader.onerror = function (
                                                    error
                                                ) {
                                                    console.log(
                                                        'Error: ',
                                                        error
                                                    );
                                                };
                                                reader.readAsDataURL(file.file);
                                            } else {
                                                setUser((prevState) => {
                                                    return {
                                                        ...prevState,
                                                        avatar: '',
                                                    };
                                                });
                                            }
                                        }}
                                        onremovefile={(error, file) => {
                                            setFiles([]);
                                            setUser((prevState) => {
                                                return {
                                                    ...prevState,
                                                    avatar: '',
                                                };
                                            });
                                            // console.log('remove avatar ---: ', user.avatar)
                                        }}
                                    />
                                </Form.Group>
                            </div>
                            <div className='mb-3 row'>
                                <Form.Group className='col' controlId='userBio'>
                                    <Form.Label>Headline</Form.Label>
                                    <Form.Control
                                        className={`${
                                            isHeadLineFilled
                                                ? 'change-background-to-fill'
                                                : ''
                                        }`}
                                        required
                                        name='userBio'
                                        value={user.userBio}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        rows={5}
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group className='col' controlId='formBasic'>
                                <Form.Label>SOCIALS</Form.Label>
                                <div className='gway-socialurl-add'>
                                    {user.socials.map((x, i) => {
                                        return (
                                            <div
                                                className='gway-socialurl-row'
                                                key={i}
                                            >
                                                <div className='gway-socialurl-col-left'>
                                                    <Form.Select
                                                        required
                                                        name='platform_name'
                                                        size='sm'
                                                        value={x.platform_name}
                                                        onChange={(e) =>
                                                            handleSocialChange(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                    >
                                                        {platforms.length > 0 &&
                                                            platforms.map(
                                                                (item) => (
                                                                    <option
                                                                        key={
                                                                            item
                                                                        }
                                                                        value={
                                                                            item
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </option>
                                                                )
                                                            )}
                                                    </Form.Select>
                                                </div>
                                                <div className='gway-socialurl-col-center'>
                                                    <Form.Control
                                                        className={`${
                                                            isSocialValueFilled[
                                                                i
                                                            ]
                                                                ? 'change-background-to-fill'
                                                                : ''
                                                        }`}
                                                        required
                                                        name='platform_value'
                                                        size='lg'
                                                        type='text'
                                                        value={x.platform_value}
                                                        onChange={(e) =>
                                                            handleSocialChange(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                        placeholder={
                                                            x.placeholder
                                                        }
                                                    />
                                                </div>
                                                <div className='gway-socialurl-col-right'>
                                                    <a
                                                        onClick={() =>
                                                            handleRemoveSocial(
                                                                i
                                                            )
                                                        }
                                                    >
                                                        <img src='/completeprofile/trash.svg' />
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className='add-social-row'>
                                        <a onClick={handleAddSocial}>
                                            <img src='/completeprofile/plus-btn.svg' />
                                        </a>
                                    </div>
                                </div>
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                SAVE
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </Page>
    );
};

export default CompleteProfile;
