import { NavLink } from 'react-router-dom';
import Order from '../../../shared/components/Order';
import completePayment from '../assets/images/completePayment.svg';
import pay from '../assets/images/pay.svg';

import './Checkout.scss';
import CheckoutForm from './CheckoutForm';
import { useState } from 'react';
import AfterPayment from '../modals/AfterPayment';

const isDesktop = window.innerWidth >= 1024;

function Checkout() {
	const [showModal, setShowModal] = useState(false);

	const handlePayClick = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};
	return (
		<div className={`checkout-container ${isDesktop ? 'desktop-checkout-container' : 'mobile-checkout-container'}`}>
			<div className='checkout-content-desktop-row'>
				<div className='check-out-parent-container'>
					<CheckoutForm />
				</div>
				<div className='check-out-parent-container'>
					<Order />
					<button className='checkout-pay-button' onClick={handlePayClick}>
						<img className='checkout-pay-image' src={pay} alt='pay' />
					</button>
				</div>
			</div>
			<NavLink to='/order-history'>
				<button className='checkout-complete-payment-button'>
					<img className='checkout-complete-payment-image' src={completePayment} alt='complete payment' />
				</button>
			</NavLink>
			{showModal && <AfterPayment onClose={handleCloseModal} />}
		</div>
	);
}

export default Checkout;
