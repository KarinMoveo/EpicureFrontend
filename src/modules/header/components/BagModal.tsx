import shoppingBagIcon from '../assets/icons/shoppingBag.svg';

import './BagModal.scss';

function BagModal() {
	return (
		<div className='bag-modal-container'>
			<img src={shoppingBagIcon} alt='Shopping Bag Icon' className='shopping-bag-image' />
			<p className='bag-content-text'>YOUR BAG IS EMPTY</p>
			<p className='order-history-desktop'>ORDER HISTORY</p>
		</div>
	);
}

export default BagModal;
