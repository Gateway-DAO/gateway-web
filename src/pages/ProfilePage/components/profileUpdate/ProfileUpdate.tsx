import React, { useState, useEffect } from 'react';

// Styling
import './Profile.css';

// Components
import {
	FaDiscord,
	FaGithubAlt,
	FaPlus,
	FaShareAlt,
	FaTelegram,
	FaTwitter,
	FaMapMarkerAlt,
} from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { BiCopy } from 'react-icons/bi';
import {
	WiDaySunny,
	WiDaySunnyOvercast,
	WiDayCloudyHigh,
	WiCloudy,
	WiFog,
	WiShowers,
	WiDayRainMix,
	WiStormShowers,
	WiRain,
	WiSprinkle,
	WiDayShowers,
	WiSnowflakeCold,
	WiDaySnow,
	WiSleet,
	WiRainMix,
	WiHot,
	WiWindy,
	WiNightClear,
	WiNightAltCloudy,
	WiNightLightning,
	WiNightAltShowers,
	WiNightAltStormShowers,
	WiNightAltSnow,
} from 'react-icons/wi';
import {
	Container,
	Row,
	Col,
	ListGroup,
	Dropdown,
	Accordion,
} from 'react-bootstrap';
import { NavLink as Link, useOutletContext } from 'react-router-dom';
import CredentialCard from './components/CredentialCard';

// Hooks
import { useMeasure } from 'react-use';

// Utils
import { shortenAddress } from '../../../../utils/web3';
import parser from 'html-react-parser';
import { Store } from 'react-notifications-component';

// Types
import copy from 'copy-to-clipboard';
import { MONTHS } from '../../../../utils/constants';

/* Creating a variable called offset and setting it to the timezone offset of the current date. */
let offset = new Date().getTimezoneOffset(),
	o = Math.abs(offset);

