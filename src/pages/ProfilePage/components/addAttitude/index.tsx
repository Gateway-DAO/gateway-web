import React, { useState, useCallback } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import './AddAttitude.css';
import Space from '../../../../components/Space';
import Loader from '../../../../components/Loader';

const options = [
	{ label: 'Pro-active', value: 'Pro-active' },
	{ label: 'Business Driven', value: 'Business Driven' },
	{ label: 'Innovative', value: 'Innovative' },
	{ label: 'Leadership', value: 'Leadership' },
];

/* This is a list of suggested attitude. */
const suggestedOptions = [
	{ label: 'Collaborative', value: 'Collaborative' },
	{ label: 'Pro-active', value: 'Pro-active' },
	{ label: 'Business Driven', value: 'Business Driven' },
	{ label: 'Leadership', value: 'Leadership' },
	{ label: 'Innovative', value: 'Innovative' },
];

const AddAttitude: React.FC = () => {
	// State
	const { userInfo, canEdit } = useOutletContext<Record<string, any>>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Hooks
	const navigate = useNavigate();
	const {
		updateUserInfo,
	}: { updateUserInfo?(info: Record<string, any>): void } = useAuth();
	const [selectedAttitude, setSelectedAttitude] = useState(userInfo?.attitudes?.map(attitude => ({
		label: attitude,
		value: attitude
	})) || []);
	const [redirect, setRedirect] = useState(false);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const removeAttitude = useCallback(
		(val) => () => {
			setSelectedAttitude((previousTags) =>
				previousTags.filter((previousTag, index) => previousTag.value !== val.value)
			);
		},
		[]
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const handleChange = useCallback((selectedAttitude) => {
		setSelectedAttitude(selectedAttitude);
	}, []);

	const handleCheck = (val) => {
		return selectedAttitude.some((item) => val.value === item.value);
	};

	const addSuggestedAttitude = useCallback((attitude) => {
		if (handleCheck(attitude) == false) {
			setSelectedAttitude(prev => [...prev, attitude]);
		}
	}, [selectedAttitude]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();
		let objAttitudes = selectedAttitude.map(att => att.value);

		// API should be call here
		try {
			setIsLoading(true);
			await updateUserInfo({
				attitudes: objAttitudes,
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
						<h1>Attitude</h1>
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
									<Form.Label>Add your attitude</Form.Label>
									<Select
										hideSelectedOptions={false}
										controlShouldRenderValue={false}
										isMulti
										closeMenuOnSelect={false}
										options={options}
										className='basic-multi-select'
										classNamePrefix='select'
										onChange={handleChange}
										value={selectedAttitude}
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
										{selectedAttitude.length > 0 &&
											selectedAttitude.map((item) => (
												<p key={item.value}>
													{item.label}
													<span
														onClick={removeAttitude(
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
									Suggested attitude based on your profile
								</h4>
								<ul>
									{suggestedOptions.length > 0 &&
										suggestedOptions.map((item) => (
											<li
												onClick={() =>
													addSuggestedAttitude(item)
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

export default AddAttitude;
