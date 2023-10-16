import { useEffect, useState } from 'react';
import Popover from '../../../shared/components/Popover';

import './PriceRange.scss';
import useDebounce from '../../../shared/hooks/useDebounce';

function PriceRange(props: any) {
	const [priceRange, setPriceRange] = useState(props.value);
	const debouncedPriceRange = useDebounce(priceRange, 250);

	useEffect(() => {
		if (debouncedPriceRange) {
			props.onChange(priceRange);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedPriceRange]);

	const handleValueChange = (event: any) => {
		const { value, name } = event.target;

		if (name === 'max' && value <= priceRange.min) {
			return setPriceRange((prev: any) => ({ ...prev, [name]: priceRange.min + 1 }));
		}
		if (name === 'min' && value >= priceRange.max) {
			return setPriceRange((prev: any) => ({ ...prev, [name]: priceRange.max - 1 }));
		}
		setPriceRange((prev: any) => ({ ...prev, [name]: +value }));
	};

	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='price-range-popover-container'>
				<p className='price-range-title'>Price Range Selected</p>
				<p className='price-range-numbers-values'>
					₪{priceRange.min} - ₪{priceRange.max}
				</p>
				<div className='price-range-content'>
					<div className='price-range-popover-text-content'>
						<p className='price-number'>₪{priceRange.min}</p>
						<p className='price-number'>₪{priceRange.max}</p>
					</div>
					<input
						min='12'
						step='1'
						max='357'
						type='range'
						name='min'
						className='price-range-user-input-min custom-range-thumb'
						value={priceRange.min}
						onChange={handleValueChange}
					/>
					<input
						min='12'
						step='1'
						max='357'
						type='range'
						name='max'
						className='price-range-user-input-max custom-range-thumb'
						value={priceRange.max}
						onChange={handleValueChange}
					/>
				</div>
			</div>
		</Popover>
	);
}

export default PriceRange;
