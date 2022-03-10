import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink as Link, Route, Routes, Navigate, useNavigate, useParams } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './AddAbout.css';
import space from '../../../../utils/canvas';
import { useAuth } from '../../../../contexts/UserContext';
import Header from "../../../../components/Header";

import { useLazyQuery, useMutation, gql } from '@apollo/client';
import { updateUser } from '../../../../graphql/mutations';
import { getUserByUsername } from '../../../../graphql/queries';
import { $CombinedState } from 'redux';

const AddAbout = () => {
	const { userInfo, updateUserInfo } = useAuth();
	const [updateAbout] = useMutation(gql(updateUser));

	var userId = localStorage.getItem('userId');
	// var userId = "d37139b0-5803-44f1-92e5-87f30a45d851";

	const navigate = useNavigate();
	const [redirect, setRedirect] = useState(false);
	const [isValidated, setIsValidated] = useState(false);
	const [about, setAbout] = useState(userInfo?.about || []);
	console.log("About--", about.length);

	useEffect(() => {
		space(window.innerHeight, window.innerWidth),
			[window.innerHeight, window.innerWidth]
	}, []);

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
			// console.log("about", about);

			// API should be call here
			try {
				await updateAbout({
					variables: {
						input: {
							id: userId,
							about: about,
						},
					},
				});
				await updateUserInfo({
					about: about
				});

				// redirect
				setRedirect(true);
			} catch (err) {
				console.log(err);
			}
		}
	}

	if (redirect) {
		navigate(-1);
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
								className="change-background-to-fill"
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
							{/* <textarea
								id="about-content"
								name="textarea"
								value={about}
								onChange={handleChange}
							>
							</textarea> */}
							<Button onClick={handleAdd} variant="primary">Save</Button>
						</div>
					</Container>
				</div>
			</div>
		</>
	)
}

export default AddAbout;