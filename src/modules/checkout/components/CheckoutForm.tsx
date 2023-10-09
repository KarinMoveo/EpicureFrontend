import { useEffect, useState } from 'react';

import xIcon from '../../../shared/assets/icons/x.svg';

import './CheckoutForm.scss';

interface CheckoutFormProps {
	onClose: () => void;
	onFormCompletionChange: (isFormComplete: boolean) => void;
}

function CheckoutForm(props: CheckoutFormProps) {
	const [formCompletion, setFormCompletion] = useState({
		fullName: false,
		address: false,
		phone: false,
		cardNumber: false,
		nameOnCard: false,
		cvv: false,
		expiryDate: false,
	});

	useEffect(() => {
		const isFormComplete = Object.values(formCompletion).every(Boolean);
		props.onFormCompletionChange(isFormComplete);
	}, [formCompletion]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputName = event.target.name;
		const inputValue = event.target.value;

		setFormCompletion((prevCompletion) => ({
			...prevCompletion,
			[inputName]: !!inputValue,
		}));
	};

	return (
		<div className='form-container'>
			<button className='form-close' onClick={props.onClose}>
				<img className='form-x-icon' src={xIcon} alt='x icon' />
			</button>
			<form className='checkout-form'>
				<div className='checkout-form-delivery-details-container'>
					<p className='delivery-details-title'>Delivery Details</p>
					<label className='checkout-form-input'>Full Name</label>
					<input
						className='checkout-form-input-field'
						type='text'
						name='fullName'
						onChange={handleInputChange}
						required
					/>

					<label className='checkout-form-input'>Address</label>
					<input
						className='checkout-form-input-field'
						type='text'
						name='address'
						onChange={handleInputChange}
						required
					/>

					<label className='checkout-form-input'>Phone</label>
					<input
						className='checkout-form-input-field'
						type='tel'
						name='phone'
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className='checkout-form-payment-details-container'>
					<p className='payment-details-title'>Payment Details</p>
					<label className='checkout-form-input'>Card Number</label>
					<input
						className='checkout-form-input-field'
						type='text'
						name='cardNumber'
						onChange={handleInputChange}
						required
					/>
					<label className='checkout-form-input'>Name on Card</label>
					<input
						className='checkout-form-input-field'
						type='text'
						name='nameOnCard'
						onChange={handleInputChange}
						required
					/>
					<label className='checkout-form-input'>CVV</label>
					<input
						className='checkout-form-input-field'
						type='text'
						name='cvv'
						onChange={handleInputChange}
						required
					/>
					<label className='checkout-form-input'>Expiry Date</label>
					<input
						className='checkout-form-input-field'
						type='text'
						name='expiryDate'
						placeholder='MM/YY'
						onChange={handleInputChange}
						required
					/>
				</div>
			</form>
		</div>
	);
}

export default CheckoutForm;
