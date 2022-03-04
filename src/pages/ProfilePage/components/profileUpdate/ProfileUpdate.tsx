import React, { useState, useEffect } from 'react';

// Styling
import './Profile.css';
import Geocode from 'react-geocode';

// Hooks
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../contexts/UserContext';

// Components
import {
	FaCopy,
	FaDiscord,
	FaEdit,
	FaGithubAlt,
	FaPlus,
	FaShareAlt,
	FaTelegram,
	FaTwitter,
	FaMapMarkerAlt,
} from 'react-icons/fa';
import { BiCopy } from 'react-icons/bi';
import Loader from '../../../../components/Loader';
import Page from '../../../../components/Page';
import {
	Container,
	Button,
	Row,
	Col,
	ListGroup,
	ProgressBar,
	Dropdown,
} from 'react-bootstrap';
import { Navigate, NavLink as Link } from 'react-router-dom';

// API
import { useLazyQuery, gql } from '@apollo/client';
import { getUserByUsername } from '../../../../graphql/queries';

// Utils
import { shortenAddress } from '../../../../utils/web3';

// Types
import { User } from '../../../../graphql/API';

/* Creating a variable called offset and setting it to the timezone offset of the current date. */
let offset = new Date().getTimezoneOffset(),
	o = Math.abs(offset);

