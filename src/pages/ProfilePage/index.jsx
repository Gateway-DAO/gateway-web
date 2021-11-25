import React, { useEffect } from "react"
import * as Styled from "./style"
import { useParams } from "react-router"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import BioBox from "./components/BioBox"
import ProfileBox from "./components/ProfileBox"
import BadgeBox from "./components/BadgeBox"

const ProfilePage = () => {
    const { searchTerm } = useParams();

    useEffect(() => {
        // Get user
        
    }, [searchTerm])

    return (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.LeftSidebar>
                    <ProfileBox />
                </Styled.LeftSidebar>
                <Styled.Feed>
                    <BioBox />
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