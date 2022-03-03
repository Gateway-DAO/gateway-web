import React from 'react';
import { NavLink as Link, Route, Routes, Navigate } from "react-router-dom";
import Select from 'react-select';
import { Container, Button, Form, Row, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import './AddAttitude.css';
import { connect } from 'react-redux';
// import { addAttitude } from "../../actions";
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

class AddAttitude extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			selectedAttitude: [],
			options: [
				{ value: 'Pro-active', label: 'Pro-active' },
				{ value: 'Business Driven', label: 'Business Driven' },
				{ value: 'Innovative', label: 'Innovative' },
				{ value: 'Leadership', label: 'Leadership' }
			],
			suggestedOptions: [
				{ value: 'Collaborative', label: 'Collaborative' },
				{ value: 'Pro-active', label: 'Pro-active' },
				{ value: 'Business Driven', label: 'Business Driven' },
				{ value: 'Leadership', label: 'Leadership' },
				{ value: 'Innovative', label: 'Innovative' }
			]
		}
		this.removeAttitude = this.removeAttitude.bind(this);
		this.addSuggestedAttitude = this.addSuggestedAttitude.bind(this);
	}

	componentDidMount() {
		var existing = localStorage.getItem('gtwUserState');
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? JSON.parse(existing) : {};
		// Add new data to localStorage Array
		this.setState({ selectedAttitude: existing.attitude });
		space(window.innerHeight, window.innerWidth,
			[window.innerHeight, window.innerWidth])
	}

	removeAttitude = (val) => {
		this.setState({
			selectedAttitude: this.state.selectedAttitude.filter((previousTag, index) => previousTag.value !== val)
		});
	};

	handleChange = selectedAttitude => {
		this.setState({ selectedAttitude });
	};

	handleCheck(val) {
		const { selectedAttitude } = this.state;
		if (selectedAttitude === undefined) {
			this.setState({ selectedAttitude: [] });
			return false;
		} else {
			return this.state.selectedAttitude.some(item => val === item.value);
		}
	}

	addSuggestedAttitude = attitude => {

		if (this.handleCheck(attitude) == false) {
			this.setState(prevState => ({
				selectedAttitude: [...prevState.selectedAttitude, {
					value: attitude,
					label: attitude,
				}]
			}));
		}

	}

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		this.props.setUserAttitude(this.state.selectedAttitude);

		var existing = localStorage.getItem('gtwUserState');
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? JSON.parse(existing) : {};
		// Add new data to localStorage Array
		Object.assign(existing, { attitude: this.state.selectedAttitude });
		// Save back to localStorage
		localStorage.setItem('gtwUserState', JSON.stringify(existing));
		this.setState({ redirect: true });

	};

	render() {
		if (this.state.redirect) {
			return <Navigate to="/profiles" />
		}

		const { selectedAttitude, suggestedOptions } = this.state;
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
							<h1>Attitudes</h1>
						</Container>
					</div>
					<div className="suggested-skills">
						<Container>
							<div className="suggested-inner-skills">
								<Form method="post" noValidate onSubmit={this.handleSubmit}>
									<Form.Group as={Col} controlId="formGridSkills">
										<Form.Label>Add your attitude</Form.Label>
										<Select
											hideSelectedOptions={false}
											controlShouldRenderValue={false}
											isMulti
											options={this.state.options}
											className="basic-multi-select"
											classNamePrefix="select"
											onChange={this.handleChange}
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
												!!selectedAttitude && selectedAttitude.length > 0 && selectedAttitude.map(item =>
													<p key={item.label}>{item.label}
														<span onClick={this.removeAttitude.bind(this, item.value)} className="selectClose">
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
												<li onClick={this.addSuggestedAttitude.bind(this, item.value)} key={item.label}>{item.label}</li>
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
}

function mapStateToProps(state) {
	return {
		userAttitude: state.selectedAttitude
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setUserAttitude: (userAttitude) => {
			dispatch({ type: "SET_USER_ATTITUDE", payload: userAttitude })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAttitude);