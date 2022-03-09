import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import './AddSkill.css';
import space from '../../../../utils/canvas';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';

import Page from '../../../../components/Page';

import { useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';

const AddSkill = () => {
	// State
	const { userInfo, updateUserInfo } = useAuth();
	const [updateSkills] = useMutation(gql(updateUser));

	// Getting userId from local Storage because user Id is different with userInfo.id here.
	// var userId = localStorage.getItem('userId');
	var userId = "d37139b0-5803-44f1-92e5-87f30a45d851";

	// Hooks
	const navigate = useNavigate();

	const [redirect, setRedirect] = useState(false);

	const [options, setOptions] = useState([
		'Development',
		'Design',
		'Decentralization',
		'Defense Analyst',
	]);

	const [suggestedOptions, setSuggestedOptions] = useState([
		'Crypto',
		'Blockchain',
		'UX Design',
		'UI Design',
		'Social Media',
		'Legal',
		'Community',
		'Engineering',
		'Solidity',
	]);
	const [selectedSkill, setSelectedSkill] = useState(userInfo?.skills || []);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const removeSkill = useCallback(
		(val) => () => {
			setSelectedSkill((previousTags) =>
				previousTags.filter(
					(previousTag, index) => previousTag !== val
				)
			);
		},
		[]
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const handleChange = useCallback((selectedSkill) => {
		setSelectedSkill(selectedSkill);
	});

	const handleCheck = (val) => {
		return selectedSkill.some((item) => val === item);
	};

	const addSuggestedSkill = useCallback((skill) => {
		const skillItems = selectedSkill;

		if (handleCheck(skill) == false) {
			setSelectedSkill([...skillItems, skill]);
		}
	});

	const handleSubmit = async (event) => {
		console.log('submitted');
		event.preventDefault();
		event.stopPropagation();
		let objSkills = selectedSkill;
		// CONVERT TO NUMERIC ARRAY
		objSkills = objSkills.map(function (x) {
			return x;
		});

		// API should be call here
		try {
			await updateSkills({
				variables: {
					input: {
						id: userId,
						skills: objSkills,
					},
				},
			});
			await updateUserInfo({
				skills: objSkills,
			});

			setRedirect(true);
		} catch (err) {
			console.log(err);
		}
	};

	if (redirect) {
		navigate(-1);
	}

	useEffect(() => {
		space(window.innerHeight, window.innerWidth),
			[window.innerHeight, window.innerWidth]
	}, []);

	return (
		<Page space>
			<div className='main-about-section'>
				<canvas id='space-canvas'></canvas>
				<Container>
					<div className='back-link'>
						{/* <Link to="/">
							<div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
							<p>Back to Profile</p>
						</Link> */}
						<a href>
							<div
								className='arrow-back'
								onClick={() => navigate(-1)}
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
												<p key={item}>
													{item}
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

export default AddSkill;
