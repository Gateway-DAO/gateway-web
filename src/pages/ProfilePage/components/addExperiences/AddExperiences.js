import React from 'react';
import { NavLink as Link, Route, Routes, Navigate } from "react-router-dom";
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

class AddExperience extends React.Component {
	constructor(props) {
		super(props);
		console.log("prop", this.props.navigation);
		this.state = {
			isValidated: false,
			redirect: false,
			optionsDao: [
				{ value: 'experience1', label: 'Experience1' },
				{ value: 'experience2', label: 'Experience2' },
				{ value: 'experience3', label: 'Experience3' }
			],
			months: [
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
			],


			valuesDao: [],
			user: {
				title: '',
				expTaskAccom: '',
				startDate: 'january',
				startYear: '1990',
				endDate: 'january',
				endYear: '1990',
				currWorkRole: false,
				hourPerWeek: ''
			}
		}

		this.handleChange = this.handleChange.bind(this);
		this.removeDao = this.removeDao.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		space(window.innerHeight, window.innerWidth,
			[window.innerHeight, window.innerWidth])
	}

	handleChange(event) {
		const { name, value } = event.target;
		const { user } = this.state;
		if (event.target.type === 'checkbox') {
			this.setState({
				user: {
					...user,
					[name]: event.target.checked
				}
			});

		} else {
			this.setState({
				user: {
					...user,
					[name]: value
				}
			});
		}

	}

	handleChangeDao = valuesDao => {
		this.setState({ valuesDao });
	};

	removeDao = (val) => {
		this.setState({
			valuesDao: this.state.valuesDao.filter((previousTag, index) => previousTag.value !== val)
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		const form = event.currentTarget;
		if (form.checkValidity() !== false) {
			let obj = this.state.user;
			Object.assign(obj, { dao: this.state.valuesDao });
			// Get the existing data
			var existing = localStorage.getItem('gtwUserState');

			// If no existing data, create an array
			// Otherwise, convert the localStorage string to an array
			existing = existing ? JSON.parse(existing) : {};
			// Add new data to localStorage Array
			Object.assign(existing, { expirence: obj });
			// Save back to localStorage
			localStorage.setItem('gtwUserState', JSON.stringify(existing));
			this.setState({ redirect: true });
		}

		this.setState({ isValidated: true });
	}

	render() {
		if (this.state.redirect) {
			return <Navigate to="/profiles" />
		}

		const { valuesDao } = this.state;
		const { title, expTaskAccom, startDate, startYear, endDate, endYear, currWorkRole, hourPerWeek } = this.state.user;
		// console.log("currWorkRole", currWorkRole);
		return (
			<div className="main-about-section">
				<Header />
				<canvas id="space-canvas"></canvas>
				<Container>
					<div className="back-link">
						<Link to="/profiles">
							<div className="arrow-back"><img src="/left-arrow-icon.svg" alt="" /></div>
							<p>Back to Profile</p>
						</Link>
					</div>
				</Container>
				<div className="gt-about-section add-exp-outer">
					<Container>
						<h1>Add Experience</h1>
						<Form method="post" noValidate validated={this.state.isValidated} onSubmit={this.handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridDao">
									<Form.Label>DAO</Form.Label>
									<Select
										hideSelectedOptions={false}
										controlShouldRenderValue={false}
										isMulti
										options={this.state.optionsDao}
										className={valuesDao.length == 0 ? 'invalid' : ''}
										classNamePrefix="select"
										onChange={this.handleChangeDao}
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
													<span onClick={this.removeDao.bind(this, item.value)} className="selectClose"><img src="/cancel-icon.svg" alt="" /></span></p>
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
											this.handleChange(e)
										}}
										placeholder="i.e. Communitty Manager"
										value={title}
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
										onChange={this.handleChange}
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
										onChange={this.handleChange}
										value={startDate}
									>
										{this.state.months.map((e, key) => {
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
										onChange={this.handleChange}
										value={startYear}
									>
										{years.map((e, key) => {
											return <option key={key} value={e}>{e}</option>;
										})}
									</Form.Select>
								</Form.Group>
							</Row>

							{!currWorkRole ?
								<Row className="mb-3">
									<Form.Group as={Col} controlId="formGridEndDateMonth">
										<Form.Label name="endDate" className="time-label">End Date</Form.Label>
										<Form.Select
											name="endDate"
											onChange={this.handleChange}
											value={endDate}
											required
										>
											{this.state.months.map((e, key) => {
												return <option key={key} value={e.value}>{e.label}</option>;
											})}
										</Form.Select>
									</Form.Group>
									<Form.Group name="endYear" as={Col} controlId="formGridEndDateYear">
										<Form.Label></Form.Label>
										<Form.Select
											onChange={this.handleChange}
											name="endYear"
											value={endYear}
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
									onChange={this.handleChange}
									defaultChecked={currWorkRole}
									className="mt-2"
									label="I am currently working in this role"
								/>
							</Form.Group>

							<Row className="mb-5 mbl-full">
								<Form.Group as={Col} controlId="formGridEndDateYear" className="mb-3">
									<Form.Label><strong>Hours Per Week Committed on Average</strong></Form.Label>
									<Form.Control
										type="time"
										name="hourPerWeek"
										placeholder="00:00"
										onChange={this.handleChange}
										value={hourPerWeek}
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
		)
	}
}

export default AddExperience;