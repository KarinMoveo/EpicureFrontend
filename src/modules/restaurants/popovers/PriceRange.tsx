import Popover from '../../../shared/components/Popover';

import './PriceRange.scss';

function PriceRange(props: any) {
	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='price-range-popover-container'>
				<p className='price-range-title'>Price Range Selected</p>
				<p className='price-range-numbers-values'>
					₪{props.value.min} - ₪{props.value.max}
				</p>
				<div className='price-range-content'>
					<div className='price-range-popover-text-content'>
						<p className='price-number'>₪{props.value.min}</p>
						<p className='price-number'>₪{props.value.max}</p>
					</div>
					<input
						min='12'
						step='1'
						max='357'
						type='range'
						name='min'
						className='price-range-user-input-min custom-range-thumb'
						value={props.value.min}
						onChange={props.onChange}
					/>
					<input
						min='12'
						step='1'
						max='357'
						type='range'
						name='max'
						className='price-range-user-input-max custom-range-thumb'
						value={props.value.max}
						onChange={props.onChange}
					/>
				</div>
			</div>
		</Popover>
	);
}

export default PriceRange;
