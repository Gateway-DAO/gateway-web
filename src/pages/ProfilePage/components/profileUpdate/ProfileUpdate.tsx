import React, { useState, useEffect } from 'react';

// Styling
import './Profile.css';
import Geocode from 'react-geocode';

// Hooks
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../contexts/UserContext';

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
import Loader from '../../../../components/Loader';
import Page from '../../../../components/Page';
import {
    Container,
    Row,
    Col,
    ListGroup,
    Dropdown,
    Accordion,
} from 'react-bootstrap';
import { Navigate, NavLink as Link, useNavigate } from 'react-router-dom';
import CredentialCard from './components/CredentialCard';

// API
import { useLazyQuery, gql } from '@apollo/client';
import { getUserByUsername } from '../../../../graphql/queries';

// Utils
import { shortenAddress } from '../../../../utils/web3';
import parser from 'html-react-parser';
import { getIPLocation } from '../../../../api/getIPLocation';


// Types
import { Social, User } from '../../../../graphql/API';
import { useWeb3React } from '@web3-react/core';
import copy from 'copy-to-clipboard';
import { MONTHS } from '../../../../utils/constants';

/* Creating a variable called offset and setting it to the timezone offset of the current date. */
let offset = new Date().getTimezoneOffset(),
    o = Math.abs(offset);

/* A type definition for a user. It is a combination of the User type and the UserInfo type. */
interface IUserInfo extends Omit<User, '__typename'> {
    userBio?: string;
}

/* Creating a user object with all the information that is needed to be displayed. */
const RAW_USER: IUserInfo = {
    id: '',
    bio: '',
    name: '',
    username: '',
    socials: [],
    daos: [],
    about: '',
    skills: [],
    languages: [],
    knowledges: [],
    attitudes: [],
    pfp: '',
    userBio: '',
    wallet: '',
};

