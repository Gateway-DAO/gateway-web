import React, { useEffect, useContext } from 'react'

import space from '../../utils/canvas'

import * as Styled from './style'
import Header from '../../components/Header'

import { useAuth } from '../../contexts/UserContext'
import { Redirect } from 'react-router'

const SignIn = () => {
    const { signIn, loggedIn, userInfo, loggingIn } = useAuth()

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
                    { loggingIn && <Styled.SpinningLoader /> }
                    <Styled.ButtonText onClick={signIn}>
                        Connect Wallet
                    </Styled.ButtonText>
                </Styled.Button>
            </Styled.MainBox>
        </Styled.Container>
    )
}

export default SignIn
