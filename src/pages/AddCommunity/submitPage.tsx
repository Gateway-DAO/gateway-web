import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './style';
import { FormStyled } from '../../components/Form';
import Page from '../../components/Page';

const SubmitPage = (): JSX.Element => {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    };

    return (
        <Page space>
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
        </Page>
    );
};

export default SubmitPage;
