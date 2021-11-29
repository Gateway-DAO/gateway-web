import React, { useEffect, useState } from 'react'
import * as Styled from './style'
import { useParams, useHistory, Redirect } from 'react-router'
import { useAuth } from '../../contexts/UserContext'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Sub-components
import BioBox from './components/BioBox'
import ProfileBox from './components/ProfileBox'
import BadgeBox from './components/BadgeBox'

// Database
import { db } from '../../api/firebase'
import {
    collection,
    query,
    where,
    getDocs,
} from '@firebase/firestore'

const ProfilePage = () => {
    const { searchTerm } = useParams()
    const history = useHistory()
    const { userInfo: authUser, loggedIn, loading } = useAuth()
    const [userInfo, setUserInfo] = useState({
        bio: '',
        name: '',
        username: '',
        socials: {},
        daos: []
    })

    useEffect(() => {
        const getDAOs = async daos => {
            const daoRef = collection(db, "daos")
            const q = query(daoRef, where("__name__", "in", daos))

            const docs = await getDocs(q)
            return docs.docs.map(doc => doc.data())
        }

        const getUser = async () => {
            // Get user
            if (searchTerm) {
                try {
                    const userRef = collection(db, 'users')
                    const q = query(userRef, where('username', '==', searchTerm))

                    const user = ((await getDocs(q)).docs[0]).data()

                    const userDAOs = await getDAOs(user.daos)

                    setUserInfo({
                        ...user,
                        daos: userDAOs
                    })
                }
                catch (err) {
                    history.push("/404")
                }
            } else {
                if (loggedIn && !loading) {
                    const userDAOs = await getDAOs(authUser.daos)
                    setUserInfo({
                        ...authUser,
                        daos: userDAOs
                    })
                }
                else if (!loggedIn && !loading) {
                    history.push('/sign-in')
                }
            }
        }
        getUser()
    }, [searchTerm, authUser, loading])

    return (!searchTerm && authUser && !authUser.init) ? <Redirect to="/create-profile" /> : (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.LeftSidebar>
                    <ProfileBox username={userInfo.username} pfpURL={userInfo.pfp} />
                </Styled.LeftSidebar>
                <Styled.Feed>
                    {React.createElement(BioBox, { ...userInfo })}
                </Styled.Feed>
                <Styled.RightSidebar>
                    <BadgeBox />
                </Styled.RightSidebar>
            </Styled.MainBox>
            <Footer />
        </Styled.Container>
    )
}

export default ProfilePage
