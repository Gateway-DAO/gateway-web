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
	Col,
	ListGroup
} from 'react-bootstrap';
import './AddExperiences.css';
import { createBrowserHistory } from 'history';
import space from '../../../../utils/canvas';
import { useAuth } from '../../../../contexts/UserContext';
import { useSearchDAO } from '../../../../api/database/useSearchDAO';
import Header from "../../../../components/Header";
import Loader from '../../../../components/Loader';
import { MONTHS } from '../../../../utils/constants';
import Page from '../../../../components/Page';

const history = createBrowserHistory();
const years = [...Array(new Date().getFullYear() - 1989).keys()].map((e) => e + 1990);

const AddExperience = () => {
	// Hooks
	const { userInfo, updateUserInfo } = useAuth();
	console.log("UI EXP", userInfo);
	const navigate = useNavigate();

	//state
	const [redirect, setRedirect] = useState(false);
	const [isValidated, setIsValidated] = useState(false);
	const [optionsDao, setOptionsDao] = useState([]);

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

	const [searchTerm, setSearchTerm] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [searchRes, setSearchRes] = useState([]);
	const [updateLoading, setUpdateLoading] = useState(false);

	// Search DAO
	const {
		loading: searchLoading,
		data: searchData,
		error: searchError,
	} = useSearchDAO({
		variables: {
			filter: {
				or: [
					{ dao: { wildcard: `*${searchTerm.toLowerCase()}*` } },
					{ name: { wildcard: `*${searchTerm.toLowerCase()}*` } },
					{
						description: {
							wildcard: `*${searchTerm.toLowerCase()}*`,
						},
					},
				],
			},
		},
	});
	const [loading, setLoading] = useState(false);


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

	const handleCheck = (val) => {
		return valuesDao.some((item) => val.id === item.id);
	};

	const addDAO = (dao) => {
		setSearchTerm('');
		// setSearchRes(searchRes.filter((res) => res.id !== dao.id));
		const daosItems = valuesDao;
		if (handleCheck(dao) == false) {
			setValuesDao([...daosItems, dao]);

		}
	};

	const handleChangeDao = useCallback((valuesDao) => {
		setValuesDao(valuesDao);
	})

	const removeDao = useCallback(
		(val) => () => {
			setValuesDao((previousTags) =>
				previousTags.filter((previousTag, index) => previousTag.id !== val),
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

	useEffect(() => {
		setLoading(true);
		const clear = setTimeout(() => {
			!!searchTerm &&
				searchTerm !== searchQuery &&
				setSearchQuery(searchTerm);
			if (!!searchData && !searchLoading) {
				const query = searchData.searchDAOs.items;
				const results = query.slice(0, 5).map((dao) => {
					return {
						name: dao.name,
						id: dao.dao,
						logoURL: dao.logoURL,
					};
				});
				const results1 = query.slice(0, 5).map((dao) => {
					return {
						label: dao.name,
						value: dao.dao,
						logoURL: dao.logoURL,
					};
				});
				setSearchRes(results);
				setOptionsDao(results1)
			}
			setLoading(false);
		}, 2000);

		return () => clearTimeout(clear);
	}, [searchTerm, searchLoading, searchData]);

	// console.log("searchRes", searchRes);
	// console.log("valuesDao", valuesDao)

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
							<div className="arrow-back" onClick={() => navigate('/profile')}><img src="/left-arrow-icon.svg" alt="" />
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
									{/* <Select
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
									*/}

									<Form.Control
										required
										type="text"
										name="dao-search"
										autoComplete="off"
										value={searchTerm}
										onChange={(e) => {
											setSearchTerm(e.target.value)
										}}
										placeholder="Search"
									/>

									{loading ? (
										<div className="loader-search"><Loader color='white' size={32} /></div>
									) : (
										searchTerm !== '' && searchRes.length && (
											<ListGroup as="ul" className="autocomplete-results daos">
												{searchRes.map((res, idx) => (
													<ListGroup.Item
														as="li"
														className={`result-item ${valuesDao.some(item => item.id === res.id) ? `selected disabled` : ``}`}
														key={res.id}
														onClick={() => addDAO(res)}
													>
														{res.name}
													</ListGroup.Item>
												))}
											</ListGroup>
										)
									)}

									<div className="selected-options">
										{
											valuesDao.length > 0 && valuesDao.map(item =>
												<p key={item.id}>
													<img src={item.logoURL} />
													{item.name}
													<span onClick={removeDao(item.id)} className="selectClose"><img src="/cancel-icon.svg" alt="" /></span></p>
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
										{MONTHS.map((e, key) => {
											return <option key={key} value={e}>{e}</option>;
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
		</Page>
	)
}

export default AddExperience;