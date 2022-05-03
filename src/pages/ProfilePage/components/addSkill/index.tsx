import React, { useState, useEffect, useCallback } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import './AddSkill.css';
import { SKILLS } from '../../../../utils/constants';
import Space from '../../../../components/Space';
import Loader from '../../../../components/Loader';

/* This is a helper function that will be used to generate the options for the skills dropdown. */
const options = SKILLS.map((skill) => ({
	label: skill.name,
	value: skill.name,
}));

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

/* The above code is a component that renders the skills section of the profile page. */
const AddSkill: React.FC = () => {
	// State
	const { userInfo, canEdit } = useOutletContext<Record<string, any>>();

	// Hooks
	const navigate = useNavigate();
	const {
		updateUserInfo,
	}: { updateUserInfo?(info: Record<string, any>): void } = useAuth();
	const [redirect, setRedirect] = useState(false);
	const [selectedSkill, setSelectedSkill] = useState(
		userInfo?.skills?.map((skill) => ({
			label: skill,
			value: skill,
		})) || []
	);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const removeSkill = useCallback(
		(val) => () => {
			setSelectedSkill((previousTags) =>
				previousTags.filter(
					(previousTag, index) => previousTag.value !== val.value
				)
			);
		},
		[]
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const handleChange = useCallback((selectedSkill) => {
		setSelectedSkill(selectedSkill);
	}, []);

	const handleCheck = (val) => {
		return selectedSkill.some((item) => val.value === item.value);
	};

	const addSuggestedSkill = useCallback((skill) => {
		if (handleCheck(skill) == false) {
			setSelectedSkill((prev) => [...prev, skill]);
		}
	}, [selectedSkill]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();
		let objSkills = selectedSkill.map((skill) => skill.value);

		// API should be call here
		try {
			setIsLoading(true);
			await updateUserInfo({
				skills: objSkills,
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
						<h1>Skills</h1>
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
									<Form.Label>Add your Skills</Form.Label>
									<Select
										hideSelectedOptions={false}
										controlShouldRenderValue={false}
										isMulti
										closeMenuOnSelect={false}
										options={options}
										className='basic-multi-select'
										classNamePrefix='select'
										onChange={handleChange}
										value={selectedSkill}
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
										{selectedSkill.length > 0 &&
											selectedSkill.map((item) => (
												<p key={item.value}>
													{item.label}
													<span
														onClick={removeSkill(
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
								<h4>Suggested skills based on your profile</h4>
								<ul>
									{suggestedOptions.length > 0 &&
										suggestedOptions.map((item) => (
											<li
												onClick={() =>
													addSuggestedSkill(item)
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

export default AddSkill;
