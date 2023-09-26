import { ChangeEvent, MouseEvent, useState } from 'react';

import Modal from '../../../shared/components/Modal';

import closeIcon from '../../../shared/assets/icons/x.svg';

import './SignIn.scss';
import { addUserFromAPI } from '../api';

interface SignInProps {
	onClose: () => void;
}

function SignIn({ onClose }: SignInProps) {
	const isDesktop = window.innerWidth >= 1024;
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const isFormValid = credentials.email && credentials.password;

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setCredentials((prev) => ({ ...prev, [name]: value }));
	};

	const handleSignUp = async (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		try {
			const response = await addUserFromAPI(credentials);
			onClose();
		} catch (error: any) {
			setError(error.response.data.message);
		}
	};

	return (
		<Modal
			hasClose={isDesktop}
			isCentered={isDesktop}
			onClose={onClose}
			className={`sign-in-modal-content ${
				isDesktop ? 'centered-sign-in-modal-content' : 'top-sign-in-modal-content'
			}`}
		>
			{!isDesktop && (
				<div className='close-modal-button-container'>
					<button className='close-modal-button-mobile' onClick={onClose}>
						<img src={closeIcon} alt='close' />
					</button>
				</div>
			)}
			<p className='sign-in-title'>SIGN IN</p>
			<p className='sign-in-description'>To continue the order, please sign in</p>
			<form className='sign-in-form'>
				<input
					className='user-email-input'
					type='email'
					id='email'
					name='email'
					placeholder='Email address'
					onChange={handleInputChange}
					required
				/>
				<br />
				<input
					className='user-password-input'
					type='password'
					id='password'
					name='password'
					placeholder='Password'
					onChange={handleInputChange}
					required
				/>
				<br />
				<button disabled={!isFormValid} className='login-button' type='submit'>
					LOGIN
				</button>
				<br />
				<a href='/forgot-password' className='forgot-password'>
					Forgot Password?
				</a>
				<div className='line-with-text'>
					<p className='line'></p>
					<p>or</p>
					<p className='line'></p>
				</div>
				<button className='sign-up-button' onClick={handleSignUp}>
					SIGN UP
				</button>
				{error && <p>{error}</p>}
			</form>
		</Modal>
	);
}

export default SignIn;
