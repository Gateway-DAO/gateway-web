import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink as Link, Route, Routes, Navigate } from "react-router-dom";
import {
	Container,
	Button
} from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './AddAbout.css';
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

class AddAbout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			isValidated: false,
			about: ''
		}
	}

	componentDidMount() {
		space(window.innerHeight, window.innerWidth,
			[window.innerHeight, window.innerWidth])
	}

	handleChange = (data) => {
		this.setState({ about: data });
		if (data) {
			this.setState({ isValidated: false });
		} else {
			this.setState({ isValidated: true });
		}
	}

	handleAdd = () => {

		if (this.state.about == '') {
			this.setState({ isValidated: true });
		} else {

			// Get the existing data
			var existing = localStorage.getItem('gtwUserState');

			// If no existing data, create an array
			// Otherwise, convert the localStorage string to an array
			existing = existing ? JSON.parse(existing) : {};

			// Add new data to localStorage Array
			existing['about'] = this.state.about;

			// Save back to localStorage
			localStorage.setItem('gtwUserState', JSON.stringify(existing));
			this.setState({ redirect: true });
		}

	}

	render() {
		if (this.state.redirect) {
			return <Navigate to="/profiles" />
		}

		var existing = localStorage.getItem('gtwUserState');

		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? JSON.parse(existing) : {};

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
							<h1>About</h1>
							<div className={`text-editor ${this.state.isValidated ? 'invalid' : ''}`}>
								<div className="counting-number">0/400</div>
								<CKEditor
									id="about-content"
									editor={ClassicEditor}
									data={existing.about}
									onReady={editor => {
										// You can store the "editor" and use when it is needed.
										// console.log( 'Editor is ready to use!', editor );
									}}
									onChange={(event, editor) => {
										const data = editor.getData();
										this.handleChange(data);
										// console.log( { event, editor, data } );
									}}
									onBlur={(event, editor) => {
										// console.log( 'Blur.', editor );
									}}
									onFocus={(event, editor) => {
										// console.log( 'Focus.', editor );
									}}
								/>
								<Button onClick={this.handleAdd} variant="primary">Save</Button>
							</div>
						</Container>
					</div>
				</div>
			</>
		)
	}
}


export default AddAbout;