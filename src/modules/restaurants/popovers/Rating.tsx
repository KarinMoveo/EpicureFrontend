import Popover from '../../../shared/components/Popover';

import Stars from '../assets/images/rating/Stars';

import './Rating.scss';

const ratingElements = Array(5).fill(true);

function Rating(props: any) {
	console.log(props);
	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='rating-popover-container'>
				<p className='rating-title'>Rating</p>
				{ratingElements.map((_ratingElement, index) => (
					<div className='rating-checkbox-container' key={index + 1}>
						<input
							className='checkbox-item'
							type='checkbox'
							id={`checkbox${index + 1}`}
							onChange={() => props.onChange(index)}
							checked={props.value[index]}
						/>
						<Stars rating={index + 1} />
					</div>
				))}
			</div>
		</Popover>
	);
}

export default Rating;