const ProfileUpdate = () => {
	// Hooks
	const { username }: { username?: string } = useParams();
	const { userInfo: signedUser }: { userInfo?: User } = useAuth();

	// API Calls
	const [getUser, { data, loading, error }] = useLazyQuery(
		gql(getUserByUsername),
		{
			variables: {
				username,
			},
		}
	);

	// State
	const [userInfo, setUserInfo] = useState({
		about: data?.getUserByUsername?.items[0]?.about || '',
		skill: data?.getUserByUsername?.items[0]?.skill || [],
		langs: data?.getUserByUsername?.items[0]?.languages || [],
		knowledge: data?.getUserByUsername?.items[0]?.knowledge || [],
		experience: data?.getUserByUsername?.items[0]?.experience || {},
		attitude: data?.getUserByUsername?.items[0]?.attitudes || [],
		socials: data?.getUserByUsername?.items[0]?.socials || [],
		...(data?.getUserByUsername?.items[0] || {}),
	});
	const [currentTime, setCurrentTime] = useState(new Date());
	const [currentLocation, setCurrentLocation] = useState({
		lat: '',
		long: '',
		city: '',
		state: '',
		country: '',
	});

	/**
	 * Get the current location of the user and set the state of the component to reflect that location
	 */
	const getAddress = () => {
		const location = window.navigator && window.navigator.geolocation;
		if (location) {
			Geocode.setApiKey('AIzaSyATK9o39GIBSa_1OfeMxzDjx5pV3_S7IZA');
			location.getCurrentPosition(
				(position) => {
					Geocode.fromLatLng(
						position.coords.latitude,
						position.coords.longitude
					).then(
						(response) => {
							const address =
								response.results[0].formatted_address;
							let city, state, country;
							for (
								let i = 0;
								i <
								response.results[0].address_components.length;
								i++
							) {
								for (
									let j = 0;
									j <
									response.results[0].address_components[i]
										.types.length;
									j++
								) {
									switch (
									response.results[0].address_components[
										i
									].types[j]
									) {
										case 'locality':
											city =
												response.results[0]
													.address_components[i]
													.long_name;
											break;
										case 'administrative_area_level_1':
											state =
												response.results[0]
													.address_components[i]
													.long_name;
											break;
										case 'country':
											country =
												response.results[0]
													.address_components[i]
													.long_name;
											break;
									}
								}
							}
							setCurrentLocation((prevState) => ({
								...prevState,
								lat: position.coords.latitude.toString(),
								long: position.coords.longitude.toString(),
								city: city,
								state: state,
								country: country,
							}));
						},
						(error) => {
							console.error('geocode-react', error);
						}
					);
				},
				(error) => {
					console.log('location error', error);
					// this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
				}
			);
		}
	};

	const tick = () => setCurrentTime(new Date());

	/**
	 * It returns an icon based on the platform.
	 * @param platform - The social media platform you want to share to.
	 * @returns A function that returns a React component.
	 */
	const getSocialIcon = (platform) => {
		let icon = <FaShareAlt color='white' />;

		if (platform == 'twitter') {
			icon = <FaTwitter color='white' />;
		} else if (platform == 'discord') {
			icon = <FaDiscord color='white' />;
		} else if (platform == 'telegram') {
			icon = <FaTelegram color='white' />;
		} else if (platform == 'github') {
			icon = <FaGithubAlt color='white' />;
		}

		return icon;
	};

	/**
	 * Get the time zone abbreviation from the current date
	 * @returns The abbreviation of the time zone.
	 */
	const timeZoneAbbreviated = () => {
		const { 1: tz } = new Date().toString().match(/\((.+)\)/);

		if (tz.includes(' ')) {
			return tz
				.split(' ')
				.map(([first]) => first)
				.join('');
		} else {
			return tz;
		}
	};

	const timerID = setInterval(() => tick(), 1000);

	/* Fetching the user info from the database and setting it to the state. */
	useEffect(() => {
		const callback = async () => {
			if (!username) {
				setUserInfo((prev) => ({
					...prev,
					...signedUser,
				}));
			} else {
				const { data: res } = await getUser();
				console.log('HEY');
				console.log(res);
				setUserInfo((prev) => ({
					...prev,
					...res?.getUserByUsername?.items[0],
				}));
			}
		};

		callback();
		getAddress();

		return clearInterval(timerID);
	}, []);

	/* Checking if there is an error. If there is an error, it will return a 404 page. */
	if (error) {
		return <Navigate to='/404' />;
	}

	/* The above code is loading the data from the API and displaying it on the page. */
	if (loading) {
		return (
			<Page>
				<div className='gateway-profile-loader-box'>
					<Loader color='white' size={35} />
				</div>
			</Page>
		);
	}

	return (
		<Page>
			<section className='gateway-profile'>
				<Container>
					<Row>
						<Col md={2}>
							<div className='gateway-profile-left'>
								<img src={userInfo.pfp} />
							</div>
						</Col>
						<Col md={7}>
							<div className='gateway-profile-middle'>
								<Row>
									<Col md={8}>
										<div className='gateway-profile-middle-inner-content'>
											<h1>{userInfo.name}</h1>
											<h5>@{userInfo.username}</h5>
										</div>
										<div className='gateway-profile-middle-inner-content'>
											<div className='user-bio'>
												{userInfo.bio}
											</div>
											<div className='social'>
												{userInfo.socials.length > 0 &&
													userInfo.socials.map(
														(item) => (
															<a
																href={item.url}
																key={
																	item.network
																}
															>
																{getSocialIcon(
																	item.network
																)}
															</a>
														)
													)}
											</div>
											{userInfo.userBio === '' ? (
												<Link
													to='complete-profile'
													className='complete-profile-btn'
												>
													Complete Profile
												</Link>
											) : null}
										</div>
									</Col>
									<Col md={4}>
										<div className='gateway-profile-middle-inner-top'>
											<p>
												{shortenAddress(
													userInfo.wallet
												)}
											</p>
											<div className='gateway-profile-middle-btn-grp'>
												<a href='#'>
													<BiCopy color='white' />
												</a>
												{userInfo.userBio !== '' ? (
													<Dropdown>
														<Dropdown.Toggle
															variant='success'
															id='dropdown-basic'
														>
															<FaEdit />
														</Dropdown.Toggle>

														<Dropdown.Menu>
															<Link to='edit-profile'>
																Edit Profile
															</Link>
															<Link to='/'>
																Manage Wallets
															</Link>
														</Dropdown.Menu>
													</Dropdown>
												) : null}
											</div>
										</div>
									</Col>
								</Row>
							</div>

							<div className='gway-prfile-col'>
								<div className='gway-about-hd'>
									<h2>About</h2>
									{userInfo.about ? (
										<Link to='add-about'>
											<FaEdit />
										</Link>
									) : null}
								</div>
								{userInfo.about ? (
									<div
										dangerouslySetInnerHTML={{
											__html: userInfo.about,
										}}
									/>
								) : (
									<p>
										You can write about your years of
										experience, industry, or skills. People
										also talk about their achievements or
										previous job experiences.
									</p>
								)}
								{!userInfo.about ? (
									<Link
										to='add-about'
										className='add-now-btn'
									>
										ADD NOW
									</Link>
								) : null}
							</div>
							<div className='gway-prfile-col'>
								<div className='gway-about-hd'>
									<h2>Experience</h2>
									<Link to='add-experiences'>
										<FaPlus color='white' />
									</Link>
								</div>
								<p>Add your Experience and Contributions. </p>
								<div className='gway-contact-card'>
									<p>
										If you have received a credential from
										Gateway and it isn’t displayed. Contact
										us here.
									</p>
									<Link to='/contact'>Contact NOW</Link>
								</div>
							</div>
							<div className='gway-prfile-col'>
								<div className='gway-about-hd'>
									<h2>Activity</h2>
									<a href='#'>
										<FaPlus color='white' />
									</a>
								</div>
								<p>
									Share articles you created or whatever align
									to you beliefs with you network.
								</p>
								<a href='#' className='add-now-btn'>
									ADD NOW
								</a>
							</div>
						</Col>

						<Col md={3}>
							<div className='gateway-profile-right'>
								<div className='gateway-profile-right-top'>
									<p>Time Zone</p>
									<a href='#'>
										<FaMapMarkerAlt color='white' />
									</a>
								</div>
								<div className='gateway-profile-right-content'>
									<img src='/profile/vector.svg' />
									<h3>
										{currentTime.toLocaleTimeString(
											'en-US',
											{
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
											}
										)}
									</h3>
									<p>
										{currentLocation.city &&
											currentLocation.state &&
											currentLocation.country
											? currentLocation.city +
											', ' +
											currentLocation.state +
											', ' +
											currentLocation.country
											: 'Location not found'}
									</p>
									<span>
										{timeZoneAbbreviated()} (
										{
											new Date()
												.toLocaleTimeString('en-us', {
													timeZoneName: 'short',
												})
												.split(' ')[2]
										}
										)
									</span>
								</div>
							</div>
							<div className='gway-skill-col skill-second-sec'>
								<div className='gway-skill-col-hd'>
									<h3>Skills</h3>
									<Link to='add-skills'>
										<FaPlus color='white' />
									</Link>
								</div>
								<ListGroup as='ul'>
									{!!userInfo.skill &&
										userInfo.skill.length > 0 ? (
										userInfo.skill.length > 0 &&
										userInfo.skill.map((item) => (
											<ListGroup.Item
												as='li'
												key={item.label}
											>
												<a className='gway-btn'>
													{item.label}
												</a>
											</ListGroup.Item>
										))
									) : (
										<ListGroup.Item as='li'>
											<a className='gway-btn'>
												No skills found
											</a>
										</ListGroup.Item>
									)}
								</ListGroup>
							</div>
							<div className='gway-skill-col skill-second-sec gway-skill-col-inner'>
								<div className='gway-skill-col-hd'>
									<h3>Knowledge</h3>
									<Link to='add-knowledge'>
										<FaPlus color='white' />
									</Link>
								</div>
								<ListGroup as='ul'>
									{!!userInfo.knowledge &&
										userInfo.knowledge.length > 0 ? (
										userInfo.knowledge.length > 0 &&
										userInfo.knowledge.map((item) => (
											<ListGroup.Item
												as='li'
												key={item.label}
											>
												<a className='gway-btn'>
													{item.label}
												</a>
											</ListGroup.Item>
										))
									) : (
										<ListGroup.Item as='li'>
											<a className='gway-btn'>
												No knowledge found
											</a>
										</ListGroup.Item>
									)}
								</ListGroup>
							</div>
							<div className='gway-skill-col skill-second-sec gway-skill-col-inner gway-attitudes-col-inner'>
								<div className='gway-skill-col-hd'>
									<h3>Attitudes</h3>
									<Link to='add-attitude'>
										<FaPlus color='white' />
									</Link>
								</div>
								<ListGroup as='ul'>
									{!!userInfo.attitude &&
										userInfo.attitude.length > 0 ? (
										userInfo.attitude.length > 0 &&
										userInfo.attitude.map((item) => (
											<ListGroup.Item
												as='li'
												key={item.label}
											>
												<a className='gway-btn'>
													{item.label}
												</a>
											</ListGroup.Item>
										))
									) : (
										<ListGroup.Item as='li'>
											<a className='gway-btn'>
												No attitudes found
											</a>
										</ListGroup.Item>
									)}
								</ListGroup>
							</div>
							<div className='gway-skill-col gway-languages-col-inner'>
								<div className='gway-skill-col-hd'>
									<h3>Languages</h3>
									<Link to='add-language'>
										<FaPlus color='white' />
									</Link>
								</div>
								<ListGroup as='ul'>
									{!!userInfo.langs &&
										userInfo.langs.length > 0 ? (
										userInfo.langs.length > 0 &&
										userInfo.langs.map((item) => (
											<ListGroup.Item
												as='li'
												key={item.label}
											>
												<a className='gway-btn'>
													{item.label}
												</a>
											</ListGroup.Item>
										))
									) : (
										<ListGroup.Item as='li'>
											<a className='gway-btn'>
												No language found
											</a>
										</ListGroup.Item>
									)}
								</ListGroup>
							</div>
							<div className='gway-skill-col'>
								<div className='gway-skill-col-hd'>
									<h3>DAOs you might like</h3>
								</div>
								<ListGroup as='ul' className='daos-like-ul'>
									<ListGroup.Item as='li'>
										<a href='#' className='daos-like'>
											<img
												src='/profile/seed.png'
												alt='image'
											/>
											<span>Seed Club</span>
										</a>
									</ListGroup.Item>
									<ListGroup.Item as='li'>
										<a href='#' className='daos-like'>
											<img
												src='/profile/Buildspace.png'
												alt='image'
											/>
											<span>Buildspace</span>
										</a>
									</ListGroup.Item>
									<ListGroup.Item as='li'>
										<a href='#' className='daos-like'>
											<img
												src='/profile/Friends.png'
												alt='image'
											/>
											<span>Friends with Benefits</span>
										</a>
									</ListGroup.Item>
									<ListGroup.Item as='li'>
										<a href='#' className='daos-like'>
											<img
												src='/profile/unishap.png'
												alt='image'
											/>
											<span>Uniswap</span>
										</a>
									</ListGroup.Item>
									<ListGroup.Item as='li'>
										<a href='#' className='daos-like'>
											<img
												src='/profile/pleasr.png'
												alt='image'
											/>
											<span>PleasrDAO</span>
										</a>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Page>
	);
};

export default ProfileUpdate;
