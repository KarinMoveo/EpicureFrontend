import Popover from '../../../shared/components/Popover';

import './PriceRange.scss';

function PriceRange(props: any) {
	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='price-range-popover-container'>
				<p className='price-range-title'>Price Range Selected</p>
				<div className='price-range-content'>
					<input className='price-range-user-input' type='range' min='12' max='357' step='1' />
				</div>
			</div>
		</Popover>
	);
}

export default PriceRange;
