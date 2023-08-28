import xIcon from '../../../shared/assets/icons/x.svg';

import './CheckoutForm.scss';

interface CheckoutFormProps {
	onClose: () => void;
}

function CheckoutForm(props: CheckoutFormProps) {
	return (
		<div className='form-container'>
			<button className='form-close' onClick={props.onClose}>
				<img className='form-x-icon' src={xIcon} alt='x icon' />
			</button>
			<form className='checkout-form'>
				<div className='checkout-form-delivery-details-container'>
					<h3>Delivery Details</h3>
					<label htmlFor='fullName'>Full Name</label>
					<input className='checkout-form-input-field' type='text' id='fullName' name='fullName' required />

					<label htmlFor='address'>Address</label>
					<input className='checkout-form-input-field' type='text' id='address' name='address' required />

					<label htmlFor='phone'>Phone</label>
					<input className='checkout-form-input-field' type='tel' id='phone' name='phone' required />
				</div>

				<div className='checkout-form-payment-details-container'>
					<h3>Payment Details</h3>
					<label htmlFor='cardNumber'>Card Number</label>
					<input
						className='checkout-form-input-field'
						type='text'
						id='cardNumber'
						name='cardNumber'
						required
					/>
					<label htmlFor='nameOnCard'>Name on Card</label>
					<input
						className='checkout-form-input-field'
						type='text'
						id='nameOnCard'
						name='nameOnCard'
						required
					/>
					<label>CVV</label>
					<input className='checkout-form-input-field' type='text' id='cvv' name='cvv' required />

					<label>Expiry Date</label>
					<input
						className='checkout-form-input-field'
						type='text'
						id='expiryDate'
						name='expiryDate'
						placeholder='MM/YY'
						required
					/>
				</div>
			</form>
		</div>
	);
}

export default CheckoutForm;
