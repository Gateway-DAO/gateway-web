import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { FormStyled } from '../../../../../../../../../../components/Form';
import { useForm } from 'react-hook-form';
import { useCreateManualTaskSubmissionMutation } from '../../../../../../../../../../graphql';
import { useAuth } from '../../../../../../../../../../contexts/UserContext';
import Loader from '../../../../../../../../../../components/Loader';

import { Store } from 'react-notifications-component';

const SubmissionModal = (props) => {
    const { userInfo } = useAuth();
    const [discord, setDiscord] = useState(
        JSON.parse(window.localStorage.getItem('discord')) || null
    );

    const { register, watch, handleSubmit, setValue } = useForm({
        defaultValues: {
            address: userInfo?.wallet,
            discord: discord?.id,
        },
    });

    const [insertSubmission, { data, loading }] =
        useCreateManualTaskSubmissionMutation();

    const handleClose = () => {
        props.setStart(false);
        props.setOpened(false);
    };

    const onSubmit = async (data) => {
        try {
            await insertSubmission({
                variables: {
                    object: {
                        discord_id: data.discord,
                        submission_url: data.submission_url,
                        wallet: data.address,
                        comment: data.comment,
                        user_id: userInfo?.id,
                        key_id: props.data.id,
                    },
                },
            });

            handleClose();

            Store.addNotification({
                title: 'Task entry successfully submitted!',
                type: 'success',
                insert: 'top',
                container: 'top-center',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 2000,
                    onScreen: true,
                },
            });
        } catch (err) {
            handleClose();

            Store.addNotification({
                title: 'An error ocurred while processing the request',
                type: 'danger',
                insert: 'top',
                container: 'top-center',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 2000,
                    onScreen: true,
                },
            });

            console.log(err);
        }
    };

    useEffect(() => {
        !discord && window.addEventListener('storage', () => {
            const info = JSON.parse(window.localStorage.getItem('discord'));
            info && setDiscord(info);
        });
    }, []);

    return (
        <Styled.Modal>
            <Styled.Container>
                <Styled.Wrapper>
                    <FormStyled.FormBox
                        style={{ padding: '0' }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Styled.CloseBtn
                            size={24}
                            color='white'
                            onClick={handleClose}
                        />
                        <FormStyled.H2 mb='0'>
                            Submit Key Infomations
                        </FormStyled.H2>
                        <FormStyled.Fieldset marginBottom='0px'>
                            <FormStyled.Label htmlFor='submission_url'>
                                SUBMISSION URL
                            </FormStyled.Label>
                            <FormStyled.Input
                                id='submission_url'
                                {...register('submission_url', {
                                    required: true,
                                })}
                                value={watch('submission_url')}
                                placeholder='Enter a link to your submission/proof (ex. Dropbox/GDrive/Google Docs/etc.)'
                            />
                        </FormStyled.Fieldset>

                        <FormStyled.Fieldset marginBottom='0px'>
                            <FormStyled.Label htmlFor='discord'>
                                Your DISCORD ID
                            </FormStyled.Label>
                            <FormStyled.Input
                                id='discord'
                                value={watch('discord')}
                                {...register('discord', { required: true })}
                                placeholder='ex. Gateway#2022'
                            />
                            {discord ? (
                                <FormStyled.Text
                                    style={{ marginBottom: '15px' }}
                                >
                                    You're connected as <strong>{`${discord.username}#${discord.discriminator}`}</strong>. If this is the not your account, try
                                    <a
                                        href={`https://discord.com/api/oauth2/authorize?client_id=985976856559902750&redirect_uri=${window.location.protocol + '//' + window.location.hostname + (window.location.port && `:${window.location.port}`) + '/'}auth%2Fdiscord&response_type=token&scope=identify`}
                                        target='_blank'
                                    >
                                        connecting again.
                                    </a>
                                </FormStyled.Text>
                            ) : (
                                <FormStyled.Text
                                    style={{ marginBottom: '15px' }}
                                >
                                    If you don't know your Discord ID, please
                                    find it
                                    <a
                                        href={`https://discord.com/api/oauth2/authorize?client_id=985976856559902750&redirect_uri=${window.location.protocol + '//' + window.location.hostname + (window.location.port && `:${window.location.port}`) + '/'}auth/discord&response_type=token&scope=identify`}
                                        target='_blank'
                                    >
                                        {' here'}
                                    </a>
                                </FormStyled.Text>
                            )}
                        </FormStyled.Fieldset>

                        <FormStyled.Fieldset marginBottom='0px'>
                            <FormStyled.Label htmlFor='address'>
                                Your ETH ADDRESS
                            </FormStyled.Label>
                            <FormStyled.Input
                                id='address'
                                value={watch('address')}
                                {...register('address', { required: true })}
                                placeholder='ex. name.eth or 0x3F226ce4AD8004A32206f4894A8755F1F35D1234'
                            />
                        </FormStyled.Fieldset>
                        <FormStyled.Fieldset marginBottom='0px'>
                            <FormStyled.Label htmlFor='comment'>
                                COMMENT
                            </FormStyled.Label>
                            <FormStyled.Textarea
                                id='comment'
                                height='100px'
                                value={watch('comment')}
                                {...register('comment')}
                                placeholder='In case you have additional comments.'
                            />
                        </FormStyled.Fieldset>
                        <FormStyled.Button mb='20px'>
                            {loading && <Loader color='white' />} Submit
                        </FormStyled.Button>
                    </FormStyled.FormBox>
                </Styled.Wrapper>
            </Styled.Container>
        </Styled.Modal>
    );
};

export default SubmissionModal;
