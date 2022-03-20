import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import Page from '../../../../components/Page';
import './AddAttitude.css';

const options = [
	{ label: 'Pro-active', value: 'Pro-active' },
	{ label: 'Business Driven', value: 'Business Driven' },
	{ label: 'Innovative', value: 'Innovative' },
	{ label: 'Leadership', value: 'Leadership' },
];

const suggestedOptions = [
	{ label: 'Collaborative', value: 'Collaborative' },
	{ label: 'Pro-active', value: 'Pro-active' },
	{ label: 'Business Driven', value: 'Business Driven' },
	{ label: 'Leadership', value: 'Leadership' },
	{ label: 'Innovative', value: 'Innovative' },
];

const AddAttitude = () => {
	// State
	const { userInfo, updateUserInfo } = useAuth();

	// Hooks
	const navigate = useNavigate();
	const [redirect, setRedirect] = useState(false);
	const [selectedAttitude, setSelectedAttitude] = useState(
		userInfo?.attitudes?.map(attitude => ({
			label: attitude,
			value: attitude
		})) || []
	);

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
	});

	const handleCheck = (val) => {
		return selectedAttitude.some((item) => val.value === item.value);
	};

	const addSuggestedAttitude = useCallback((attitude) => {
		const attitudeItems = selectedAttitude;
		if (handleCheck(attitude) == false) {
			setSelectedAttitude([...attitudeItems, attitude]);
		}
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();
		let objAttitudes = selectedAttitude.map(att => att.value);

		// API should be call here
		try {
			await updateUserInfo({
				attitudes: objAttitudes,
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

export default AddAttitude;
