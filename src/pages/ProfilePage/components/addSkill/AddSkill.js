import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as Link, Route, Routes, Navigate } from "react-router-dom";
import Select from 'react-select';
import { Container, Button, Form, Row, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import './AddSkill.css';
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

const AddSkill = () => {

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
		{ value: 'Engineering', label: 'Engineering' },
		{ value: 'Solidity', label: 'Solidity' }
	]);
	const [selectedSkill, setSelectedSkill] = useState([]);

	useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

	const removeSkill = useCallback(
    (val) => () => {
      setSelectedSkill((previousTags) =>
        previousTags.filter((previousTag, index) => previousTag.value !== val),
      );
    },
    [],
  );

	const handleChange = useCallback((selectedSkill) => {
		setSelectedSkill(selectedSkill);
	})

	const handleCheck = val => {
		return selectedSkill.some(item => val === item.value);
	}


	const addSuggestedSkill = useCallback((skill) => {

		const skillItems = selectedSkill;
		if (handleCheck(skill) == false) {
			setSelectedSkill([...skillItems, {
				value: skill,
				label: skill,
			}]);
		}

	})

	const handleSubmit = (event) => {
		console.log("submitted");
		event.preventDefault();
		event.stopPropagation();
		setRedirect(true);

	}

	return (
		<>
				<Header />
				<div className="main-about-section">
					<canvas id="space-canvas"></canvas>
					<Container>
						<div className="back-link">
							<Link to="/profiles">
								<div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
								<p>Back to Profile</p>
							</Link>
						</div>
					</Container>
					<div className="gt-about-section">
						<Container>
							<h1>Skills</h1>
						</Container>
					</div>
					<div className="suggested-skills">
						<Container>
							<div className="suggested-inner-skills">
								<Form method="post" noValidate onSubmit={handleSubmit}>
									<Form.Group as={Col} controlId="formGridSkills">
										<Form.Label>Add your Skills</Form.Label>
										<Select
											hideSelectedOptions={false}
											controlShouldRenderValue={false}
											isMulti
											options={options}
											className="basic-multi-select"
											classNamePrefix="select"
											onChange={handleChange}
											value={selectedSkill}
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
											selectedSkill.length > 0 && selectedSkill.map(item =>
												<p key={item.label}>{item.label}
													<span onClick={removeSkill(item.value)} className="selectClose">
														<img src="/cancel-icon.svg" alt="" />
													</span>
												</p>
											)
										}
										</div>
									</Form.Group>
									<h4>Suggested skills based on your profile</h4>
									<ul>
										{
											suggestedOptions.length > 0 && suggestedOptions.map(item =>
												<li onClick={() => addSuggestedSkill(item.value)} key={item.label}>{item.label}</li>
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

export default AddSkill;