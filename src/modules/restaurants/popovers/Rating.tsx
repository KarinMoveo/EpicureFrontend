import Popover from '../../../shared/components/Popover';

import Stars from '../assets/images/rating/Stars';

import './Rating.scss';

const ratingElements = [1, 2, 3, 4, 5];

function Rating(props: any) {
	// const maxRating = 5;
	// const ratingElements = [];

	// for (let i = 1; i <= maxRating; i++) {
	// 	ratingElements.push(
	// 		<div className='rating-checkbox-container' key={i}>
	// 			<input className='checkbox-item' type='checkbox' id={`checkbox${i}`} />
	// 			<Stars rating={i} />
	// 		</div>
	// 	);
	// }
	// {ratingElements}

	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='rating-popover-container'>
				<p className='rating-title'>Rating</p>
				{ratingElements.map((ratingElement) => (
					<div className='rating-checkbox-container' key={ratingElement}>
						<input className='checkbox-item' type='checkbox' id={`checkbox${ratingElement}`} />
						<Stars rating={ratingElement} />
					</div>
				))}
			</div>
		</Popover>
	);
}

export default Rating;
