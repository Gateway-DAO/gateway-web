import React, { useState, useEffect } from 'react';
import {
	Navigate,
	useNavigate,
	useLocation,
	useOutletContext,
	useSearchParams,
} from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';

import useFileUpload from '../../../../api/useFileUpload';
import normalizeUrl from 'normalize-url';
import './CompleteProfile.css';
import Page from '../../../../components/Page';
import { FormStyled, RawImageUpload } from '../../../../components/Form';
import { FaTrashAlt } from 'react-icons/fa';
import { useLazyQuery, gql } from '@apollo/client';
import { getUserByUsername } from '../../../../graphql/queries';
import { usernameGenerator } from '../../../../utils/functions';
import Space from '../../../../components/Space';
import Loader from '../../../../components/Loader';

const platforms = [
	{ label: 'Select', value: 'select' },
	{ label: 'Twitter', value: 'twitter' },
	{ label: 'Telegram', value: 'telegram' },
	{ label: 'Discord', value: 'discord' },
	{ label: 'Github', value: 'github' },
	{ label: 'Email', value: 'email' },
	{ label: 'Medium', value: 'medium' },
	{ label: 'Website', value: 'website' },
	{ label: 'Chat', value: 'chat' },
	{ label: 'Other', value: 'other' },
];

/* Defining a type for the errors object. */
interface IErrors {
	name?: string;
	userName?: string;
	userBio?: string;
	socials?: string[];
}

