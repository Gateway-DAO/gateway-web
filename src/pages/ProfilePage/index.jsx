import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/UserContext';
import AddExperience from './components/AddExperience';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import ProfileEditModal from '../../components/Modal/ProfileEditModal';

// Sub-components
import BioBox from './components/BioBox';
import ProfileBox from './components/ProfileBox';

// Database
import { useLazyQuery, gql } from '@apollo/client';
import { getUserByUsername as USER_QUERY } from '../../graphql/queries';

const RAW_USER = {
    bio: '',
    name: '',
    username: '',
    socials: [],
    daos: [],
};

const ProfilePage = () => {
    // State
    const [activeTab, setActiveTab] = useState('experience');
    const [showEditModal, setShowEditModal] = useState(false);

    // Hooks
    const { searchTerm } = useParams();
    const navigate = useNavigate();
    const {
        userInfo: authUser = { username: '' },
        loggedIn,
        loading,
        walletConnected,
    } = useAuth();
    const [userInfo, setUserInfo] = useState(RAW_USER);

    const [getLazyUser, { data, loading: userLoading, error }] = useLazyQuery(
        gql(USER_QUERY)
    );

    const toggleEditModal = () => setShowEditModal(!showEditModal);

    useEffect(() => {
        const callback = async () => {
            if (searchTerm) {
                try {
                    await getLazyUser({
                        variables: {
                            username: searchTerm,
                        },
                    });

                    setUserInfo(
                        !userLoading
                            ? data.getUserByUsername.items[0]
                            : RAW_USER
                    );
                } catch (err) {
                    navigate('/404');
                }
            } else {
                if (walletConnected && !loading) {
                    setUserInfo(authUser);
                } else if (!walletConnected && !loading) {
                    navigate('/sign-in');
                }
            }
        };

        callback();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }, [searchTerm, authUser, userLoading, loading]);

    const Tab = () => {
        let component;

        switch (activeTab) {
            case 'experience':
                component = <AddExperience />;
                break;
            default:
                component = null;
        }

        return component;
    };

    const Modals = (props) => (
        <>
            <ProfileEditModal
                show={showEditModal}
                toggle={toggleEditModal}
                membership={props.daos.map((dao) => {
                    return {
                        name: dao.name,
                        dao: dao.dao,
                        logoURL: dao.logoURL,
                    };
                })}
                {...props}
            />
        </>
    );

    if (error) {
        console.log(error);
        return <Navigate to='/404' />;
    }

    return !searchTerm && !walletConnected ? (
        <Navigate to='/create-profile' />
    ) : (
        <Styled.Container>
            <Modals {...userInfo} />
            <Header style={{ alignSelf: 'flex-start' }} />
            {loading || userLoading ? (
                <Styled.LoaderBox>
                    <Loader color='white' size={30} />
                </Styled.LoaderBox>
            ) : (
                <Styled.MainBox>
                    <Styled.LeftSidebar>
                        <ProfileBox
                            username={userInfo.username}
                            pfpURL={userInfo.pfp}
                        />
                    </Styled.LeftSidebar>

                    <Styled.UserInfo>
                        {React.createElement(BioBox, {
                            ...userInfo,
                            toggleEditModal,
                        })}

                        <Styled.FeedContainer>
                            {/*
                            <Styled.ProfileDiv>
                                <Styled.SelectedTab
                                    showActive={activeTab === 'experience'}
                                    onClick={() => setActiveTab('experience')}
                                >
                                    Experience
                                </Styled.SelectedTab>
                                <Styled.SelectedTab
                                    showActive={activeTab === 'activity'}
                                    onClick={() => setActiveTab('activity')}
                                >
                                    Activity
                                </Styled.SelectedTab>
                            </Styled.ProfileDiv>
                            */}
                            <Tab />
                            {/* loggedIn && authUser.id === userInfo.id && */}
                        </Styled.FeedContainer>
                    </Styled.UserInfo>

                    {/*
                <Styled.RightSidebar>
                    <BadgeBox />
                </Styled.RightSidebar>
                */}
                </Styled.MainBox>
            )}
            <Footer />
        </Styled.Container>
    );
};

export default ProfilePage;
