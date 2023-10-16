import Popover from '../../../shared/components/Popover';

import './Distance.scss';

function Distance(props: any) {
	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='distance-popover-container'>
				<p className='distance-top-title'>Distance</p>
				<div className='distance-popover-content'>
					<div className='distance-popover-text-content'>
						<p className='my-location-title'>My location</p>
						<p className='km-title'>{props.value}km</p>
					</div>
					<input className='custom-range-thumb-distance-gray' type='range' value='0' disabled />
					<input
						onChange={props.onChange}
						className='distance-user-input-range custom-range-thumb-distance'
						type='range'
						min='0'
						max='5'
						step='1'
						name='distance'
						value={props.value}
					/>
				</div>
			</div>
		</Popover>
	);
}

export default Distance;
