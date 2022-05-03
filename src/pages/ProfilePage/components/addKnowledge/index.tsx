import React, { useState, useEffect, useCallback } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import { useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import Page from '../../../../components/Page';
import './AddKnowledge.css';
import Space from '../../../../components/Space';
import Loader from '../../../../components/Loader';

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
	const { userInfo, canEdit } = useOutletContext<Record<string, any>>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Hooks
	const navigate = useNavigate();
	const {
		updateUserInfo,
	}: { updateUserInfo?(info: Record<string, any>): void } = useAuth();
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
	}, []);

	const handleCheck = (val) => {
		return selectedKnowledge.some((item) => val.value === item.value);
	};

	const addSuggestedKnowledge = useCallback((knowledge) => {
		if (handleCheck(knowledge) == false) {
			setSelectedKnowledge(prev => [...prev, knowledge]);
		}
	}, [selectedKnowledge]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();
		let objKnowledges = selectedKnowledge.map(knowledge => knowledge.value);

		// API should be call here
		try {
			setIsLoading(true);
			await updateUserInfo({
				knowledges: objKnowledges,
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
										closeMenuOnSelect={false}
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

export default AddKnowledge;
