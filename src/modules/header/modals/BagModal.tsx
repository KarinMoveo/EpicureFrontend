import Modal from '../../../shared/components/Modal';

import shoppingBagIcon from '../assets/icons/shoppingBag.svg';

import './BagModal.scss';

const isDesktop = window.innerWidth >= 1024;

interface BagModalProps {
	onClose: () => void;
}

function BagModal({ onClose }: BagModalProps) {
	return (
		<Modal onClose={onClose}>
			<div className={`bag-modal-content ${isDesktop ? 'top-right-bag-modal-content' : 'top-bag-modal-content'}`}>
				<img src={shoppingBagIcon} alt='Shopping Bag Icon' className='shopping-bag-image' />
				<p className='bag-content-text'>YOUR BAG IS EMPTY</p>
				<p className='order-history-desktop'>ORDER HISTORY</p>
			</div>
		</Modal>
	);
}

export default BagModal;
