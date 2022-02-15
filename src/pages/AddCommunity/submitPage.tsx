import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import space from '../../utils/canvas';
import * as Styled from './style';
import { FormStyled } from '../../components/Form';

const SubmitPage = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    const backToHome = () => {
        navigate('/');
    };

    return (
        <Styled.Page>
            <Header />
            <Styled.SpaceBox id='space-canvas' />
            <Styled.Container>
                <Styled.Heading>
                    We're Building Communities Together
                </Styled.Heading>
                <Styled.Text>
                    Thank you, your DAO was successfully added
                </Styled.Text>
                <FormStyled.Button
                    id='submit_msg'
                    type='button'
                    onClick={backToHome}
                >
                    Back To Home
                </FormStyled.Button>
            </Styled.Container>
            {/* <Footer /> */}
        </Styled.Page>
    );
};

export default SubmitPage;
