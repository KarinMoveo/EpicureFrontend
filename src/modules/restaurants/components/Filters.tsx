import { useState } from 'react';

import PriceRange from '../popovers/PriceRange';
import Distance from '../popovers/Distance';
import Rating from '../popovers/Rating';

import downwardArrow from '../assets/icons/downwardArrow.svg';

import '../components/Filters.scss';

interface FiltersProps {
	filters: any;
	setFilters: any;
}

const filtersInputs = {
	priceRange: { name: 'priceRange', displayName: 'Price Range' },
	distance: { name: 'distance', displayName: 'Distance' },
	rating: { name: 'rating', displayName: 'Rating' },
};

function Filters({ filters, setFilters }: FiltersProps) {
	const [currentPopover, setCurrentPopover] = useState<any>(null);

	const openPopover = (event: any) => {
		setCurrentPopover({ name: event.currentTarget.name, anchorEl: event.currentTarget });
	};

	const closePopover = () => {
		setCurrentPopover(null);
	};

	const handleOnDistanceChange = (event: any) => {
		const { value } = event.target;
		setFilters((prev: any) => ({
			...prev,
			distance: value,
		}));
	};

	const handleOnPriceChange = (event: any) => {
		const { value, name } = event.target;

		if (
			(name === 'min' && value >= filters.priceRange.max) ||
			(name === 'max' && value <= filters.priceRange.min)
		) {
			return;
		}

		setFilters((prev: any) => ({
			...prev,
			priceRange: { ...prev.priceRange, [name]: value },
		}));
	};

	const handleOnRatingChange = (ratingIndex: number) => {
		setFilters((prev: any) => {
			const ratingBitWise = 1 << ratingIndex;

			const newRating = prev.rating ^ ratingBitWise;
			return { ...prev, rating: newRating };
		});
	};

	return (
		<div className='row-filter'>
			{Object.values(filtersInputs).map((filter) => (
				<button
					name={filter.name}
					key={filter.name}
					onClick={openPopover}
					className={`filter-item ${currentPopover?.name === filter.name ? 'filter-item-selected' : ''}`}
				>
					{filter.displayName}
					<span className='downward-arrow-icon'>
						<img src={downwardArrow} alt='downward arrow' className='restaurant-filter-downward-arrow' />
					</span>
				</button>
			))}
			{currentPopover?.name === filtersInputs.priceRange.name && (
				<PriceRange
					onChange={handleOnPriceChange}
					value={filters.priceRange}
					onClose={closePopover}
					anchorEl={currentPopover.anchorEl}
				/>
			)}
			{currentPopover?.name === filtersInputs.distance.name && (
				<Distance
					onChange={handleOnDistanceChange}
					value={filters.distance}
					onClose={closePopover}
					anchorEl={currentPopover.anchorEl}
				/>
			)}
			{currentPopover?.name === filtersInputs.rating.name && (
				<Rating
					onChange={handleOnRatingChange}
					value={filters.rating}
					onClose={closePopover}
					anchorEl={currentPopover.anchorEl}
				/>
			)}
		</div>
	);
}

export default Filters;
