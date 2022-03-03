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
import './AddKnowledge.css';
import { connect } from 'react-redux';
// import { addKnowledge } from "../../actions";
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

class AddKnowledge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			selectedKnowledge: [],
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
				{ value: 'Engeneering', label: 'Engeneering' },
				{ value: 'Solidity', label: 'Solidity' }
			]
		}
		this.removeKnowledge = this.removeKnowledge.bind(this);
		this.addSuggestedKnowledge = this.addSuggestedKnowledge.bind(this);
	}

	componentDidMount() {
		var existing = localStorage.getItem('gtwUserState');
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? JSON.parse(existing) : {};
		this.setState({ selectedKnowledge: existing.knowledge });
		space(window.innerHeight, window.innerWidth,
			[window.innerHeight, window.innerWidth])
	}

	removeKnowledge = (val) => {
		this.setState({
			selectedKnowledge: this.state.selectedKnowledge.filter((previousTag, index) => previousTag.value !== val)
		});
	};

	handleChange = selectedKnowledge => {
		this.setState({ selectedKnowledge });
	};

	handleCheck(val) {
		const { selectedKnowledge } = this.state;
		if (selectedKnowledge === undefined) {
			this.setState({ selectedKnowledge: [] });
			return false;
		} else {
			return this.state.selectedKnowledge.some(item => val === item.value);
		}
	}

	addSuggestedKnowledge = knowledge => {

		if (this.handleCheck(knowledge) == false) {
			this.setState(prevState => ({
				selectedKnowledge: [...prevState.selectedKnowledge, {
					value: knowledge,
					label: knowledge,
				}]
			}));
		}

	}

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		this.props.setUserKnowledge(this.state.selectedKnowledge);

		var existing = localStorage.getItem('gtwUserState');
		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? JSON.parse(existing) : {};
		// Add new data to localStorage Array
		Object.assign(existing, { knowledge: this.state.selectedKnowledge });
		// Save back to localStorage
		localStorage.setItem('gtwUserState', JSON.stringify(existing));
		this.setState({ redirect: true });

	};

	render() {
		if (this.state.redirect) {
			return <Navigate to="/profiles" />
		}

		const { selectedKnowledge, suggestedOptions } = this.state;
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
							<h1>Knowledge</h1>
						</Container>
					</div>
					<div className="suggested-skills">
						<Container>
							<div className="suggested-inner-skills">
								<Form method="post" noValidate onSubmit={this.handleSubmit}>
									<Form.Group as={Col} controlId="formGridSkills">
										<Form.Label>Add your knowledge</Form.Label>
										<Select
											hideSelectedOptions={false}
											controlShouldRenderValue={false}
											isMulti
											options={this.state.options}
											className="basic-multi-select"
											classNamePrefix="select"
											onChange={this.handleChange}
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
												!!selectedKnowledge && selectedKnowledge.length > 0 && selectedKnowledge.map(item =>
													<p key={item.label}>{item.label}
														<span onClick={this.removeKnowledge.bind(this, item.value)} className="selectClose">
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
												<li onClick={this.addSuggestedKnowledge.bind(this, item.value)} key={item.label}>{item.label}</li>
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
		userKnowledge: state.selectedKnowledge
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setUserKnowledge: (userKnowledge) => {
			dispatch({ type: "SET_USER_KNOWLEDGE", payload: userKnowledge })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKnowledge);