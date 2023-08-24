import Modal from './Modal';

import '../modals/Modal.scss';
import '../modals/Distance.scss';

function Distance() {
	return (
		<Modal>
			<div className='distance-content'>
				<p className='distance-title'>My location</p>
				<input className='distance-user-input-range' type='range' min='0' max='4' step='1' />
			</div>
		</Modal>
	);
}

export default Distance;
