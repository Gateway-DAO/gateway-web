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
import './AddSkill.css';
import { connect } from 'react-redux';
// import { addSkill } from "../../actions";
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

class AddSkill extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			selectedSkill: [],
			options: [
				{ value: 'development', label: 'Development' },
				{ value: 'design', label: 'Design' },
				{ value: 'decentralization', label: 'Decentralization' },
				{ value: 'defense analyst', label: 'Defense Analyst' }
			],
			suggestedOptions: [
				{ value: 'Crypto', label: 'Crypto' },
				{ value: 'Blockchain', label: 'Blockchain' },
				{ value: 'UX Design', label: 'UX Design' },
				{ value: 'UI Design', label: 'UI Design' },
				{ value: 'Social Media', label: 'Social Media' },
				{ value: 'Legal', label: 'Legal' },
				{ value: 'Community', label: 'Community' },
				{ value: 'Engineering', label: 'Engineering' },
				{ value: 'Solidity', label: 'Solidity' }
			]
		}
		this.removeSkill = this.removeSkill.bind(this);
		this.addSuggestedSkill = this.addSuggestedSkill.bind(this);
	}

	componentDidMount() {
		var existing = localStorage.getItem('gtwUserState');
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? JSON.parse(existing) : {};
		// Add new data to localStorage Array
		this.setState({ selectedSkill: existing.skill });
		space(window.innerHeight, window.innerWidth,
			[window.innerHeight, window.innerWidth])
	}

	removeSkill = (val) => {
		this.setState({
			selectedSkill: this.state.selectedSkill.filter((previousTag, index) => previousTag.value !== val)
		});
	};

	handleChange = selectedSkill => {
		this.setState({ selectedSkill });
	};

	handleCheck(val) {
		const { selectedSkill } = this.state;
		if (selectedSkill === undefined) {
			this.setState({ selectedSkill: [] });
			return false;
		} else {
			return this.state.selectedSkill.some(item => val === item.value);
		}
	}

	addSuggestedSkill = skill => {

		if (this.handleCheck(skill) == false) {
			// this.setState({ selectedSkill : [{ "value": skill, "label": skill }] });
			this.setState(prevState => ({
				selectedSkill: [...prevState.selectedSkill, {
					value: skill,
					label: skill,
				}]
			}));
		}

	}

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		console.log("clicked");

		this.props.setUserSkill(this.state.selectedSkill);

		var existing = localStorage.getItem('gtwUserState');
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? JSON.parse(existing) : {};
		// Add new data to localStorage Array
		Object.assign(existing, { skill: this.state.selectedSkill });
		// Save back to localStorage
		localStorage.setItem('gtwUserState', JSON.stringify(existing));
		this.setState({ redirect: true });

	};

	render() {
		if (this.state.redirect) {
			return <Navigate to="/profiles" />
		}

		const { selectedSkill, suggestedOptions } = this.state;
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
				<div className="gt-about-section">
					<Container>
						<h1>Skills</h1>
					</Container>
				</div>
				<div className="suggested-skills">
					<Container>
						<div className="suggested-inner-skills">
							<Form method="post" noValidate onSubmit={this.handleSubmit}>
								<Form.Group as={Col} controlId="formGridSkills">
									<Form.Label>Add your Skills</Form.Label>
									<Select
										hideSelectedOptions={false}
										controlShouldRenderValue={false}
										isMulti
										options={this.state.options}
										className="basic-multi-select"
										classNamePrefix="select"
										onChange={this.handleChange}
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
											!!selectedSkill && selectedSkill.length > 0 && selectedSkill.map(item =>
												<p key={item.label}>{item.label}
													<span onClick={this.removeSkill.bind(this, item.value)} className="selectClose">
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
											<li onClick={this.addSuggestedSkill.bind(this, item.value)} key={item.label}>{item.label}</li>
										)
									}
								</ul>
								<Button variant="primary" type="submit">save</Button>{' '}
							</Form>
						</div>
					</Container>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userSkill: state.selectedSkill
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setUserSkill: (userSkill) => {
			dispatch({ type: "SET_USER_SKILL", payload: userSkill })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSkill);