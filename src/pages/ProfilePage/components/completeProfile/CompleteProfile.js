import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Container, Button, Form } from 'react-bootstrap';
import './CompleteProfile.css';
import space from '../../../../utils/canvas';
import Header from '../../../../components/Header';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginFileValidateType);

const CompleteProfile = () => {
	const navigate = useNavigate();
	const [redirect, setRedirect] = useState(false);
	const [isValidated, setIsValidated] = useState(false);
	const [files, setFiles] = useState([]);
	const [user, setUser] = useState({
		displayName: '',
		userName: '',
		avatar: '',
		userBio: '',
		socials: [
			{ platform_name: "Twitter", placeholder: "twitter.com/", platform_value: "" },
			{ platform_name: "Discord", placeholder: "AAA#0000", platform_value: "" },
			{ platform_name: "Telegram", placeholder: "@username", platform_value: "" },
			{ platform_name: "Github", placeholder: "username", platform_value: "" },
			{ platform_name: "Email", placeholder: "name@email.xyz", platform_value: "" },
		]
	});

	useEffect(
		() => space(window.innerHeight, window.innerWidth),
		[window.innerHeight, window.innerWidth]
	);

	const handleInit = () => {
		// console.log("FilePond instance has initialised", this.pond);
	}

	const handleAddSocial = () => {
		setUser((prevState) => {
			return {
				...prevState,
				socials: [...prevState.socials, {
					platform_name: "",
					placeholder: "",
					platform_value: "",
				}]
			};
		});
	}

	const handleRemoveSocial = (social) => {
		const filtered = user.socials.filter((previousTag, index) => index !== social);
		console.log("filtered", filtered);
		setUser((prevState) => {
			return {
				...prevState,
				socials: filtered
			};
		});
	}

	const handleSocialChange = (e, index) => {
		const { name, value } = e.target;
		const { socials } = user;
		const list = [...socials];
		list[index][name] = value;
		setUser((prevState) => {
			return {
				...prevState,
				socials: list
			};
		});

	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser(prev => ({ ...prev, [name]: value }))
	}

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
				<div className="gt-about-section gt-complete-profile">
					<Container>
						<h1>{window.location.pathname !== '/profiles/edit-profile' ? 'Complete Profile' : 'Edit Profile'}</h1>
						<Form method="post" className="completeprofile" noValidate validated={isValidated} onSubmit={handleSubmit}>
							<div className="mb-3 row">
								<Form.Group className="col" controlId="displayName">
									<Form.Label>Display name</Form.Label>
									<Form.Control
										required
										name="displayName"
										size="lg" type="text"
										placeholder=""
										onChange={(e) => {
											handleChange(e)
										}}
										value={user.displayName}
									/>
								</Form.Group>
							</div>
							<div className="mb-3 row">
								<Form.Group className="col" controlId="userName">
									<Form.Label>Username</Form.Label>
									<Form.Control
										required
										name="userName"
										size="lg"
										type="text" placeholder="mygateway.xyz/username"
										onChange={(e) => {
											handleChange(e)
										}}
										value={user.userName}
									/>
								</Form.Group>
							</div>
							<div className="mb-3 row">
								<Form.Group className="col" controlId="userAvatar">
									<Form.Label>AVATAR</Form.Label>
									<FilePond
										required={true}
										files={files}
										allowMultiple={false}
										allowReorder={true}
										maxFiles={1}
										name="avatar"
										allowFileEncode="true"
										acceptedFileTypes={['image/png', 'image/PNG', 'image/jpg', 'image/jpeg', 'image/JPEG']}
										labelIdle="<img src='/completeprofile/Vector.svg' /><span class='avatar-upload-action'>Upload</span> or drag your avatar here."
										oninit={() => handleInit()}
										onupdatefiles={setFiles}
										onaddfile={(error, file) => {
											// console.log("error", error);
											if (error == null) {
												var reader = new FileReader();
												reader.onloadend = function () {
													// console.log('RESULT', reader.result);
													setUser((prevState) => {
														return {
															...prevState,
															avatar: reader.result
														};
													});
												}
												reader.onerror = function (error) {
													console.log('Error: ', error);
												};
												reader.readAsDataURL(file.file);
											} else {
												setUser((prevState) => {
													return {
														...prevState,
														avatar: ""
													};
												});
											}

										}}
										onremovefile={(error, file) => {
											setFiles([])
											setUser((prevState) => {
												return {
													...prevState,
													avatar: ""
												};
											});
											// console.log('remove avatar ---: ', user.avatar)
										}}
										server={{
											load: (source, load, error, progress, abort, headers) => {
												var myRequest = new Request(source);
												fetch(myRequest).then(function (response) {
													response.blob().then(function (myBlob) {
														load(myBlob);
													});
												});
											}
										}}
									/>
								</Form.Group>
							</div>
							<div className="mb-3 row">
								<Form.Group className="col" controlId="userBio">
									<Form.Label>Headline</Form.Label>
									<Form.Control
										required
										name="userBio"
										value={user.userBio}
										onChange={(e) => {
											handleChange(e)
										}}
										rows={5}
									/>
								</Form.Group>
							</div>
							<Form.Group className="col" controlId="formBasic">
								<Form.Label>SOCIALS</Form.Label>
								<div className="gway-socialurl-add">
									{
										user.socials.map((x, i) => {
											return (
												<div className="gway-socialurl-row" key={i}>
													<div className="gway-socialurl-col-left">
														{/* <Link to='#'>{x.name}</Link> */}
														<Form.Control
															required
															name="platform_name"
															size="sm"
															type="text"
															value={x.platform_name}
															onChange={e => handleSocialChange(e, i)}
														/>
													</div>
													<div className="gway-socialurl-col-center">
														<Form.Control
															required
															name="platform_value"
															size="lg"
															type="text"
															value={x.platform_value}
															onChange={e => handleSocialChange(e, i)}
															placeholder={x.placeholder}
														/>
													</div>
													<div className="gway-socialurl-col-right">
														<a onClick={() => handleRemoveSocial(i)}><img src="/completeprofile/trash.svg" /></a>
													</div>
												</div>
											)
										})
									}
									<div className="add-social-row">
										<a onClick={handleAddSocial}><img src="/completeprofile/plus-btn.svg" /></a>
									</div>
								</div>
							</Form.Group>
							<Button variant="primary" type="submit">
								SAVE
							</Button>
						</Form>
					</Container>
				</div>
			</div>
		</>
	)
}

export default CompleteProfile;