import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';

import Page from '../../../../components/Page';

import { useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import './AddAbout.css';
import RichEditor from '../../../../components/RichTextEditor';

const AddAbout = () => {
    const { userInfo, updateUserInfo } = useAuth();
    const [updateAbout] = useMutation(gql(updateUser));
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const [isValidated, setIsValidated] = useState(false);
    const [about, setAbout] = useState('');
    const [isAboutFilled, setIsAboutFilled] = useState(false);

    const handleChange = (event) => {
        setAbout(event.target.value);
    };

    useEffect(() => {
        setAbout(userInfo?.about || '');
    }, [userInfo]);

    useEffect(() => {
        handleAboutFilled();
    }, [about]);

    const handleAboutFilled = () => {
        if (about.length > 0) {
            setIsAboutFilled(true);
        } else {
            setIsAboutFilled(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            try {
                await updateAbout({
                    variables: {
                        input: {
                            id: userInfo.id,
                            about: about,
                        },
                    },
                });
                await updateUserInfo({
                    about: about,
                });

                // redirect
                setRedirect(true);
            } catch (err) {
                console.log(err);
            }
        }
        setIsValidated(true);
    };

    useEffect(() => {
        if (redirect) {
            navigate('/profile');
        }
    }, [redirect]);

    return (
        <Page space>
            <div className='main-about-section'>
                <Container>
                    <div className='back-link'>
                        <a>
                            <div
                                className='arrow-back'
                                onClick={() => navigate('/profile')}
                            >
                                <img src='/left-arrow-icon.svg' alt='' />
                            </div>
                        </a>
                        <span style={{ color: 'white', marginLeft: '20px' }}>
                            Back to Profile
                        </span>
                    </div>
                </Container>
                <div className='gt-about-section'>
                    <Container>
                        <h1>About</h1>
                        <div
                            className={`text-editor ${
                                isValidated ? 'invalid' : ''
                            }`}
                        >
                            <div className='counting-number'>
                                {about.replace(/<(.|\n)*?>/g, '').trim().length}/400
                            </div>
                            <Form
                                method='post'
                                className='add-about'
                                noValidate
                                validated={isValidated}
                                onSubmit={handleSubmit}
                            >
                                <RichEditor
                                    value={about}
                                    set={setAbout}
                                    toolbar={[
                                        [
                                            { list: 'ordered' },
                                            { list: 'bullet' },
                                        ],
                                        ['bold', 'italic', 'underline'],
                                        [{ color: [] }],
                                        ['emoji'],
                                    ]}
									className="mb-5"
                                />
                                <Button variant='primary' type='submit'>
                                    Save
                                </Button>
                            </Form>
                        </div>
                    </Container>
                </div>
            </div>
        </Page>
    );
};

export default AddAbout;
