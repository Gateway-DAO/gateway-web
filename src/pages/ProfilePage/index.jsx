import React, { useEffect, useState } from 'react'
import * as Styled from './style'
import { useParams, useHistory, Redirect } from 'react-router'
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
    const history = useHistory()
    const { userInfo: authUser = { username: "" }, loggedIn, loading } = useAuth()
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
                setUserInfo(!userLoading ? data.getUserByUsername.items[0] : RAW_USER)
            } catch (err) {
                history.push('/404')
            }
        } else {
            if (loggedIn && !loading) {
                setUserInfo(authUser)
            } else if (!loggedIn && !loading) {
                history.push('/sign-in')
            }
        }

    }, [searchTerm, authUser, userLoading, loading])

    const Tab = () => {
        let component;

        switch (activeTab) {
            case "experience":
                component = <AddExperience />
                break;
            default:
                component = null
        }

        return component
    }

    if (error) {
        return <Redirect to="/404" />
    }

    return !searchTerm && authUser && !authUser.init ? (
        <Redirect to="/create-profile" />
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
                            {loggedIn && (authUser.id === userInfo.id) && <Tab />}
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
