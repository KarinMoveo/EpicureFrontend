import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Order from '../../../shared/components/Order';
import CheckoutForm from './CheckoutForm';
import AfterPayment from '../modals/AfterPayment';

import completePayment from '../assets/images/completePayment.svg';
import pay from '../assets/images/pay.svg';

import './Checkout.scss';

const isDesktop = window.innerWidth >= 1024;

function Checkout() {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	const handlePayClick = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleClose = () => {
		navigate(-1);
	};

	return (
		<div className={`checkout-container ${isDesktop ? 'desktop-checkout-container' : 'mobile-checkout-container'}`}>
			<div className='checkout-content-desktop-row'>
				<div className='check-out-parent-container'>
					<CheckoutForm onClose={handleClose} />
				</div>
				<div className='check-out-parent-container'>
					<Order />
					<button className='checkout-pay-button' onClick={handlePayClick}>
						<img className='checkout-pay-image' src={pay} alt='pay' />
					</button>
				</div>
			</div>
			<button className='checkout-complete-payment-button' onClick={handlePayClick}>
				<img className='checkout-complete-payment-image' src={completePayment} alt='complete payment' />
			</button>
			{showModal && <AfterPayment onClose={handleCloseModal} />}
		</div>
	);
}

export default Checkout;
