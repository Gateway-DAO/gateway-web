import React, { useEffect, useState } from 'react';

// Profile Components
import Home from './components/profileUpdate/ProfileUpdate';
import AddAbout from './components/addAbout';
import AddExperiences from './components/addExperiences/AddExperiences';
import AddLanguage from './components/addLanguage';
import AddSkill from './components/addSkill';
import CompleteProfile from './components/completeProfile';
import AddKnowledge from './components/addKnowledge';
import AddAttitude from './components/addAttitude';
import Credentials from './components/credentials/Credentials';

// Other components
import Page from '../../components/Page';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

// Types
import { User } from '../../graphql/API';

// Hooks
import { useAuth } from '../../contexts/UserContext';
import { gql, useLazyQuery } from '@apollo/client';
import { useWeb3React } from '@web3-react/core';

// Queries
import { getUserByUsername } from '../../graphql/queries';

// Utils
import getIPLocation, { IPError, Metadata } from '../../api/getIPLocation';
import Loader from '../../components/Loader';

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

/**
 * This React component is responsible for fetching the user info from the database and setting it to the
 * state
 * @returns The Profile page is being returned.
 */
const Profile: React.FC = (props) => {
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

	// State
	const [userInfo, setUserInfo] = useState<IUserInfo>(RAW_USER);
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

	// API Calls
	const [getUser, { data, loading: userLoading, error: userError }] =
		useLazyQuery(gql(getUserByUsername));

	/**
	 * Get the current location of the user and set the state of the component to reflect that location
	 */
	const getAddress = async () => {
		try {
			let data = await getIPLocation(signedUser.ip || null);
			if ((data as IPError).error) throw (data as IPError).error.message;

			setCurrentLocation((prev) => ({
				lat: (data as Metadata).latitude.toString(),
				long: (data as Metadata).longitude.toString(),
				city: (data as Metadata).city,
				state: (data as Metadata).region,
				country: (data as Metadata).country,
				tz: {
					name: (data as Metadata).timezone.name,
					abbreviated: (data as Metadata).timezone.abbreviation,
				},
			}));
		}
		catch (err) {
			console.error(`[PROFILE] Couldn't get user location: ${err}`);
		}
	};

	/* Fetching the user info from the database and setting it to the state. */
	useEffect(() => {
		const callback = async () => {
			if (!username) {
				if (!loadingWallet && signedUser) {
					!currentLocation.lat && (await getAddress());
					setUserInfo((prev) => ({
						...prev,
						...signedUser,
					}));
					setInternalLoading(false);
				}
			} else {
				try {
					await getUser({
						variables: {
							username: username,
						},
					});
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
	}, [username, loadingWallet, userLoading, signedUser]);

	/* Checking if there is an error. If there is an error, it will return a 404 page. */
	if (userError) {
		console.error(`[PROFILE] An error occurred while fetching the user: ${userError}`);
		return <Navigate to='/404' />;
	}

	return internalLoading ? (
		<Page>
			<div className='gateway-profile-loader-box'>
				<Loader color='white' size={35} />
			</div>
		</Page>
	) : (
		<Page>
			<Outlet context={{
				userInfo,
				currentLocation,
				canEdit
			}} />
		</Page>
	);
};

export default Profile;

export {
	Profile,
	Home,
	AddAbout,
	AddExperiences,
	AddLanguage,
	AddSkill,
	CompleteProfile,
	AddKnowledge,
	AddAttitude,
	Credentials
};
