import React, { useEffect, useContext } from 'react'

import space from '../../utils/canvas'

import * as Styled from './style'
import Header from '../../components/Header'

import { useAuth } from '../../contexts/UserContext'
import { Navigate } from 'react-router-dom'
import Wallet from '../../components/WalletHeader'

const SignIn = () => {
    const { loggedIn } = useAuth()

    useEffect(
        () => space(window.innerHeight || 0, window.innerWidth || 0),
        [window.innerHeight, window.innerWidth]
    )

    return loggedIn ? (
        <Navigate to="/profile" />
    ) : (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.SpaceBox id="space-canvas" />
                <Styled.MainText>Please, Sign In To Continue</Styled.MainText>
                <Wallet />
            </Styled.MainBox>
        </Styled.Container>
    )
}

export default SignIn
