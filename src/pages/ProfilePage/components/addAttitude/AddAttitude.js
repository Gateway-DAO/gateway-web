import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as Link, Route, Routes, Navigate, useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
import { Container, Button, Form, Row, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import './AddAttitude.css';
import space from '../../../../utils/canvas';
import { useAuth } from '../../../../contexts/UserContext';
import Header from "../../../../components/Header";

import { useLazyQuery, useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import { getUserByUsername } from '../../../../graphql/queries';

const AddAttitude = () => {

	const username = useParams().username;
	var userId = localStorage.getItem('userId');
	userId = userId.slice(1, -1);
	const [updateAttitude] = useMutation(gql(updateUser));
	const [getUser, { data, loading, error }] = useLazyQuery(
		gql(getUserByUsername),
		{
			variables: {
				username,
			},
		}
	);

	const navigate = useNavigate();

	const [redirect, setRedirect] = useState(false);
	const [options, setOptions] = useState([
		{ value: 'Pro-active', label: 'Pro-active' },
		{ value: 'Business Driven', label: 'Business Driven' },
		{ value: 'Innovative', label: 'Innovative' },
		{ value: 'Leadership', label: 'Leadership' }
	]);
	const [suggestedOptions, setSuggestedOptions] = useState([
		{ value: 'Collaborative', label: 'Collaborative' },
		{ value: 'Pro-active', label: 'Pro-active' },
		{ value: 'Business Driven', label: 'Business Driven' },
		{ value: 'Leadership', label: 'Leadership' },
		{ value: 'Innovative', label: 'Innovative' }
	]);
	const [selectedAttitude, setSelectedAttitude] = useState([]);

	const { updateUserInfo, userInfo } = useAuth();

	useEffect(() => {
		() => space(window.innerHeight, window.innerWidth),
			[window.innerHeight, window.innerWidth]
		const callback = async () => {
			const { data } = await getUser();
			console.log("data", data);
			var attitudes = data?.getUserByUsername?.items[0]?.attitudes || [];
			var arr = [];
			for (var i = 0; i < attitudes.length; i++) {
				arr.push({ "label": attitudes[i], "value": attitudes[i] });
			}
			setSelectedAttitude(arr);
		}
		callback();
	}, []);

	const removeAttitude = useCallback(
		(val) => () => {
			setSelectedAttitude((previousTags) =>
				previousTags.filter((previousTag, index) => previousTag.value !== val),
			);
		},
		[],
	);

	const handleChange = useCallback((selectedAttitude) => {
		setSelectedAttitude(selectedAttitude);
	})

	const handleCheck = val => {
		return selectedAttitude.some(item => val === item.value);
	}


	const addSuggestedAttitude = useCallback((attitude) => {

		const attitudeItems = selectedAttitude;
		if (handleCheck(attitude) == false) {
			setSelectedAttitude([...attitudeItems, {
				value: attitude,
				label: attitude,
			}]);
		}

	})

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();
		let objAttitudes = selectedAttitude;
		// CONVERT TO NUMERIC ARRAY
		objAttitudes = objAttitudes.map(function (x) {
			return x.value;
		});
		// API should be call here
		try {
			await updateAttitude({
				variables: {
					input: {
						id: userId,
						attitudes: objAttitudes,
					},
				},
			});
			await updateUserInfo({
				id: userInfo.id,
				attitudes: objAttitudes,
			});

			// redirect
			setRedirect(true);
		} catch (err) {
			console.log(err);
		}
	}

	if (redirect) {
		navigate(-1);
	}

	return (
		<>
			<Header />
			<div className="main-about-section">
				<canvas id="space-canvas"></canvas>
				<Container>
					<div className="back-link">
						{/* <Link to="/profiles">
								<div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
								<p>Back to Profile</p>
							</Link> */}
						<a href="#">
							<div className="arrow-back" onClick={() => navigate(-1)}><img src="/left-arrow-icon.svg" alt="" />
							</div>
						</a>
						<span style={{ color: "white", marginLeft: "20px" }}>
							Back to Profile
						</span>
					</div>
				</Container>
				<div className="gt-about-section">
					<Container>
						<h1>Attitudes</h1>
					</Container>
				</div>
				<div className="suggested-skills">
					<Container>
						<div className="suggested-inner-skills">
							<Form method="post" noValidate onSubmit={handleSubmit}>
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
										{
											selectedAttitude.length > 0 && selectedAttitude.map(item =>
												<p key={item.label}>{item.label}
													<span onClick={removeAttitude(item.value)} className="selectClose">
														<img src="/cancel-icon.svg" alt="" />
													</span>
												</p>
											)
										}
									</div>
								</Form.Group>
								<h4>Suggested attitude based on your profile</h4>
								<ul>
									{
										suggestedOptions.length > 0 && suggestedOptions.map(item =>
											<li onClick={() => addSuggestedAttitude(item.value)} key={item.label}>{item.label}</li>
										)
									}
								</ul>
								<Button variant="primary" type="submit">save</Button>{' '}
							</Form>
						</div>
					</Container>
				</div>
			</div>
		</>
	)
}

export default AddAttitude;