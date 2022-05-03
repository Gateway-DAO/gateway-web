import React, { useState, useCallback } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import './AddLanguage.css';
import { LANGUAGES } from '../../../../utils/constants';
import Space from '../../../../components/Space';
import Loader from '../../../../components/Loader';

/* This is a list of all the languages that are supported by the app. */
const options = LANGUAGES.map((lang) => ({
	label: lang.name,
	value: lang.name,
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

/* The above code is adding a new language to the user's profile. */
const AddLanguage: React.FC = () => {
	// State
	const { userInfo, canEdit } = useOutletContext<Record<string, any>>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Hooks
	const navigate = useNavigate();
	const {
		updateUserInfo,
	}: { updateUserInfo?(info: Record<string, any>): void } = useAuth();
	const [redirect, setRedirect] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(
		userInfo?.languages?.map((lang) => ({
			label: lang,
			value: lang,
		})) || []
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const removeLanguage = useCallback(
		(val) => () => {
			setSelectedLanguage((previousTags) =>
				previousTags.filter(
					(previousTag, index) => previousTag.value !== val.value
				)
			);
		},
		[]
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const handleChange = useCallback((selectedLanguage) => {
		setSelectedLanguage(selectedLanguage);
	}, []);

	const handleCheck = (val) => {
		return selectedLanguage.some((item) => val.value === item.value);
	};

	const addSuggestedLanguage = useCallback((language) => {
		if (handleCheck(language) == false) {
			setSelectedLanguage((prev) => [...prev, language]);
		}
	}, [selectedLanguage]);

	const handleSubmit = async (event) => {
		console.log('submitted');
		event.preventDefault();
		event.stopPropagation();

		let objLanguages = selectedLanguage.map((lang) => lang.value);

		// API should be call here
		try {
			setIsLoading(true);
			await updateUserInfo({
				languages: objLanguages,
			});
			setIsLoading(false);

			setRedirect(true);
		} catch (err) {
			console.log(err);
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
										closeMenuOnSelect={false}
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
												<p key={item.value}>
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
									{!!isLoading && <Loader color='white' />}
									SAVE
								</Button>
							</Form>
						</div>
					</Container>
				</div>
			</div>
		</Space>
	);
};

export default AddLanguage;
