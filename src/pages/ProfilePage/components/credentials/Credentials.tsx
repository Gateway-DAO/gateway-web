import React, { useState, useEffect } from 'react';

// Styling
import './Credentials.css';

// Hooks
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../contexts/UserContext';
import Loader from '../../../../components/Loader';
import Page from '../../../../components/Page';
import {
	Container,
	Row,
	Col,
	ListGroup,
} from 'react-bootstrap';
import { Navigate, NavLink as Link, useNavigate } from 'react-router-dom';

// Types
import { useWeb3React } from '@web3-react/core';
import { useGetUserByUsernameLazyQuery, Users } from '../../../../graphql';
import { PartialDeep } from 'type-fest';

/* Creating a user object with all the information that is needed to be displayed. */
const RAW_USER: PartialDeep<Users> = {
	id: '',
	bio: '',
	name: '',
	username: '',
	socials: [],
	about: '',
	skills: [],
	languages: [],
	knowledges: [],
	attitudes: [],
	pfp: '',
	wallet: '',
	blacklistedFlags: [],
	whitelistedFlags: [],
	init: true,
	createdAt: Date.now(),
	updatedAt: Date.now(),
};

const Credentials = () => {
	// Hooks
	const { username }: { username?: string } = useParams();
	const {
		userInfo: signedUser,
		loadingWallet,
		walletConnected,
	}: {
		userInfo?: Users;
		loadingWallet?: boolean;
		walletConnected?: boolean;
	} = useAuth();
	const navigate = useNavigate();

	// API Calls
	const [getUser, { data, loading: userLoading, error: userError }] = useGetUserByUsernameLazyQuery();

	// State
	const [userInfo, setUserInfo] = useState<PartialDeep<Users>>(RAW_USER);
	const [internalLoading, setInternalLoading] = useState(true);
	const { account } = useWeb3React();

	const canEdit = userInfo.wallet === account;

	/* Fetching the user info from the database and setting it to the state. */
	useEffect(() => {
		const callback = async () => {
			if (!username) {
				if (!loadingWallet && signedUser) {
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
						...data?.users[0]
					}));
					setInternalLoading(userLoading);
				} catch (err) {
					console.log('err', err);
					navigate('/404');
				}
			}
		};

		callback();

	}, [username, loadingWallet, userLoading, signedUser]);

	/* Checking if there is an error. If there is an error, it will return a 404 page. */
	if (userError) {
		console.log(userError);
		return <Navigate to='/404' />;
	}

	return internalLoading ? (
		<section>
			<div className='gateway-profile-loader-box'>
				<Loader color='white' size={35} />
			</div>
		</section>
	) : (
		<section>
			<section className='gateway-profile'>
				<Container>
					<div className="back-link">
						<a>
							<div className="arrow-back" onClick={() => navigate('/profile')}><img src="/left-arrow-icon.svg" alt="" />
							</div>
						</a>
						<span style={{ color: "white", marginLeft: "20px" }}>
							Back to Profile
						</span>
					</div>
				</Container>
				<Container>
					<Row>
						<Col md={3} className='credentials-img'>
							<div className='gateway-profile-left'>
								<img src={userInfo.pfp} />
							</div>
						</Col>
						<Col md={9} className='credentials-contents'>
							{/* Gateway Profile - Header */}
							<Col sm={12} className='credentials-header'>
								<div className='gateway-profile-middle'>
									<Row>
										<div className='credentials-name'>
											<h5>BanklessDAO</h5>
										</div>
										<div className='credentials-title'>
											<h1>Bankless Beginner</h1>
										</div>
										<div className='credentials-content'>
											<h5>This is the beginning of your journey in Bankless.
												Learn about what Bankless does, how to get involved, and about the culture.
											</h5>
										</div>
										<div className='credentials-tag'>
											<button>
												Contributor
											</button>
											<button>
												Educational
											</button>
											<button>
												Beginner
											</button>
										</div>
									</Row>
								</div>
							</Col>
							<Col sm={12} className='credetials-skill-knowledge-attitude'>
								<Col sm={4}>
									<div className='gway-skill-col skill-second-sec'>
										<div className='gway-skill-col-hd'>
											<h3>Skills</h3>
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
								</Col>
								<Col sm={4}>
									<div className='gway-skill-col skill-second-sec gway-skill-col-inner'>
										<div className='gway-skill-col-hd'>
											<h3>Knowledge</h3>
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
								</Col>
								<Col sm={4}>
									<div className='gway-skill-col skill-second-sec gway-skill-col-inner gway-attitudes-col-inner'>
										<div className='gway-skill-col-hd'>
											<h3>Attitudes</h3>
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
								</Col>
								{/* <div className='gway-skill-col gway-languages-col-inner'>
									<div className='gway-skill-col-hd'>
										<h3>Languages</h3>
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
								</div> */}
							</Col>
							<Col sm={12} className="credentials-keys">
								<h1 className='key-title'>Keys</h1>
								<div className='credentials-keys-content'>
									<h1 className='title'>DOCS AND INTRODUCTION</h1>
									<h5 className='content'>
										Learn about what Bankless does, how to gain membership,
										and the types of products we have made to date.
									</h5>
									<button>DETAILS</button>
								</div>
							</Col>
						</Col>
					</Row>
				</Container>
			</section>
		</section>
	);
};

export default Credentials;
