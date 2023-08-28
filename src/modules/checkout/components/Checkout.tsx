import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Order from '../../../shared/components/Order';
import CheckoutForm from './CheckoutForm';

import lock from '../assets/icons/lock.svg';
import completePaymentGray from '../assets/images/completePaymentGray.svg';
import completePaymentBlack from '../assets/images/completePaymentBlack.svg';

import './Checkout.scss';
import { useSelector } from 'react-redux';
import RootState from '../../../redux/types';
import AfterPayment from '../modals/AfterPayment';

const isDesktop = window.innerWidth >= 1024;

function Checkout() {
	const navigate = useNavigate();
	const [formFieldsFilled, setFormFieldsFilled] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => {
		navigate(-1);
	};

	const handlePayClick = () => {
		if (formFieldsFilled) {
			setShowModal(true);
		}
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const checkFormCompletion = (isFormComplete: boolean) => {
		setFormFieldsFilled(isFormComplete);
	};

	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const total = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.orderItemPrice, 0);

	return (
		<div className={`checkout-container ${isDesktop ? 'desktop-checkout-container' : 'mobile-checkout-container'}`}>
			<div className='checkout-content-desktop-row'>
				<div className='check-out-parent-container'>
					<CheckoutForm onClose={handleClose} onFormCompletionChange={checkFormCompletion} />
				</div>
				<div className='check-out-parent-container'>
					<Order formFieldsFilled={formFieldsFilled} />
					<button
						className={`${
							formFieldsFilled
								? 'checkout-pay-button-black desktop-button'
								: 'checkout-pay-button-gray desktop-button'
						}`}
						onClick={handlePayClick}
						disabled={!formFieldsFilled}
					>
						<div className='checkout-pay-button-desktop-left-content'>
							<img className='lock-icon' src={lock} alt='lock' />
							PAY
						</div>
						<div className='checkout-pay-button-desktop-right-content'>₪{total}</div>
					</button>

					<button
						className='checkout-complete-payment-button-mobile'
						onClick={handlePayClick}
						disabled={!formFieldsFilled}
					>
						<img
							className='checkout-complete-payment-image'
							src={formFieldsFilled ? completePaymentBlack : completePaymentGray}
							alt='complete payment'
						/>
					</button>
				</div>
			</div>
			{showModal && <AfterPayment onClose={handleCloseModal} />}
		</div>
	);
}

export default Checkout;
