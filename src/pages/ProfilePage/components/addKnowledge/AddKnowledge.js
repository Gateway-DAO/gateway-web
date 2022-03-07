import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as Link, Route, Routes, Navigate, useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
import { Container, Button, Form, Row, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import './AddKnowledge.css';
import space from '../../../../utils/canvas';
import { useAuth } from '../../../../contexts/UserContext';
import Header from "../../../../components/Header";

import { useLazyQuery, useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import { getUserByUsername } from '../../../../graphql/queries';

const AddKnowledge = () => {

	const username = useParams().username;
	var userId = localStorage.getItem('userId');
	userId = userId.slice(1, -1);
	const [updateKnowledge] = useMutation(gql(updateUser));
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
		{ value: 'development', label: 'Development' },
		{ value: 'design', label: 'Design' },
		{ value: 'decentralization', label: 'Decentralization' },
		{ value: 'defense analyst', label: 'Defense Analyst' }
	]);
	const [suggestedOptions, setSuggestedOptions] = useState([
		{ value: 'Crypto', label: 'Crypto' },
		{ value: 'Blockchain', label: 'Blockchain' },
		{ value: 'UX Design', label: 'UX Design' },
		{ value: 'UI Design', label: 'UI Design' },
		{ value: 'Social Media', label: 'Social Media' },
		{ value: 'Legal', label: 'Legal' },
		{ value: 'Community', label: 'Community' },
		{ value: 'Engeneering', label: 'Engeneering' },
		{ value: 'Solidity', label: 'Solidity' }
	]);
	const [selectedKnowledge, setSelectedKnowledge] = useState([]);

	const { updateUserInfo, userInfo } = useAuth();

	useEffect(() => {
		() => space(window.innerHeight, window.innerWidth),
			[window.innerHeight, window.innerWidth]
		const callback = async () => {
			const { data } = await getUser();
			console.log("data", data);
			var knowledges = data?.getUserByUsername?.items[0]?.knowledges || [];
			var arr = [];
			for (var i = 0; i < knowledges.length; i++) {
				arr.push({ "label": knowledges[i], "value": knowledges[i] });
			}
			setSelectedKnowledge(arr);
		}
		callback();
	}, []);

	const removeKnowledge = useCallback(
		(val) => () => {
			setSelectedKnowledge((previousTags) =>
				previousTags.filter((previousTag, index) => previousTag.value !== val),
			);
		},
		[],
	);

	const handleChange = useCallback((selectedKnowledge) => {
		setSelectedKnowledge(selectedKnowledge);
	})

	const handleCheck = val => {
		return selectedKnowledge.some(item => val === item.value);
	}


	const addSuggestedKnowledge = useCallback((knowledge) => {

		const knowledgeItems = selectedKnowledge;
		if (handleCheck(knowledge) == false) {
			setSelectedKnowledge([...knowledgeItems, {
				value: knowledge,
				label: knowledge,
			}]);
		}

	})

	const handleSubmit = async (event) => {
		console.log("submitted");
		event.preventDefault();
		event.stopPropagation();
		let objKnowledges = selectedKnowledge;
		// CONVERT TO NUMERIC ARRAY
		objKnowledges = objKnowledges.map(function (x) {
			return x.value;
		});
		// API should be call here
		try {
			await updateKnowledge({
				variables: {
					input: {
						id: userId,
						knowledges: objKnowledges,
					},
				},
			});
			await updateUserInfo({
				id: userInfo.id,
				knowledges: objKnowledges,
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
						<a>
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
						<h1>Knowledge</h1>
					</Container>
				</div>
				<div className="suggested-skills">
					<Container>
						<div className="suggested-inner-skills">
							<Form method="post" noValidate onSubmit={handleSubmit}>
								<Form.Group as={Col} controlId="formGridSkills">
									<Form.Label>Add your knowledge</Form.Label>
									<Select
										hideSelectedOptions={false}
										controlShouldRenderValue={false}
										isMulti
										options={options}
										className="basic-multi-select"
										classNamePrefix="select"
										onChange={handleChange}
										value={selectedKnowledge}
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
											selectedKnowledge.length > 0 && selectedKnowledge.map(item =>
												<p key={item.label}>{item.label}
													<span onClick={removeKnowledge(item.value)} className="selectClose">
														<img src="/cancel-icon.svg" alt="" />
													</span>
												</p>
											)
										}
									</div>
								</Form.Group>
								<h4>Suggested knowledge based on your profile</h4>
								<ul>
									{
										suggestedOptions.length > 0 && suggestedOptions.map(item =>
											<li onClick={() => addSuggestedKnowledge(item.value)} key={item.label}>{item.label}</li>
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

export default AddKnowledge;