const ProfileUpdate = () => {
    // Hooks
    const { username }: { username?: string } = useParams();
    const {
        userInfo: signedUser,
        loadingWallet,
        walletConnected,
    }: {
        userInfo?: User;
        loadingWallet?: boolean;
        walletConnected?: boolean;
    } = useAuth();
    const navigate = useNavigate();

    // API Calls
    const [getUser, { data, loading: userLoading, error: userError }] =
        useLazyQuery(gql(getUserByUsername), {
            variables: {
                username,
            },
        });

    // State
    const [userInfo, setUserInfo] = useState<IUserInfo>(RAW_USER);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentLocation, setCurrentLocation] = useState({
        lat: '',
        long: '',
        city: '',
        state: '',
        country: '',
        tz: {
            name: '',
            abbreviated: '',
        },
    });
    const [internalLoading, setInternalLoading] = useState(true);
    const [weatherData, setWeatherData] = useState([]);
    const { account } = useWeb3React();

    const canEdit = userInfo.wallet === account;

    /**
     * Get the current location of the user and set the state of the component to reflect that location
     */
    const getAddress = async () => {
        const data = await getIPLocation(signedUser.ip || null);
        setCurrentLocation((prev) => ({
            lat: data.latitude.toString(),
            long: data.longitude.toString(),
            city: data.city,
            state: data.region,
            country: data.country,
            tz: {
                name: data.timezone.name,
                abbreviated: data.timezone.abbreviation,
            },
        }));
    };

    const tick = () => setCurrentTime(new Date());

    /**
     * It returns an icon based on the platform.
     * @param platform - The social media platform you want to share to.
     * @returns A function that returns a React component.
     */
    const getSocialIcon = (platform: Social) => {
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
        const callback = async () => {
            if (!username) {
                if (!loadingWallet && signedUser) {
                    !currentLocation.lat && await getAddress();
                    setUserInfo((prev) => ({
                        ...prev,
                        ...signedUser,
                    }));
                    setInternalLoading(false);
                }
            } else {
                try {
                    await getUser();
                    setUserInfo((prev) => ({
                        ...prev,
                        ...data?.getUserByUsername?.items[0],
                    }));
                    setInternalLoading(userLoading);
                } catch (err) {
                    console.log('err', err);
                    navigate('/404');
                }
            }
        };

        callback();

        return clearInterval(timerID);
    }, [username, loadingWallet, userLoading, signedUser]);

    /* Checking if there is an error. If there is an error, it will return a 404 page. */
    if (userError) {
        console.log(userError);
        return <Navigate to='/404' />;
    }

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
        alert('Wallet Address Copied!');
    };

    return internalLoading ? (
        <Page>
            <div className='gateway-profile-loader-box'>
                <Loader color='white' size={35} />
            </div>
        </Page>
    ) : (
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
                                            <div className='social'>
                                                {userInfo.socials &&
                                                    userInfo.socials.map(
                                                        (item) => (
                                                            <a
                                                                href={item.url}
                                                                key={
                                                                    item.network
                                                                }
                                                            >
                                                                {getSocialIcon(
                                                                    item
                                                                )}
                                                            </a>
                                                        )
                                                    )}
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
                                        <div className='gateway-profile-middle-inner-top'>
                                            <p>
                                                {shortenAddress(
                                                    userInfo.wallet
                                                )}
                                            </p>
                                            <div className='gateway-profile-middle-btn-grp'>
                                                <a
                                                    href='#0'
                                                    onClick={() => {
                                                        handleCopy();
                                                    }}
                                                >
                                                    <BiCopy color='white' />
                                                </a>
                                                {userInfo.init &&
                                                canEdit ? (
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
                                                ) : null}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Gateway Profile - About */}
                            {(userInfo.about ||
                                (!userInfo.about && canEdit)) && (
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
                                            {parser(userInfo.about)}
                                        </div>
                                    ) : (
                                        <p>
                                            You can write about your years of
                                            experience, industry, or skills.
                                            People also talk about their
                                            achievements or previous job
                                            experiences.
                                        </p>
                                    )}
                                    {!userInfo.about && canEdit ? (
                                        <Link
                                            to='add-about'
                                            className='add-now-btn'
                                        >
                                            ADD NOW
                                        </Link>
                                    ) : null}
                                </div>
                            )}

                            {/* Gateway Profile - Credentials */}
                            {userInfo.credentials?.items.length > 0 && (
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

                                    {userInfo.credentials?.items.map(
                                        (credential) => (
                                            <div className='experience-profile-section'>
                                                <div className='experience-profile-inner-section'>
                                                    <div className='creative-icon'>
                                                        <img
                                                            src={
                                                                credential
                                                                    .organization
                                                                    .logoURL
                                                            }
                                                            alt='image'
                                                        />
                                                    </div>
                                                    <div className='finance-date'>
                                                        <div className='experience-profile-heading'>
                                                            <h3>
                                                                {
                                                                    credential.name
                                                                }
                                                            </h3>
                                                            {/* canEdit && (
                                                            <Link to='/'>
                                                                <MdEdit color='white' />
                                                            </Link>
														) */}
                                                        </div>
                                                        <p>
                                                            {
                                                                credential
                                                                    .organization
                                                                    .name
                                                            }
                                                            {/*<span>
                                                            Nov 2021 — Present •
                                                            15h/week
                                                        </span>*/}
                                                            <span>
                                                                {MONTHS[
                                                                    new Date(
                                                                        credential.createdAt
                                                                    ).getMonth()
                                                                ].slice(
                                                                    0,
                                                                    3
                                                                )}{' '}
                                                                {new Date(
                                                                    credential.createdAt
                                                                ).getFullYear()}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            {
                                                                credential.gate
                                                                    .description
                                                            }
                                                            {/* <Link
                                                            to='/contact'
                                                            className='creative-see-more'
                                                        >
                                                            See more
														</Link> */}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='nft'>
                                                    <Accordion defaultActiveKey='0'>
                                                        {credential.gate
                                                            .nftType ==
                                                        'CONTRIBUTOR' ? (
                                                            <Accordion.Item eventKey='0'>
                                                                <div className='accordion-top-header'>
                                                                    <Accordion.Header>
                                                                        CONTRIBUTOR
                                                                        CREDENTIAL
                                                                    </Accordion.Header>
                                                                    {/*<Link
                                                                    to='/'
                                                                    className='accordion-see-all-btn'
                                                                >
                                                                    See all
																</Link>*/}
                                                                </div>
                                                                <Accordion.Body>
                                                                    <Row className='justify-content-md-left'>
                                                                        <CredentialCard
                                                                            credential={
                                                                                credential
                                                                            }
                                                                        />
                                                                    </Row>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        ) : (
                                                            <Accordion.Item eventKey='0'>
                                                                <Accordion.Header>
                                                                    REWARD
                                                                    CREDENTIAL
                                                                </Accordion.Header>
                                                                <Accordion.Body>
                                                                    <Row className='justify-content-md-left'>
                                                                        <CredentialCard
                                                                            credential={
                                                                                credential
                                                                            }
                                                                        />
                                                                    </Row>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        )}
                                                    </Accordion>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                            {/*
                            <div className='gway-prfile-col'>
                                <div className='gway-about-hd'>
                                    <h2>Activity</h2>
                                    {canEdit && (
                                        <a href='#'>
                                            <FaPlus color='white' />
                                        </a>
                                    )}
                                </div>
                                <p>
                                    Share articles you created or whatever align
                                    to you beliefs with you network.
                                </p>
                                <a href='#' className='add-now-btn'>
                                    ADD NOW
                                </a>
                            </div>
                            */}
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
                                        {currentLocation.tz.abbreviated} (
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
                                    {canEdit && (
                                        <Link to='add-skills'>
                                            {userInfo.skills?.length > 0 ? <MdEdit color='white' /> : <FaPlus color='white' />}
                                        </Link>
                                    )}
                                </div>
                                <ListGroup as='ul'>
                                    {!!userInfo.skills &&
                                    userInfo.skills.length > 0 ? (
                                        userInfo.skills.length > 0 &&
                                        userInfo.skills.map((item) => (
                                            <ListGroup.Item as='li' key={item}>
                                                <a className='gway-btn'>
                                                    {item}
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
                                    {canEdit && (
                                        <Link to='add-knowledge'>
                                            {userInfo.knowledges?.length > 0 ? <MdEdit color='white' /> : <FaPlus color='white' />}
                                        </Link>
                                    )}
                                </div>
                                <ListGroup as='ul'>
                                    {!!userInfo.knowledges &&
                                    userInfo.knowledges.length > 0 ? (
                                        userInfo.knowledges.length > 0 &&
                                        userInfo.knowledges.map((item) => (
                                            <ListGroup.Item as='li' key={item}>
                                                <a className='gway-btn'>
                                                    {item}
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
                                    {canEdit && (
                                        <Link to='add-attitude'>
                                            {userInfo.attitudes?.length > 0 ? <MdEdit color='white' /> : <FaPlus color='white' />}
                                        </Link>
                                    )}
                                </div>
                                <ListGroup as='ul'>
                                    {!!userInfo.attitudes &&
                                    userInfo.attitudes.length > 0 ? (
                                        userInfo.attitudes.length > 0 &&
                                        userInfo.attitudes.map((item) => (
                                            <ListGroup.Item as='li' key={item}>
                                                <a className='gway-btn'>
                                                    {item}
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
                                    {canEdit && (
                                        <Link to='add-language'>
                                            {userInfo.languages?.length > 0 ? <MdEdit color='white' /> : <FaPlus color='white' />}
                                        </Link>
                                    )}
                                </div>
                                <ListGroup as='ul'>
                                    {!!userInfo.languages &&
                                    userInfo.languages.length > 0 ? (
                                        userInfo.languages.length > 0 &&
                                        userInfo.languages.map((item) => (
                                            <ListGroup.Item as='li' key={item}>
                                                <a className='gway-btn'>
                                                    {item}
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
