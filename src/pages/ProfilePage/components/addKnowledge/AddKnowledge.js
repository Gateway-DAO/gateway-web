import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import { useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import Page from '../../../../components/Page';
import './AddKnowledge.css';

const options = [
    { label: 'Development', value: 'Development' },
    { label: 'Design', value: 'Design' },
    { label: 'Decentralization', value: 'Decentralization' },
    { label: 'Defense Analyst', value: 'Defense Analyst' },
];

const suggestedOptions = [
    { label: 'Crypto', value: 'Crypto' },
    { label: 'Blockchain', value: 'Blockchain' },
    { label: 'UX Design', value: 'UX Design' },
    { label: 'UI Design', value: 'UI Design' },
    { label: 'Social Media', value: 'Social Media' },
    { label: 'Legal', value: 'Legal' },
    { label: 'Community', value: 'Community' },
    { label: 'Engineering', value: 'Engineering' },
    { label: 'Solidity', value: 'Solidity' },
];

const AddKnowledge = () => {
    // State
    const { userInfo, updateUserInfo } = useAuth();
    const [updateKnowledges] = useMutation(gql(updateUser));

    // Hooks
    const navigate = useNavigate();

    const [redirect, setRedirect] = useState(false);

    const [selectedKnowledge, setSelectedKnowledge] = useState(userInfo?.knowledges?.map(knowledge => ({
        label: knowledge,
        value: knowledge
    })) || []);

    /* This is a callback function that will be called when the user clicks on the remove button. */
    const removeKnowledge = useCallback(
        (val) => () => {
            setSelectedKnowledge((previousTags) =>
                previousTags.filter((previousTag, index) => previousTag.value !== val.value)
            );
        },
        []
    );

    /* This is a callback function that will be called when the user clicks on the remove button. */
    const handleChange = useCallback((selectedKnowledge) => {
        setSelectedKnowledge(selectedKnowledge);
    });

    const handleCheck = (val) => {
        return selectedKnowledge.some((item) => val.value === item.value);
    };

    const addSuggestedKnowledge = useCallback((knowledge) => {
        const knowledgeItems = selectedKnowledge;
        if (handleCheck(knowledge) == false) {
            setSelectedKnowledge([...knowledgeItems, knowledge]);
        }
    });

    const handleSubmit = async (event) => {
        console.log('submitted');
        event.preventDefault();
        event.stopPropagation();
        let objKnowledges = selectedKnowledge.map(knowledge => knowledge.value);

        // API should be call here
        try {
            await updateUserInfo({
                knowledges: objKnowledges,
            });

            setRedirect(true);
        } catch (err) {
            console.log(err);
        }
    };

    if (redirect) {
        navigate('..');
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
                        <h1>Knowledge</h1>
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
                                    <Form.Label>Add your knowledge</Form.Label>
                                    <Select
                                        hideSelectedOptions={false}
                                        controlShouldRenderValue={false}
                                        isMulti
                                        options={options}
                                        className='basic-multi-select'
                                        classNamePrefix='select'
                                        onChange={handleChange}
                                        value={selectedKnowledge}
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
                                        {selectedKnowledge.length > 0 &&
                                            selectedKnowledge.map((item) => (
                                                <p key={item.value}>
                                                    {item.label}
                                                    <span
                                                        onClick={removeKnowledge(
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
                                    Suggested knowledge based on your profile
                                </h4>
                                <ul>
                                    {suggestedOptions.length > 0 &&
                                        suggestedOptions.map((item) => (
                                            <li
                                                onClick={() =>
                                                    addSuggestedKnowledge(item)
                                                }
                                                key={item.value}
                                            >
                                                {item.label}
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

export default AddKnowledge;
