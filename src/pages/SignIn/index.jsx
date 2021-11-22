import React, { useEffect, useContext } from 'react'

import space from '../../utils/canvas'

import * as Styled from './style'
import Header from '../../components/Header'

import { userContext } from '../../contexts/UserContext'
import { Redirect } from 'react-router'

const SignIn = () => {
    const { signIn, loggedIn, userInfo } = useContext(userContext)

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    return loggedIn ? (
        <Redirect to="/profile" />
    ) : (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.SpaceBox id="space-canvas" />
                <Styled.MainText>Please, Sign In To Continue</Styled.MainText>
                <Styled.Button>
                    <Styled.ButtonText onClick={signIn}>
                        Connect Wallet
                    </Styled.ButtonText>
                </Styled.Button>
            </Styled.MainBox>
        </Styled.Container>
    )
}

export default SignIn
