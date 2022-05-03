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
import Credentials from '../../pages/Credential';

// Other components
import Page from '../../components/Page';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

// Hooks
import { useAuth } from '../../contexts/UserContext';
import { useGetUserByUsernameLazyQuery, Users } from '../../graphql';
import { useWeb3React } from '@web3-react/core';

// Utils
import Loader from '../../components/Loader';

/* A type definition for a user. It is a combination of the User type and the UserInfo type. */
interface IUserInfo extends Omit<Users, '__typename'> {
    userBio?: string;
}

/* Creating a user object with all the information that is needed to be displayed. */
const RAW_USER: IUserInfo = {
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
    credentialsByTargetId: [],
    credentialsByTargetId_aggregate: {
        nodes: []
    },
    gate_progresses: [],
    gate_progresses_aggregate: {
        nodes: []
    }
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
        userInfo?: Users;
        loadingWallet?: boolean;
        walletConnected?: boolean;
    } = useAuth();
    const navigate = useNavigate();

	// State
	const [userInfo, setUserInfo] = useState<IUserInfo>(RAW_USER);
	const [currentLocation, setCurrentLocation] = useState({
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
    const [getUser, { data, loading: userLoading, error: userError }] = useGetUserByUsernameLazyQuery();

	/**
	 * Get the current location of the user and set the state of the component to reflect that location
	 */
	const getTimezone = async (timeZone = null) => {
		try {
			const tz_info = Intl.DateTimeFormat('default', {
				...(timeZone ? { timeZone } : {}),
			}).resolvedOptions();
			console.log(tz_info.timeZone);

			setCurrentLocation({
				tz: {
					name: tz_info.timeZone,
					abbreviated: tz_info.timeZoneName,
				},
			});
		} catch (err) {
			console.error(`[PROFILE] Couldn't get user timezone: ${err}`);
		}
	};

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
                    await getUser({
                        variables: {
                            username: username.toLowerCase(),
                        },
                    });
                    setUserInfo((prev) => ({
                        ...prev,
                        ...data?.users[0],
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
		console.error(
			`[PROFILE] An error occurred while fetching the user: ${userError}`
		);
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
			<Outlet
				context={{
					userInfo,
					currentLocation,
					canEdit,
				}}
			/>
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
	Credentials,
};
