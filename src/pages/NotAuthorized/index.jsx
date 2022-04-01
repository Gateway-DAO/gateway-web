import React, { useEffect } from 'react';

import space from '../../utils/canvas';

import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

const NotAuthorized = () => {
    const navigate = useNavigate();
    useEffect(
        () => {
            space(window.innerHeight || 0, window.innerWidth || 0);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, [window.innerHeight, window.innerWidth]
    );

    return (
        <Styled.Container>
            <Header />
            <Styled.MainBox>
                <Styled.SpaceBox id='space-canvas' />
                <Styled.MainText>You’re not authorized to access</Styled.MainText>
                <Styled.SubText>Redirecting...</Styled.SubText>
            </Styled.MainBox>
        </Styled.Container>
    );
};

export default NotAuthorized;
