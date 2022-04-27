import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import { useAuth } from '../../../../contexts/UserContext';

import './AddAbout.css';
import RichEditor from '../../../../components/RichTextEditor';
import Space from '../../../../components/Space';
import { FormStyled } from '../../../../components/Form';
import Loader from '../../../../components/Loader';

const AddAbout: React.FC = () => {
	// State
	const { userInfo, canEdit } = useOutletContext<Record<string, any>>();

	// Hooks
	const navigate = useNavigate();
	const {
		updateUserInfo,
	}: { updateUserInfo?(info: Record<string, any>): void } = useAuth();
	const [redirect, setRedirect] = useState(false);
	const [about, setAbout] = useState(userInfo?.about || '');
	const [isValid, setValid] = useState<boolean>(true);
	const [isAboutFilled, setIsAboutFilled] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();

		if (about.replace(/<(.|\n)*?>/g, '').trim().length == 0) {
			setValid(false);
		} else {
			setValid(true);

			try {
				setIsLoading(true);
				await updateUserInfo({
					about,
				});
				setIsLoading(false);
				// redirect
				setRedirect(true);
			} catch (err) {
				console.log(err);
			}
		}
	};

	useEffect(() => {
		handleAboutFilled();
	}, [about]);

	const handleAboutFilled = () => {
		if (about.length > 0) {
			setIsAboutFilled(true);
		} else {
			setIsAboutFilled(false);
		}
	};

	if (redirect) {
		return <Navigate to='/profile' />;
	}

	if (!canEdit) {
		return <Navigate to='/404' />;
	}

	return (
		<Space>
			<div className='main-about-section'>
				<Container>
					<div className='back-link'>
						<a>
							<div
								className='arrow-back'
								onClick={() => navigate('/profile')}
							>
								<img src='/left-arrow-icon.svg' alt='' />
							</div>
						</a>
						<span style={{ color: 'white', marginLeft: '20px' }}>
							Back to Profile
						</span>
					</div>
				</Container>
				<div className='gt-about-section'>
					<Container>
						<h1>About</h1>
						<div className={`text-editor ${isValid ? 'invalid' : ''}`}>
							<div className='counting-number'>
								{about.replace(/<(.|\n)*?>/g, '').trim().length}
								/400
							</div>
							<Form className='add-about' noValidate validated={isValid} onSubmit={handleSubmit}>
								{/* <div className='mb-5'>
									<RichEditor
										value={about}
										set={setAbout}
										toolbar={[
											// ['bold', 'italic', 'underline'],
											['emoji'],
										]}
									/>
									{!isValid && (
										<FormStyled.ErrorText>The about section should be filled!</FormStyled.ErrorText>
									)}
								</div> */}
								<div>
									{!isValid && (
										<FormStyled.ErrorText>The about section should be filled!</FormStyled.ErrorText>
									)}
									<Form.Control
										required
										className={`${isAboutFilled
											? 'change-background-to-fill mb-5'
											: 'mb-5'
											}`}
										as="textarea"
										maxLength={400}
										id="about-content"
										name="textarea"
										value={about}
										onChange={(e) => {
											setAbout(e.target.value);
										}}
										rows={12}
									/>
								</div>
								<Button variant='primary' type='submit'>
									{!!isLoading && <Loader color='white' />}
									SAVE
								</Button>
							</Form>
						</div>
					</Container>
				</div>
			</div>
		</Space>
	);
};

export default AddAbout;
