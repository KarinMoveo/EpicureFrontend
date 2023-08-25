import Popover from '../../../shared/components/Popover';

import './PriceRange.scss';

function PriceRange(props: any) {
	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='price-range-content'>
				<p className='price-range-title'>Price Range Selected</p>
				<input className='price-range-user-input' type='range' min='12' max='357' step='1' />
			</div>
		</Popover>
	);
}

export default PriceRange;
