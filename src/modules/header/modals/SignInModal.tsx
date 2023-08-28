import Modal from '../../../shared/components/Modal';

import closeIcon from '../../../shared/assets/icons/x.svg';

import './SignInModal.scss';
import { useState } from 'react';

interface SignInModalProps {
	onClose: () => void;
}

const isDesktop = window.innerWidth >= 1024;

function SignIn({ onClose }: SignInModalProps) {
	const [isFormValid, setIsFormValid] = useState(false);

	const handleInputChange = () => {
		const emailInput = document.getElementById('email') as HTMLInputElement;
		const passwordInput = document.getElementById('password') as HTMLInputElement;

		setIsFormValid(emailInput.value !== '' && passwordInput.value !== '');
	};

	return (
		<Modal onClose={onClose}>
			<div
				className={`sign-in-modal-content ${
					isDesktop ? 'centered-sign-in-modal-content' : 'top-sign-in-modal-content'
				}`}
			>
				<button className='close-modal-button' onClick={onClose}>
					<img src={closeIcon} alt='close' />
				</button>
				<p className='sign-in-title'>SIGN IN</p>
				<p className='sign-in-description'>To continue the order, please sign in</p>
				<form action='/login' method='post' className='sign-in-form'>
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
					<button className={`login-button ${isFormValid ? 'login-button-black' : ''}`} type='submit'>
						LOGIN
					</button>
					<br />
					<a href='/forgot-password' className='forgot-password'>
						Forgot Password?
					</a>
					<p> ___________ or ___________ </p>
					<button className='sign-up-button'>SIGN UP</button>
				</form>
			</div>
		</Modal>
	);
}

export default SignIn;
