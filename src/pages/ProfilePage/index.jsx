import React, { useEffect, useState } from 'react'
import * as Styled from './style'
import { useParams, useHistory, Redirect } from 'react-router'
import { useAuth } from '../../contexts/UserContext'
import AddExperience from './components/AddExperience'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Sub-components
import BioBox from './components/BioBox'
import ProfileBox from './components/ProfileBox'
import BadgeBox from './components/BadgeBox'

// Database
import { useLazyQuery, gql } from '@apollo/client'
import { getUserByUsername as USER_QUERY } from '../../graphql/queries'

//update



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
    /*
    useEffect(() => {
        const getDAOs = async (daos) => {
            const daoRef = collection(db, 'daos')
            const q = query(daoRef, where('__name__', 'in', daos))

            const docs = await getDocs(q)
            return docs.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
        }

        const getUser = async () => {
            // Get user
            if (searchTerm) {
                try {
                    const userRef = collection(db, 'users')
                    const q = query(
                        userRef,
                        where('username', '==', searchTerm)
                    )

                    const user = (await getDocs(q)).docs[0].data()

                    const userDAOs = user.daos ? await getDAOs(user.daos) : []

                    setUserInfo({
                        ...user,
                        daos: userDAOs,
                    })
                } catch (err) {
                    history.push('/404')
                }
            } else {
                if (loggedIn && !loading) {
                    const userDAOs =
                        authUser?.daos?.length === 0
                            ? []
                            : await getDAOs(authUser.daos)
                    setUserInfo({
                        ...authUser,
                        daos: userDAOs,
                    })
                } else if (!loggedIn && !loading) {
                    history.push('/sign-in')
                }
            }
        }
        getUser()
    }, [searchTerm, authUser, loading])
    */

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
            <Styled.MainBox>
                <Styled.LeftSidebar>
                    <ProfileBox
                        username={userInfo.username}
                        pfpURL={userInfo.pfp}
                    />
                </Styled.LeftSidebar>
                <Styled.UserInfo>
                    {React.createElement(BioBox, { ...userInfo })}
                </Styled.UserInfo>
                {/*
                <Styled.RightSidebar>
                    <BadgeBox />
                </Styled.RightSidebar>
                */}
            </Styled.MainBox>

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
                {
                    (activeTab === 'experience') ? <AddExperience /> : null
                }
            </Styled.FeedContainer>
            <Footer />
        </Styled.Container>
    )
}

export default ProfilePage