const CompleteProfile: React.FC = () => {
	// Hooks
	const { uploadFile } = useFileUpload();
	const navigate = useNavigate();
	const [getUser, { data }] = useLazyQuery(gql(getUserByUsername));
	const {
		updateUserInfo,
	}: { updateUserInfo?(info: Record<string, any>): void } = useAuth();
	const [searchParams, setSearchParams] = useSearchParams();

	// State
	const { userInfo, canEdit } = useOutletContext<Record<string, any>>();
	const [redirect, setRedirect] = useState(false);
	const [isValidated, setIsValidated] = useState(false);
	const [defaultPfp, setDefaultPfp] = useState(userInfo?.pfp || null);
	const [file, setFile] = useState(null);
	const [tz, setTZ] = useState(userInfo?.timezone?.shouldTrack || false);
	const [user, setUser] = useState({
		displayName: userInfo?.name || '',
		userName: userInfo?.username || '',
		avatar: userInfo?.pfp || '',
		userBio: userInfo?.bio || '',
		socials:
			userInfo?.socials?.length > 0
				? userInfo.socials.map((social) => ({
					platform_name: social.network,
					placeholder: social.url,
					platform_value: social.url,
				}))
				: [
					{
						platform_name: 'other',
						placeholder: 'mygateway.xyz/profile',
						platform_value: null,
					},
				],
	});
	const [errors, setErrors] = useState<IErrors>({});
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const checkErrors = async () => {
		let errors: IErrors = {};

		if (user.displayName.length < 3)
			errors.name = 'The display name is too short!';
		else if (user.displayName.length > 50)
			errors.name = 'The display name is too long!';

		if (user.userName.length < 3)
			errors.userName = 'The username is too short!';
		else if (user.userName.length > 50)
			errors.userName = 'The username is too long!';
		else if (!/^[a-z0-9-\.]+$/.test(user.userName))
			errors.userName =
				'Usernames need to be all lower-caps and can only contain letters(a-z), numbers(0-9) and dashes(-)';

		const { data } = await getUser({
			variables: {
				username: user?.userName,
			},
		});

		if (
			user.userName !== userInfo?.username &&
			user.userName.length != 0 &&
			data.getUserByUsername.items.length > 0
		)
			errors.userName = 'This username is already taken!';

		if (user.userBio && user.userBio.length < 3)
			errors.userBio = 'The headline is too short!';
		else if (user.userBio.length > 120)
			errors.userBio = 'The headline is too long!';

		for (let i = 0; i < user?.socials?.length; i++) {
			if (user?.socials[i]?.platform_value?.length < 0) {
				errors.socials[i] = 'The URL is too short!';
			}
		}

		return errors;
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

	const handleNameChange = async (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setUser((prev) => ({ ...prev, [name]: value }));
		const nameFormErrors = await checkErrors();
		if (Object.keys(nameFormErrors).length) {
			setErrors(nameFormErrors);
			setIsValidated(false);
		} else {
			setErrors({});
			setIsValidated(true);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();

		const formErrors = await checkErrors();
		if (Object.keys(formErrors).length) {
			setErrors(formErrors);
			setIsValidated(false);
		} else {
			setErrors({});
			setIsValidated(true);

			try {
				// Upload files to S3
				setIsLoading(true);
				const avatarURL = file
					? await uploadFile(
						`users/${userInfo.id}/${Date.now()}/file.name
							.split('.')
							.pop()}`,
						file,
						{ contentType: `image` }
					)
					: defaultPfp;

				await updateUserInfo({
					name: user.displayName,
					username: user.userName.toLowerCase(),
					pfp: avatarURL,
					bio: user.userBio,
					socials: user.socials
						.filter((social) => social.platform_value !== null)
						.map((social) => ({
							network: social.platform_name,
							url: normalizeUrl(social.platform_value, {
								forceHttps: true,
							}),
						})),
					timezone: {
						shouldTrack: tz,
						...(tz && { tz: Intl.DateTimeFormat().resolvedOptions().timeZone })
					},
					init: true,
				});

				setIsLoading(false);
				// redirect
				setRedirect(true);
			} catch (err) {
				console.log(err);
			}
		}
	};

	if (redirect) {
		return <Navigate to={searchParams.get('to') || '..'} />;
	}

	if (!canEdit) {
		return <Navigate to='/404' />;
	}

	return (
		<Space>
			<div className='main-about-section'>
				<Container>
					<div className='back-link'>
						<a>
							<div
								className='arrow-back'
								onClick={() => navigate('/profile')}
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
								'/profile/edit-profile'
								? 'Complete Profile'
								: 'Edit Profile'}
						</h1>
						<Form
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
										className={`${user.displayName &&
											'change-background-to-fill'
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
										isInvalid={!!errors.name}
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.name}
									</Form.Control.Feedback>
								</Form.Group>
							</div>
							<div className='mb-3 row'>
								<Form.Group
									className='col'
									controlId='userName'
								>
									<Form.Label>Username</Form.Label>
									<Form.Control
										className={`${user.userName &&
											isValidated &&
											'change-background-to-fill'
											}`}
										required
										name='userName'
										size='lg'
										type='text'
										placeholder='mygateway.xyz/username'
										onChange={(e) => {
											handleNameChange(e);
										}}
										value={user.userName}
										isInvalid={!!errors.userName}
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.userName}
									</Form.Control.Feedback>

									{/* <FormStyled.Button
										type='button'
										onClick={() =>
											setUser((prev) => ({
												...prev,
												userName: usernameGenerator(),
											}))
										}
									>
										Generate Username
									</FormStyled.Button> */}
								</Form.Group>
							</div>
							<div className='mb-3 row'>
								<Form.Group
									className='col'
									controlId='userAvatar'
								>
									<Form.Label>AVATAR</Form.Label>
									<RawImageUpload
										defaultImageURL={`${defaultPfp}?${Date.now()}`}
										setImage={setFile}
									/>
								</Form.Group>
							</div>
							<div className='mb-3 row'>
								<Form.Group className='col' controlId='userBio'>
									<Form.Label>Headline</Form.Label>
									<Form.Control
										className={`${user.userBio &&
											'change-background-to-fill'
											}`}
										required
										name='userBio'
										value={user.userBio}
										onChange={(e) => {
											handleChange(e);
										}}
										isInvalid={!!errors.userBio}
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.userBio}
									</Form.Control.Feedback>
								</Form.Group>
							</div>
							{/* <div className='mb-3 row'>
                                <Form.Group
                                    className='col'
                                    controlId='location'
                                >
                                    <Form.Label>
                                        Share your Timezone?
                                    </Form.Label>
                                    <FormStyled.GridBox
                                        onChange={(e) => setTZ(JSON.parse(e.target.value))}
                                    >
                                        <FormStyled.Radio
                                            id='tz-yes'
                                            name='tz'
                                            value={true}
                                            label='Yes'
                                            checked={tz}
                                        />
                                        <FormStyled.Radio
                                            id='tz-no'
                                            name='tz'
                                            value={false}
                                            label='No'
                                            checked={!tz}
                                        />
                                    </FormStyled.GridBox>
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.userBio}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div> */}
							<Form.Group className='col' controlId='formBasic'>
								<Form.Label>SOCIALS</Form.Label>
								<div className='gway-socialurl-add'>
									{user.socials.map((x, i) => (
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
																		item.value
																	}
																	value={
																		item.value
																	}
																>
																	{
																		item.label
																	}
																</option>
															)
														)}
												</Form.Select>
											</div>
											<div className='gway-socialurl-col-center'>
												<Form.Control
													className={`${user.socials[i] &&
														'change-background-to-fill'
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
													<FaTrashAlt color='white' />
												</a>
											</div>
										</div>
									))}
									<div className='add-social-row'>
										<a onClick={handleAddSocial}>
											<img src='/completeprofile/plus-btn.svg' />
										</a>
									</div>
								</div>
							</Form.Group>
							<Button variant='primary' type='submit'>
								{!!isLoading && <Loader color='white' />}
								SAVE
							</Button>
						</Form>
					</Container>
				</div>
			</div>
		</Space>
	);
};

export default CompleteProfile;
