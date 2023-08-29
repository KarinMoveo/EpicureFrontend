import Popover from '../../../shared/components/Popover';

import Stars from '../assets/images/rating/Stars';

import './Rating.scss';

function Rating(props: any) {
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
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='rating-popover-container'>
				<p className='rating-title'>Rating</p>
				{ratingElements}
			</div>
		</Popover>
	);
}

export default Rating;
