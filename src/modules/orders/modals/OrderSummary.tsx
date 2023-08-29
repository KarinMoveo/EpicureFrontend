import Modal from '../../../shared/components/Modal';

import xIcon from '../../../shared/assets/icons/x.svg';

import './OrderSummary.scss';

interface OrderSummaryProps {
	onClose: () => void;
}

function OrderSummary({ onClose }: OrderSummaryProps) {
	return (
		<Modal onClose={onClose}>
			<div className='order-summary-modal-container'>
				<button className='close-order-summary-modal-button' onClick={onClose}>
					<img src={xIcon} alt='close' />
				</button>
				<h1>ORDER SUMMARY</h1>
			</div>
		</Modal>
	);
}

export default OrderSummary;
