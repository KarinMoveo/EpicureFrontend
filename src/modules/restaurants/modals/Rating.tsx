import Modal from './Modal';

import Stars from '../assets/images/rating/Stars';

import './Modal.scss';
import './Rating.scss';

function Rating() {
	const maxRating = 5;
	const ratingElements = [];

	for (let i = 1; i <= maxRating; i++) {
		ratingElements.push(
			<div className='rating-checkbox-container' key={i}>
				<input className='checkbox-item' type='checkbox' id={`checkbox${i}`} />
				<Stars rating={i} />
			</div>
		);
	}

	return (
		<Modal>
			<div className='rating-content'>{ratingElements}</div>
		</Modal>
	);
}

export default Rating;
