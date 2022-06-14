import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Page from '../../../components/Page'
import * as Styled from '../../404/style';

const DiscordAuth: React.FC = props => {
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        window.onload = () => {
            const fragment = new URLSearchParams(window.location.hash.slice(1));
            const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

            if (!accessToken) {
                return (document.getElementById('login').style.display = 'block');
            }

            fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${tokenType} ${accessToken}`,
                },
            })
                .then(result => result.json())
                .then(response => {
                    window.localStorage.setItem("discord", JSON.stringify(response))
                })
                .catch(console.error);
        };
    }, []);

    return (
        <Page>
            <Styled.TextBox>
                <Styled.MainText>
                    Authenticated with success!
                </Styled.MainText>
                <Styled.SmallText>
                    You can now close this tab!
                </Styled.SmallText>
            </Styled.TextBox>
        </Page>
    )
}

export default DiscordAuth