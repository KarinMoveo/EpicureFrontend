import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RootState from '../../../redux/types';
import { addToOrderHistory, deleteCart } from '../../../redux/cartSlice';

import Order from '../../../shared/components/Order';
import CheckoutForm from './CheckoutForm';

import AfterPayment from '../modals/AfterPayment';

import lock from '../assets/icons/lock.svg';
import completePaymentGray from '../assets/images/completePaymentGray.svg';
import completePaymentBlack from '../assets/images/completePaymentBlack.svg';

import './Checkout.scss';

const isDesktop = window.innerWidth >= 1024;

function Checkout() {
	const navigate = useNavigate();
	const [formFieldsFilled, setFormFieldsFilled] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => {
		navigate(-1);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		dispatch(deleteCart());
	};

	const checkFormCompletion = (isFormComplete: boolean) => {
		setFormFieldsFilled(isFormComplete);
	};

	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	const total = Object.values(cartItems).reduce((accumulator, cartItem) => accumulator + cartItem.orderItemPrice, 0);
	const restaurantNames = Object.values(cartItems).map((cartItem) => cartItem.restaurantName);
	const restaurantName = restaurantNames.length > 0 ? restaurantNames[0] : 'Unknown Restaurant';

	const handlePayment = () => {
		const order = {
			restaurantName: restaurantName,
			totalAmount: total,
			orderDate: new Date().toISOString(),
			items: Object.values(cartItems),
		};
		if (formFieldsFilled && total !== 0) {
			setShowModal(true);
			dispatch(addToOrderHistory(order));
		}
	};

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
							formFieldsFilled && total !== 0
								? 'checkout-pay-button-black desktop-button'
								: 'checkout-pay-button-gray desktop-button'
						}`}
						onClick={handlePayment}
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
						onClick={handlePayment}
						disabled={!formFieldsFilled}
					>
						<img
							className='checkout-complete-payment-image'
							src={formFieldsFilled && total !== 0 ? completePaymentBlack : completePaymentGray}
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
