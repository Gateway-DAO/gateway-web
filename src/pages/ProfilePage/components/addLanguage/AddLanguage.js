import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as Link, Route, Routes, Navigate } from "react-router-dom";
import Select from 'react-select';
import { Container, Button, Form, Row, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import './AddLanguage.css';
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

const AddLanguage = () => {

	const [redirect, setRedirect] = useState(false);
	const [options, setOptions] = useState([
		{ value: 'portuguese', label: 'Portuguese' },
		{ value: 'polish', label: 'Polish' },
		{ value: 'persian', label: 'Persian' },
		{ value: 'punjabi', label: 'Punjabi' }
	]);
	const [suggestedLangs, setSuggestedLangs] = useState([
		{ value: 'English', label: 'English' },
		{ value: 'Spanish', label: 'Spanish' },
		{ value: 'Chinese', label: 'Chinese' },
		{ value: 'Dutch', label: 'Dutch' },
		{ value: 'Arabic', label: 'Arabic' },
		{ value: 'German', label: 'German' },
		{ value: 'Japanese', label: 'Japanese' },
		{ value: 'Punjabi', label: 'Punjabi' },
		{ value: 'French', label: 'French' },
		{ value: 'Italian', label: 'Italian' }
	]);
	const [selectedLangs, setSelectedLangs] = useState([]);

	useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

	const removeLanguage = useCallback(
    (val) => () => {
      setSelectedLangs((previousTags) =>
        previousTags.filter((previousTag, index) => previousTag.value !== val),
      );
    },
    [],
  );

	const handleChange = useCallback((selectedLanguage) => {
		setSelectedLangs(selectedLanguage);
	})

	const handleCheck = val => {
		return selectedLangs.some(item => val === item.value);
	}


	const addSuggestedLanguage = useCallback((lang) => {

		const langItems = selectedLangs;
		if (handleCheck(lang) == false) {
			setSelectedLangs([...langItems, {
				value: lang,
				label: lang,
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
							<h1>Languages</h1>
						</Container>
					</div>
					<div className="suggested-skills">
						<Container>
							<div className="suggested-inner-skills">
								<Form method="post" noValidate onSubmit={handleSubmit}>
									<Form.Group as={Col} controlId="formGridSkills">
										<Form.Label>Add your Languages</Form.Label>
										<Select
											hideSelectedOptions={false}
											controlShouldRenderValue={false}
											isMulti
											options={options}
											className="basic-multi-select"
											classNamePrefix="select"
											onChange={handleChange}
											value={selectedLangs}
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
											selectedLangs.length > 0 && selectedLangs.map(item =>
												<p key={item.label}>{item.label}
													<span onClick={removeLanguage(item.value)} className="selectClose">
														<img src="/cancel-icon.svg" alt="" />
													</span>
												</p>
											)
										}
										</div>
									</Form.Group>
									<h4>Suggested languages based on your profile</h4>
									<ul>
										{
											suggestedLangs.length > 0 && suggestedLangs.map(item =>
												<li onClick={() => addSuggestedLanguage(item.value)} key={item.label}>{item.label}</li>
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

export default AddLanguage;