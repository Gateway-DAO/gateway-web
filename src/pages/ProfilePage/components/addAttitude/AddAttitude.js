import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { Container, Button, Form, Col } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';
import { FaTimes } from 'react-icons/fa';
import space from '../../../../utils/canvas';
import Page from '../../../../components/Page';
import { useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import './AddAttitude.css';

const AddAttitude = () => {
	// State
	const { userInfo, updateUserInfo } = useAuth();
	const [updateAttitudes] = useMutation(gql(updateUser));

	// Getting userId from local Storage because user Id is different with userInfo.id here.
	// var userId = localStorage.getItem('userId');
	// var userId = "d37139b0-5803-44f1-92e5-87f30a45d851";

	// Hooks
	const navigate = useNavigate();

	const [redirect, setRedirect] = useState(false);
	const [options, setOptions] = useState([
		'Pro-active',
		'Business Driven',
		'Innovative',
		'Leadership'
	]);
	const [suggestedOptions, setSuggestedOptions] = useState([
		'Collaborative',
		'Pro-active',
		'Business Driven',
		'Leadership',
		'Innovative'
	]);
	const [selectedAttitude, setSelectedAttitude] = useState(userInfo?.attitudes || []);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const removeAttitude = useCallback(
		(val) => () => {
			setSelectedAttitude((previousTags) =>
				previousTags.filter(
					(previousTag, index) => previousTag !== val
				)
			);
		},
		[]
	);

	/* This is a callback function that will be called when the user clicks on the remove button. */
	const handleChange = useCallback((selectedAttitude) => {
		setSelectedAttitude(selectedAttitude);
	})

	const handleCheck = val => {
		return selectedAttitude.some(item => val === item);
	}


	const addSuggestedAttitude = useCallback((attitude) => {

		const attitudeItems = selectedAttitude;
		if (handleCheck(attitude) == false) {
			setSelectedAttitude([...attitudeItems, attitude]);
		}
	})

	const handleSubmit = async (event) => {
		console.log('submitted');
		event.preventDefault();
		event.stopPropagation();
		let objAttitudes = selectedAttitude;
		// CONVERT TO NUMERIC ARRAY
		objAttitudes = objAttitudes.map(function (x) {
			return x;
		});

		// API should be call here
		try {
			await updateAttitudes({
				variables: {
					input: {
						id: userInfo.id,
						attitudes: objAttitudes,
					},
				},
			});
			await updateUserInfo({
				attitudes: objAttitudes,
			});

			setRedirect(true);
		} catch (err) {
			console.log(err);
		}
	};

	if (redirect) {
		navigate('/profiles');
	}

	useEffect(() => {
		space(window.innerHeight, window.innerWidth),
			[window.innerHeight, window.innerWidth]
	}, []);

	return (
		<Page space>
			<div className="main-about-section">
				<canvas id="space-canvas"></canvas>
				<Container>
					<div className="back-link">
						{/* <Link to="/profiles">
								<div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
								<p>Back to Profile</p>
							</Link> */}
						<a>
							<div className="arrow-back"
								onClick={() => navigate('/profiles')}
							>
								<img src="/left-arrow-icon.svg" alt="" />
							</div>
						</a>
						<span style={{ color: "white", marginLeft: "20px" }}>
							Back to Profile
						</span>
					</div>
				</Container>
				<div className="gt-about-section">
					<Container>
						<h1>Attitude</h1>
					</Container>
				</div>
				<div className="suggested-skills">
					<Container>
						<div className="suggested-inner-skills">
							<Form
								method="post"
								noValidate
								onSubmit={handleSubmit}
							>
								<Form.Group as={Col} controlId="formGridSkills">
									<Form.Label>Add your attitude</Form.Label>
									<Select
										hideSelectedOptions={false}
										controlShouldRenderValue={false}
										isMulti
										options={options}
										className="basic-multi-select"
										classNamePrefix="select"
										onChange={handleChange}
										value={selectedAttitude}
										placeholder="Search"
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
									<div className="selected-options">
										{selectedAttitude.length > 0 &&
											selectedAttitude.map(item => (
												<p key={item}>{item}
													<span
														onClick={removeAttitude(
															item
														)}
														className="selectClose"
													>
														<FaTimes color='white' />
													</span>
												</p>
											))}
									</div>
								</Form.Group>
								<h4>Suggested attitude based on your profile</h4>
								<ul>
									{suggestedOptions.length > 0 &&
										suggestedOptions.map((item) => (
											<li
												onClick={() =>
													addSuggestedAttitude(item)
												}
												key={item}
											>
												{item}
											</li>
										))}
								</ul>
								<Button variant="primary" type="submit">
									save
								</Button>{' '}
							</Form>
						</div>
					</Container>
				</div>
			</div>
		</Page>
	)
}

export default AddAttitude;