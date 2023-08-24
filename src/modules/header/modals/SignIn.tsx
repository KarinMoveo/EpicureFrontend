import ReactDOM from 'react-dom';

import './SignIn.scss';

function SignIn() {
	const portalElement = document.getElementById('portal');

	if (!portalElement) {
		return null;
	}

	const signInForm = (
		<div className='sign-in-modal-overlay'>
			<div className='sign-in-modal-content'>
				<p className='sign-in-title'>SIGN IN</p>
				<p className='sign-in-description'>To continue the order, please sign in</p>
				<form action='/login' method='post' className='sign-in-form'>
					<input
						className='user-email-input'
						type='email'
						id='email'
						name='email'
						placeholder='Email adress'
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
		</div>
	);

	return ReactDOM.createPortal(signInForm, portalElement);
}

export default SignIn;
