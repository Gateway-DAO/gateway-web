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
import { useLazyQuery, gql } from '@apollo/client'
import { getUserByUsername as USER_QUERY } from '../../graphql/queries'

const ProfilePage = () => {
    const { searchTerm } = useParams()
    const history = useHistory()
    const { userInfo: authUser, loggedIn, loading } = useAuth()
    const [userInfo, setUserInfo] = useState({
        bio: '',
        name: '',
        username: '',
        socials: [],
        daos: [],
    })

    const [getUserByUsername, { data, loading: userLoading, error }] =
        useLazyQuery(gql(USER_QUERY))

    const [activeTab, setActiveTab] = useState('experience')

    useEffect(() => {
        const getUser = async () => {
            if (searchTerm) {
                try {
                    const user = await getUserByUsername({
                        variables: {
                            username: searchTerm,
                        },
                    })
                    console.log(user.data.getUserByUsername.items[0])
                    setUserInfo(user.data.getUserByUsername.items[0])
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
        }

        getUser()
    }, [searchTerm, authUser, loading])

    return !searchTerm && authUser && !authUser.init ? (
        <Redirect to="/create-profile" />
    ) : (
        <Styled.Container>
            <Header />
            {(loading || userLoading) ? (
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
                            {activeTab === 'experience' ? (
                                <AddExperience />
                            ) : null}
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
    )
}

export default ProfilePage
