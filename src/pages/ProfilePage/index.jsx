import React, { useEffect, useState } from 'react'
import * as Styled from './style'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/UserContext'
import AddExperience from './components/AddExperience'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

// Sub-components
import BioBox from './components/BioBox'
import ProfileBox from './components/ProfileBox'

// Database
import { useQuery, gql } from '@apollo/client'
import { getUserByUsername as USER_QUERY } from '../../graphql/queries'

const RAW_USER = {
    bio: '',
    name: '',
    username: '',
    socials: [],
    daos: [],
}

const ProfilePage = () => {
    const { searchTerm } = useParams()
    const navigate = useNavigate()
    const {
        userInfo: authUser = { username: '' },
        loggedIn,
        loading,
    } = useAuth()
    const [userInfo, setUserInfo] = useState(RAW_USER)

    const {
        data,
        loading: userLoading,
        error,
    } = useQuery(gql(USER_QUERY), {
        variables: {
            username: searchTerm,
        },
    })

    const [activeTab, setActiveTab] = useState('experience')

    useEffect(() => {
        if (searchTerm) {
            try {
                setUserInfo(
                    !userLoading ? data.getUserByUsername.items[0] : RAW_USER
                )
            } catch (err) {
                navigate('/404')
            }
        } else {
            if (loggedIn && !loading) {
                setUserInfo(authUser)
            } else if (!loggedIn && !loading) {
                navigate('/sign-in')
            }
        }
    }, [searchTerm, authUser, userLoading, loading])

    const Tab = () => {
        let component

        switch (activeTab) {
            case 'experience':
                component = <AddExperience />
                break
            default:
                component = null
        }

        return component
    }

    if (error) {
        return <Navigate to="/404" />
    }

    return !searchTerm && authUser && !authUser.init ? (
        <Navigate to="/create-profile" />
    ) : (
        <Styled.Container>
            <Header style={{ alignSelf: 'flex-start' }} />
            {loading || userLoading ? (
                <Styled.LoaderBox>
                    <Loader color="white" size={30} />
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
                        {React.createElement(BioBox, { ...userInfo })}

                        {/*
                        <Styled.FeedContainer>
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
                            {loggedIn && authUser.id === userInfo.id && <Tab />}
                        </Styled.FeedContainer>
                        */}
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
    )
}

export default ProfilePage
