import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink as Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import {
	Container,
	Button
} from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './AddAbout.css';
import space from '../../../../utils/canvas';
import Header from "../../../../components/Header";

const AddAbout = () => {
	const navigate = useNavigate();
	const [redirect, setRedirect] = useState(false);
	const [isValidated, setIsValidated] = useState(false);
	const [about, setAbout] = useState("");

	const { updateUserInfo, userInfo } = useAuth();

	useEffect(
		() => space(window.innerHeight, window.innerWidth),
		[window.innerHeight, window.innerWidth]
	);

	const handleChange = (data) => {
		setAbout(data);
		if (data) {
			setIsValidated(false);
		} else {
			setIsValidated(true);
		}
	}

	const handleAdd = async () => {

		if (about == '') {
			setIsValidated(true);

		} else {
			console.log("about", about);
			
			// API should be call here
			await updateUserInfo({
				id: userInfo.id,
				about
			});

			// redirect
			setRedirect(true);
		}

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
				<div className="gt-about-section">
					<Container>
						<h1>About</h1>
						<div className={`text-editor ${isValidated ? 'invalid' : ''}`}>
							<div className="counting-number">0/400</div>
							<CKEditor
								id="about-content"
								editor={ClassicEditor}
								data={about}
								onReady={editor => {
									// You can store the "editor" and use when it is needed.
									// console.log( 'Editor is ready to use!', editor );
								}}
								onChange={(event, editor) => {
									const data = editor.getData();
									handleChange(data);
									// console.log( { event, editor, data } );
								}}
								onBlur={(event, editor) => {
									// console.log( 'Blur.', editor );
								}}
								onFocus={(event, editor) => {
									// console.log( 'Focus.', editor );
								}}
							/>
							<Button onClick={handleAdd} variant="primary">Save</Button>
						</div>
					</Container>
				</div>
			</div>
		</>
	)
}

export default AddAbout;