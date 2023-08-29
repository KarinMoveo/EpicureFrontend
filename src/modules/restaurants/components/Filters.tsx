import { useState } from 'react';

import downwardArrow from '../assets/icons/downwardArrow.svg';

import PriceRange from '../popovers/PriceRange';
import Distance from '../popovers/Distance';
import Rating from '../popovers/Rating';

import '../components/Filters.scss';

const filters = {
	priceRange: { name: 'priceRange', displayName: 'Price Range' },
	distance: { name: 'distance', displayName: 'Distance' },
	rating: { name: 'rating', displayName: 'Rating' },
};

function Filters() {
	const [currentPopover, setCurrentPopover] = useState<any>(null);

	const openPopover = (event: any) => {
		setCurrentPopover({ name: event.currentTarget.name, anchorEl: event.currentTarget });
	};

	const closePopover = () => {
		setCurrentPopover(null);
	};

	return (
		<div className='row-filter'>
			{Object.values(filters).map((filter) => (
				<button
					name={filter.name}
					key={filter.name}
					onClick={openPopover}
					className={`filter-item ${currentPopover?.name === filter.name ? 'filter-item-selected' : ''}`}
				>
					{filter.displayName}
					<span className='downward-arrow-icon'>
						<img src={downwardArrow} alt='downward arrow' className='restaurant-filter-downward-arrow'/>
					</span>
				</button>
			))}
			{currentPopover?.name === filters.priceRange.name && (
				<PriceRange onClose={closePopover} anchorEl={currentPopover.anchorEl} />
			)}
			{currentPopover?.name === filters.distance.name && (
				<Distance onClose={closePopover} anchorEl={currentPopover.anchorEl} />
			)}
			{currentPopover?.name === filters.rating.name && (
				<Rating onClose={closePopover} anchorEl={currentPopover.anchorEl} />
			)}
		</div>
	);
}

export default Filters;
