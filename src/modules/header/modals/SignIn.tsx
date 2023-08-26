import Modal from '../../../shared/components/Modal';

import closeIcon from '../../../shared/assets/icons/x.svg';

import './SignIn.scss';

interface SignInModalProps {
	onClose: () => void;
}

const isDesktop = window.innerWidth >= 1024;

function SignIn({ onClose }: SignInModalProps) {
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
						required
					/>
					<br />
					<input
						className='user-password-input'
						type='password'
						id='password'
						name='password'
						placeholder='Password'
						required
					/>
					<br />
					<button className='login-button' type='submit'>
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
