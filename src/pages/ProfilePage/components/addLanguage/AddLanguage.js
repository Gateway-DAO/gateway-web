import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import Page from '../../../../components/Page';
import { useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import './AddLanguage.css';
import { LANGUAGES } from '../../../../utils/constants';

const options = LANGUAGES.map(lang => ({
	label: lang.name,
	value: lang.name
}));

const suggestedOptions = [
	{ label: 'English', value: 'English' },
	{ label: 'Spanish', value: 'Spanish' },
	{ label: 'Chinese', value: 'Chinese' },
	{ label: 'Dutch', value: 'Dutch' },
	{ label: 'Arabic', value: 'Arabic' },
	{ label: 'German', value: 'German' },
	{ label: 'Japanese', value: 'Japanese' },
	{ label: 'Punjabi', value: 'Punjabi' },
	{ label: 'French', value: 'French' },
	{ label: 'Italian', value: 'Italian' },
];

const AddLanguage = () => {
	// State
	const { userInfo, updateUserInfo } = useAuth();

	// Hooks
	const navigate = useNavigate();

	const [redirect, setRedirect] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(
		userInfo?.languages?.map(lang => ({
			label: lang,
			value: lang
		})) || []
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const removeLanguage = useCallback(
		(val) => () => {
			setSelectedLanguage((previousTags) =>
				previousTags.filter((previousTag, index) => previousTag.value !== val.value)
			);
		},
		[]
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const handleChange = useCallback((selectedLanguage) => {
		setSelectedLanguage(selectedLanguage);
	});

	const handleCheck = (val) => {
		return selectedLanguage.some((item) => val.value === item.value);
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

		let objLanguages = selectedLanguage.map(lang => lang.value);

		// API should be call here
		try {
			await updateUserInfo({
				languages: objLanguages,
			});

			setRedirect(true);
		} catch (err) {
			console.log(err);
		}
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
						{/* <Link to="/profiles">
								<div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
								<p>Back to Profile</p>
							</Link> */}
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
													{item.label}
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

export default AddLanguage;
