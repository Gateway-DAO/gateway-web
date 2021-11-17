import React, { useEffect } from "react"
import * as Styled from "./style"
import { useParams } from "react-router"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const ProfilePage = () => {
    const { searchTerm } = useParams();

    useEffect(() => {
        // Get user
        
    }, [searchTerm])

    return (
        <Styled.Container>
            <Header />
            
            <Footer />
        </Styled.Container>
    )
}

export default ProfilePage