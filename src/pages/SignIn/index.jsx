import React, { useEffect } from "react"

import space from '../../utils/canvas';

import * as Styled from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const SignIn = () => {
    useEffect(() => space(window.innerHeight, window.innerWidth), [window.innerHeight, window.innerWidth]);

    return (
        <Styled.Container>
            <Header />
                <Styled.MainBox>
                    <Styled.SpaceBox id="space-canvas" />
                    <p>Sign In</p>
                </Styled.MainBox>
        </Styled.Container>
    )
}

export default SignIn