import Modal from './Modal';

import '../modals/Modal.scss';
import '../modals/PriceRange.scss';

function PriceRange() {
	return (
		<Modal>
			<div className='price-range-content'>
				<p className='price-range-title'>Price Range Selected</p>
				<input className='price-range-user-input' type='range' min='12' max='357' step='1' />
			</div>
		</Modal>
	);
}

export default PriceRange;
