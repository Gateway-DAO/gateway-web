import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';

import './AddAbout.css';
import RichEditor from '../../../../components/RichTextEditor';
import Space from '../../../../components/Space';
import { FormStyled } from '../../../../components/Form';

const AddAbout: React.FC = () => {
    // State
    const { userInfo, canEdit } = useOutletContext<Record<string, any>>();

    // Hooks
    const navigate = useNavigate();
    const {
        updateUserInfo,
    }: { updateUserInfo?(info: Record<string, any>): void } = useAuth();
    const [redirect, setRedirect] = useState(false);
    const [about, setAbout] = useState(userInfo?.about || '');
    const [isValid, setValid] = useState<boolean>(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (about.replace(/<(.|\n)*?>/g, '').trim().length == 0) {
            setValid(false);
        } else {
            setValid(true);

            try {
                await updateUserInfo({
                    about,
                });

                // redirect
                setRedirect(true);
            } catch (err) {
                console.log(err);
            }
        }
    };

    if (redirect) {
        return <Navigate to='/profile' />;
    }

    if (!canEdit) {
        return <Navigate to='/404' />;
    }

    return (
        <Space>
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
                                isValid ? 'invalid' : ''
                            }`}
                        >
                            <div className='counting-number'>
                                {about.replace(/<(.|\n)*?>/g, '').trim().length}
                                /400
                            </div>
                            <Form
                                className='add-about'
                                noValidate
                                validated={isValid}
                                onSubmit={handleSubmit}
                            >
                                <div className='mb-5'>
                                    <RichEditor
                                        value={about}
                                        set={setAbout}
                                        toolbar={[
                                            ['bold', 'italic', 'underline'],
                                            ['emoji'],
                                        ]}
                                    />
                                    {!isValid && (
                                        <FormStyled.ErrorText>The about section should be filled!</FormStyled.ErrorText>
                                    )}
                                </div>

                                <Button variant='primary' type='submit'>
                                    Save
                                </Button>
                            </Form>
                        </div>
                    </Container>
                </div>
            </div>
        </Space>
    );
};

export default AddAbout;
