import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import space from '../../../../utils/canvas';
import Page from '../../../../components/Page';
import { useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import './AddLanguage.css';

const AddLanguage = () => {
    // State
    const { userInfo, updateUserInfo } = useAuth();
    const [updateLanguages] = useMutation(gql(updateUser));

    // Hooks
    const navigate = useNavigate();

    const [redirect, setRedirect] = useState(false);
    const [options, setOptions] = useState([
        'Portuguese',
        'Polish',
        'Persian',
        'Punjabi',
    ]);
    const [suggestedOptions, setSuggestedOptions] = useState([
        'English',
        'Spanish',
        'Chinese',
        'Dutch',
        'Arabic',
        'German',
        'Japanese',
        'Punjabi',
        'French',
        'Italian',
    ]);
    const [selectedLanguage, setSelectedLanguage] = useState(
        userInfo?.languages || []
    );

    /* This is a callback function that will be called when the user clicks on the remove button. */
    const removeLanguage = useCallback(
        (val) => () => {
            setSelectedLanguage((previousTags) =>
                previousTags.filter((previousTag, index) => previousTag !== val)
            );
        },
        []
    );

    /* This is a callback function that will be called when the user clicks on the remove button. */
    const handleChange = useCallback((selectedLanguage) => {
        setSelectedLanguage(selectedLanguage);
    });

    const handleCheck = (val) => {
        return selectedLanguage.some((item) => val === item);
    };

    const addSuggestedLanguage = useCallback((language) => {
        const languageItems = selectedLanguage;
        if (handleCheck(language) == false) {
            setSelectedLanguage([...languageItems, language]);
        }
    });

    const handleSubmit = async (event) => {
        console.log('submitted');
        event.preventDefault();
        event.stopPropagation();
        let objLanguages = selectedLanguage;
        // CONVERT TO NUMERIC ARRAY
        objLanguages = objLanguages.map(function (x) {
            return x;
        });

        // API should be call here
        try {
            await updateLanguages({
                variables: {
                    input: {
                        id: userInfo.id,
                        languages: objLanguages,
                    },
                },
            });
            await updateUserInfo({
                languages: objLanguages,
            });

            setRedirect(true);
        } catch (err) {
            console.log(err);
        }
    };

    if (redirect) {
        navigate('/profiles');
    }

    return (
        <Page space>
            <div className='main-about-section'>
                <Container>
                    <div className='back-link'>
                        {/* <Link to="/profiles">
								<div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
								<p>Back to Profile</p>
							</Link> */}
                        <a>
                            <div
                                className='arrow-back'
                                onClick={() => navigate('..')}
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
                        <h1>Language</h1>
                    </Container>
                </div>
                <div className='suggested-skills'>
                    <Container>
                        <div className='suggested-inner-skills'>
                            <Form
                                method='post'
                                noValidate
                                onSubmit={handleSubmit}
                            >
                                <Form.Group as={Col} controlId='formGridSkills'>
                                    <Form.Label>Add your language</Form.Label>
                                    <Select
                                        hideSelectedOptions={false}
                                        controlShouldRenderValue={false}
                                        isMulti
                                        options={options}
                                        className='basic-multi-select'
                                        classNamePrefix='select'
                                        onChange={handleChange}
                                        value={selectedLanguage}
                                        placeholder='Search'
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary25: 'blue',
                                                primary: 'darkblue',
                                            },
                                        })}
                                    />
                                    <div className='selected-options'>
                                        {selectedLanguage.length > 0 &&
                                            selectedLanguage.map((item) => (
                                                <p key={item}>
                                                    {item}
                                                    <span
                                                        onClick={removeLanguage(
                                                            item
                                                        )}
                                                        className='selectClose'
                                                    >
                                                        <FaTimes color='white' />
                                                    </span>
                                                </p>
                                            ))}
                                    </div>
                                </Form.Group>
                                <h4>
                                    Suggested language based on your profile
                                </h4>
                                <ul>
                                    {suggestedOptions.length > 0 &&
                                        suggestedOptions.map((item) => (
                                            <li
                                                onClick={() =>
                                                    addSuggestedLanguage(item)
                                                }
                                                key={item}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                                <Button variant='primary' type='submit'>
                                    save
                                </Button>{' '}
                            </Form>
                        </div>
                    </Container>
                </div>
            </div>
        </Page>
    );
};

export default AddLanguage;
