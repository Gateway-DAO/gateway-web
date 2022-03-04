import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Select from 'react-select';
import {
	Container,
	Button,
	Form,
	Row,
	FormGroup,
	FormControl,
	ControlLabel,
	Col
} from 'react-bootstrap';
import './AddExperiences.css';
import { createBrowserHistory } from 'history';
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

const history = createBrowserHistory();
const years = [...Array(new Date().getFullYear() - 1989).keys()].map((e) => e + 1990);

const AddExperience = () => {
	const navigate = useNavigate();
	const [redirect, setRedirect] = useState(false);
	const [isValidated, setIsValidated] = useState(false);
	const [optionsDao, setOptionsDao] = useState([
		{ value: 'experience1', label: 'Experience1' },
		{ value: 'experience2', label: 'Experience2' },
		{ value: 'experience3', label: 'Experience3' }
	]);

	const [months, setMonths] = useState([
		{ value: 'january', label: 'January' },
		{ value: 'february', label: 'February' },
		{ value: 'march', label: 'March' },
		{ value: 'april', label: 'April' },
		{ value: 'may', label: 'May' },
		{ value: 'june', label: 'June' },
		{ value: 'july', label: 'July' },
		{ value: 'august', label: 'August' },
		{ value: 'september', label: 'September' },
		{ value: 'october', label: 'October' },
		{ value: 'november', label: 'November' },
		{ value: 'december', label: 'December' },
	]);

	const [valuesDao, setValuesDao] = useState([]);
	const [user, setUser] = useState({
		title: '',
		expTaskAccom: '',
		startDate: 'january',
		startYear: '1990',
		endDate: 'january',
		endYear: '1990',
		currWorkRole: false,
		hourPerWeek: ''
	});

	useEffect(
		() => space(window.innerHeight, window.innerWidth),
		[window.innerHeight, window.innerWidth]
	);

	const handleChange = (event) => {
		const { name, value } = event.target;
		const re = /^[0-9\b]+$/;
		if (event.target.type === 'checkbox') {
			setUser(prev => ({ ...prev, [name]: event.target.checked }))
		} else {
			if (name === 'hourPerWeek') {
				var str = '';
				if (value.includes(":")) {
					str = value.replace(':', '');
					const times = value.split(":");
					if (Number(times[1]) > 59) {
						setUser(prev => ({ ...prev, [name]: times[0] + ":00" }))
						return true;
					}

				} else {
					str = value;
				}
				// console.log("str", str);
				if (value === '' || re.test(str)) {
					setUser(prev => ({ ...prev, [name]: value }))
				}
			} else {
				setUser(prev => ({ ...prev, [name]: value }))
			}

		}

	}

	const handleTime = (event) => {
		const { name, value } = event.target;
		if (value.length == 2) {
			setUser(prev => ({ ...prev, ['hourPerWeek']: value + ":" }))
		}
	}

	const handleChangeDao = useCallback((valuesDao) => {
		setValuesDao(valuesDao);
	})

	const removeDao = useCallback(
		(val) => () => {
			setValuesDao((previousTags) =>
				previousTags.filter((previousTag, index) => previousTag.value !== val),
			);
		}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		const form = event.currentTarget;
		if (form.checkValidity() !== false) {
			console.log("submitted", "user data", user);
		}
		setIsValidated(true);
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
				<div className="gt-about-section add-exp-outer">
					<Container>
						<h1>Add Experience</h1>
						<Form method="post" noValidate validated={isValidated} onSubmit={handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridDao">
									<Form.Label>DAO</Form.Label>
									<Select
										hideSelectedOptions={false}
										controlShouldRenderValue={false}
										isMulti
										options={optionsDao}
										className={valuesDao.length == 0 ? 'invalid' : ''}
										classNamePrefix="select"
										onChange={handleChangeDao}
										value={valuesDao}
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
											valuesDao.length > 0 && valuesDao.map(item =>
												<p key={item.label}>{item.label}
													<span onClick={removeDao(item.value)} className="selectClose"><img src="/cancel-icon.svg" alt="" /></span></p>
											)
										}
									</div>
								</Form.Group>
							</Row>

							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridTitle">
									<Form.Label>Title</Form.Label>
									<Form.Control
										required
										type="text"
										name="title"
										onChange={(e) => {
											handleChange(e)
										}}
										placeholder="i.e. Communitty Manager"
										value={user.title}
									/>
								</Form.Group>
							</Row>

							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridExp">
									<Form.Label>Experience and Tasks Accomplished</Form.Label>
									<Form.Control
										required
										as="textarea"
										name="expTaskAccom"
										onChange={handleChange}
										placeholder="This will be the description of your position."
										style={{ height: '100px' }}
									/>
								</Form.Group>
							</Row>

							<Row>
								<p className="time-label"><strong>Time Period of Contributions</strong></p>
							</Row>

							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridStartDateMonth">
									<Form.Label className="time-label">Start Date</Form.Label>
									<Form.Select
										name="startDate"
										required
										onChange={handleChange}
										value={user.startDate}
									>
										{months.map((e, key) => {
											return <option key={key} value={e.value}>{e.label}</option>;
										})}
									</Form.Select>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridStartDateYear">
									<Form.Label></Form.Label>
									<Form.Select
										name="startYear"
										className="mt-2"
										required
										onChange={handleChange}
										value={user.startYear}
									>
										{years.map((e, key) => {
											return <option key={key} value={e}>{e}</option>;
										})}
									</Form.Select>
								</Form.Group>
							</Row>

							{!user.currWorkRole ?
								<Row className="mb-3">
									<Form.Group as={Col} controlId="formGridEndDateMonth">
										<Form.Label name="endDate" className="time-label">End Date</Form.Label>
										<Form.Select
											name="endDate"
											onChange={handleChange}
											value={user.endDate}
											required
										>
											{months.map((e, key) => {
												return <option key={key} value={e.value}>{e.label}</option>;
											})}
										</Form.Select>
									</Form.Group>
									<Form.Group name="endYear" as={Col} controlId="formGridEndDateYear">
										<Form.Label></Form.Label>
										<Form.Select
											onChange={handleChange}
											name="endYear"
											value={user.endYear}
											className="mt-2"
											required
										>
											{years.map((e, key) => {
												return <option key={key} value={e}>{e}</option>;
											})}
										</Form.Select>
									</Form.Group>
								</Row>

								: null
							}

							<Form.Group className="mb-3" id="formGridCheckbox">
								<Form.Check
									name="currWorkRole"
									type="checkbox"
									onChange={handleChange}
									defaultChecked={user.currWorkRole}
									className="mt-2"
									label="I am currently working in this role"
								/>
							</Form.Group>

							<Row className="mb-5 mbl-full">
								<Form.Group as={Col} controlId="formGridEndDateYear" className="mb-3">
									<Form.Label><strong>Hours Per Week Committed on Average</strong></Form.Label>
									<Form.Control
										type="text"
										name="hourPerWeek"
										placeholder="00:00"
										maxLength="5"
										onChange={handleChange}
										onKeyPress={handleTime}
										value={user.hourPerWeek}
										required
									/>
								</Form.Group>
								<Form.Group as={Col}>
								</Form.Group>
							</Row>

							<Button variant="primary" type="submit">
								Submit
							</Button>

						</Form>
					</Container>
				</div>
			</div>
		</>
	)
}

export default AddExperience;