import Popover from '../../../shared/components/Popover';

import './Distance.scss';

function Distance(props: any) {
	return (
		<Popover onClose={props.onClose} anchorEl={props.anchorEl}>
			<div className='distance-popover-container'>
				<p>Distance</p>
				<div className='distance-popover-content'>
					<p className='distance-title'>My location</p>
					<input className='distance-user-input-range' type='range' min='0' max='4' step='1' />
				</div>
			</div>
		</Popover>
	);
}

export default Distance;