const ProfileUpdate = () => {
	// State
	const { userInfo, currentLocation, canEdit }: Record<string, any> =
		useOutletContext();
	const [currentTime, setCurrentTime] = useState(new Date());
	const [weatherData, setWeatherData] = useState([]);

	// Hooks
	const [ref, { height: heightPfp }] = useMeasure();
	const height = heightPfp > 40 ? heightPfp : 262;

	const tick = () => setCurrentTime(new Date());

	/**
	 * It returns an icon based on the platform.
	 * @param platform - The social media platform you want to share to.
	 * @returns A function that returns a React component.
	 */
	const getSocialIcon = (platform) => {
		switch (platform.network) {
			case 'twitter':
				return <FaTwitter color='white' />;
			case 'discord':
				return <FaDiscord color='white' />;
			case 'telegram':
				return <FaTelegram color='white' />;
			case 'github':
				return <FaGithubAlt color='white' />;
			default:
				return <FaShareAlt color='white' />;
		}
	};

	const timerID = setInterval(() => tick(), 1000);

	/* Fetching the user info from the database and setting it to the state. */
	useEffect(() => {
		return clearInterval(timerID);
	}, []);

	/**
	 * It takes the weather data and returns the appropriate icon.
	 * @returns The weather icon.
	 */
	const getWeatherIcon = () => {
		if (weatherData.length === 1) {
			if (weatherData[0].WeatherText === 'Sunny') {
				return <WiDaySunny color='white' />;
			} else if (weatherData[0].WeatherText === 'Mostly Sunny') {
				return <WiDaySunnyOvercast color='white' />;
			} else if (weatherData[0].WeatherText === 'Partly Sunny') {
				return <WiDaySunnyOvercast color='white' />;
			} else if (weatherData[0].WeatherText === 'Intermittent Clouds') {
				return <WiDaySunnyOvercast color='white' />;
			} else if (weatherData[0].WeatherText === 'Hazy Sunshine') {
				return <WiDaySunnyOvercast color='white' />;
			} else if (weatherData[0].WeatherText === 'Mostly Cloudy') {
				return <WiDayCloudyHigh color='white' />;
			} else if (weatherData[0].WeatherText === 'Cloudy') {
				return <WiCloudy color='white' />;
			} else if (weatherData[0].WeatherText === 'Dreary (Overcast)') {
				return <WiCloudy color='white' />;
			} else if (weatherData[0].WeatherText === 'Fog') {
				return <WiFog color='white' />;
			} else if (weatherData[0].WeatherText === 'Showers') {
				return <WiShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ Showers' &&
				weatherData[0].IsDayTime === true
			) {
				return <WiDayRainMix color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Partly Sunny w/ Showers'
			) {
				return <WiDayRainMix color='white' />;
			} else if (weatherData[0].WeatherText === 'T-Storms') {
				return <WiStormShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ T-Storms' &&
				weatherData[0].IsDayTime === true
			) {
				return <WiDayRainMix color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Partly Sunny w/ T-Storms'
			) {
				return <WiDayRainMix color='white' />;
			} else if (weatherData[0].WeatherText === 'Rain') {
				return <WiRain color='white' />;
			} else if (weatherData[0].WeatherText === 'Flurries') {
				return <WiSprinkle color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ Flurries' &&
				weatherData[0].IsDayTime === true
			) {
				return <WiDayShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Partly Sunny w/ Flurries'
			) {
				return <WiDayShowers color='white' />;
			} else if (weatherData[0].WeatherText === 'Snow') {
				return <WiSnowflakeCold color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ Snow' &&
				weatherData[0].IsDayTime === true
			) {
				return <WiDaySnow color='white' />;
			} else if (weatherData[0].WeatherText === 'Ice') {
				return <WiSnowflakeCold color='white' />;
			} else if (weatherData[0].WeatherText === 'Sleet') {
				return <WiSleet color='white' />;
			} else if (weatherData[0].WeatherText === 'Freezing Rain') {
				return <WiRain color='white' />;
			} else if (weatherData[0].WeatherText === 'Rain and Snow') {
				return <WiRainMix color='white' />;
			} else if (weatherData[0].WeatherText === 'Hot') {
				return <WiHot color='white' />;
			} else if (weatherData[0].WeatherText === 'Cold') {
				return <WiSnowflakeCold color='white' />;
			} else if (weatherData[0].WeatherText === 'Windy') {
				return <WiWindy color='white' />;
			} else if (weatherData[0].WeatherText === 'Clear') {
				return <WiNightClear color='white' />;
			} else if (weatherData[0].WeatherText === 'Mostly Clear') {
				return <WiNightClear color='white' />;
			} else if (weatherData[0].WeatherText === 'Partly Cloudy') {
				return <WiNightAltCloudy color='white' />;
			} else if (weatherData[0].WeatherText === 'Intermittent Clouds') {
				return <WiNightAltCloudy color='white' />;
			} else if (weatherData[0].WeatherText === 'Hazy Moonlight') {
				return <WiNightLightning color='white' />;
			} else if (weatherData[0].WeatherText === 'Mostly Cloudy') {
				return <WiCloudy color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Partly Cloudy w/ Showers'
			) {
				return <WiNightAltShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ Showers' &&
				weatherData[0].IsDayTime === false
			) {
				return <WiNightAltShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Partly Cloudy w/ T-Storms'
			) {
				return <WiNightAltStormShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ T-Storms' &&
				weatherData[0].IsDayTime === false
			) {
				return <WiNightAltStormShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ Flurries' &&
				weatherData[0].IsDayTime === false
			) {
				return <WiNightAltShowers color='white' />;
			} else if (
				weatherData[0].WeatherText === 'Mostly Cloudy w/ Snow' &&
				weatherData[0].IsDayTime === false
			) {
				return <WiNightAltSnow color='white' />;
			} else {
				return <WiDaySunny color='white' />;
			}
		}
	};

	const handleCopy = async () => {
		copy(userInfo?.wallet || '');
		Store.addNotification({
			title: 'Wallet address copied!',
			type: 'success',
			insert: 'top',
			container: 'top-center',
			animationIn: ['animate__animated', 'animate__fadeIn'],
			animationOut: ['animate__animated', 'animate__fadeOut'],
			dismiss: {
				duration: 5000,
				onScreen: true,
			},
		});
	};

	var daos: Record<string, any> = {}
	userInfo?.credentials?.items?.map(item => {
		if (daos[item.organizationID] == undefined) {
			daos[item.organizationID] = [];
		}
		daos[item.organizationID].push(item);
	});

	return (
		<section className='gateway-profile'>
			<Container>
				<Row>
					<Col md={2}>
						<div className='gateway-profile-left' ref={ref}>
							<img src={`${userInfo.pfp}`} />
						</div>
					</Col>
					<Col md={7}>
						{/* Gateway Profile - Header */}
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
										{userInfo.socials?.filter((item) => item.network == 'website').length > 0 && (
											<div className='hostName'>
												<a href={userInfo.socials?.filter((item) => item.network == 'website')[0].url}>{userInfo.socials?.filter((item) => item.network == 'website')[0].url}</a>
											</div>
										)}
										<div className='social'>
											{userInfo.socials &&
												userInfo.socials?.map((item) => (
													<a
														href={item.url}
														key={item.network}
														target='_blank'
													>
														{getSocialIcon(item)}
													</a>
												))}
										</div>

										{!userInfo.init && canEdit ? (
											<Link
												to='complete-profile'
												state={{
													isUser: canEdit,
												}}
												className='complete-profile-btn'
											>
												Complete Profile
											</Link>
										) : null}
									</div>
								</Col>
								<Col md={4}>
									{canEdit ? (
										<div className='gateway-profile-middle-inner-top'>
											<img
												src='/profile/eth-icon.svg'
												alt='image'
											/>
											<p>
												{shortenAddress(
													userInfo.wallet
												)}
											</p>
											<div className='gateway-profile-middle-btn-grp'>
												<a
													className='clipboard-cpy-btn'
													onClick={() => {
														handleCopy();
													}}
												>
													<BiCopy color='white' />
												</a>
												{userInfo.init && (
													<Dropdown>
														<Dropdown.Toggle
															variant='success'
															id='dropdown-basic'
														>
															<MdEdit color='white' />
														</Dropdown.Toggle>

														<Dropdown.Menu>
															<Link to='edit-profile'>
																Edit Profile
															</Link>
															{/* <Link to='/'>
																Manage Wallets
															</Link> */}
														</Dropdown.Menu>
													</Dropdown>
												)}
											</div>
										</div>
									) : null}
								</Col>
							</Row>
						</div>

						{/* Gateway Profile - About */}
						{(userInfo.about || (!userInfo.about && canEdit)) && (
							<div className='gway-prfile-col'>
								<div className='gway-about-hd'>
									<h2>About</h2>
									{userInfo.about && canEdit ? (
										<Link to='add-about'>
											<MdEdit color='white' />
										</Link>
									) : (
										''
									)}
								</div>
								{userInfo.about ? (
									<div className='about-content'>
										<p>
											{parser(
												userInfo.about.replace(
													/(?:\r\n|\r|\n)/g,
													'<br />'
												)
											)}
										</p>
									</div>
								) : (
									<div className='about-content'>
										<p>
											You can write about your years of
											experience, industry, or skills.
											People also talk about their
											achievements or previous job
											experiences.
										</p>
									</div>
								)}
								<div className='add-about-btn'>
									{!userInfo.about && canEdit ? (
										<Link
											to='add-about'
											className='add-now-btn'
										>
											ADD NOW
										</Link>
									) : null}
								</div>
							</div>
						)}

						{/* Gateway Profile - Credentials */}
						{userInfo?.credentials?.items?.length > 0 && (
							<div className='gway-prfile-col'>
								<div className='gway-about-hd'>
									<h2>Experience</h2>
									{/*canEdit && (
                                            <Link to='add-experiences'>
                                                <FaPlus color='white' />
                                            </Link>
                                        )*/}
								</div>
								{/* canEdit && (
                                    <p>
                                        Add your Experience and Contributions.{' '}
                                    </p>
								) */}

								{/*
								<div className='gway-contact-card'>
									<p>
										Start now your on-chain experience
										through our Gates.
									</p>
									<Link to='/contact'>Start Now</Link>
								</div>
								*/}

								{Object.entries(daos)?.map(([key, value], idx) => (
									<div className='experience-profile-section' key={idx}>
										<div className='experience-profile-inner-section'>
											<div className='creative-icon'>
												<img
													src={value[0]?.organization?.logoURL}
													alt='image'
												/>
											</div>
											<div className='finance-date'>
												<div className='experience-profile-heading'>
													<h3>{value[0]?.organization?.name}</h3>
												</div>
												<p>
													{/* {value[0]?.organization?.name} */}
													<span>
														{MONTHS[
															new Date(
																value[0]?.createdAt
															).getMonth()
														].slice(0, 3)}{' '}
														{new Date(
															value[0]?.createdAt
														).getFullYear()}
													</span>
												</p>
											</div>
										</div>

										<div className='nft'>
											<Accordion defaultActiveKey='0'>
												<Accordion.Item eventKey='0'>
													<div className='accordion-top-header'>
														<Accordion.Header>
															{/* {(credential.skills.length > 0 || credential.attitudes.length > 0 || credential.knowledges.length > 0) ? "REWARD" : "CONTRIBUTOR"} CREDENTIAL */}
															CONTRIBUTOR CREDENTIAL
														</Accordion.Header>
													</div>
													<div className='accordion-body-content' style={{ display: "flex" }}>
														{value?.map((credential: Credential, idx: number) => (
															<Accordion.Body key={idx}>
																<Row className='justify-content-md-left'>
																	<CredentialCard
																		credential={
																			credential
																		}
																	/>
																</Row>
															</Accordion.Body>))}
													</div>
												</Accordion.Item>
											</Accordion>
										</div>

									</div>
								))}
							</div>
						)}
					</Col>

					<Col md={3}>
						{/* {(userInfo?.timezone?.shouldTrack || canEdit) && (
							<div className='gateway-profile-right'>
								<div className='gateway-profile-right-top'>
									<p>Time Zone</p>
									<a>
										<FaMapMarkerAlt color='white' />
									</a>
								</div>
								<div className='gateway-profile-right-content'>
									<img src='/profile/weather.svg' />
									{getWeatherIcon()}
									<h3>
										{currentTime.toLocaleTimeString(
											'en-US',
											{
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
												...(currentLocation.tz.name && {
													timeZone:
														currentLocation.tz.name,
												}),
											}
										)}
									</h3>
									<span>
										{currentLocation.tz.name}
										{currentLocation.tz.abbreviated} (
										{
											new Date().toLocaleTimeString('en-us', {
												timeZoneName: 'short',
												...(currentLocation.tz.name && {
													timeZone:
														currentLocation.tz.name,
												})
											})
												.split(' ')[2]
										}
										)
									</span>
								</div>
							</div>
						)} */}
						<div className='gateway-skill gway-skill-col skill-second-sec'>
							<div className='gway-skill-col-hd'>
								<h3>Skills</h3>
								{canEdit && (
									<Link to='add-skills'>
										{userInfo.skills?.length > 0 ? (
											<MdEdit color='white' />
										) : (
											<FaPlus color='white' />
										)}
									</Link>
								)}
							</div>
							<ListGroup as='ul'>
								{!!userInfo.skills &&
									userInfo.skills.length > 0 ? (
									userInfo.skills.length > 0 &&
									userInfo.skills.map((item) => (
										<ListGroup.Item as='li' key={item}>
											<a className='gway-btn'>{item}</a>
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
								{canEdit && (
									<Link to='add-knowledge'>
										{userInfo.knowledges?.length > 0 ? (
											<MdEdit color='white' />
										) : (
											<FaPlus color='white' />
										)}
									</Link>
								)}
							</div>
							<ListGroup as='ul'>
								{!!userInfo.knowledges &&
									userInfo.knowledges.length > 0 ? (
									userInfo.knowledges.length > 0 &&
									userInfo.knowledges.map((item) => (
										<ListGroup.Item as='li' key={item}>
											<a className='gway-btn'>{item}</a>
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
								{canEdit && (
									<Link to='add-attitude'>
										{userInfo.attitudes?.length > 0 ? (
											<MdEdit color='white' />
										) : (
											<FaPlus color='white' />
										)}
									</Link>
								)}
							</div>
							<ListGroup as='ul'>
								{!!userInfo.attitudes &&
									userInfo.attitudes.length > 0 ? (
									userInfo.attitudes.length > 0 &&
									userInfo.attitudes.map((item) => (
										<ListGroup.Item as='li' key={item}>
											<a className='gway-btn'>{item}</a>
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
								{canEdit && (
									<Link to='add-language'>
										{userInfo.languages?.length > 0 ? (
											<MdEdit color='white' />
										) : (
											<FaPlus color='white' />
										)}
									</Link>
								)}
							</div>
							<ListGroup as='ul'>
								{!!userInfo.languages &&
									userInfo.languages.length > 0 ? (
									userInfo.languages.length > 0 &&
									userInfo.languages.map((item) => (
										<ListGroup.Item as='li' key={item}>
											<a className='gway-btn'>{item}</a>
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
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ProfileUpdate;
